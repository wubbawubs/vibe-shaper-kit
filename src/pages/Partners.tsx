import { MarketingLayout } from "@/components/marketing/MarketingLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Eye, Building2, Handshake, ArrowRight, Users, Check, MessageSquare } from "lucide-react";
import { SEO } from "@/components/SEO";

const partnerFeatures = [
  "Dedicated pipelines per client",
  "Real-time visibility on candidate progress",
  "Clear feedback on submissions",
  "Branded experience that feels professional",
];

const clientFeatures = [
  "All candidates in one unified view",
  "Clear attribution of candidate sources",
  "Performance insights per partner",
  "No more scattered spreadsheets",
];

const collaborationSteps = [
  { step: "1", title: "Client invites partner", desc: "Simple access granting. No complex onboarding." },
  { step: "2", title: "Partner submits candidates", desc: "Direct into the pipeline. Instant visibility." },
  { step: "3", title: "Real-time updates", desc: "Both sides see progress. No chasing required." },
  { step: "4", title: "Outcome tracking", desc: "Clear metrics on what's working. Data-driven relationships." },
];

const Partners = () => {
  return (
    <MarketingLayout>
      <SEO 
        title="For Recruitment Partners"
        description="OneRooted makes recruitment partners stronger, not obsolete. Better tools for better collaboration and outcomes."
        url="https://onerooted.com/partners"
      />
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
              For recruitment partners
            </motion.p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 tracking-tight">
              We make you{" "}
              <span className="text-primary">stronger</span>, not obsolete
            </h1>
            <p className="text-xl text-muted-foreground">
              OneRooted is infrastructure, not competition. Better tools mean better outcomes for everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What partners see vs what clients see */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <motion.div 
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {/* Partner Card */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              <Card className="card-refined h-full group hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CardContent className="pt-8 pb-8">
                  <motion.div 
                    className="w-14 h-14 mb-6 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Handshake className="h-7 w-7 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-medium mb-6">What partners see</h3>
                  <ul className="space-y-4">
                    {partnerFeatures.map((feature, index) => (
                      <motion.li 
                        key={index} 
                        className="flex items-start gap-3 text-muted-foreground"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * index }}
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ 
                            delay: 0.2 + 0.1 * index,
                            type: "spring",
                            stiffness: 400,
                            damping: 10
                          }}
                          className="shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5"
                        >
                          <Check className="h-3 w-3 text-primary" />
                        </motion.div>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Client Card */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 30 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              <Card className="card-refined h-full group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                {/* Shimmer effect for featured card */}
                <div className="absolute inset-0 shimmer opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
                
                <CardContent className="relative pt-8 pb-8">
                  <motion.div 
                    className="w-14 h-14 mb-6 bg-accent/20 rounded-xl flex items-center justify-center group-hover:bg-accent/30 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Building2 className="h-7 w-7 text-accent-foreground" />
                  </motion.div>
                  <h3 className="text-xl font-medium mb-6">What clients see</h3>
                  <ul className="space-y-4">
                    {clientFeatures.map((feature, index) => (
                      <motion.li 
                        key={index} 
                        className="flex items-start gap-3 text-muted-foreground"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * index }}
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ 
                            delay: 0.2 + 0.1 * index,
                            type: "spring",
                            stiffness: 400,
                            damping: 10
                          }}
                          className="shrink-0 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mt-0.5"
                        >
                          <Check className="h-3 w-3 text-accent-foreground" />
                        </motion.div>
                        <span>{feature}</span>
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
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-medium text-primary mb-4 tracking-wide uppercase">How it works</p>
              <h2 className="text-3xl md:text-4xl font-medium">
                Seamless collaboration flow
              </h2>
            </motion.div>

            <div className="relative">
              {/* Connection line */}
              <div className="absolute left-5 top-10 bottom-10 w-0.5 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20 hidden md:block" />
              
              <motion.div 
                className="space-y-8"
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
                {collaborationSteps.map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start gap-6"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div 
                      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 relative z-10"
                      whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--primary) / 0.2)" }}
                      whileInView={{ 
                        boxShadow: ["0 0 0 0 hsl(var(--primary) / 0.2)", "0 0 0 10px hsl(var(--primary) / 0)", "0 0 0 0 hsl(var(--primary) / 0)"]
                      }}
                      viewport={{ once: true }}
                      transition={{ 
                        boxShadow: { delay: 0.3 + index * 0.15, duration: 0.6 }
                      }}
                    >
                      <span className="text-sm font-medium text-primary">{item.step}</span>
                    </motion.div>
                    <div className="pt-1.5">
                      <h3 className="font-medium mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              
              {/* Punchline */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-center mt-12 text-lg font-medium text-foreground"
              >
                No handovers. No blind spots. No politics.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Quote */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <MessageSquare className="h-12 w-12 mx-auto mb-6 text-primary/40" />
            <blockquote className="text-2xl md:text-3xl font-medium mb-6 leading-relaxed">
              "Finally, a system where we can work alongside our clients instead of fighting 
              against their existing tools."
            </blockquote>
            <p className="text-muted-foreground">
              — Managing Partner, Executive Search Firm
            </p>
          </motion.div>
        </div>
      </section>

      {/* Infrastructure not agency-tool */}
      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div 
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
            >
              <Eye className="h-8 w-8 text-primary" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              Infrastructure, not an agency tool
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              OneRooted isn't here to replace recruitment partners. We're here to make collaboration smoother, 
              more transparent, and more productive for everyone involved.
            </p>
            <p className="text-foreground font-medium">
              Better infrastructure means better outcomes for partners and clients alike.
            </p>
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
              <span>50+ partner agencies connected</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              Interested in partnering?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join the network of recruitment partners who are delivering better results through better infrastructure.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-accent">
                <Link to="/demo" className="flex items-center gap-2">
                  Let's talk
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

export default Partners;