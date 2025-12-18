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
import { Check, Minus, Users, Sparkles } from "lucide-react";

const Product = () => {
  return (
    <MarketingLayout>
      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-accent font-medium mb-4">How it works</p>
              <h1 className="text-4xl md:text-5xl font-medium mb-6">
                A hiring system that adapts to how teams actually work
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Candidates move forward. Signals surface automatically.<br />
                You see what matters, without chasing updates.
              </p>
              <Button asChild size="lg" className="btn-accent">
                <Link to="/demo">See it in action</Link>
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ProductHeroAnimation />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ranking System */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-accent font-medium mb-4">Intelligent Ranking</p>
              <h2 className="text-3xl md:text-4xl font-medium mb-4">
                Every candidate scored. Every decision informed.
              </h2>
              <p className="text-lg text-muted-foreground">
                Every candidate is evaluated consistently across the same criteria, 
                so decisions are based on structure instead of instinct.
              </p>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <RankingSystemVisualization />
          </motion.div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-accent font-medium mb-4">Visual Pipeline</p>
              <h2 className="text-3xl md:text-4xl font-medium mb-4">
                See exactly where every hire stands
              </h2>
              <p className="text-lg text-muted-foreground">
                From first application to signed offer, every step is visible.<br />
                Bottlenecks surface before they slow you down.
              </p>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ProcessFlowAnimation />
          </motion.div>
        </div>
      </section>

      {/* Intelligence Layer */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-accent font-medium mb-4">Process Intelligence</p>
              <h2 className="text-3xl md:text-4xl font-medium mb-4">
                Metrics that tell you where to act
              </h2>
              <p className="text-lg text-muted-foreground">
                Real-time insight into the health of your hiring process, 
                so you know where to focus before issues become blockers.
              </p>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <MetricsDashboardAnimation />
          </motion.div>
        </div>
      </section>

      {/* Collaboration */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-accent font-medium mb-4">Unified Collaboration</p>
              <h2 className="text-3xl md:text-4xl font-medium mb-4">
                Everyone in the same system
              </h2>
              <p className="text-lg text-muted-foreground">
                Recruiters, hiring managers and partners work from the same source of truth.<br />
                No version conflicts. No lost feedback.
              </p>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <CollaborationAnimation />
          </motion.div>
        </div>
      </section>

      {/* ATS Comparison */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-medium mb-4">
                This isn't another ATS
              </h2>
              <p className="text-lg text-muted-foreground">
                An ATS stores resumes. OneRooted runs your hiring process.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card className="card-refined border-border/30 bg-muted/30 h-full opacity-70">
                  <CardContent className="py-6 px-6">
                    <h3 className="font-medium mb-5 text-muted-foreground/70">Traditional ATS</h3>
                    <ul className="space-y-4 text-sm text-muted-foreground">
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
                          <Minus className="w-4 h-4 text-muted-foreground/40 mt-0.5 flex-shrink-0" />
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
                <Card className="card-refined h-full relative overflow-hidden border-accent/30 bg-gradient-to-br from-accent/5 via-background to-primary/5">
                  {/* Premium shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent -translate-x-full animate-[shimmer_3s_ease-in-out_infinite]" />
                  
                  <CardContent className="py-6 px-6 relative">
                    <div className="flex items-center gap-2 mb-5">
                      <Sparkles className="w-4 h-4 text-accent" />
                      <h3 className="font-medium text-accent">OneRooted</h3>
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
                            className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5"
                          >
                            <Check className="w-3 h-3 text-accent" />
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
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
        </div>
        
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-muted/50 border border-border/50 rounded-full px-4 py-2 mb-6"
            >
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Trusted by 100+ hiring teams</span>
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-medium mb-4">
              See what happens when hiring has structure.
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              We'll walk you through how OneRooted brings structure to your hiring process.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="btn-accent btn-premium">
                <Link to="/demo">Request a demo</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
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
