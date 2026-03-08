import { motion } from "framer-motion";
import { Check, Zap, Shield, Clock, Star } from "lucide-react";

interface SEOBenefitsListProps {
  headline: string;
  benefits: string[];
}

export function SEOBenefitsList({ headline, benefits }: SEOBenefitsListProps) {
  if (!benefits || benefits.length === 0) return null;

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <motion.h2
          className="text-2xl md:text-3xl font-semibold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {headline}
        </motion.h2>

        <div className="max-w-3xl mx-auto grid gap-4">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 border border-border/50"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.07 }}
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Check className="w-4 h-4 text-primary" />
              </div>
              <p className="text-foreground pt-1">{benefit}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
