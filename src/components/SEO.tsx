import { Helmet } from "react-helmet-async";
import { useParams, useLocation } from "react-router-dom";
import { defaultLanguage, type Language, supportedLanguages } from "@/i18n/config";

interface FAQItem {
  question: string;
  answer: string;
}

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  jsonLd?: "organization" | "product" | "both";
  faqItems?: FAQItem[];
}

const BASE_URL = "https://onerooted.nl";

const defaultMeta = {
  title: "One Rooted | The Hiring OS for Teams That Take Hiring Seriously",
  description: "Replace scattered tools with one intelligent system that ranks candidates, streamlines workflows, and drives better hiring decisions.",
  image: "/og-image.png",
  url: BASE_URL,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "One Rooted",
  "url": BASE_URL,
  "logo": `${BASE_URL}/og-image.png`,
  "description": "The Hiring OS for Teams That Take Hiring Seriously. Replace scattered tools with one intelligent system.",
  "sameAs": [
    "https://linkedin.com/company/110167349"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "sales",
    "url": `${BASE_URL}/demo`
  }
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "One Rooted",
  "applicationCategory": "BusinessApplication",
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
  "url": BASE_URL
};

export function SEO({ 
  title, 
  description = defaultMeta.description, 
  image = defaultMeta.image,
  url,
  type = "website",
  jsonLd = "both"
}: SEOProps) {
  const { lang } = useParams<{ lang: string }>();
  const location = useLocation();
  const currentLang = (lang && supportedLanguages.includes(lang as Language)) ? lang : defaultLanguage;
  
  // Build canonical URL from current path, stripping language prefix for default lang
  const pathWithoutLang = location.pathname.replace(/^\/(en|nl|de)/, '') || '/';
  const canonicalUrl = currentLang === defaultLanguage
    ? `${BASE_URL}${pathWithoutLang}`
    : `${BASE_URL}/${currentLang}${pathWithoutLang}`;
  
  const fullUrl = url || canonicalUrl;
  const fullImage = image.startsWith("http") ? image : `${BASE_URL}${image}`;
  
  const fullTitle = title 
    ? `${title} | One Rooted` 
    : defaultMeta.title;

  const getJsonLdScripts = () => {
    if (jsonLd === "organization") {
      return JSON.stringify(organizationSchema);
    }
    if (jsonLd === "product") {
      return JSON.stringify(productSchema);
    }
    return JSON.stringify([organizationSchema, productSchema]);
  };

  // Generate hreflang alternates
  const generateAlternates = () => {
    const basePath = pathWithoutLang === '/' ? '' : pathWithoutLang;
    return supportedLanguages.map(supportedLang => ({
      lang: supportedLang,
      url: supportedLang === defaultLanguage
        ? `${BASE_URL}${basePath || '/'}`
        : `${BASE_URL}/${supportedLang}${basePath}`
    }));
  };

  const alternates = generateAlternates();
  const xDefaultUrl = `${BASE_URL}${pathWithoutLang === '/' ? '/' : pathWithoutLang}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />

      {/* Language */}
      <html lang={currentLang} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:locale" content={currentLang === "nl" ? "nl_NL" : currentLang === "de" ? "de_DE" : "en_US"} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullImage} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={fullUrl} />

      {/* Hreflang Alternates */}
      {alternates.map(alt => (
        <link key={alt.lang} rel="alternate" hrefLang={alt.lang} href={alt.url} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={xDefaultUrl} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {getJsonLdScripts()}
      </script>
    </Helmet>
  );
}
