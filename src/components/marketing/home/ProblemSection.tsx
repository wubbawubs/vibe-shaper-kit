import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export function ProblemSection() {
  const { t } = useTranslation();

  const tools = [
    { key: "ats", name: t("problem.tools.ats.name"), description: t("problem.tools.ats.description") },
    { key: "slack", name: t("problem.tools.slack.name"), description: t("problem.tools.slack.description") },
    { key: "excel", name: t("problem.tools.excel.name"), description: t("problem.tools.excel.description") },
  ];

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
            {t("problem.headline")}
          </h2>
          <p className="text-2xl md:text-3xl lg:text-4xl font-normal text-background/60 mb-12">
            {t("problem.subheadline")}
          </p>

          {/* Tool cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {tools.map((item, i) => (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 border border-background/10 rounded-xl hover:bg-background/5 transition-colors duration-300"
              >
                <p className="text-lg font-medium mb-2">{item.name}</p>
                <p className="text-background/50 text-sm">{item.description}</p>
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
            {t("problem.consequence")}
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
              {t("problem.realization")}
              <br />
              <span className="text-accent">{t("problem.realizationHighlight")}</span>
            </p>

            <p className="text-base md:text-lg text-background/40 font-medium">
              {t("problem.solution")} <span className="text-accent">OneRooted.</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
