import { MarketingLayout } from "@/components/marketing/MarketingLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "299",
    description: "For small teams getting started with structured hiring.",
    features: [
      { text: "Up to 5 users", included: true },
      { text: "Core Hiring OS", included: true },
      { text: "Basic workflows", included: true },
      { text: "Email support", included: true },
      { text: "Partner portal", included: false },
      { text: "Custom integrations", included: false },
      { text: "Advanced analytics", included: false },
    ],
    cta: "Get started",
    featured: false,
  },
  {
    name: "Growth",
    price: "599",
    description: "For growing organizations with complex hiring needs.",
    features: [
      { text: "Up to 25 users", included: true },
      { text: "Core Hiring OS", included: true },
      { text: "Advanced workflows", included: true },
      { text: "Priority support", included: true },
      { text: "Partner portal", included: true },
      { text: "Custom integrations", included: false },
      { text: "Advanced analytics", included: true },
    ],
    cta: "Get started",
    featured: true,
  },
  {
    name: "Scale",
    price: "Custom",
    description: "For enterprises with custom requirements.",
    features: [
      { text: "Unlimited users", included: true },
      { text: "Core Hiring OS", included: true },
      { text: "Custom workflows", included: true },
      { text: "Dedicated success manager", included: true },
      { text: "Partner portal", included: true },
      { text: "Custom integrations", included: true },
      { text: "Advanced analytics", included: true },
    ],
    cta: "Contact sales",
    featured: false,
  },
];

const Pricing = () => {
  return (
    <MarketingLayout>
      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-medium mb-6">
              Clear pricing. No surprises.
            </h1>
            <p className="text-xl text-muted-foreground">
              Choose the plan that fits your hiring needs. Scale as you grow.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-10 md:py-20">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`card-refined relative ${
                  plan.featured 
                    ? 'border-primary shadow-card' 
                    : 'border-border/50'
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full">
                      Most popular
                    </span>
                  </div>
                )}
                <CardHeader className="pt-8 pb-4">
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-medium">
                      {plan.price === "Custom" ? "Custom" : `€${plan.price}`}
                    </span>
                    {plan.price !== "Custom" && (
                      <span className="text-muted-foreground"> / month</span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                </CardHeader>
                <CardContent className="pt-4 pb-8">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-sm">
                        {feature.included ? (
                          <Check className="h-4 w-4 text-success shrink-0" />
                        ) : (
                          <X className="h-4 w-4 text-muted-foreground/40 shrink-0" />
                        )}
                        <span className={feature.included ? "" : "text-muted-foreground/60"}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    asChild 
                    className={`w-full ${plan.featured ? 'btn-accent' : ''}`}
                    variant={plan.featured ? "default" : "outline"}
                  >
                    <Link to="/demo">{plan.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's included / not included */}
      <section className="py-20 md:py-28 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-medium text-center mb-12">
              What's included in all plans
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="card-refined">
                <CardContent className="pt-6 pb-6">
                  <h3 className="font-medium mb-4 text-success">Always included</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-success" />
                      Unlimited candidates
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-success" />
                      Unlimited job postings
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-success" />
                      Data export
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-success" />
                      GDPR compliance
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-refined">
                <CardContent className="pt-6 pb-6">
                  <h3 className="font-medium mb-4 text-muted-foreground">Not included</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <X className="h-4 w-4" />
                      Setup fees
                    </li>
                    <li className="flex items-center gap-2">
                      <X className="h-4 w-4" />
                      Hidden charges
                    </li>
                    <li className="flex items-center gap-2">
                      <X className="h-4 w-4" />
                      Long-term contracts
                    </li>
                    <li className="flex items-center gap-2">
                      <X className="h-4 w-4" />
                      Per-candidate fees
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* When sales is needed */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-medium mb-6">
              Need something custom?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              For enterprise requirements, custom integrations, or high-volume needs, 
              let's talk about a tailored solution.
            </p>
            <Button asChild size="lg" className="btn-accent">
              <Link to="/demo">Contact sales</Link>
            </Button>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
};

export default Pricing;
