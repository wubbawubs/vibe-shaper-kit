import { motion } from "framer-motion";

export function RealizationSection() {
  return (
    <section className="py-32 md:py-44 bg-foreground text-background relative overflow-hidden">
      <div className="container relative">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Quote */}
          <blockquote className="relative mb-16">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-7xl text-accent/20">"</div>
            <p className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
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
            className="text-lg md:text-xl text-background/50 font-medium"
          >
            Now there is OneRooted.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
