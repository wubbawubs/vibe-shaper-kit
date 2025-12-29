import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getLocalizedPath } from "@/i18n/useLanguage";
import { type Language } from "@/i18n/config";

const POPUP_DELAY_MS = 5000;
const POPUP_STORAGE_KEY = "onerooted_popup_dismissed";

export const DemoCTAPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { t } = useTranslation();
  const { lang } = useParams<{ lang: string }>();

  const getLocalizedHref = (href: string) => {
    return lang ? getLocalizedPath(href, lang as Language) : href;
  };

  // Ensure component is mounted before starting timer
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    // Check if popup was already dismissed this session
    const wasDismissed = sessionStorage.getItem(POPUP_STORAGE_KEY);
    if (wasDismissed) return;

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, POPUP_DELAY_MS);

    return () => clearTimeout(timer);
  }, [isMounted]);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem(POPUP_STORAGE_KEY, "true");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
            onClick={handleDismiss}
          />

          {/* Popup */}
          <div className="fixed inset-0 flex items-center justify-center z-[101] pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-[90vw] max-w-md pointer-events-auto"
            >
            <div className="bg-background border border-border rounded-2xl shadow-2xl overflow-hidden relative">
              {/* Close button */}
              <button
                onClick={handleDismiss}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors z-10"
                aria-label="Close"
              >
                <X className="h-5 w-5 text-muted-foreground" />
              </button>

              {/* Content */}
              <div className="p-8 text-center flex flex-col items-center">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6"
                >
                  <Calendar className="h-8 w-8 text-primary" />
                </motion.div>

                {/* Text */}
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl font-semibold mb-3"
                >
                  {t('popup.headline', 'Ready to transform your hiring?')}
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-muted-foreground mb-6"
                >
                  {t('popup.description', 'Break free from fragmented recruiting. See how OneRooted can help you hire smarter in just 20 minutes.')}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col gap-3"
                >
                  <Button 
                    asChild 
                    size="lg" 
                    className="w-full h-12 bg-primary hover:bg-primary/90"
                    onClick={handleDismiss}
                  >
                    <Link to={getLocalizedHref("/demo")} className="flex items-center justify-center gap-2">
                      {t('popup.cta', 'Schedule a demo')}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleDismiss}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {t('popup.dismiss', 'Maybe later')}
                  </Button>
                </motion.div>
              </div>

              {/* Bottom accent */}
              <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary" />
            </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
