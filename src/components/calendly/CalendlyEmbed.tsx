import { useEffect } from "react";
import { CALENDLY_URL, CALENDLY_EMBED_CONFIG } from "@/config/calendly";

interface CalendlyEmbedProps {
  url?: string;
  className?: string;
}

export const CalendlyEmbed = ({ url, className = "" }: CalendlyEmbedProps) => {
  const calendlyUrl = url || CALENDLY_URL;
  const isConfigured = !calendlyUrl.includes("YOUR-USERNAME");

  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]'
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  if (!isConfigured) {
    return (
      <div className={`flex items-center justify-center bg-muted/50 rounded-xl border-2 border-dashed border-muted-foreground/20 ${className}`} style={{ minHeight: CALENDLY_EMBED_CONFIG.height }}>
        <div className="text-center p-8">
          <div className="text-4xl mb-4">📅</div>
          <h3 className="text-xl font-semibold text-foreground mb-2">Calendly Coming Soon</h3>
          <p className="text-muted-foreground max-w-md">
            Update the Calendly URL in <code className="bg-muted px-2 py-1 rounded text-sm">src/config/calendly.ts</code> to activate the booking widget.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`calendly-inline-widget rounded-xl overflow-hidden ${className}`}
      data-url={`${calendlyUrl}?hide_gdpr_banner=1&background_color=${CALENDLY_EMBED_CONFIG.backgroundColor}&text_color=${CALENDLY_EMBED_CONFIG.textColor}&primary_color=${CALENDLY_EMBED_CONFIG.primaryColor}`}
      style={{ 
        minWidth: "320px", 
        height: CALENDLY_EMBED_CONFIG.height,
        width: "100%"
      }}
    />
  );
};
