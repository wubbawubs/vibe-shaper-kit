import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
}

const defaultMeta = {
  title: "OneRooted | The Hiring OS for Teams That Take Hiring Seriously",
  description: "Replace scattered tools with one intelligent system that ranks candidates, streamlines workflows, and drives better hiring decisions.",
  image: "/og-image.png",
  url: "https://onerooted.com",
};

export function SEO({ 
  title, 
  description = defaultMeta.description, 
  image = defaultMeta.image,
  url = defaultMeta.url,
  type = "website"
}: SEOProps) {
  const fullTitle = title 
    ? `${title} | OneRooted` 
    : defaultMeta.title;

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
    </Helmet>
  );
}
