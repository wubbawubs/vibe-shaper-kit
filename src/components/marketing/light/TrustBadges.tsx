import { motion } from "framer-motion";
import { Shield, Lock, Award, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

const badges = [
  { icon: Shield, labelKey: "gdpr" },
  { icon: Lock, labelKey: "secure" },
  { icon: Award, labelKey: "verified" },
  { icon: Clock, labelKey: "fast" },
];

export const TrustBadges = () => {
  const { t } = useTranslation();

  const labels: Record<string, string> = {
    gdpr: "GDPR Compliant",
    secure: "Enterprise Security",
    verified: "Verified Partners",
    fast: "24h Support",
  };

  return (
    <motion.div
      className="flex flex-wrap justify-center gap-4 md:gap-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
    >
      {badges.map((badge, index) => (
        <motion.div
          key={badge.labelKey}
          className="flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-full border border-border/50"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 * index }}
          whileHover={{ scale: 1.05 }}
        >
          <badge.icon className="h-4 w-4 text-success" />
          <span className="text-sm font-medium text-muted-foreground">{labels[badge.labelKey]}</span>
        </motion.div>
      ))}
    </motion.div>
  );
};
