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
      "Full visibility without micromanagement",
      "Hiring decisions grounded in real, shared data",
    ],
  },
  {
    icon: Users,
    title: "Talent Teams",
    subtitle: "Recruiters & Hiring Managers",
    points: [
      "One shared workflow from intake to hire",
      "Less admin. More focus on hiring decisions.",
    ],
  },
  {
    icon: Handshake,
    title: "Partners",
    subtitle: "Agencies & RPO",
    points: [
      "A clear, shared hiring process per client",
      "Full transparency without endless back-and-forth",
    ],
  },
];

export function WhoItsForSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30 relative">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-accent/5 to-transparent rounded-full blur-3xl" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-primary mb-4 tracking-wide uppercase">Who it's for</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
            Hiring breaks without a shared system
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            OneRooted replaces fragmented tools with a single operational truth for everyone involved.
          </p>
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
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <audience.icon className="h-7 w-7 text-primary" />
                </div>

                <h3 className="text-2xl font-semibold mb-1">{audience.title}</h3>
                <p className="text-sm text-muted-foreground mb-6">{audience.subtitle}</p>

                <ul className="space-y-3">
                  {audience.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 mt-2.5 shrink-0" />
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
          <Button asChild size="lg" className="h-14 px-8 text-base bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25">
            <Link to="/product" className="flex items-center gap-2">
              See the system in action
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
