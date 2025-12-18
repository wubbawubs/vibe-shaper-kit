import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Finally, a system that matches how modern hiring actually works.",
    author: "Head of Talent",
    company: "Dutch Scale-up, 200+ employees",
  },
  {
    quote: "Our partner relationships improved overnight. Full transparency changes everything.",
    author: "VP People",
    company: "Tech Company, Series B",
  },
];

export function SocialProofSection() {
  return (
    <section className="py-28 md:py-40 relative overflow-hidden">
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
          <p className="text-sm uppercase tracking-widest text-accent mb-4">Trusted by</p>
          <h2 className="text-3xl md:text-4xl font-semibold">
            Forward-thinking teams at scale
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative p-8 md:p-10 bg-card rounded-2xl border border-border/50"
            >
              <Quote className="h-8 w-8 text-accent/30 mb-4" />
              <blockquote className="text-lg md:text-xl mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <p className="font-medium">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
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
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
