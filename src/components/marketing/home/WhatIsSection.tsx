import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Database, Workflow, Brain, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";

export function WhatIsSection() {
  const { t } = useTranslation();

  const pillars = [
    {
      icon: Database,
      titleKey: "whatIs.pillars.data.title",
      descriptionKey: "whatIs.pillars.data.description",
      gradient: "from-primary/20 to-primary/5",
    },
    {
      icon: Workflow,
      titleKey: "whatIs.pillars.workflows.title",
      descriptionKey: "whatIs.pillars.workflows.description",
      gradient: "from-accent/20 to-accent/5",
    },
    {
      icon: Brain,
      titleKey: "whatIs.pillars.intelligence.title",
      descriptionKey: "whatIs.pillars.intelligence.description",
      gradient: "from-success/20 to-success/5",
    },
    {
      icon: Shield,
      titleKey: "whatIs.pillars.accountability.title",
      descriptionKey: "whatIs.pillars.accountability.description",
      gradient: "from-primary/20 to-primary/5",
    },
  ];

  return (
    <section className="py-16 md:py-24 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-label mb-4 tracking-wide uppercase">
            {t("whatIs.label")}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold max-w-3xl mx-auto leading-tight">
            {t("whatIs.headline")}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className={`relative h-full p-8 border-0 bg-gradient-to-b ${pillar.gradient} backdrop-blur-sm overflow-hidden group hover:shadow-xl transition-all duration-500`}>
                {/* Icon */}
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-background/80 backdrop-blur flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 delay-75">
                    <pillar.icon className="h-7 w-7 text-foreground" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">{t(pillar.titleKey)}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t(pillar.descriptionKey)}</p>
                </div>

                {/* Decorative element */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br from-background/50 to-transparent blur-2xl group-hover:scale-150 transition-transform duration-500" aria-hidden="true" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
