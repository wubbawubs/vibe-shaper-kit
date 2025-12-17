import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const plans = [
  {
    name: "Base",
    price: "250",
    description: "Essential recruitment support",
    features: ["OneRooted system", "Up-to-date talent pool", "Access to E-Academy"],
  },
  {
    name: "Plus",
    price: "350",
    description: "Move faster, hire smarter",
    features: ["Everything in Base", "Retention search", "Proactive sourcing"],
    featured: true,
  },
  {
    name: "Premium",
    price: "500",
    description: "Hiring fully organized",
    features: ["Everything in Plus", "Candidate interviews", "Scheduling & coordination"],
  },
];

export function PricingPreviewSection() {
  return (
    <section className="py-28 md:py-40 bg-muted/30 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-accent mb-4">Pricing</p>
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
            Clear pricing. No surprises.
          </h2>
          <p className="text-muted-foreground text-lg">
            Start small, scale when ready.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                plan.featured 
                  ? 'bg-primary text-primary-foreground shadow-2xl shadow-primary/20 scale-105' 
                  : 'bg-card border border-border/50'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground text-xs font-medium px-3 py-1 rounded-full">
                    Most popular
                  </span>
                </div>
              )}

              <h3 className={`text-lg font-semibold mb-1 ${plan.featured ? 'text-accent' : ''}`}>{plan.name}</h3>
              <p className={`text-sm mb-4 ${plan.featured ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                {plan.description}
              </p>

              <div className="mb-6">
                <span className={`text-4xl font-semibold ${plan.featured ? 'text-accent' : ''}`}>
                  {plan.price === "Custom" ? "Custom" : `€${plan.price}`}
                </span>
                {plan.price !== "Custom" && (
                  <span className={`text-sm ${plan.featured ? 'text-accent/70' : 'text-muted-foreground'}`}> /mo</span>
                )}
              </div>

              <ul className="space-y-2">
                {plan.features.map((feature, fi) => (
                  <li key={fi} className="flex items-center gap-2 text-sm">
                    <Check className={`h-4 w-4 ${plan.featured ? 'text-accent' : 'text-success'}`} />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Button asChild variant="outline" size="lg" className="h-12 px-6 border-border/50 hover:border-primary/50">
            <Link to="/pricing" className="flex items-center gap-2">
              View full pricing
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
