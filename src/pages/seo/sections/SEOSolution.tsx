import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";

interface SEOSolutionProps {
  headline: string;
  subheadline?: string;
  solutionPoints: string[];
  uniqueAngle?: string;
}

export function SEOSolution({
  headline,
  subheadline,
  solutionPoints,
  uniqueAngle,
}: SEOSolutionProps) {
  const { t } = useTranslation();
  
  return (
    <section className="relative bg-background py-16 md:py-24">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.05),transparent_70%)]" />
      
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 text-primary">
              <Zap className="h-5 w-5" />
              <span className="text-sm font-medium uppercase tracking-wider">{t('seoPages.sectionLabels.theSolution', 'The solution')}</span>
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

          {/* Solution Points - Always fill complete rows */}
          <div className={`mt-10 grid gap-4 ${
            solutionPoints.length <= 3 
              ? 'sm:grid-cols-2 lg:grid-cols-3' 
              : solutionPoints.length === 4 
                ? 'sm:grid-cols-2' 
                : solutionPoints.length === 5 
                  ? 'sm:grid-cols-2 lg:grid-cols-3' 
                  : 'sm:grid-cols-2 lg:grid-cols-3'
          }`}>
            {solutionPoints.slice(0, solutionPoints.length <= 3 ? 3 : solutionPoints.length === 4 ? 4 : solutionPoints.length === 5 ? 6 : 6).map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="flex items-start gap-3 rounded-lg border border-primary/20 bg-primary/5 p-4 text-left"
              >
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm text-foreground">{point}</span>
              </motion.div>
            ))}
          </div>

          {/* Unique Angle */}
          {uniqueAngle && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-12 rounded-xl border-2 border-primary/30 bg-primary/5 p-6"
            >
              <p className="text-lg font-medium text-foreground">
                {uniqueAngle}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
