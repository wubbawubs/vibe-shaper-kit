import { motion } from "framer-motion";
import { CheckCircle2, Clock, ArrowRight, Settings, Zap, Link2 } from "lucide-react";

interface IntegrationStep {
  title: string;
  description: string;
  duration?: string;
}

interface SEOIntegrationHowToProps {
  headline: string;
  subheadline?: string;
  integrationName: string;
  steps: IntegrationStep[];
  benefits?: string[];
  technicalNote?: string;
}

export function SEOIntegrationHowTo({
  headline,
  subheadline,
  integrationName,
  steps,
  benefits = [],
  technicalNote,
}: SEOIntegrationHowToProps) {
  if (!steps || steps.length === 0) return null;

  const getStepIcon = (index: number) => {
    const icons = [Settings, Link2, Zap, CheckCircle2];
    const Icon = icons[index % icons.length];
    return <Icon className="h-5 w-5" />;
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-wide mb-4">
            <Link2 className="h-4 w-4" />
            Integratie
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            {headline}
          </h2>
          {subheadline && (
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {subheadline}
            </p>
          )}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Steps */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Zo koppel je {integrationName}
            </h3>
            
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 top-8 bottom-8 w-px bg-border" />
              
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex gap-4 pb-8 last:pb-0"
                >
                  {/* Step number */}
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                    {getStepIcon(index)}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-foreground">
                        {step.title}
                      </h4>
                      {step.duration && (
                        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                          <Clock className="h-3 w-3" />
                          {step.duration}
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {technicalNote && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-6 p-4 bg-muted/50 rounded-lg border border-border"
              >
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Technische vereisten:</strong>{" "}
                  {technicalNote}
                </p>
              </motion.div>
            )}
          </div>

          {/* Benefits */}
          {benefits.length > 0 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl border border-border p-8"
            >
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Wat levert het op?
              </h3>
              
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <ArrowRight className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
