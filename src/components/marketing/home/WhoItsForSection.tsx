import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Users, Handshake } from "lucide-react";

const audiences = [
  {
    icon: Building2,
    title: "Founders & leadership",
    bullets: [
      "Visibility without micromanagement",
      "Better decisions without being in every meeting",
    ],
  },
  {
    icon: Users,
    title: "Internal recruiters",
    bullets: [
      "One workflow",
      "One source of truth",
      "Less chasing, more hiring",
    ],
  },
  {
    icon: Handshake,
    title: "Partners",
    bullets: [
      "Clear pipelines per client",
      "Transparency without friction",
      "Scalable collaboration",
    ],
  },
];

export function WhoItsForSection() {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium">
            Built for everyone involved in hiring.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {audiences.map((audience, index) => (
            <Card key={index} className="card-refined border-border/50 bg-card">
              <CardContent className="pt-8 pb-8 px-6">
                <div className="w-12 h-12 mb-6 bg-accent/20 rounded-xl flex items-center justify-center">
                  <audience.icon className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-medium mb-4">{audience.title}</h3>
                <ul className="space-y-2">
                  {audience.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="ghost" className="text-muted-foreground hover:text-foreground">
            <Link to="/product" className="flex items-center gap-2">
              See how this works <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
