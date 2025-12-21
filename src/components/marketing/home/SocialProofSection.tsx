import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Finally, a system that matches how modern hiring actually works.",
    author: "Head of Talent",
    company: "Dutch Scale-up, 200+ employees",
    metric: "45% faster time-to-hire",
    industry: "SaaS",
  },
  {
    quote: "Our partner relationships improved overnight. Full transparency changes everything.",
    author: "VP People",
    company: "Tech Company, Series B",
    metric: "3x better candidate quality",
    industry: "FinTech",
  },
  {
    quote: "The intelligence layer is a game-changer. We finally have data-driven hiring decisions.",
    author: "Director of Recruitment",
    company: "Enterprise, 1000+ employees",
    metric: "60% reduction in screening time",
    industry: "Healthcare",
  },
];

export function SocialProofSection() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-background" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-primary mb-4 tracking-wide uppercase">Trusted by</p>
          <h2 className="text-3xl md:text-4xl font-semibold">
            Forward-thinking teams at scale
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative p-6 md:p-8 bg-card rounded-2xl border border-border/50"
            >
              <div className="flex items-center gap-2 mb-4">
                <Quote className="h-6 w-6 text-primary/30" />
                <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                  {testimonial.industry}
                </span>
              </div>
              <blockquote className="text-base md:text-lg mb-4 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="text-sm font-semibold text-primary mb-3">
                {testimonial.metric}
              </div>
              <div>
                <p className="font-medium text-sm">{testimonial.author}</p>
                <p className="text-xs text-muted-foreground">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-8 md:gap-16 mt-16 pt-16 border-t border-border/30"
        >
          {[
            "Built with recruiting teams",
            "Used in real hiring environments", 
            "Designed to scale"
          ].map((item, i) => (
            <span key={i} className="text-sm text-muted-foreground flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
