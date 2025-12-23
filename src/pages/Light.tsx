import { MarketingLayout } from "@/components/marketing/MarketingLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Briefcase, Users, Zap, Check, ArrowRight, Sparkles } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SEO } from "@/components/SEO";
import { useTranslation } from "react-i18next";
import { useLanguageFromUrl } from "@/i18n/useLanguage";

const Light = () => {
  const { t } = useTranslation();
  const { localizedPath } = useLanguageFromUrl();

  const features = [
    {
      icon: Briefcase,
      title: t('lightOffer.page.features.vacancy.title'),
      description: t('lightOffer.page.features.vacancy.description'),
    },
    {
      icon: Users,
      title: t('lightOffer.page.features.candidates.title'),
      description: t('lightOffer.page.features.candidates.description'),
    },
    {
      icon: Zap,
      title: t('lightOffer.page.features.system.title'),
      description: t('lightOffer.page.features.system.description'),
    },
  ];

  const whyItems = t('lightOffer.page.whyItWorks.items', { returnObjects: true }) as string[];
  const faqs = t('lightOffer.page.faq.items', { returnObjects: true }) as Array<{ question: string; answer: string }>;

  return (
    <MarketingLayout>
      <SEO 
        title={t('lightOffer.page.seo.title')}
        description={t('lightOffer.page.seo.description')}
        url="https://onerooted.com/light"
      />

      {/* Hero */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary/10 via-accent/5 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-20 right-20 w-32 h-32 bg-accent/20 rounded-full blur-2xl pointer-events-none" />
        
        <div className="container relative">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm px-4 py-2 rounded-full mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="h-4 w-4" />
              <span className="font-medium">{t('lightOffer.page.hero.label')}</span>
            </motion.div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-4 md:mb-6 tracking-tight">
              {t('lightOffer.page.hero.headline')}{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {t('lightOffer.page.hero.headlineHighlight')}
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8">
              {t('lightOffer.page.hero.subheadline')}
            </p>

            {/* Quick price CTA */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-baseline gap-1">
                <span className="text-4xl md:text-5xl font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  €{t('lightOffer.page.pricing.price')}
                </span>
                <span className="text-muted-foreground">{t('lightOffer.page.pricing.perMonth')}</span>
              </div>
              <Button asChild size="lg" className="btn-accent">
                <Link to={localizedPath("/demo")} className="flex items-center gap-2">
                  {t('lightOffer.page.pricing.cta')}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium">
              {t('lightOffer.page.features.title')}
            </h2>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15 }
              }
            }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <Card className="card-refined h-full text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <CardContent className="pt-8 pb-6">
                    <motion.div 
                      className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mx-auto mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <feature.icon className="h-7 w-7 text-primary" />
                    </motion.div>
                    <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why it works */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-8">
                {t('lightOffer.page.whyItWorks.title')}
              </h2>
              <ul className="space-y-4">
                {whyItems.map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <motion.div
                      className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center shrink-0"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + 0.1 * index, type: "spring", stiffness: 400 }}
                    >
                      <Check className="h-3.5 w-3.5 text-success" />
                    </motion.div>
                    <span className="text-muted-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Pricing Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="card-refined relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
                <div className="absolute inset-0 shimmer opacity-20" />
                
                <CardContent className="relative pt-8 pb-8 text-center">
                  <p className="text-sm font-medium text-primary mb-4">
                    {t('lightOffer.page.pricing.headline')}
                  </p>
                  <div className="mb-6">
                    <span className="text-5xl md:text-6xl font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      €{t('lightOffer.page.pricing.price')}
                    </span>
                    <span className="text-lg text-muted-foreground">{t('lightOffer.page.pricing.perMonth')}</span>
                  </div>
                  
                  <Button asChild size="lg" className="btn-accent w-full mb-4">
                    <Link to={localizedPath("/demo")} className="flex items-center justify-center gap-2">
                      {t('lightOffer.page.pricing.cta')}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  
                  <p className="text-xs text-muted-foreground">
                    {t('lightOffer.page.pricing.trust')}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs sm:text-sm font-medium text-primary mb-3 tracking-wide uppercase">
                {t('lightOffer.page.faq.label')}
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                {t('lightOffer.page.faq.headline')}
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Accordion type="single" collapsible className="w-full space-y-3">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index}
                    value={`faq-${index}`} 
                    className="border border-border/50 rounded-xl px-6 bg-background"
                  >
                    <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container relative">
          <motion.div 
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              {t('lightOffer.page.cta.headline')}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t('lightOffer.page.cta.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-accent">
                <Link to={localizedPath("/demo")} className="flex items-center gap-2">
                  {t('lightOffer.page.cta.button')}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to={localizedPath("/pricing")}>{t('lightOffer.page.cta.secondary')}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </MarketingLayout>
  );
};

export default Light;
