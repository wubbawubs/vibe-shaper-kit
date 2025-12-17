import { MarketingLayout } from "@/components/marketing/MarketingLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Handshake, RefreshCw } from "lucide-react";

const useCases = [
  {
    icon: TrendingUp,
    title: "Scaling a team fast",
    problem: "You need to hire 10+ people in 3 months. Coordination is chaos.",
    solution: "OneRooted gives everyone visibility into the pipeline, automates handoffs, and keeps momentum.",
    outcomes: ["Faster time-to-hire", "Less coordination overhead", "Clear progress tracking"],
  },
  {
    icon: Users,
    title: "Hiring with multiple stakeholders",
    problem: "Founders, hiring managers, and team leads all need input. Nothing gets done.",
    solution: "Structured feedback loops and decision workflows that actually work.",
    outcomes: ["Aligned decisions", "No bottlenecks", "Everyone stays informed"],
  },
  {
    icon: Handshake,
    title: "Working with recruitment partners",
    problem: "Agency candidates get lost. Communication breaks down. Blame games start.",
    solution: "Partners work in the same system. Full transparency. One source of truth.",
    outcomes: ["Better partner relationships", "Clear accountability", "Faster collaboration"],
  },
  {
    icon: RefreshCw,
    title: "Replacing an existing ATS without chaos",
    problem: "Migration feels impossible. Data everywhere. Team resistance.",
    solution: "Clean migration path. Gradual onboarding. Real support.",
    outcomes: ["Smooth transition", "No data loss", "Team adoption"],
  },
];

const UseCases = () => {
  return (
    <MarketingLayout>
      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-medium mb-6">
              Use cases
            </h1>
            <p className="text-xl text-muted-foreground">
              Real scenarios where OneRooted makes the difference.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-10 md:py-20">
        <div className="container">
          <div className="space-y-12 max-w-4xl mx-auto">
            {useCases.map((useCase, index) => (
              <Card key={index} className="card-refined overflow-hidden">
                <CardHeader className="bg-muted/50 pb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <useCase.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{useCase.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-2">The problem</h4>
                      <p className="text-foreground">{useCase.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-2">How OneRooted helps</h4>
                      <p className="text-foreground">{useCase.solution}</p>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-border">
                    <h4 className="text-sm font-medium text-muted-foreground mb-3">Key outcomes</h4>
                    <div className="flex flex-wrap gap-2">
                      {useCase.outcomes.map((outcome, outcomeIndex) => (
                        <span key={outcomeIndex} className="text-sm bg-success/10 text-success px-3 py-1 rounded-full">
                          {outcome}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-muted/50">
        <div className="container text-center">
          <h2 className="text-3xl font-medium mb-6">See how it works for your team</h2>
          <Button asChild size="lg" className="btn-accent">
            <Link to="/demo">Request a demo</Link>
          </Button>
        </div>
      </section>
    </MarketingLayout>
  );
};

export default UseCases;
