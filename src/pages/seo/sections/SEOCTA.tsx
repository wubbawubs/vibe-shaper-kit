import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { getLocalizedPath } from "@/i18n/useLanguage";
import { type Language } from "@/i18n/config";

interface SEOCTAProps {
  headline: string;
  subheadline?: string;
  ctaText: string;
  ctaSecondaryText?: string;
  variant?: "default" | "dark";
}

export function SEOCTA({
  headline,
  subheadline,
  ctaText,
  ctaSecondaryText,
  variant = "default",
}: SEOCTAProps) {
  const { lang } = useParams<{ lang: string }>();
  
  const getLocalizedHref = (href: string) => {
    return getLocalizedPath(href, (lang as Language) || "en");
  };

  const isDark = variant === "dark";

  return (
    <section 
      className={`relative overflow-hidden py-16 md:py-24 ${
        isDark ? "bg-foreground text-background" : "bg-primary/5"
      }`}
    >
      {/* Background pattern */}
      <div className={`absolute inset-0 ${
        isDark 
          ? "bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.2),transparent_50%)]"
          : "bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.1),transparent_50%)]"
      }`} />
      
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Calendar className={`mx-auto h-12 w-12 ${isDark ? "text-primary" : "text-primary"}`} />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`mt-6 text-3xl font-bold tracking-tight sm:text-4xl ${
              isDark ? "text-background" : "text-foreground"
            }`}
          >
            {headline}
          </motion.h2>

          {subheadline && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`mx-auto mt-4 max-w-xl text-lg ${
                isDark ? "text-background/70" : "text-muted-foreground"
              }`}
            >
              {subheadline}
            </motion.p>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button 
              size="lg" 
              asChild 
              className={`group ${isDark ? "bg-background text-foreground hover:bg-background/90" : "bg-primary text-primary-foreground hover:bg-primary/90"}`}
            >
              <Link to={getLocalizedHref("/demo")}>
                {ctaText}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            {ctaSecondaryText && (
              <Button 
                variant={isDark ? "ghost" : "outline"}
                size="lg" 
                asChild
                className={isDark 
                  ? "border border-white/40 text-white hover:bg-white/10" 
                  : "border-foreground/20 text-foreground hover:bg-foreground/5"
                }
              >
                <Link to={getLocalizedHref("/pricing")}>
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
