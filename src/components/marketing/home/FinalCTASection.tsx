import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Users } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="py-24 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Trust badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-muted/50 border border-border/50 rounded-full px-4 py-2 mb-8"
          >
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Join teams already hiring smarter</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
            Hiring works better when you can see it clearly.
          </h2>

          <p className="text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
            That's what the OneRooted demo is for.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              asChild 
              size="lg" 
              className="h-14 px-10 text-base btn-accent btn-premium"
            >
              <Link to="/demo" className="flex items-center gap-2">
                Request a demo
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 px-8">
              <Link to="/pricing">View pricing</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
