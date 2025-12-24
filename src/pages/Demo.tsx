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

    toast.success(t('demoPage.form.success'));
    setIsSubmitting(false);
    
    // Reset form
    (e.target as HTMLFormElement).reset();
  };

  const trustIndicatorsData = t('demoPage.hero.trustIndicators', { returnObjects: true }) as Array<{ text: string }>;
  const trustIcons = [Clock, CheckCircle, Users];
  const trustIndicators = (Array.isArray(trustIndicatorsData) ? trustIndicatorsData : []).map((item, idx) => ({
    icon: trustIcons[idx] || Clock,
    text: item.text,
  }));

  const expectationsData = t('demoPage.expect.items', { returnObjects: true }) as Array<{ title: string; desc: string }>;
  const expectIcons = [Calendar, MessageCircle, CheckCircle];
  const expectations = (Array.isArray(expectationsData) ? expectationsData : []).map((item, idx) => ({
    icon: expectIcons[idx] || Calendar,
    title: item.title,
    desc: item.desc,
  }));

  const teamSizesData = t('demoPage.form.teamSizeOptions', { returnObjects: true }) as string[];
  const teamSizes = (Array.isArray(teamSizesData) ? teamSizesData : []).map((label, idx) => ({
    value: ["1-10", "11-50", "51-200", "201-500", "500+"][idx] || `${idx}`,
    label,
  }));

  return (
    <MarketingLayout>
      <SEO 
        title={t('demoPage.seo.title')}
        description={t('demoPage.seo.description')}
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
              className="text-sm font-medium text-label mb-4 tracking-wide uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {t('demoPage.hero.label')}
            </motion.p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 tracking-tight leading-[1.1]">
              {t('demoPage.hero.headline')}{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{t('demoPage.hero.headlineHighlight')}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t('demoPage.hero.subheadline')}
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
                  <CardTitle className="text-xl font-semibold">{t('demoPage.form.title')}</CardTitle>
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
                        <Label htmlFor="firstName">{t('demoPage.form.firstName')}</Label>
                        <Input id="firstName" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">{t('demoPage.form.lastName')}</Label>
                        <Input id="lastName" required />
                      </div>
                    </motion.div>

                    <motion.div 
                      className="space-y-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35 }}
                    >
                      <Label htmlFor="email">{t('demoPage.form.email')}</Label>
                      <Input id="email" type="email" required />
                    </motion.div>

                    <motion.div 
                      className="space-y-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <Label htmlFor="company">{t('demoPage.form.company')}</Label>
                      <Input id="company" required />
                    </motion.div>

                    <motion.div 
                      className="space-y-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.45 }}
                    >
                      <Label htmlFor="teamSize">{t('demoPage.form.teamSize')}</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder={t('demoPage.form.teamSizePlaceholder')} />
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
                      <Label htmlFor="message">{t('demoPage.form.message')}</Label>
                      <Textarea 
                        id="message" 
                        placeholder={t('demoPage.form.messagePlaceholder')}
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
                          t('demoPage.form.submitting')
                        ) : (
                          <>
                            <Send className="h-5 w-5 mr-2" />
                            {t('demoPage.form.submit')}
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
                <h2 className="text-2xl font-semibold mb-6">{t('demoPage.expect.headline')}</h2>
                
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
                      {t('demoPage.expect.testimonial')}
                    </p>
                    <p className="text-sm font-semibold mt-4">{t('demoPage.expect.testimonialAuthor')}</p>
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
                  <p className="text-sm font-semibold">{t('demoPage.expect.quickResponse')}</p>
                  <p className="text-sm text-muted-foreground">{t('demoPage.expect.quickResponseDesc')}</p>
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
