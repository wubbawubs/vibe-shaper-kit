import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function FinalCTASection() {
  return (
    <section className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-medium">
            See your hiring process the way it actually works.
          </h2>

          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link to="/demo">Request a demo</Link>
          </Button>

          <p className="text-sm text-primary-foreground/70">
            No sales theatrics. Just clarity.
          </p>
        </div>
      </div>
    </section>
  );
}
