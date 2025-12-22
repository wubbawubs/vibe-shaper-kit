import { MarketingLayout } from "@/components/marketing/MarketingLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Building2, Handshake, ArrowRight, Check, Zap, Target, BarChart3, Eye, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SEO } from "@/components/SEO";

const partnerBenefits = [
  "Your own pipeline per client — full ownership",
  "Real-time status updates — no more chasing",
  "Instant feedback on every submission",
  "Professional interface your clients trust",
];

const clientBenefits = [
  "All candidates in one view — zero chaos",
  "Clear source attribution per partner",
  "Performance data that drives decisions",
  "One system instead of scattered spreadsheets",
];

const collaborationSteps = [
  { 
    icon: Handshake, 
    title: "Client invites partner", 
    desc: "One click. No onboarding friction." 
  },
  { 
    icon: Zap, 
    title: "Partner submits candidates", 
    desc: "Direct into the pipeline. Instantly visible." 
  },
  { 
    icon: Eye, 
    title: "Both sides see progress", 
    desc: "Real-time updates. No status meetings." 
  },
  { 
    icon: BarChart3, 
    title: "Data drives the relationship", 
    desc: "Clear metrics on what works. No politics." 
  },
];

const Partners = () => {
  return (
    <MarketingLayout>
      <SEO 
        title="For Recruitment Partners"
        description="OneRooted makes recruitment partners stronger, not obsolete. Better infrastructure for better outcomes."
        url="https://onerooted.com/partners"
      />
      
      {/* Hero */}
      <section className="py-16 md:py-24 relative overflow-hidden">
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
              For recruitment partners
            </motion.p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 md:mb-6 tracking-tight leading-[1.1]">
              We make you{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">stronger</span>, not obsolete
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto">
              OneRooted is infrastructure. Not competition. When your clients use it, you get better tools, clearer visibility, and stronger relationships.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4"
            >
              <Button asChild size="lg" className="h-12 sm:h-14 px-6 sm:px-8 text-base bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25">
                <Link to="/demo">
                  Partner with us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="h-12 sm:h-14 px-6 sm:px-8 text-base text-muted-foreground hover:text-foreground">
                <Link to="/product">
                  See how it works
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Two perspectives */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 md:mb-4">
              One system. Two perspectives.
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              Partners and clients work in the same system — with views designed for each role.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
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
            {/* Partner Card */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full border-primary/20 bg-gradient-to-br from-primary/5 to-transparent hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CardContent className="pt-8 pb-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Handshake className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Partner view</h3>
                      <p className="text-sm text-muted-foreground">What you work with</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {partnerBenefits.map((benefit, index) => (
                      <motion.li 
                        key={index} 
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * index }}
                      >
                        <div className="shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                          <Check className="h-3 w-3 text-primary" />
                        </div>
                        <span className="text-foreground">{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Client Card */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full border-accent/20 bg-gradient-to-br from-accent/5 to-transparent hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CardContent className="pt-8 pb-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                      <Building2 className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Client view</h3>
                      <p className="text-sm text-muted-foreground">What they see</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {clientBenefits.map((benefit, index) => (
                      <motion.li 
                        key={index} 
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * index }}
                      >
                        <div className="shrink-0 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                          <Check className="h-3 w-3 text-accent-foreground" />
                        </div>
                        <span className="text-foreground">{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How collaboration works */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs sm:text-sm font-medium text-primary mb-3 md:mb-4 tracking-wide uppercase">How it works</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 md:mb-4">
                From invite to insight in four steps
              </h2>
              <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
                No complex onboarding. No learning curve. Just collaboration that works.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
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
              {collaborationSteps.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="relative text-center p-3 sm:p-6"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Step number */}
                  <div className="absolute top-2 left-2 sm:top-4 sm:left-4 text-3xl sm:text-6xl font-bold text-muted/30">
                    {index + 1}
                  </div>
                  
                  <motion.div 
                    className="w-10 h-10 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center relative z-10"
                    whileHover={{ scale: 1.1 }}
                  >
                    <item.icon className="h-5 w-5 sm:h-7 sm:w-7 text-primary" />
                  </motion.div>
                  <h3 className="font-semibold text-sm sm:text-base mb-1 sm:mb-2 relative z-10">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground relative z-10 hidden sm:block">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Punchline */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center mt-12 p-6 bg-muted/30 rounded-2xl"
            >
              <p className="text-lg font-semibold text-foreground">
                No handovers. No blind spots. No politics.
              </p>
              <p className="text-muted-foreground mt-1">
                Just transparent collaboration that makes everyone better.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Infrastructure positioning */}
      <section className="py-16 md:py-24 bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container relative">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 bg-background/10 rounded-xl sm:rounded-2xl flex items-center justify-center">
              <Target className="h-6 w-6 sm:h-8 sm:w-8 text-background" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6 leading-tight">
              Infrastructure, not competition
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-background/60 mb-6 sm:mb-8 max-w-2xl mx-auto">
              We're not building another agency tool. We're building the operating system that makes collaboration between clients and partners seamless.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center text-left max-w-xl mx-auto">
              <div className="flex-1 p-3 sm:p-4 border border-background/10 rounded-xl">
                <p className="font-semibold mb-1 text-sm sm:text-base">For partners</p>
                <p className="text-xs sm:text-sm text-background/50">Better tools mean better placements</p>
              </div>
              <div className="flex-1 p-3 sm:p-4 border border-background/10 rounded-xl">
                <p className="font-semibold mb-1 text-sm sm:text-base">For clients</p>
                <p className="text-xs sm:text-sm text-background/50">Better visibility means better decisions</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs sm:text-sm font-medium text-primary mb-3 md:mb-4 tracking-wide uppercase">FAQ</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
                Common questions from partners
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Accordion type="single" collapsible className="w-full space-y-3">
                <AccordionItem value="item-1" className="border border-border/50 rounded-xl px-6 bg-background">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                    Do I need to pay for OneRooted as a partner?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    No. Partners don't pay for OneRooted. When a client invites you to collaborate, you get full access to your dedicated pipeline at no cost. The client handles the subscription.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border border-border/50 rounded-xl px-6 bg-background">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                    Can I work with multiple clients in OneRooted?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    Yes. Each client has their own workspace, and you'll have a separate pipeline per client. Everything stays organized and confidential between clients.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border border-border/50 rounded-xl px-6 bg-background">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                    What data can the client see about my work?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    Clients see the candidates you submit, their status, and performance metrics like time-to-hire and conversion rates. They don't see your internal notes or communication with other clients.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border border-border/50 rounded-xl px-6 bg-background">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                    How do I get started as a partner?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    Your client sends you an invite link. You create an account (takes 30 seconds), and you're immediately connected to their pipeline. No onboarding calls, no setup meetings.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border border-border/50 rounded-xl px-6 bg-background">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                    Is OneRooted trying to replace recruitment agencies?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    No. We're infrastructure, not competition. OneRooted makes the collaboration between you and your clients smoother. Better tools mean better placements, stronger relationships, and less time wasted on admin.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border border-border/50 rounded-xl px-6 bg-background">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                    Can I still use my own ATS alongside OneRooted?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    Yes. Many partners use their own systems internally and submit candidates to OneRooted for client collaboration. Think of it as the shared workspace where you and your client meet.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container relative">
          <motion.div 
            className="text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Ready to work smarter?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join the partners who are already delivering better results through better infrastructure.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="h-14 px-8 text-base bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25">
                <Link to="/demo" className="flex items-center gap-2">
                  Let's talk
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 px-8 text-base">
                <Link to="/product">Explore the product</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </MarketingLayout>
  );
};

export default Partners;
