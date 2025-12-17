import { Card, CardContent } from "@/components/ui/card";
import { Database, Workflow, Brain, Users } from "lucide-react";

const pillars = [
  {
    icon: Database,
    title: "Hiring data",
    description: "All candidates, conversations and context in one place.",
  },
  {
    icon: Workflow,
    title: "Workflows",
    description: "A shared hiring process for everyone involved.",
  },
  {
    icon: Brain,
    title: "Decision intelligence",
    description: "Structure instead of gut feeling.",
  },
  {
    icon: Users,
    title: "Accountability",
    description: "Everyone knows what happens next, and who owns it.",
  },
];

export function WhatIsSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium">
            One system that connects every hiring decision.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <Card key={index} className="card-refined border-border/50 bg-card">
              <CardContent className="pt-8 pb-8 px-6 text-center">
                <div className="w-14 h-14 mx-auto mb-6 bg-primary/10 rounded-xl flex items-center justify-center">
                  <pillar.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-medium mb-3">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground">{pillar.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
