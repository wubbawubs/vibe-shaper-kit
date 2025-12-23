import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, AlertTriangle, Target } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { HiringFunnelAnimation } from "./HiringFunnelAnimation";
import { getLocalizedPath } from "@/i18n/useLanguage";
import { type Language } from "@/i18n/config";

export function HeroSection() {
  const { t } = useTranslation();
  const { lang } = useParams<{ lang: string }>();

  const getLocalizedHref = (href: string) => {
    return lang ? getLocalizedPath(href, lang as Language) : href;
  };

  return (
    <section className="relative min-h-[80vh] md:min-h-[85vh] flex items-center overflow-hidden py-8 md:py-0">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          {/* Left - Copy */}
          <div className="lg:col-span-5 space-y-5 md:space-y-8">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight"
            >
              {t("hero.headline")}{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {t("hero.headlineHighlight")}
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-lg leading-relaxed"
            >
              {t("hero.subheadline")}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3 pt-2 md:pt-4"
            >
              <Button asChild size="lg" className="h-12 md:h-14 px-6 md:px-8 text-base bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25">
                <Link to={getLocalizedHref("/demo")}>
                  {t("hero.cta")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="h-12 md:h-14 px-6 md:px-8 text-base text-muted-foreground hover:text-foreground">
                <Link to={getLocalizedHref("/pricing")}>
                  {t("hero.ctaSecondary")}
                </Link>
              </Button>
            </motion.div>

            {/* Stats teaser */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-4 md:pt-8 flex items-center gap-6 md:gap-8 text-sm"
            >
              <div>
                <div className="text-xl md:text-2xl font-semibold text-foreground">85%</div>
                <div className="text-muted-foreground text-xs md:text-sm">{t("hero.stats.screening")}</div>
              </div>
              <div className="w-px h-8 md:h-10 bg-border" />
              <div>
                <div className="text-xl md:text-2xl font-semibold text-foreground">3x</div>
                <div className="text-muted-foreground text-xs md:text-sm">{t("hero.stats.quality")}</div>
              </div>
            </motion.div>
          </div>

          {/* Right - Interactive Funnel Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-7 relative"
          >
            {/* KPI/Bottleneck Insight Bar - Desktop only */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="hidden md:flex items-center gap-4 mb-4 px-4 py-3 rounded-xl bg-amber-500/10 border border-amber-500/20"
            >
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-amber-500/15 shrink-0">
                <AlertTriangle className="h-4 w-4 text-amber-600" />
              </div>
              <p className="text-sm text-amber-800 dark:text-amber-300">
                <span className="font-medium">Bottleneck in 'Screen'</span>
                {" "}— kandidaten blijven gemiddeld 12 dagen hangen.
              </p>
            </motion.div>

            <div className="relative aspect-[4/3] md:aspect-[16/10] rounded-xl md:rounded-2xl overflow-hidden bg-gradient-to-br from-muted/30 to-muted/10 border border-border/50 shadow-xl md:shadow-2xl">
              <HiringFunnelAnimation />
            </div>
            
            {/* Decorative glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-3xl blur-3xl -z-10 opacity-60 hidden md:block" aria-hidden="true" />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 md:h-32 bg-gradient-to-t from-background to-transparent" aria-hidden="true" />
    </section>
  );
}
