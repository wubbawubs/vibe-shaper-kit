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
                <Card className="card-refined border-border/30 bg-muted/50 h-full opacity-80">
                  <CardContent className="py-6 px-6">
                    <h3 className="font-medium mb-4 text-muted-foreground/70">Traditional ATS</h3>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-muted-foreground/50">—</span>
                        <span>Stores resumes in a database</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-muted-foreground/50">—</span>
                        <span>Manual status updates</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-muted-foreground/50">—</span>
                        <span>Admin-focused data entry</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-muted-foreground/50">—</span>
                        <span>Reports you have to build</span>
                      </li>
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
                <Card className="card-refined border-accent/20 bg-accent/3 h-full">
                  <CardContent className="py-6 px-6">
                    <h3 className="font-medium mb-4 text-accent/90">OneRooted</h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-accent/70">✓</span>
                        <span>Connects all hiring data intelligently</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent/70">✓</span>
                        <span>Automated workflows and triggers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent/70">✓</span>
                        <span>Decision-focused intelligence</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent/70">✓</span>
                        <span>Insights that surface automatically</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-medium mb-4">
              See what happens when hiring has structure.
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              We'll walk you through how OneRooted brings structure to your hiring process.
            </p>
            <Button asChild size="lg" className="btn-accent">
              <Link to="/demo">Request a demo</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </MarketingLayout>
  );
};

export default Product;
