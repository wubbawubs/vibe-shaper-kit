import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Workflow, Brain, CheckCircle } from "lucide-react";

export function HeroSection() {
  return (
    <section className="py-20 md:py-32 lg:py-40">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Copy */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
              OneRooted is the Hiring OS for teams that take hiring seriously.
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
              Replace your ATS and fragmented tools with one system for hiring decisions.
            </p>

            {/* Pain bullets */}
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                <span>Candidates scattered across tools</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                <span>Hiring decisions without real insight</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                <span>Recruiters, founders and partners misaligned</span>
              </li>
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
              <Button asChild size="lg" className="btn-accent">
                <Link to="/demo">Request a demo</Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="text-muted-foreground hover:text-foreground">
                <Link to="/pricing" className="flex items-center gap-2">
                  View pricing <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right - Abstract Visual */}
          <div className="relative">
            <div className="aspect-square max-w-lg mx-auto">
              {/* Abstract hiring flow visualization */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl" />
              
              {/* Conceptual nodes */}
              <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-primary/10 rounded-xl flex items-center justify-center">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-accent/20 rounded-xl flex items-center justify-center">
                <Workflow className="h-8 w-8 text-accent-foreground" />
              </div>
              <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-success/10 rounded-xl flex items-center justify-center">
                <Brain className="h-8 w-8 text-success" />
              </div>
              <div className="absolute bottom-1/3 right-1/3 w-20 h-20 bg-primary/15 rounded-xl flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>

              {/* Connection lines (decorative) */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                <path
                  d="M100 100 L200 200 L300 150 L250 300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-border"
                  strokeDasharray="4 4"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
