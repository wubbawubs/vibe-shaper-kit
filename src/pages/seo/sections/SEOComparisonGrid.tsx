import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

interface ComparisonRow {
  aspect: string;
  [key: string]: string;
}

interface SEOComparisonGridProps {
  headline: string;
  rows: ComparisonRow[];
  labels?: { left: string; right: string };
}

export function SEOComparisonGrid({ headline, rows, labels }: SEOComparisonGridProps) {
  if (!rows || rows.length === 0) return null;

  // Dynamically detect column keys (exclude 'aspect')
  const keys = Object.keys(rows[0]).filter(k => k !== "aspect");
  const leftKey = keys[0];
  const rightKey = keys[1];
  const leftLabel = labels?.left || leftKey;
  const rightLabel = labels?.right || rightKey;

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <motion.h2
          className="text-2xl md:text-3xl font-semibold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {headline}
        </motion.h2>

        <div className="max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-4 px-4 font-semibold text-muted-foreground w-1/3"></th>
                <th className="text-left py-4 px-4 font-semibold text-muted-foreground w-1/3">{leftLabel}</th>
                <th className="text-left py-4 px-4 font-semibold text-primary w-1/3">{rightLabel}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <motion.tr
                  key={idx}
                  className="border-b border-border/50"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <td className="py-4 px-4 font-medium">{row.aspect}</td>
                  <td className="py-4 px-4 text-muted-foreground">{row[leftKey]}</td>
                  <td className="py-4 px-4 text-foreground font-medium">{row[rightKey]}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
