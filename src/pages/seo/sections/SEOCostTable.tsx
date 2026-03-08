import { motion } from "framer-motion";

interface CostRow {
  item: string;
  [key: string]: string;
}

interface SEOCostTableProps {
  headline: string;
  rows: CostRow[];
}

export function SEOCostTable({ headline, rows }: SEOCostTableProps) {
  if (!rows || rows.length === 0) return null;

  const keys = Object.keys(rows[0]).filter(k => k !== "item");

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <motion.h2
          className="text-2xl md:text-3xl font-semibold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {headline}
        </motion.h2>

        <div className="max-w-3xl mx-auto overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-3 px-4 font-semibold"></th>
                {keys.map(key => (
                  <th key={key} className="text-left py-3 px-4 font-semibold capitalize">{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <motion.tr
                  key={idx}
                  className="border-b border-border/50"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <td className="py-3 px-4 font-medium">{row.item}</td>
                  {keys.map(key => (
                    <td key={key} className="py-3 px-4 text-muted-foreground">{row[key]}</td>
                  ))}
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
