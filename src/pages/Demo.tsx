import { useState } from "react";
import { MarketingLayout } from "@/components/marketing/MarketingLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Send, Calendar, MessageCircle, Users, Clock, CheckCircle } from "lucide-react";
import { SEO } from "@/components/SEO";

const Demo = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Thank you! We'll be in touch within 24 hours.");
    setIsSubmitting(false);
    
    // Reset form
    (e.target as HTMLFormElement).reset();
  };

  return (
    <MarketingLayout>
      <SEO 
        title="Request a Demo"
        description="See OneRooted in action. Book a 30-minute demo to discover how our Hiring OS can transform your recruitment process."
        url="https://onerooted.com/demo"
      />
      {/* Hero */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container relative">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
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
              Get started
            </motion.p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 tracking-tight">
              Request a{" "}
              <span className="text-primary">demo</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              See OneRooted in action. No sales theatrics. Just clarity.
            </p>
            
            {/* Trust indicators */}
            <motion.div 
              className="flex flex-wrap justify-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {[
                { icon: Clock, text: "30-minute call" },
                { icon: CheckCircle, text: "No commitment" },
                { icon: Users, text: "Tailored to your needs" },
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <item.icon className="h-4 w-4 text-success" />
                  <span>{item.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="card-refined relative overflow-hidden">
                {/* Shimmer effect */}
                <div className="absolute inset-0 shimmer opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                
                <CardHeader className="relative">
                  <CardTitle className="text-xl">Tell us about your hiring</CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <motion.div 
                      className="grid md:grid-cols-2 gap-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First name</Label>
                        <Input id="firstName" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last name</Label>
                        <Input id="lastName" placeholder="Doe" required />
                      </div>
                    </motion.div>

                    <motion.div 
                      className="space-y-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35 }}
                    >
                      <Label htmlFor="email">Work email</Label>
                      <Input id="email" type="email" placeholder="john@company.com" required />
                    </motion.div>

                    <motion.div 
                      className="space-y-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" placeholder="Company name" required />
                    </motion.div>

                    <motion.div 
                      className="space-y-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.45 }}
                    >
                      <Label htmlFor="teamSize">Team size</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select team size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1-10 employees</SelectItem>
                          <SelectItem value="11-50">11-50 employees</SelectItem>
                          <SelectItem value="51-200">51-200 employees</SelectItem>
                          <SelectItem value="201-500">201-500 employees</SelectItem>
                          <SelectItem value="500+">500+ employees</SelectItem>
                        </SelectContent>
                      </Select>
                    </motion.div>

                    <motion.div 
                      className="space-y-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <Label htmlFor="message">What are you looking to solve?</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about your current hiring challenges..."
                        rows={4}
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.55 }}
                    >
                      <Button 
                        type="submit" 
                        className="w-full btn-accent"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            <Send className="h-4 w-4 mr-2" />
                            Request demo
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* What to expect */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div>
                <h2 className="text-2xl font-medium mb-6">What to expect</h2>
                
                <motion.div 
                  className="space-y-6"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.4,
                      },
                    },
                  }}
                >
                  {[
                    {
                      icon: Calendar,
                      title: "30-minute walkthrough",
                      desc: "We'll show you how OneRooted works for your specific situation.",
                    },
                    {
                      icon: MessageCircle,
                      title: "Honest conversation",
                      desc: "No pressure. We'll tell you if we're the right fit—and if we're not.",
                    },
                    {
                      icon: CheckCircle,
                      title: "Clear next steps",
                      desc: "Whether it's a trial, onboarding, or just staying in touch.",
                    },
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="flex gap-4 group"
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.div 
                        className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        <item.icon className="h-5 w-5 text-primary" />
                      </motion.div>
                      <div>
                        <h3 className="font-medium mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <Card className="bg-muted/50 border-border/50 relative overflow-hidden">
                  <div className="absolute top-4 left-4 text-4xl text-primary/10">"</div>
                  <CardContent className="pt-8 pb-6 px-8">
                    <p className="text-muted-foreground italic relative z-10">
                      "The demo was refreshingly direct. They understood our challenges 
                      immediately and showed exactly how OneRooted would help."
                    </p>
                    <p className="text-sm font-medium mt-4">— Head of Talent, Dutch Scale-up</p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Response time badge */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-success/10 border border-success/20"
              >
                <Clock className="h-5 w-5 text-success" />
                <div>
                  <p className="text-sm font-medium">Quick response</p>
                  <p className="text-xs text-muted-foreground">We typically reply within 24 hours</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
};

export default Demo;