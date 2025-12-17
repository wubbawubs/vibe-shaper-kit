import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="py-32 md:py-48 bg-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-background/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center text-primary-foreground"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-8">
            Hiring works better when you can see it clearly.
          </h2>

          <p className="text-xl text-primary-foreground/70 mb-12 max-w-xl mx-auto">
            That's what the OneRooted demo is for.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              asChild 
              size="lg" 
              className="h-14 px-10 text-base bg-accent text-accent-foreground hover:bg-accent/90 shadow-xl shadow-accent/25"
            >
              <Link to="/demo" className="flex items-center gap-2">
                Request a demo
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
