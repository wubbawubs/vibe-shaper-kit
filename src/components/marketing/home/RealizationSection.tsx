import { motion } from "framer-motion";

export function RealizationSection() {
  return (
    <section className="py-16 md:py-24 bg-foreground text-background relative overflow-hidden">
      {/* Horizontal divider line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-background/20" />
      
      <div className="container relative">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Quote */}
          <blockquote className="relative mb-8">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-6xl text-accent/20">"</div>
            <p className="text-2xl md:text-3xl lg:text-4xl font-medium leading-tight">
              Hiring didn't get more complex.
              <br />
              <span className="text-accent">Your tools just never evolved.</span>
            </p>
          </blockquote>

          {/* Understated closing - smaller, less contrast */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base md:text-lg text-background/40 font-medium"
          >
            Now there is OneRooted.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
