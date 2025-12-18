import { MarketingLayout } from "@/components/marketing/MarketingLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { TrendingUp, Users, Handshake, RefreshCw, ArrowRight, Check, Sparkles } from "lucide-react";

const useCases = [
  {
    icon: TrendingUp,
    title: "Scaling a team fast",
    problem: "You need to hire 10+ people in 3 months. Coordination is chaos.",
    solution: "OneRooted gives everyone visibility into the pipeline, automates handoffs, and keeps momentum.",
    outcomes: ["Faster time-to-hire", "Less coordination overhead", "Clear progress tracking"],
    stat: "40%",
    statLabel: "faster hiring",
  },
  {
    icon: Users,
    title: "Hiring with multiple stakeholders",
    problem: "Founders, hiring managers, and team leads all need input. Nothing gets done.",
    solution: "Structured feedback loops and decision workflows that actually work.",
    outcomes: ["Aligned decisions", "No bottlenecks", "Everyone stays informed"],
    stat: "3x",
    statLabel: "faster decisions",
  },
  {
    icon: Handshake,
    title: "Working with recruitment partners",
    problem: "Agency candidates get lost. Communication breaks down. Blame games start.",
    solution: "Partners work in the same system. Full transparency. One source of truth.",
    outcomes: ["Better partner relationships", "Clear accountability", "Faster collaboration"],
    stat: "100%",
    statLabel: "visibility",
  },
  {
    icon: RefreshCw,
    title: "Replacing an existing ATS without chaos",
    problem: "Migration feels impossible. Data everywhere. Team resistance.",
    solution: "Clean migration path. Gradual onboarding. Real support.",
    outcomes: ["Smooth transition", "No data loss", "Team adoption"],
    stat: "2 weeks",
    statLabel: "avg. migration",
  },
];

const UseCases = () => {
  return (
    <MarketingLayout>
      {/* Hero */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container relative">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.p 
              className="text-sm font-medium text-primary mb-4 tracking-wide uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Use cases
            </motion.p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 tracking-tight">
              Real scenarios where{" "}
              <span className="text-primary">OneRooted shines</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              See how teams like yours are transforming their hiring process.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-10 md:py-20">
        <div className="container">
          <motion.div 
            className="space-y-8 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
              >
                <Card className="card-refined overflow-hidden group hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <CardHeader className="bg-muted/50 pb-6">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <motion.div 
                          className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                          whileHover={{ scale: 1.05 }}
                        >
                          <useCase.icon className="h-6 w-6 text-primary" />
                        </motion.div>
                        <CardTitle className="text-xl">{useCase.title}</CardTitle>
                      </div>
                      
                      {/* Stat badge */}
                      <div className="hidden sm:flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full">
                        <Sparkles className="h-4 w-4" />
                        <span className="text-sm font-medium">{useCase.stat} {useCase.statLabel}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-2">The problem</h4>
                        <p className="text-foreground">{useCase.problem}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-2">How OneRooted helps</h4>
                        <p className="text-foreground">{useCase.solution}</p>
                      </div>
                    </div>
                    <div className="mt-6 pt-6 border-t border-border">
                      <h4 className="text-sm font-medium text-muted-foreground mb-3">Key outcomes</h4>
                      <div className="flex flex-wrap gap-3">
                        {useCase.outcomes.map((outcome, outcomeIndex) => (
                          <motion.span 
                            key={outcomeIndex} 
                            className="inline-flex items-center gap-2 text-sm bg-success/10 text-success px-4 py-2 rounded-full"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * outcomeIndex }}
                          >
                            <motion.div
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ 
                                delay: 0.2 + 0.1 * outcomeIndex,
                                type: "spring",
                                stiffness: 400,
                                damping: 10
                              }}
                            >
                              <Check className="h-3.5 w-3.5" />
                            </motion.div>
                            {outcome}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-muted/30 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container relative">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm px-4 py-2 rounded-full mb-8">
              <Users className="h-4 w-4" />
              <span>Trusted by 100+ hiring teams</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              See how it works for your team
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Every team is unique. Let's explore how OneRooted can transform your specific hiring challenges.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-accent">
                <Link to="/demo" className="flex items-center gap-2">
                  Request a demo
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/product">See how it works</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </MarketingLayout>
  );
};

export default UseCases;