import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  jsonLd?: "organization" | "product" | "both";
}

const defaultMeta = {
  title: "One Rooted | The Hiring OS for Teams That Take Hiring Seriously",
  description: "Replace scattered tools with one intelligent system that ranks candidates, streamlines workflows, and drives better hiring decisions.",
  image: "/og-image.png",
  url: "https://onerooted.nl",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "One Rooted",
  "url": "https://onerooted.nl",
  "logo": "https://onerooted.nl/og-image.png",
  "description": "The Hiring OS for Teams That Take Hiring Seriously. Replace scattered tools with one intelligent system.",
  "sameAs": [
    "https://linkedin.com/company/110167349"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "sales",
    "url": "https://onerooted.nl/demo"
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
    "price": "0",
    "priceCurrency": "EUR",
    "description": "Free trial available"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "150"
  },
  "featureList": [
    "Candidate Ranking System",
    "Automated Workflow Management",
    "Team Collaboration Tools",
    "Analytics & Reporting",
    "Integration Ecosystem"
  ]
};

export function SEO({ 
  title, 
  description = defaultMeta.description, 
  image = defaultMeta.image,
  url = defaultMeta.url,
  type = "website",
  jsonLd = "both"
}: SEOProps) {
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

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {getJsonLdScripts()}
      </script>
    </Helmet>
  );
}
