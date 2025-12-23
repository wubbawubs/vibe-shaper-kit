import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { useTranslation } from "react-i18next";

interface ComparisonTableProps {
  headers: string[];
  rows: Array<{
    label: string;
    light: string;
    agency: string;
    jobboard: string;
  }>;
}

const renderCell = (value: string, isLight: boolean) => {
  const hasCheck = value.startsWith("✓");
  const hasCross = value.startsWith("✗");
  const text = value.replace(/^[✓✗]\s*/, "");

  if (hasCheck) {
    return (
      <div className="flex items-center gap-2">
        <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
          isLight ? "bg-success/20" : "bg-success/10"
        }`}>
          <Check className={`h-3 w-3 ${isLight ? "text-success" : "text-success/70"}`} />
        </div>
        <span>{text}</span>
      </div>
    );
  }

  if (hasCross) {
    return (
      <div className="flex items-center gap-2">
        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-destructive/10 flex items-center justify-center">
          <X className="h-3 w-3 text-destructive/70" />
        </div>
        <span>{text}</span>
      </div>
    );
  }

  return <span>{value}</span>;
};

export const ComparisonTable = ({ headers, rows }: ComparisonTableProps) => {
  return (
    <motion.div
      className="overflow-x-auto rounded-xl border border-border/50 bg-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <table className="w-full">
        <thead>
          <tr className="border-b border-border/50">
            {headers.map((header, index) => (
              <th
                key={index}
                className={`p-4 text-left font-semibold ${
                  index === 1
                    ? "bg-gradient-to-b from-primary/10 to-primary/5 text-primary"
                    : "text-foreground"
                } ${index === 0 ? "w-1/4" : ""}`}
              >
                {index === 1 && (
                  <div className="flex items-center gap-2">
                    <span className="relative">
                      {header}
                      <motion.span
                        className="absolute -top-1 -right-8 text-xs bg-accent text-accent-foreground px-1.5 py-0.5 rounded-full"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, type: "spring" }}
                      >
                        Best
                      </motion.span>
                    </span>
                  </div>
                )}
                {index !== 1 && header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <motion.tr
              key={rowIndex}
              className="border-b border-border/30 last:border-b-0"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: rowIndex * 0.05 }}
            >
              <td className="p-4 font-medium text-foreground">{row.label}</td>
              <td className="p-4 bg-primary/5 font-semibold text-primary">
                {renderCell(row.light, true)}
              </td>
              <td className="p-4 text-muted-foreground">
                {renderCell(row.agency, false)}
              </td>
              <td className="p-4 text-muted-foreground">
                {renderCell(row.jobboard, false)}
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
};
