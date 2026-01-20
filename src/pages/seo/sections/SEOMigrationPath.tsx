import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Clock, Shield, FileText } from "lucide-react";

interface MigrationStep {
  title: string;
  description: string;
  duration?: string;
}

interface SEOMigrationPathProps {
  headline: string;
  subheadline?: string;
  competitorName: string;
  steps: MigrationStep[];
  benefits?: string[];
}

export function SEOMigrationPath({
  headline,
  subheadline,
  competitorName,
  steps,
  benefits,
}: SEOMigrationPathProps) {
  return (
    <section className="relative bg-background py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-medium uppercase tracking-wider text-primary">
              Migratie
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {headline}
            </h2>
            {subheadline && (
              <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>
            )}
          </motion.div>
        </div>

        {/* Migration Steps */}
        <div className="mx-auto mt-12 max-w-3xl">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 h-full w-0.5 bg-border" />
            
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative mb-8 ml-12 last:mb-0"
              >
                {/* Step number */}
                <div className="absolute -left-12 flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary bg-background text-lg font-bold text-primary">
                  {index + 1}
                </div>
                
                <div className="rounded-lg border bg-card p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-foreground">{step.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
                    </div>
                    {step.duration && (
                      <div className="flex shrink-0 items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {step.duration}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        {benefits && benefits.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mx-auto mt-12 max-w-2xl rounded-xl border-2 border-primary/20 bg-primary/5 p-6"
          >
            <h3 className="flex items-center gap-2 font-semibold text-foreground">
              <Shield className="h-5 w-5 text-primary" />
              Overstappen van {competitorName}
            </h3>
            <ul className="mt-4 space-y-2">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {benefit}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </section>
  );
}
