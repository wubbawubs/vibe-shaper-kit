import { MarketingLayout } from "@/components/marketing/MarketingLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ProductHeroAnimation } from "@/components/marketing/product/ProductHeroAnimation";
import { RankingSystemVisualization } from "@/components/marketing/product/RankingSystemVisualization";
import { ProcessFlowAnimation } from "@/components/marketing/product/ProcessFlowAnimation";
import { MetricsDashboardAnimation } from "@/components/marketing/product/MetricsDashboardAnimation";
import { CollaborationAnimation } from "@/components/marketing/product/CollaborationAnimation";
import { Check, Minus, Sparkles, ArrowRight, Zap, Eye, BarChart3, Users2 } from "lucide-react";
import { SEO } from "@/components/SEO";

const Product = () => {
  return (
    <MarketingLayout>
      <SEO 
        title="Product Features | How OneRooted Works"
        description="Discover OneRooted's intelligent candidate ranking, visual hiring pipeline, and real-time collaboration tools. See how our Hiring OS transforms recruitment."
        url="https://onerooted.com/product"
      />
      {/* Hero */}
      <section className="py-12 md:py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.p 
                className="text-xs md:text-sm font-medium text-primary mb-3 md:mb-4 tracking-wide uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                How it works
              </motion.p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 md:mb-6 tracking-tight leading-[1.1]">
                This is what a{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">hiring OS</span> looks like
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-6 md:mb-8 max-w-xl">
                Candidates move forward. Signals surface automatically. You see what matters — without chasing updates.
              </p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3"
              >
                <Button asChild size="lg" className="h-12 md:h-14 px-6 md:px-8 text-base bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25">
                  <Link to="/demo">
                    See it in action
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="ghost" size="lg" className="h-12 md:h-14 px-6 md:px-8 text-base text-muted-foreground hover:text-foreground">
                  <Link to="/pricing">
                    View pricing
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden md:block"
            >
              <ProductHeroAnimation />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ranking System */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm font-medium text-primary tracking-wide uppercase">Intelligent Ranking</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                Every candidate scored. Every decision informed.
              </h2>
              <p className="text-lg text-muted-foreground">
                Consistent evaluation across the same criteria. Decisions based on structure, not gut feeling.
              </p>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <RankingSystemVisualization />
          </motion.div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Eye className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm font-medium text-primary tracking-wide uppercase">Visual Pipeline</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                See exactly where every hire stands
              </h2>
              <p className="text-lg text-muted-foreground">
                From first application to signed offer — every step visible. Bottlenecks surface before they slow you down.
              </p>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ProcessFlowAnimation />
          </motion.div>
        </div>
      </section>

      {/* Intelligence Layer */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <BarChart3 className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm font-medium text-primary tracking-wide uppercase">Process Intelligence</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                Metrics that tell you where to act
              </h2>
              <p className="text-lg text-muted-foreground">
                Real-time insight into hiring health. Know where to focus before issues become blockers.
              </p>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <MetricsDashboardAnimation />
          </motion.div>
        </div>
      </section>

      {/* Collaboration */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Users2 className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm font-medium text-primary tracking-wide uppercase">Unified Collaboration</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                Everyone in the same system
              </h2>
              <p className="text-lg text-muted-foreground">
                Recruiters, hiring managers, and partners work from the same source of truth. No version conflicts. No lost feedback.
              </p>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <CollaborationAnimation />
          </motion.div>
        </div>
      </section>

      {/* ATS Comparison */}
      <section className="py-16 md:py-24 bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-sm font-medium text-background/60 mb-4 tracking-wide uppercase">The difference</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
              This isn't another ATS
            </h2>
            <p className="text-lg text-background/60 max-w-xl mx-auto">
              An ATS stores resumes. OneRooted runs your hiring process.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full border-background/10 bg-background/5 backdrop-blur-sm">
                <CardContent className="py-8 px-6">
                  <h3 className="font-semibold mb-6 text-background/50">Traditional ATS</h3>
                  <ul className="space-y-4 text-sm text-background/60">
                    {[
                      "Stores resumes in a database",
                      "Manual status updates",
                      "Admin-focused data entry",
                      "Reports you have to build"
                    ].map((item, i) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <Minus className="w-4 h-4 text-background/30 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full relative overflow-hidden border-primary/30 bg-background">
                <CardContent className="py-8 px-6 relative">
                  <div className="flex items-center gap-2 mb-6">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-primary">OneRooted</h3>
                  </div>
                  <ul className="space-y-4 text-sm">
                    {[
                      "Connects all hiring data intelligently",
                      "Automated workflows and triggers",
                      "Decision-focused intelligence",
                      "Insights that surface automatically"
                    ].map((item, i) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.12 }}
                        className="flex items-start gap-3"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + i * 0.12, type: "spring", stiffness: 300 }}
                          className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5"
                        >
                          <Check className="w-3 h-3 text-primary" />
                        </motion.div>
                        <span className="text-foreground">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              See what happens when hiring has structure
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We'll walk you through how OneRooted brings clarity to your hiring process.
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
    </MarketingLayout>
  );
};

export default Product;
