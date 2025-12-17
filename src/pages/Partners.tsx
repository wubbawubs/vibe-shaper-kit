import { MarketingLayout } from "@/components/marketing/MarketingLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Eye, Building2, Handshake, ArrowRight } from "lucide-react";

const Partners = () => {
  return (
    <MarketingLayout>
      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-medium mb-6">
              For recruitment partners
            </h1>
            <p className="text-xl text-muted-foreground">
              OneRooted makes you stronger, not obsolete. It's infrastructure, not competition.
            </p>
          </div>
        </div>
      </section>

      {/* What partners see vs what clients see */}
      <section className="py-20 md:py-28 bg-muted/50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="card-refined">
              <CardContent className="pt-8 pb-8">
                <div className="w-12 h-12 mb-6 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Handshake className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-4">What partners see</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>Dedicated pipelines per client</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>Real-time visibility on candidate progress</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>Clear feedback on submissions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>Branded experience that feels professional</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-refined">
              <CardContent className="pt-8 pb-8">
                <div className="w-12 h-12 mb-6 bg-accent/20 rounded-xl flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-medium mb-4">What clients see</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span>All candidates in one unified view</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span>Clear attribution of candidate sources</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span>Performance insights per partner</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span>No more scattered spreadsheets</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How collaboration works */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-medium text-center mb-12">
              How collaboration works
            </h2>

            <div className="space-y-8">
              {[
                { step: "1", title: "Client invites partner", desc: "Simple access granting. No complex onboarding." },
                { step: "2", title: "Partner submits candidates", desc: "Direct into the pipeline. Instant visibility." },
                { step: "3", title: "Real-time updates", desc: "Both sides see progress. No chasing required." },
                { step: "4", title: "Outcome tracking", desc: "Clear metrics on what's working. Data-driven relationships." },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-sm font-medium text-primary">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure not agency-tool */}
      <section className="py-20 md:py-28 bg-muted/50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <Eye className="h-12 w-12 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl font-medium mb-6">
              Infrastructure, not an agency tool
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              OneRooted isn't here to replace recruitment partners. We're here to make collaboration smoother, 
              more transparent, and more productive for everyone involved.
            </p>
            <p className="text-foreground">
              Better infrastructure means better outcomes for partners and clients alike.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container text-center">
          <h2 className="text-3xl font-medium mb-6">Interested in partnering?</h2>
          <Button asChild size="lg" className="btn-accent">
            <Link to="/demo">Let's talk</Link>
          </Button>
        </div>
      </section>
    </MarketingLayout>
  );
};

export default Partners;
