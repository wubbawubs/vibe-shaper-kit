import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useTranslation } from "react-i18next";
import { getLocalizedPath } from "@/i18n/useLanguage";
import { type Language } from "@/i18n/config";

export function PricingPreviewSection() {
  const { t } = useTranslation();
  const { lang } = useParams<{ lang: string }>();

  const getLocalizedHref = (href: string) => {
    return getLocalizedPath(href, (lang as Language) || "en");
  };

  const plans = [
    {
      nameKey: "pricing.plans.base.name",
      price: "299",
      descriptionKey: "pricing.plans.base.description",
      featuresKey: "pricing.plans.base.features",
    },
    {
      nameKey: "pricing.plans.plus.name",
      price: "399",
      descriptionKey: "pricing.plans.plus.description",
      featuresKey: "pricing.plans.plus.features",
      featured: true,
    },
    {
      nameKey: "pricing.plans.premium.name",
      price: "599",
      descriptionKey: "pricing.plans.premium.description",
      featuresKey: "pricing.plans.premium.features",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-label mb-4">
            {t("pricing.label")}
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
            {t("pricing.headline")}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t("pricing.subheadline")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {plans.map((plan, index) => {
            const features = t(plan.featuresKey, { returnObjects: true }) as string[];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative rounded-2xl p-8 ${
                  plan.featured 
                    ? 'bg-primary text-primary-foreground shadow-2xl shadow-primary/20 md:scale-[1.02]' 
                    : 'bg-card border border-border/50'
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-accent text-accent-foreground text-xs font-medium px-3 py-1 rounded-full">
                      {t("pricing.mostPopular")}
                    </span>
                  </div>
                )}

                <h3 className={`text-lg font-semibold mb-1 ${plan.featured ? 'text-accent' : ''}`}>
                  {t(plan.nameKey)}
                </h3>
                <p className={`text-sm mb-4 ${plan.featured ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                  {t(plan.descriptionKey)}
                </p>

                <div className="mb-6">
                  <span className={`text-4xl font-semibold ${plan.featured ? 'text-accent' : ''}`}>
                    €{plan.price}
                  </span>
                  <span className={`text-sm ${plan.featured ? 'text-accent/70' : 'text-muted-foreground'}`}>
                    {t("pricing.perMonth")}
                  </span>
                </div>

                <ul className="space-y-2">
                  {features.map((feature, fi) => (
                    <li key={fi} className="flex items-center gap-2 text-sm">
                      <Check className={`h-4 w-4 ${plan.featured ? 'text-accent' : 'text-success'}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Button asChild variant="outline" size="lg" className="h-12 px-6 border-border/50 hover:border-primary/50">
            <Link to={getLocalizedHref("/pricing")} className="flex items-center gap-2">
              {t("pricing.cta")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
