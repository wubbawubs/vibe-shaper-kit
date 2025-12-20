import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const comparisons = [
  { ats: "Stores candidates", onerooted: "Tracks hiring decisions", key: "focus" },
  { ats: "Static pipelines", onerooted: "Adaptive workflows", key: "flex" },
  { ats: "Admin-first design", onerooted: "Decision-first design", key: "priority" },
  { ats: "Siloed data", onerooted: "Unified intelligence", key: "data" },
  { ats: "Manual coordination", onerooted: "Automated collaboration", key: "process" },
];

export function ComparisonSection() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-widest text-accent mb-4">The difference</p>
          <h2 className="text-4xl md:text-5xl font-semibold">
            Not another ATS
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-card rounded-3xl border border-border/50 overflow-hidden shadow-2xl shadow-primary/5"
          >
            {/* Header */}
            <div className="grid grid-cols-2 border-b border-border/50">
              <div className="p-6 md:p-8 bg-muted/30">
                <p className="text-sm font-medium text-muted-foreground">Traditional ATS</p>
              </div>
              <div className="p-6 md:p-8 bg-primary/5">
                <p className="text-sm font-medium text-primary">OneRooted</p>
              </div>
            </div>

            {/* Rows */}
            {comparisons.map((row, index) => (
              <motion.div
                key={row.key}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="grid grid-cols-2 border-b border-border/30 last:border-b-0"
              >
                <div className="p-6 md:p-8 flex items-center gap-3 text-muted-foreground">
                  <X className="h-5 w-5 text-destructive/50 shrink-0" />
                  <span>{row.ats}</span>
                </div>
                <div className="p-6 md:p-8 flex items-center gap-3 bg-primary/5 font-medium">
                  <Check className="h-5 w-5 text-success shrink-0" />
                  <span>{row.onerooted}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-16"
          >
            <p className="text-xl md:text-2xl text-muted-foreground">
              ATS tools help you{" "}
              <span className="text-foreground/80">track candidates</span>.
            </p>
            <p className="text-xl md:text-2xl mt-2">
              OneRooted helps you{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-medium">hire better people</span>.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
