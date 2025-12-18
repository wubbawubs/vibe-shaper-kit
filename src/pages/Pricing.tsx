import { MarketingLayout } from "@/components/marketing/MarketingLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check, X, Users, ArrowRight, Shield, Zap, HeartHandshake } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SEO } from "@/components/SEO";

const plans = [
  {
    name: "Base",
    price: "299",
    description: "Essential recruitment support for small teams.",
    outcome: "Get control over your hiring process.",
    features: [
      { text: "OneRooted system", included: true },
      { text: "Up-to-date talent pool", included: true },
      { text: "Access to E-Academy", included: true },
      { text: "Email support", included: true },
      { text: "Partner portal", included: false },
      { text: "Proactive sourcing", included: false },
      { text: "Interview coordination", included: false },
    ],
    cta: "Talk to us",
    featured: false,
  },
  {
    name: "Plus",
    price: "399",
    description: "Move faster, hire smarter.",
    outcome: "Turn hiring into a coordinated system.",
    features: [
      { text: "Everything in Base", included: true },
      { text: "Retention search", included: true },
      { text: "Proactive sourcing", included: true },
      { text: "Priority support", included: true },
      { text: "Partner portal", included: true },
      { text: "Interview coordination", included: false },
      { text: "Dedicated success manager", included: false },
    ],
    cta: "Talk to us",
    featured: true,
  },
  {
    name: "Premium",
    price: "599",
    description: "Hiring fully organized.",
    outcome: "Run hiring as a strategic operation.",
    features: [
      { text: "Everything in Plus", included: true },
      { text: "Candidate interviews", included: true },
      { text: "Scheduling & coordination", included: true },
      { text: "Dedicated success manager", included: true },
      { text: "Custom integrations", included: true },
      { text: "Advanced analytics", included: true },
      { text: "SLA guarantee", included: true },
    ],
    cta: "Talk to us",
    featured: false,
  },
];

const faqs = [
  {
    question: "Can I switch plans later?",
    answer: "Absolutely. You can upgrade or downgrade your plan at any time. When upgrading, you'll get immediate access to new features. When downgrading, the change takes effect at the end of your billing cycle.",
  },
  {
    question: "What happens if I exceed my user limit?",
    answer: "We'll notify you when you're approaching your limit. You can easily upgrade to accommodate more users, or we can discuss a custom arrangement for your specific needs.",
  },
  {
    question: "Is there a minimum contract period?",
    answer: "No. All plans are month-to-month with no long-term commitment required. We believe in earning your business every month.",
  },
  {
    question: "Do you offer discounts for annual billing?",
    answer: "Yes, we offer a 15% discount when you choose annual billing. Contact our sales team to learn more.",
  },
  {
    question: "What kind of support is included?",
    answer: "All plans include email support with 24-hour response times. Growth and Scale plans include priority support with faster response times and dedicated channels.",
  },
];

const trustBadges = [
  { icon: Shield, text: "No hidden fees" },
  { icon: Zap, text: "Cancel anytime" },
  { icon: HeartHandshake, text: "30-day money back" },
];

const Pricing = () => {
  return (
    <MarketingLayout>
      <SEO 
        title="Pricing"
        description="Clear, transparent pricing for OneRooted. Choose Base, Plus, or Premium plans starting at €299/month. No hidden fees, cancel anytime."
        url="https://onerooted.com/pricing"
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
              Pricing
            </motion.p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 tracking-tight">
              Clear pricing.{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">No surprises.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Choose the plan that fits your hiring needs. Scale as you grow.
            </p>
            
            {/* Trust badges */}
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {trustBadges.map((badge, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <badge.icon className="h-4 w-4 text-success" />
                  <span>{badge.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-10 md:py-20">
        <div className="container">
          <motion.div 
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
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
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
              >
                <Card 
                  className={`card-refined relative h-full group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${
                    plan.featured 
                      ? 'border-primary shadow-card' 
                      : 'border-border/50'
                  }`}
                >
                  {/* Shimmer effect for featured */}
                  {plan.featured && (
                    <>
                      <div className="absolute inset-0 shimmer opacity-30 rounded-xl" />
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl" />
                    </>
                  )}
                  
                  {plan.featured && (
                    <motion.div 
                      className="absolute -top-3 left-0 right-0 flex justify-center"
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      <span className="bg-gradient-to-r from-primary to-accent text-primary-foreground text-xs px-4 py-1.5 rounded-full font-medium">
                        Most popular
                      </span>
                    </motion.div>
                  )}
                  
                  <CardHeader className="relative pt-8 pb-4">
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                    <div className="mt-4">
                      <span className={`text-4xl font-medium ${plan.featured ? 'bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent' : ''}`}>
                        {plan.price === "Custom" ? "Custom" : `€${plan.price}`}
                      </span>
                      {plan.price !== "Custom" && (
                        <span className="text-muted-foreground"> / month</span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                    <p className={`text-sm font-medium mt-3 ${plan.featured ? 'bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent' : 'text-primary'}`}>{plan.outcome}</p>
                  </CardHeader>
                  
                  <CardContent className="relative pt-4 pb-8">
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <motion.li 
                          key={featureIndex} 
                          className="flex items-center gap-3 text-sm"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * featureIndex }}
                        >
                          {feature.included ? (
                            <motion.div
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ 
                                delay: 0.2 + 0.05 * featureIndex,
                                type: "spring",
                                stiffness: 400,
                                damping: 10
                              }}
                            >
                              <Check className="h-4 w-4 text-success shrink-0" />
                            </motion.div>
                          ) : (
                            <X className="h-4 w-4 text-muted-foreground/40 shrink-0" />
                          )}
                          <span className={feature.included ? "" : "text-muted-foreground/60"}>
                            {feature.text}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                    <Button 
                      asChild 
                      className={`w-full ${plan.featured ? 'btn-accent' : ''}`}
                      variant={plan.featured ? "default" : "outline"}
                    >
                      <Link to="/demo">{plan.cta}</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What's included / not included */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <motion.div 
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-medium text-center mb-12">
              What's included in all plans
            </h2>

            <motion.div 
              className="grid md:grid-cols-2 gap-8"
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
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <Card className="card-refined h-full">
                  <CardContent className="pt-6 pb-6">
                    <h3 className="font-medium mb-4 text-success">Always included</h3>
                    <ul className="space-y-3 text-sm">
                      {["Unlimited candidates", "Unlimited job postings", "Data export", "GDPR compliance"].map((item, index) => (
                        <motion.li 
                          key={index}
                          className="flex items-center gap-2"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
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
                          >
                            <Check className="h-4 w-4 text-success" />
                          </motion.div>
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <Card className="card-refined h-full">
                  <CardContent className="pt-6 pb-6">
                    <h3 className="font-medium mb-4 text-muted-foreground">Never charged</h3>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      {["Setup fees", "Hidden charges", "Long-term contracts", "Per-candidate fees"].map((item, index) => (
                        <motion.li 
                          key={index}
                          className="flex items-center gap-2"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * index }}
                        >
                          <X className="h-4 w-4" />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div 
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <p className="text-sm font-medium text-primary mb-4 tracking-wide uppercase">FAQ</p>
              <h2 className="text-3xl md:text-4xl font-medium">
                Common questions
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  <AccordionItem 
                    value={`faq-${index}`} 
                    className="border border-border/50 rounded-xl px-6 data-[state=open]:bg-muted/30 transition-colors"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-muted/30 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container relative">
          <motion.div 
            className="max-w-2xl mx-auto text-center"
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
              Need something custom?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              For enterprise requirements, custom integrations, or high-volume needs, 
              let's talk about a tailored solution.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-accent">
                <Link to="/demo" className="flex items-center gap-2">
                  Contact sales
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

export default Pricing;