import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { url, filename } = await req.json();
    
    if (!url) {
      return new Response(
        JSON.stringify({ error: 'URL is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const browserlessApiKey = Deno.env.get('BROWSERLESS_API_KEY');
    if (!browserlessApiKey) {
      console.error('BROWSERLESS_API_KEY not configured');
      return new Response(
        JSON.stringify({ error: 'PDF service not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`Generating PDF for URL: ${url}`);

    // Browserless.io PDF API endpoint
    const browserlessUrl = `https://chrome.browserless.io/pdf?token=${browserlessApiKey}`;

    const pdfResponse = await fetch(browserlessUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url,
        options: {
          format: 'A4',
          printBackground: true,
          margin: {
            top: '0mm',
            right: '0mm',
            bottom: '0mm',
            left: '0mm',
          },
          preferCSSPageSize: true,
        },
        gotoOptions: {
          waitUntil: 'networkidle2',
          timeout: 30000,
        },
      }),
    });

    if (!pdfResponse.ok) {
      const errorText = await pdfResponse.text();
      console.error('Browserless API error:', errorText);
      return new Response(
        JSON.stringify({ error: 'Failed to generate PDF', details: errorText }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const pdfBuffer = await pdfResponse.arrayBuffer();
    console.log(`PDF generated successfully, size: ${pdfBuffer.byteLength} bytes`);

    return new Response(pdfBuffer, {
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${filename || 'document.pdf'}"`,
      },
    });

  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error in export-pdf function:', errorMessage);
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
