import { motion } from "framer-motion";
import { User, Target, AlertCircle, CheckCircle2, BarChart3 } from "lucide-react";

interface KPI {
  metric: string;
  description: string;
  howWeHelp: string;
}

interface SEORoleStakeholderProps {
  headline: string;
  roleName: string;
  painPoints: string[];
  kpis?: KPI[];
  buyingObjections?: { objection: string; response: string }[];
  valueProps?: string[];
}

export function SEORoleStakeholder({
  headline,
  roleName,
  painPoints,
  kpis = [],
  buyingObjections = [],
  valueProps = [],
}: SEORoleStakeholderProps) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-wide mb-4">
            <User className="h-4 w-4" />
            Voor {roleName}
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            {headline}
          </h2>
        </motion.div>

        {/* Pain Points */}
        {painPoints.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-amber-500" />
              Herkenbare frustraties
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {painPoints.map((pain, index) => (
                <div
                  key={index}
                  className="p-4 bg-card rounded-lg border border-border"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center">
                      <AlertCircle className="h-4 w-4 text-amber-500" />
                    </div>
                    <p className="text-foreground text-sm">{pain}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* KPIs */}
        {kpis.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              KPI's die voor jou tellen
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {kpis.map((kpi, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl border border-border p-6"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Target className="h-5 w-5 text-primary" />
                    <h4 className="font-semibold text-foreground">{kpi.metric}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    {kpi.description}
                  </p>
                  <div className="pt-3 border-t border-border">
                    <p className="text-sm">
                      <span className="text-primary font-medium">OneRooted:</span>{" "}
                      <span className="text-muted-foreground">{kpi.howWeHelp}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Buying Objections */}
        {buyingObjections.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Veelgehoorde bezwaren — en onze antwoorden
            </h3>
            <div className="space-y-4">
              {buyingObjections.map((item, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg border border-border overflow-hidden"
                >
                  <div className="p-4 bg-muted/50 border-b border-border">
                    <p className="font-medium text-foreground flex items-center gap-2">
                      <span className="text-amber-500">"</span>
                      {item.objection}
                      <span className="text-amber-500">"</span>
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="text-muted-foreground text-sm flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {item.response}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Value Props */}
        {valueProps.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary/5 rounded-2xl border border-primary/20 p-8"
          >
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
              Wat OneRooted betekent voor {roleName.toLowerCase()}
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {valueProps.map((prop, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{prop}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
