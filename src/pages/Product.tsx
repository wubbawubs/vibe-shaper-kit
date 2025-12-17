import { MarketingLayout } from "@/components/marketing/MarketingLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Database, Workflow, Brain, Users, ArrowRight, CheckCircle } from "lucide-react";

const Product = () => {
  return (
    <MarketingLayout>
      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-medium mb-6">
              How OneRooted works
            </h1>
            <p className="text-xl text-muted-foreground">
              A complete Hiring OS that replaces fragmented tools with one unified system.
            </p>
          </div>
        </div>
      </section>

      {/* Hiring OS Concept */}
      <section className="py-20 md:py-28 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-medium text-center mb-16">
            The Hiring OS concept
          </h2>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Database, label: "Data", desc: "All candidate information centralized" },
              { icon: Workflow, label: "Workflow", desc: "Structured hiring processes" },
              { icon: Brain, label: "Decision", desc: "Intelligence-driven insights" },
              { icon: CheckCircle, label: "Hire", desc: "Accountable outcomes" },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-xl flex items-center justify-center">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-medium mb-2">{step.label}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
                {index < 3 && (
                  <ArrowRight className="h-5 w-5 text-border mx-auto mt-4 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* End-to-end */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-medium text-center mb-12">
              End-to-end hiring management
            </h2>

            <div className="space-y-6">
              {[
                { title: "Candidate intake", desc: "All sources flow into one unified pipeline. Applications, referrals, agency candidates." },
                { title: "Collaborative evaluation", desc: "Structured feedback from everyone involved. No more scattered notes." },
                { title: "Decision tracking", desc: "Know who decided what, and why. Full audit trail." },
                { title: "Partner collaboration", desc: "External recruiters work in the same system. One view for everyone." },
              ].map((item, index) => (
                <Card key={index} className="card-refined">
                  <CardContent className="py-6 px-6">
                    <h3 className="font-medium mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it differs */}
      <section className="py-20 md:py-28 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-medium mb-8">
              How OneRooted differs from an ATS
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              An ATS is a database. OneRooted is a system that actively helps you make better hiring decisions.
            </p>

            <div className="grid md:grid-cols-2 gap-8 text-left">
              <Card className="card-refined border-border/50">
                <CardContent className="py-6 px-6">
                  <h3 className="font-medium mb-4 text-muted-foreground">Traditional ATS</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Stores resumes</li>
                    <li>• Tracks applications</li>
                    <li>• Manual status updates</li>
                    <li>• Admin-focused</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="card-refined border-primary/30 bg-primary/5">
                <CardContent className="py-6 px-6">
                  <h3 className="font-medium mb-4 text-primary">OneRooted</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Connects all hiring data</li>
                    <li>• Guides decision-making</li>
                    <li>• Automated workflows</li>
                    <li>• Decision-focused</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container text-center">
          <h2 className="text-3xl font-medium mb-6">Ready to see it in action?</h2>
          <Button asChild size="lg" className="btn-accent">
            <Link to="/demo">Request a demo</Link>
          </Button>
        </div>
      </section>
    </MarketingLayout>
  );
};

export default Product;
