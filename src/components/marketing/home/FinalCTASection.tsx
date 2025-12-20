import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
            Hiring works better when you can see it clearly
          </h2>

          <p className="text-lg text-muted-foreground mb-8">
            That's what the OneRooted demo is for.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="h-14 px-8 text-base bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25">
              <Link to="/demo" className="flex items-center gap-2">
                Request a demo
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 px-8 text-base">
              <Link to="/pricing">View pricing</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
