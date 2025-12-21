import { motion } from "framer-motion";

export function ProblemSection() {
  return (
    <section className="py-16 md:py-24 bg-foreground text-background relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true" role="presentation">
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
          <div className="grid md:grid-cols-3 gap-6 mb-10">
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
                className="p-6 border border-background/10 rounded-xl hover:bg-background/5 transition-colors duration-300"
              >
                <p className="text-lg font-medium mb-2">{item.tool}</p>
                <p className="text-background/50 text-sm">{item.purpose}</p>
              </motion.div>
            ))}
          </div>

          {/* Consequence line */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-background/40 text-base mb-16"
          >
            No single source of truth. No ownership. No insight.
          </motion.p>

          {/* Divider */}
          <div className="w-[430px] max-w-full h-px bg-background/20 mx-auto mb-16" />

          {/* Realization / Punchline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-2xl md:text-3xl lg:text-4xl font-medium leading-tight mb-6">
              Hiring didn't get more complex.
              <br />
              <span className="text-accent">Your tools just never evolved.</span>
            </p>

            <p className="text-base md:text-lg text-background/40 font-medium">
              Now there is <span className="text-accent">OneRooted.</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}