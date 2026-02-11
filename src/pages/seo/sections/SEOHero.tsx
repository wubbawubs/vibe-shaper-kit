import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { getLocalizedPath } from "@/i18n/useLanguage";
import { type Language } from "@/i18n/config";

interface SEOHeroProps {
  label: string;
  headline: string;
  headlineHighlight?: string;
  subheadline: string;
  ctaText: string;
  ctaSecondaryText?: string;
}

export function SEOHero({
  label,
  headline,
  headlineHighlight,
  subheadline,
  ctaText,
  ctaSecondaryText,
}: SEOHeroProps) {
  const { lang } = useParams<{ lang: string }>();
  
  const getLocalizedHref = (href: string) => {
    return getLocalizedPath(href, (lang as Language) || "en");
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-muted/30 py-16 md:py-24 lg:py-32">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--primary)/0.05),transparent_50%)]" />
      
      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              {label}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {headline}
            {headlineHighlight && (
              <>
                {" "}
                <span className="text-primary">{headlineHighlight}</span>
              </>
            )}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
          >
            {subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button size="lg" asChild className="group">
              <Link to={getLocalizedHref("/demo")}>
                {ctaText}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            {ctaSecondaryText && (
              <Button variant="outline" size="lg" asChild>
                <Link to={getLocalizedHref("/pricing")}>
                  <Play className="mr-2 h-4 w-4" />
                  {ctaSecondaryText}
                </Link>
              </Button>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
