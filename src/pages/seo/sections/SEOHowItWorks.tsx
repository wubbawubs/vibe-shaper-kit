import { motion } from "framer-motion";

interface Step {
  step?: string;
  title: string;
  description: string;
}

interface SEOHowItWorksProps {
  headline: string;
  steps: Step[];
}

export function SEOHowItWorks({ headline, steps }: SEOHowItWorksProps) {
  if (!steps || steps.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <motion.h2
          className="text-2xl md:text-3xl font-semibold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {headline}
        </motion.h2>

        <div className="max-w-3xl mx-auto space-y-6">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              className="flex gap-6 items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                {step.step || idx + 1}
              </div>
              <div className="flex-1 pb-6 border-b border-border/50 last:border-0">
                <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
