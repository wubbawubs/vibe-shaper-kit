import { motion } from "framer-motion";

export function ProblemSection() {
  return (
    <section className="py-16 md:py-20 bg-foreground text-background relative overflow-hidden">
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
          {/* Setup line - demoted, chapter label feel */}
          <p className="text-lg md:text-xl lg:text-2xl font-normal text-background/40 tracking-wide mb-10">
            Your current tools are outdated.
          </p>

          {/* Tool cards - unified diagnostic block */}
          <div className="grid md:grid-cols-3 gap-4 mb-6 py-8 px-4">
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
                className="p-5 border border-background/8 rounded-lg"
              >
                <p className="text-base font-medium mb-1.5 text-background/80">{item.tool}</p>
                <p className="text-background/40 text-sm leading-snug">{item.purpose}</p>
              </motion.div>
            ))}
          </div>

          {/* Whisper line - footnote to the cards */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-background/30 text-xs tracking-wide"
          >
            No single source of truth. No ownership. No insight.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}