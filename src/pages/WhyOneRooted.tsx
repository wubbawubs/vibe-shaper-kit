import { MarketingLayout } from "@/components/marketing/MarketingLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { AlertTriangle, Lightbulb, Target, ArrowRight, Users, Rocket, Quote } from "lucide-react";

const atsProblems = [
  { title: "They're built for storage, not decisions", desc: "Most ATS platforms are glorified databases. They track where candidates are, not why they should move forward." },
  { title: "They fragment the process", desc: "Feedback in Slack. Decisions in email. Status in spreadsheets. The ATS becomes just another silo." },
  { title: "They ignore collaboration", desc: "Modern hiring involves founders, hiring managers, team members, and external partners. ATS systems weren't built for this." },
  { title: "They optimize for recruiters, not outcomes", desc: "Admin efficiency is good. But what about decision quality? What about time-to-hire? What about candidate experience?" },
];

const roadmapItems = [
  { title: "Deeper decision intelligence", desc: "AI-powered insights that help you make better hiring decisions faster." },
  { title: "Seamless partner ecosystems", desc: "Connect with any recruitment partner through standardized interfaces." },
  { title: "Predictive hiring insights", desc: "Know what's working before you see the results." },
  { title: "Global team collaboration", desc: "Built for distributed teams across time zones and cultures." },
];

const WhyOneRooted = () => {
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
              Our story
            </motion.p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 tracking-tight">
              The story behind{" "}
              <span className="text-primary">building a Hiring OS</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Why we set out to fundamentally rethink how hiring software should work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why ATS fail */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="flex items-center gap-4 mb-12"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                className="w-14 h-14 bg-warning/20 rounded-xl flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
              >
                <AlertTriangle className="h-7 w-7 text-warning" />
              </motion.div>
              <div>
                <p className="text-sm font-medium text-warning mb-1">The problem</p>
                <h2 className="text-3xl md:text-4xl font-medium">Why traditional ATS systems fail</h2>
              </div>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-2 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              {atsProblems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="card-refined h-full group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-warning/20 hover:border-warning/40">
                    <CardContent className="py-6 px-6">
                      <div className="w-8 h-8 rounded-lg bg-warning/10 flex items-center justify-center mb-4 group-hover:bg-warning/20 transition-colors">
                        <AlertTriangle className="h-4 w-4 text-warning" />
                      </div>
                      <h3 className="font-medium mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Hiring OS is needed */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="flex items-center gap-4 mb-12"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
              >
                <Lightbulb className="h-7 w-7 text-primary" />
              </motion.div>
              <div>
                <p className="text-sm font-medium text-primary mb-1">The insight</p>
                <h2 className="text-3xl md:text-4xl font-medium">Why a Hiring OS is needed</h2>
              </div>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>
                  Hiring is no longer a linear process managed by one recruiter. It's a complex operation 
                  involving multiple stakeholders, external partners, and critical business decisions.
                </p>
                <p>
                  You need a system that understands this complexity. One that connects data, enables collaboration, 
                  and actively helps you make better decisions.
                </p>
                <p className="text-foreground font-medium">
                  That's what a Hiring OS does. It's not a feature upgrade to an ATS. It's a fundamental rethink 
                  of how hiring software should work.
                </p>
              </div>
              
              {/* Visual comparison */}
              <div className="space-y-4">
                <motion.div 
                  className="p-6 rounded-xl border border-border/50 bg-card"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-sm text-muted-foreground mb-2">Traditional ATS</p>
                  <p className="font-medium">Store → Track → Report</p>
                </motion.div>
                <div className="flex justify-center">
                  <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <ArrowRight className="h-6 w-6 text-primary rotate-90" />
                  </motion.div>
                </div>
                <motion.div 
                  className="p-6 rounded-xl border-2 border-primary/30 bg-primary/5"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-sm text-primary mb-2">Hiring OS</p>
                  <p className="font-medium">Collaborate → Decide → Improve</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How OneRooted was born */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="flex items-center gap-4 mb-12"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
              >
                <Target className="h-7 w-7 text-accent-foreground" />
              </motion.div>
              <div>
                <p className="text-sm font-medium text-accent-foreground mb-1">The origin</p>
                <h2 className="text-3xl md:text-4xl font-medium">How OneRooted was born</h2>
              </div>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-3 gap-8"
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
              {[
                { step: "01", title: "The frustration", text: "We worked with organizations struggling to hire effectively, despite having 'all the tools.'" },
                { step: "02", title: "The realization", text: "The problem wasn't a lack of software—it was a lack of system. Tools weren't connected." },
                { step: "03", title: "The solution", text: "We built OneRooted as the operating system for hiring. One place where everyone can collaborate." },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <div className="text-6xl font-bold text-primary/10 mb-4">{item.step}</div>
                  <h3 className="font-medium mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Quote */}
            <motion.div 
              className="mt-16 p-8 rounded-2xl bg-card border border-border/50 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Quote className="h-10 w-10 text-primary/20 absolute top-6 left-6" />
              <blockquote className="text-xl md:text-2xl font-medium text-center px-8 py-4">
                "Not another tool to learn. A system that works the way modern hiring actually happens."
              </blockquote>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Where we're going */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="flex items-center gap-4 mb-12"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
              >
                <Rocket className="h-7 w-7 text-primary" />
              </motion.div>
              <div>
                <p className="text-sm font-medium text-primary mb-1">The future</p>
                <h2 className="text-3xl md:text-4xl font-medium">Where we're going</h2>
              </div>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-2 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              {roadmapItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                  className="flex items-start gap-4 p-6 rounded-xl border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group"
                >
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="shrink-0"
                  >
                    <ArrowRight className="h-5 w-5 text-primary mt-0.5" />
                  </motion.div>
                  <div>
                    <h3 className="font-medium mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
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
              <span>Born from 25+ years of recruitment experience</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              Ready to rethink how you hire?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              See how OneRooted can transform your hiring process from fragmented to unified.
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

export default WhyOneRooted;