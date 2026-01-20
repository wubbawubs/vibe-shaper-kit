import { motion } from "framer-motion";
import { AlertTriangle, X } from "lucide-react";
import { useTranslation } from "react-i18next";

interface SEOPainPointsProps {
  headline: string;
  subheadline?: string;
  painPoints: string[];
  consequence?: string;
}

export function SEOPainPoints({
  headline,
  subheadline,
  painPoints,
  consequence,
}: SEOPainPointsProps) {
  const { t } = useTranslation();
  
  return (
    <section className="relative bg-muted/30 py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 text-destructive">
              <AlertTriangle className="h-5 w-5" />
              <span className="text-sm font-medium uppercase tracking-wider">{t('seoPages.sectionLabels.theProblem', 'The problem')}</span>
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            {headline}
          </motion.h2>

          {subheadline && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-lg text-muted-foreground"
            >
              {subheadline}
            </motion.p>
          )}

          {/* Pain Points */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="flex items-start gap-3 rounded-lg border border-destructive/20 bg-destructive/5 p-4 text-left"
              >
                <X className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
                <span className="text-sm text-foreground">{point}</span>
              </motion.div>
            ))}
          </div>

          {/* Consequence */}
          {consequence && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 text-lg font-medium text-muted-foreground"
            >
              {consequence}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}
