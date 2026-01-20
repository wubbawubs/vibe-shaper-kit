import { motion } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

interface ComparisonRow {
  aspect: string;
  traditional: string;
  onerooted: string;
}

interface SEOComparisonTableProps {
  headline: string;
  subheadline?: string;
  traditionalLabel: string;
  onerootedLabel?: string;
  rows: ComparisonRow[];
  conclusion?: {
    traditional: string;
    onerooted: string;
  };
}

export function SEOComparisonTable({
  headline,
  subheadline,
  traditionalLabel,
  onerootedLabel = "OneRooted",
  rows,
  conclusion,
}: SEOComparisonTableProps) {
  const { t } = useTranslation();
  
  return (
    <section className="relative bg-muted/30 py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="text-sm font-medium uppercase tracking-wider text-primary">
              {t('seoPages.sectionLabels.comparison', 'Comparison')}
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {headline}
            </h2>
            {subheadline && (
              <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>
            )}
          </motion.div>

          {/* Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-12 overflow-hidden rounded-xl border bg-background shadow-sm"
          >
            {/* Table Header */}
            <div className="grid grid-cols-3 border-b bg-muted/50">
            <div className="p-4">
                <span className="text-sm font-medium text-muted-foreground">{t('seoPages.sectionLabels.aspect', 'Aspect')}</span>
              </div>
              <div className="border-l p-4 text-center">
                <span className="text-sm font-medium text-muted-foreground">
                  {traditionalLabel}
                </span>
              </div>
              <div className="border-l bg-primary/5 p-4 text-center">
                <span className="text-sm font-semibold text-primary">
                  {onerootedLabel}
                </span>
              </div>
            </div>

            {/* Table Rows */}
            {rows.map((row, index) => (
              <div
                key={index}
                className="grid grid-cols-3 border-b last:border-b-0"
              >
                <div className="p-4">
                  <span className="text-sm font-medium text-foreground">{row.aspect}</span>
                </div>
                <div className="flex items-center justify-center border-l p-4 text-center">
                  <div className="flex items-center gap-2">
                    <X className="h-4 w-4 text-destructive" />
                    <span className="text-sm text-muted-foreground">{row.traditional}</span>
                  </div>
                </div>
                <div className="flex items-center justify-center border-l bg-primary/5 p-4 text-center">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">{row.onerooted}</span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Conclusion */}
          {conclusion && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-10 flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:gap-8"
            >
              <div className="flex items-center gap-2 text-muted-foreground">
                <span>{conclusion.traditional}</span>
              </div>
              <ArrowRight className="h-5 w-5 text-primary" />
              <div className="flex items-center gap-2">
                <span className="font-semibold text-primary">{conclusion.onerooted}</span>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
