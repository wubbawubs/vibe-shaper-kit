import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "299",
    description: "For small teams getting started",
    features: ["Up to 5 users", "Core Hiring OS", "Email support"],
  },
  {
    name: "Growth",
    price: "599",
    description: "For growing organizations",
    features: ["Up to 25 users", "Advanced workflows", "Priority support"],
    featured: true,
  },
  {
    name: "Scale",
    price: "Custom",
    description: "For enterprises with complex needs",
    features: ["Unlimited users", "Custom integrations", "Dedicated success manager"],
  },
];

export function PricingPreviewSection() {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">
            Clear pricing. No surprises.
          </h2>
          <p className="text-muted-foreground">
            Choose the plan that fits your hiring needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`card-refined ${plan.featured ? 'border-primary/50 bg-card shadow-card' : 'border-border/50 bg-card'}`}
            >
              <CardContent className="pt-8 pb-8 px-6">
                <h3 className="text-lg font-medium mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-medium">
                    {plan.price === "Custom" ? "Custom" : `€${plan.price}`}
                  </span>
                  {plan.price !== "Custom" && (
                    <span className="text-muted-foreground text-sm"> / month</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm flex items-center gap-2">
                      <Check className="h-4 w-4 text-success" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="ghost" className="text-muted-foreground hover:text-foreground">
            <Link to="/pricing" className="flex items-center gap-2">
              View full pricing <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
