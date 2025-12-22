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
import { useTranslation } from "react-i18next";
import { useLanguageFromUrl } from "@/i18n/useLanguage";

const Demo = () => {
  const { t } = useTranslation();
  useLanguageFromUrl();
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success(t('demo.form.successMessage'));
    setIsSubmitting(false);
    
    // Reset form
    (e.target as HTMLFormElement).reset();
  };

  const trustIndicators = [
    { icon: Clock, text: t('demo.hero.trustIndicators.duration') },
    { icon: CheckCircle, text: t('demo.hero.trustIndicators.commitment') },
    { icon: Users, text: t('demo.hero.trustIndicators.tailored') },
  ];

  const expectations = [
    {
      icon: Calendar,
      title: t('demo.expectations.walkthrough.title'),
      desc: t('demo.expectations.walkthrough.desc'),
    },
    {
      icon: MessageCircle,
      title: t('demo.expectations.honest.title'),
      desc: t('demo.expectations.honest.desc'),
    },
    {
      icon: CheckCircle,
      title: t('demo.expectations.nextSteps.title'),
      desc: t('demo.expectations.nextSteps.desc'),
    },
  ];

  const teamSizes = [
    { value: "1-10", label: t('demo.form.teamSizes.1-10') },
    { value: "11-50", label: t('demo.form.teamSizes.11-50') },
    { value: "51-200", label: t('demo.form.teamSizes.51-200') },
    { value: "201-500", label: t('demo.form.teamSizes.201-500') },
    { value: "500+", label: t('demo.form.teamSizes.500+') },
  ];

  return (
    <MarketingLayout>
      <SEO 
        title={t('demo.seo.title')}
        description={t('demo.seo.description')}
        url="https://onerooted.com/demo"
      />
      {/* Hero */}
      <section className="py-16 md:py-24 relative overflow-hidden">
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
              {t('demo.hero.badge')}
            </motion.p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 tracking-tight leading-[1.1]">
              {t('demo.hero.titlePart1')}{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{t('demo.hero.titleHighlight')}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t('demo.hero.subtitle')}
            </p>
            
            {/* Trust indicators */}
            <motion.div 
              className="flex flex-wrap justify-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {trustIndicators.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <item.icon className="h-4 w-4 text-primary" />
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
              <Card className="relative overflow-hidden border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
                <CardHeader className="relative">
                  <CardTitle className="text-xl font-semibold">{t('demo.form.title')}</CardTitle>
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
                        <Label htmlFor="firstName">{t('demo.form.firstName')}</Label>
                        <Input id="firstName" placeholder={t('demo.form.firstNamePlaceholder')} required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">{t('demo.form.lastName')}</Label>
                        <Input id="lastName" placeholder={t('demo.form.lastNamePlaceholder')} required />
                      </div>
                    </motion.div>

                    <motion.div 
                      className="space-y-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35 }}
                    >
                      <Label htmlFor="email">{t('demo.form.email')}</Label>
                      <Input id="email" type="email" placeholder={t('demo.form.emailPlaceholder')} required />
                    </motion.div>

                    <motion.div 
                      className="space-y-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <Label htmlFor="company">{t('demo.form.company')}</Label>
                      <Input id="company" placeholder={t('demo.form.companyPlaceholder')} required />
                    </motion.div>

                    <motion.div 
                      className="space-y-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.45 }}
                    >
                      <Label htmlFor="teamSize">{t('demo.form.teamSize')}</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder={t('demo.form.teamSizePlaceholder')} />
                        </SelectTrigger>
                        <SelectContent>
                          {teamSizes.map((size) => (
                            <SelectItem key={size.value} value={size.value}>{size.label}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </motion.div>

                    <motion.div 
                      className="space-y-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <Label htmlFor="message">{t('demo.form.message')}</Label>
                      <Textarea 
                        id="message" 
                        placeholder={t('demo.form.messagePlaceholder')}
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
                        size="lg"
                        className="w-full h-14 text-base bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          t('demo.form.sending')
                        ) : (
                          <>
                            <Send className="h-5 w-5 mr-2" />
                            {t('demo.form.submit')}
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
                <h2 className="text-2xl font-semibold mb-6">{t('demo.expectations.title')}</h2>
                
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
                  {expectations.map((item, index) => (
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
                        <h3 className="font-semibold mb-1">{item.title}</h3>
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
                <Card className="bg-muted/30 border-border/50 relative overflow-hidden">
                  <div className="absolute top-4 left-4 text-5xl font-serif text-primary/20">"</div>
                  <CardContent className="pt-10 pb-6 px-8">
                    <p className="text-muted-foreground italic relative z-10 text-lg leading-relaxed">
                      {t('demo.testimonial.quote')}
                    </p>
                    <p className="text-sm font-semibold mt-4">{t('demo.testimonial.author')}</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex items-center gap-4 p-5 rounded-xl bg-primary/5 border border-primary/10"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold">{t('demo.quickResponse.title')}</p>
                  <p className="text-sm text-muted-foreground">{t('demo.quickResponse.subtitle')}</p>
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
