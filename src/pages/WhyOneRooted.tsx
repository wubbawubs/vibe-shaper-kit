import { MarketingLayout } from "@/components/marketing/MarketingLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Lightbulb, Target, ArrowRight } from "lucide-react";

const WhyOneRooted = () => {
  return (
    <MarketingLayout>
      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-medium mb-6">
              Why OneRooted
            </h1>
            <p className="text-xl text-muted-foreground">
              The story behind building a Hiring OS.
            </p>
          </div>
        </div>
      </section>

      {/* Why ATS fail */}
      <section className="py-20 md:py-28 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-warning/20 rounded-xl flex items-center justify-center">
                <AlertTriangle className="h-6 w-6 text-warning" />
              </div>
              <h2 className="text-3xl font-medium">Why traditional ATS systems fail</h2>
            </div>

            <div className="space-y-6">
              {[
                { title: "They're built for storage, not decisions", desc: "Most ATS platforms are glorified databases. They track where candidates are, not why they should move forward." },
                { title: "They fragment the process", desc: "Feedback in Slack. Decisions in email. Status in spreadsheets. The ATS becomes just another silo." },
                { title: "They ignore collaboration", desc: "Modern hiring involves founders, hiring managers, team members, and external partners. ATS systems weren't built for this." },
                { title: "They optimize for recruiters, not outcomes", desc: "Admin efficiency is good. But what about decision quality? What about time-to-hire? What about candidate experience?" },
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

      {/* Why Hiring OS is needed */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-medium">Why a Hiring OS is needed</h2>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                Hiring is no longer a linear process managed by one recruiter. It's a complex operation 
                involving multiple stakeholders, external partners, and critical business decisions.
              </p>
              <p>
                You need a system that understands this complexity. One that connects data, enables collaboration, 
                and actively helps you make better decisions.
              </p>
              <p>
                That's what a Hiring OS does. It's not a feature upgrade to an ATS. It's a fundamental rethink 
                of how hiring software should work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How OneRooted was born */}
      <section className="py-20 md:py-28 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                <Target className="h-6 w-6 text-accent-foreground" />
              </div>
              <h2 className="text-3xl font-medium">How OneRooted was born</h2>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                OneRooted started from frustration. We worked with organizations struggling to hire effectively, 
                despite having "all the tools." The problem wasn't a lack of software—it was a lack of system.
              </p>
              <p>
                We built OneRooted to be the operating system for hiring. One place where everyone involved 
                can collaborate, where decisions are tracked, and where hiring actually gets better over time.
              </p>
              <p>
                Not another tool to learn. A system that works the way modern hiring actually happens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Where we're going */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-medium mb-8">Where we're going</h2>

            <div className="space-y-4">
              {[
                "Deeper decision intelligence",
                "Seamless partner ecosystems",
                "Predictive hiring insights",
                "Global team collaboration",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 py-4 border-b border-border last:border-0">
                  <ArrowRight className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-medium mb-6">
            Ready to rethink how you hire?
          </h2>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link to="/demo">Request a demo</Link>
          </Button>
        </div>
      </section>
    </MarketingLayout>
  );
};

export default WhyOneRooted;
