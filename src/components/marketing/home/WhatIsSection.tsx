import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Database, Workflow, Brain, Shield } from "lucide-react";

const pillars = [
  {
    icon: Database,
    title: "Hiring Data",
    description: "All candidates, conversations and context unified in one intelligent system.",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: Workflow,
    title: "Workflows",
    description: "Adaptive processes that flex with your team, not against it.",
    gradient: "from-accent/20 to-accent/5",
  },
  {
    icon: Brain,
    title: "Decision Intelligence",
    description: "Structured insights that replace gut feelings with confidence.",
    gradient: "from-success/20 to-success/5",
  },
  {
    icon: Shield,
    title: "Accountability",
    description: "Everyone knows what happens next—and who owns it.",
    gradient: "from-primary/20 to-primary/5",
  },
];

export function WhatIsSection() {
  return (
    <section className="py-28 md:py-40 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-sm uppercase tracking-widest text-accent mb-4">The Hiring OS</p>
          <h2 className="text-4xl md:text-5xl font-semibold max-w-3xl mx-auto leading-tight">
            One system that connects every hiring decision
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
                  <div className="w-14 h-14 rounded-2xl bg-background/80 backdrop-blur flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <pillar.icon className="h-7 w-7 text-foreground" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">{pillar.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
                </div>

                {/* Decorative element */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br from-background/50 to-transparent blur-2xl group-hover:scale-150 transition-transform duration-500" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
