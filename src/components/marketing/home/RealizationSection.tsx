import { motion } from "framer-motion";

export function RealizationSection() {
  return (
    <section className="py-20 md:py-32 bg-foreground text-background relative overflow-hidden">
      {/* Horizontal divider line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[430px] max-w-[80%] h-px bg-background/20" />
      
      <div className="container relative">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Quote - DOMINANT element, largest, highest contrast */}
          <blockquote className="relative">
            <p className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.15] tracking-tight">
              Hiring didn't get more complex.
              <br />
              <span className="text-accent">Your tools just never evolved.</span>
            </p>
          </blockquote>

          {/* Inevitable conclusion - calm, quiet, factual */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 text-sm text-background/30 font-normal tracking-wide"
          >
            Now there is OneRooted.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
