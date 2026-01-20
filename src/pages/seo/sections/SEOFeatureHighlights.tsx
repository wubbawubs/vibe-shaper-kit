import { motion } from "framer-motion";
import { 
  BarChart3, 
  Users, 
  Zap, 
  Target, 
  GitBranch, 
  Shield,
  type LucideIcon 
} from "lucide-react";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface SEOFeatureHighlightsProps {
  headline: string;
  subheadline?: string;
  features: Feature[];
}

const iconMap: Record<string, LucideIcon> = {
  ranking: Target,
  automation: Zap,
  analytics: BarChart3,
  collaboration: Users,
  pipeline: GitBranch,
  security: Shield,
};

export function SEOFeatureHighlights({
  headline,
  subheadline,
  features,
}: SEOFeatureHighlightsProps) {
  return (
    <section className="relative bg-background py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-medium uppercase tracking-wider text-primary">
              Features
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {headline}
            </h2>
            {subheadline && (
              <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>
            )}
          </motion.div>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Zap;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-xl border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
