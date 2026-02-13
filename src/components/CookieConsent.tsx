import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import { Button } from "@/components/ui/button";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

const GA_ID = "G-WE8NPG39VF";
const CONSENT_KEY = "cookie_consent";

type ConsentValue = "accepted" | "declined";

function loadGoogleAnalytics() {
  // Avoid loading twice
  if (document.querySelector(`script[src*="googletagmanager.com/gtag/js"]`)) {
    window.gtag?.("consent", "update", { analytics_storage: "granted" });
    return;
  }

  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  script.async = true;
  document.head.appendChild(script);

  window.gtag?.("consent", "update", { analytics_storage: "granted" });
  window.gtag?.("js", new Date());
  window.gtag?.("config", GA_ID);
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY) as ConsentValue | null;
    if (stored === "accepted") {
      loadGoogleAnalytics();
    } else if (!stored) {
      // Small delay so it doesn't flash on load
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    loadGoogleAnalytics();
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(CONSENT_KEY, "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md z-[9999]"
        >
          <div className="bg-card border border-border rounded-2xl shadow-2xl p-5 relative">
            <button
              onClick={handleDecline}
              className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Sluiten"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex items-start gap-3">
              <div className="bg-primary/10 rounded-xl p-2 mt-0.5 shrink-0">
                <Cookie className="h-5 w-5 text-primary" />
              </div>
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-foreground text-sm">
                    Cookies & Privacy
                  </h3>
                  <p className="text-muted-foreground text-xs mt-1 leading-relaxed">
                    We gebruiken analytische cookies om onze website te verbeteren.
                    Geen persoonlijke data wordt gedeeld met derden.{" "}
                    <a
                      href="/privacy"
                      className="underline underline-offset-2 hover:text-foreground transition-colors"
                    >
                      Privacybeleid
                    </a>
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={handleAccept}
                    className="text-xs h-8 px-4"
                  >
                    Accepteren
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={handleDecline}
                    className="text-xs h-8 px-4"
                  >
                    Weigeren
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
