import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, X } from "lucide-react";
import { useLanguageFromUrl } from "@/i18n/useLanguage";
import { useTranslation } from "react-i18next";

export const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const { localizedPath } = useLanguageFromUrl();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 600px
      const shouldShow = window.scrollY > 600 && !isDismissed;
      setIsVisible(shouldShow);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  // Hide on footer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    const footer = document.querySelector("footer");
    if (footer) observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/95 backdrop-blur-lg border-t border-border shadow-lg"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="container flex items-center justify-between gap-4">
            <div className="hidden sm:flex items-center gap-4">
              <div className="flex items-baseline gap-2">
                <span className="text-lg text-muted-foreground line-through">€{t('lightOffer.page.pricing.previousPrice')}</span>
                <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  €{t('lightOffer.page.pricing.price')}
                </span>
                <span className="text-muted-foreground">{t('lightOffer.page.pricing.perMonth')}</span>
              </div>
              <span className="text-sm text-success font-medium">{t('lightOffer.page.pricing.savings')}</span>
            </div>
            
            <div className="flex items-center gap-2 ml-auto">
              <Button asChild size="lg" className="btn-accent">
                <Link to={localizedPath("/demo")} className="flex items-center gap-2">
                  {t('lightOffer.page.pricing.cta')}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="shrink-0"
                onClick={() => setIsDismissed(true)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
