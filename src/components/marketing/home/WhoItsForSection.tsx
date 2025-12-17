import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Users, Handshake } from "lucide-react";

const audiences = [
  {
    icon: Building2,
    title: "Leadership",
    subtitle: "Founders & Executives",
    points: [
      "Full visibility without getting involved in every hire",
      "Confident hiring decisions, backed by real data",
    ],
  },
  {
    icon: Users,
    title: "Talent Teams",
    subtitle: "Recruiters & Hiring Managers",
    points: [
      "One shared workflow from intake to hire",
      "Less admin work, more focus on hiring quality",
    ],
  },
  {
    icon: Handshake,
    title: "Partners",
    subtitle: "Agencies & RPO",
    points: [
      "A clear, shared hiring process per client",
      "Transparency without endless back-and-forth",
    ],
  },
];

export function WhoItsForSection() {
  return (
    <section className="py-28 md:py-40 bg-muted/30 relative">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-accent/5 to-transparent rounded-full blur-3xl" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-sm uppercase tracking-widest text-accent mb-4">Who it's for</p>
          <h2 className="text-4xl md:text-5xl font-semibold">
            One shared system for everyone involved in hiring
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative p-8 md:p-10">
                <div className="w-16 h-16 rounded-2xl bg-background border border-border/50 flex items-center justify-center mb-6 shadow-sm">
                  <audience.icon className="h-8 w-8 text-primary" />
                </div>

                <h3 className="text-2xl font-semibold mb-1">{audience.title}</h3>
                <p className="text-sm text-muted-foreground mb-6">{audience.subtitle}</p>

                <ul className="space-y-3">
                  {audience.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
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
            <Link to="/product" className="flex items-center gap-2">
              See how this works in practice
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
