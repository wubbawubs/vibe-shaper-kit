import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { defaultLanguage, type Language } from "@/i18n/config";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface AlternateLanguage {
  lang: string;
  url: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url: string;
  type?: "website" | "article";
  noindex?: boolean;
  
  // Structured data
  breadcrumbs?: BreadcrumbItem[];
  alternateLanguages?: AlternateLanguage[];
  faqItems?: FAQItem[];
  
  // Software schema
  includeSoftwareSchema?: boolean;
  softwareCategory?: string;
}

const BASE_URL = "https://onerooted.nl";

// Organization schema (site-wide)
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "One Rooted",
  "url": BASE_URL,
  "logo": `${BASE_URL}/og-image.png`,
  "description": "The Hiring OS for Teams That Take Hiring Seriously",
  "sameAs": [
    "https://linkedin.com/company/110167349"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "sales",
    "url": `${BASE_URL}/demo`
  }
};

// Generate SoftwareApplication schema
function generateSoftwareSchema(category?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "One Rooted",
    "applicationCategory": "BusinessApplication",
    "applicationSubCategory": category || "Recruitment Software",
    "operatingSystem": "Web",
    "description": "Intelligent hiring operating system that ranks candidates, streamlines workflows, and drives better hiring decisions.",
    "offers": {
      "@type": "Offer",
      "price": "299",
      "priceCurrency": "EUR",
      "priceValidUntil": new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      "availability": "https://schema.org/InStock"
    },
    "featureList": [
      "Intelligent Candidate Ranking",
      "Visual Hiring Pipeline",
      "Automated Workflow Management",
      "Team Collaboration Tools",
      "Analytics & Reporting",
      "Partner Portal"
    ],
    "screenshot": `${BASE_URL}/og-image.png`,
    "url": BASE_URL
  };
}

// Generate BreadcrumbList schema
function generateBreadcrumbSchema(breadcrumbs: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url.startsWith("http") ? item.url : `${BASE_URL}${item.url}`
    }))
  };
}

export function SEOHead({
  title,
  description,
  keywords,
  image = "/og-image.png",
  url,
  type = "website",
  noindex = false,
  breadcrumbs,
  alternateLanguages,
  faqItems,
  includeSoftwareSchema = false,
  softwareCategory,
}: SEOHeadProps) {
  const { lang } = useParams<{ lang: string }>();
  const currentLang = lang || defaultLanguage;
  
  const fullUrl = url.startsWith("http") ? url : `${BASE_URL}${url}`;
  const fullImage = image.startsWith("http") ? image : `${BASE_URL}${image}`;
  
  // Build JSON-LD schemas
  const schemas: object[] = [organizationSchema];
  
  if (breadcrumbs && breadcrumbs.length > 0) {
    schemas.push(generateBreadcrumbSchema(breadcrumbs));
  }
  
  if (includeSoftwareSchema) {
    schemas.push(generateSoftwareSchema(softwareCategory));
  }

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {keywords && keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(", ")} />
      )}
      
      {/* Language */}
      <html lang={currentLang as Language} />

      {/* Robots */}
      <meta 
        name="robots" 
        content={noindex ? "noindex, nofollow" : "index, follow"} 
      />
      
      {/* Canonical */}
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:locale" content={currentLang === "nl" ? "nl_NL" : currentLang === "de" ? "de_DE" : "en_US"} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullImage} />

      {/* Alternate Languages (hreflang) */}
      {alternateLanguages && alternateLanguages.map(alt => (
        <link 
          key={alt.lang}
          rel="alternate" 
          hrefLang={alt.lang} 
          href={alt.url.startsWith("http") ? alt.url : `${BASE_URL}${alt.url}`} 
        />
      ))}
      {alternateLanguages && (
        <link 
          rel="alternate" 
          hrefLang="x-default" 
          href={fullUrl.replace(`/${currentLang}/`, "/").replace(`/${currentLang}`, "/")} 
        />
      )}

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schemas.length === 1 ? schemas[0] : schemas)}
      </script>
    </Helmet>
  );
}
