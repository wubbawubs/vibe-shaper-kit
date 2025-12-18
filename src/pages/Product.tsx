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
                A system that actually works with you
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Watch how candidates flow through your pipeline while intelligence 
                surfaces what matters. No more chasing updates—the system shows you.
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
                OneRooted analyzes skills, experience, and fit to surface the candidates 
                worth your time. No more manual sorting through hundreds of CVs.
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
                No more asking "what's the status?" OneRooted shows the complete picture—from 
                first application to signed contract. Bottlenecks become visible before they become problems.
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
                Metrics that drive action
              </h2>
              <p className="text-lg text-muted-foreground">
                Real-time insights into your process health. Know where to focus before 
                problems become blockers. Data-driven hiring isn't a slogan—it's your dashboard.
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
                Internal teams, hiring managers, external partners—all working from one 
                source of truth. No more version confusion or lost feedback.
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
                <Card className="card-refined border-border/50 h-full">
                  <CardContent className="py-6 px-6">
                    <h3 className="font-medium mb-4 text-muted-foreground">Traditional ATS</h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-muted-foreground">—</span>
                        <span>Stores resumes in a database</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-muted-foreground">—</span>
                        <span>Manual status updates</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-muted-foreground">—</span>
                        <span>Admin-focused data entry</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-muted-foreground">—</span>
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
                <Card className="card-refined border-accent/30 bg-accent/5 h-full">
                  <CardContent className="py-6 px-6">
                    <h3 className="font-medium mb-4 text-accent">OneRooted</h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-accent">✓</span>
                        <span>Connects all hiring data intelligently</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">✓</span>
                        <span>Automated workflows and triggers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">✓</span>
                        <span>Decision-focused intelligence</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">✓</span>
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
              Ready to see what structured hiring looks like?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Book a demo and we'll show you how OneRooted transforms hiring from 
              chaos into a system you can actually manage.
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
