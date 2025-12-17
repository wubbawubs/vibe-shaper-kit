import { motion } from "framer-motion";

export function ProblemSection() {
  return (
    <section className="py-20 md:py-28 bg-foreground text-background relative overflow-hidden">
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
          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-3">
            Hiring isn't broken.
          </h2>
          <p className="text-2xl md:text-3xl lg:text-4xl font-normal text-background/60 mb-12">
            Your current tools are outdated.
          </p>

          {/* Tool cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { tool: "ATS", purpose: <>Built to store candidates,<br />not to hire them</> },
              { tool: "Slack", purpose: "Decisions lost in endless conversations" },
              { tool: "Excel", purpose: "Critical choices without context" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 border border-background/10 rounded-xl"
              >
                <p className="text-lg font-medium mb-2">{item.tool}</p>
                <p className="text-background/50 text-sm">{item.purpose}</p>
              </motion.div>
            ))}
          </div>

          {/* One consequence line - facts only */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-background/50 text-lg"
          >
            No single source of truth. No ownership. No insight.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}