import { motion } from "framer-motion";

export function ProblemSection() {
  return (
    <section className="py-28 md:py-40 bg-foreground text-background relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container relative">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-12">
            Hiring isn't broken.
            <br />
            <span className="text-background/60">Your tools are.</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { tool: "ATS", purpose: "storage" },
              { tool: "Slack", purpose: "discussion" },
              { tool: "Excel", purpose: "decisions" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 border border-background/10 rounded-xl"
              >
                <p className="text-lg font-medium mb-1">{item.tool}</p>
                <p className="text-background/50 text-sm">for {item.purpose}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-background/60 text-lg mb-12"
          >
            The result? Chaos. No single source of truth. No accountability. No insight.
          </motion.p>

          <motion.blockquote
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-6xl text-accent/30">"</div>
            <p className="text-2xl md:text-3xl font-medium leading-relaxed">
              Hiring didn't get more complex.
              <br />
              <span className="text-accent">Your tools just never evolved.</span>
            </p>
          </motion.blockquote>
        </motion.div>
      </div>
    </section>
  );
}
