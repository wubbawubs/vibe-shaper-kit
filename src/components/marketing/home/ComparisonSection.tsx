import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { useTranslation } from "react-i18next";

export function ComparisonSection() {
  const { t } = useTranslation();

  const comparisonKeys = ["focus", "flex", "priority", "data", "process"];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-primary mb-4 tracking-wide uppercase">
            {t("comparison.label")}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
            {t("comparison.headline")}
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-card rounded-3xl border border-border/50 overflow-hidden shadow-2xl shadow-primary/5"
          >
            {/* Header */}
            <div className="grid grid-cols-2 border-b border-border/50">
              <div className="p-6 md:p-8 bg-muted/30">
                <p className="text-sm font-medium text-muted-foreground">{t("comparison.traditional")}</p>
              </div>
              <div className="p-6 md:p-8 bg-primary/5">
                <p className="text-sm font-medium text-primary">OneRooted</p>
              </div>
            </div>

            {/* Rows */}
            {comparisonKeys.map((key, index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="grid grid-cols-2 border-b border-border/30 last:border-b-0"
              >
                <div className="p-6 md:p-8 flex items-center gap-3 text-muted-foreground">
                  <X className="h-5 w-5 text-destructive/50 shrink-0" />
                  <span>{t(`comparison.rows.${key}.ats`)}</span>
                </div>
                <div className="p-6 md:p-8 flex items-center gap-3 bg-primary/5 font-medium">
                  <Check className="h-5 w-5 text-success shrink-0" />
                  <span>{t(`comparison.rows.${key}.onerooted`)}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-16"
          >
            <p className="text-xl md:text-2xl text-muted-foreground">
              {t("comparison.conclusion.ats")}{" "}
              <span className="text-foreground/80">{t("comparison.conclusion.atsHighlight")}</span>.
            </p>
            <p className="text-xl md:text-2xl mt-2">
              {t("comparison.conclusion.onerooted")}{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-medium">
                {t("comparison.conclusion.onerootedHighlight")}
              </span>.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
