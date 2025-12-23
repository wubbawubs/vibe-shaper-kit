import { motion } from "framer-motion";
import { Clock, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";

export const UrgencyBanner = () => {
  const { t, i18n } = useTranslation();
  
  const messages: Record<string, { primary: string; secondary: string }> = {
    en: {
      primary: "Limited time offer",
      secondary: "Lock in €99/month before prices increase",
    },
    nl: {
      primary: "Tijdelijk aanbod",
      secondary: "Verzeker €99/maand voordat prijzen stijgen",
    },
    de: {
      primary: "Zeitlich begrenztes Angebot",
      secondary: "Sichern Sie sich €99/Monat bevor die Preise steigen",
    },
  };

  const lang = i18n.language?.split('-')[0] || 'en';
  const message = messages[lang] || messages.en;

  return (
    <motion.div
      className="bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 border border-accent/20 rounded-full px-6 py-2 inline-flex items-center gap-3"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2 }}
    >
      <motion.div
        animate={{ rotate: [0, 15, -15, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
      >
        <Clock className="h-4 w-4 text-accent" />
      </motion.div>
      <div className="flex items-center gap-2 text-sm">
        <span className="font-semibold text-accent">{message.primary}</span>
        <span className="text-muted-foreground hidden sm:inline">—</span>
        <span className="text-muted-foreground hidden sm:inline">{message.secondary}</span>
      </div>
      <Zap className="h-4 w-4 text-accent fill-accent" />
    </motion.div>
  );
};
