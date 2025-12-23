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
import { useTranslation } from "react-i18next";
import { useLanguageFromUrl } from "@/i18n/useLanguage";

const Pricing = () => {
  const { t } = useTranslation();
  const { localizedPath } = useLanguageFromUrl();

  const plans = [
    {
      name: t('pricingPage.plans.base.name'),
      price: "299",
      description: t('pricingPage.plans.base.description'),
      outcome: t('pricingPage.plans.base.outcome'),
      features: [
        { text: t('pricingPage.features.onerootedSystem'), included: true },
        { text: t('pricingPage.features.talentPool'), included: true },
        { text: t('pricingPage.features.eAcademy'), included: true },
        { text: t('pricingPage.features.emailSupport'), included: true },
        { text: t('pricingPage.features.partnerPortal'), included: false },
        { text: t('pricingPage.features.proactiveSourcing'), included: false },
        { text: t('pricingPage.features.interviewCoordination'), included: false },
      ],
      cta: t('pricingPage.talkToUs'),
      featured: false,
    },
    {
      name: t('pricingPage.plans.plus.name'),
      price: "399",
      description: t('pricingPage.plans.plus.description'),
      outcome: t('pricingPage.plans.plus.outcome'),
      features: [
        { text: t('pricingPage.features.everythingInBase'), included: true },
        { text: t('pricingPage.features.retentionSearch'), included: true },
        { text: t('pricingPage.features.proactiveSourcing'), included: true },
        { text: t('pricingPage.features.prioritySupport'), included: true },
        { text: t('pricingPage.features.partnerPortal'), included: true },
        { text: t('pricingPage.features.interviewCoordination'), included: false },
        { text: t('pricingPage.features.dedicatedSuccessManager'), included: false },
      ],
      cta: t('pricingPage.talkToUs'),
      featured: true,
    },
    {
      name: t('pricingPage.plans.premium.name'),
      price: "599",
      description: t('pricingPage.plans.premium.description'),
      outcome: t('pricingPage.plans.premium.outcome'),
      features: [
        { text: t('pricingPage.features.everythingInPlus'), included: true },
        { text: t('pricingPage.features.candidateInterviews'), included: true },
        { text: t('pricingPage.features.schedulingCoordination'), included: true },
        { text: t('pricingPage.features.dedicatedSuccessManager'), included: true },
        { text: t('pricingPage.features.customIntegrations'), included: true },
        { text: t('pricingPage.features.advancedAnalytics'), included: true },
        { text: t('pricingPage.features.slaGuarantee'), included: true },
      ],
      cta: t('pricingPage.talkToUs'),
      featured: false,
    },
  ];

  const faqs = t('pricingPage.faq.items', { returnObjects: true }) as Array<{ question: string; answer: string }>;

  const trustBadges = [
    { icon: Shield, text: t('pricingPage.trustBadges.noHiddenFees') },
    { icon: Zap, text: t('pricingPage.trustBadges.cancelAnytime') },
    { icon: HeartHandshake, text: t('pricingPage.trustBadges.moneyBack') },
  ];

  const alwaysItems = t('pricingPage.included.alwaysItems', { returnObjects: true }) as string[];
  const neverItems = t('pricingPage.included.neverItems', { returnObjects: true }) as string[];

  return (
    <MarketingLayout>
      <SEO 
        title={t('pricingPage.seo.title')}
        description={t('pricingPage.seo.description')}
        url="https://onerooted.com/pricing"
      />
      {/* Hero */}
      <section className="py-16 md:py-24 relative overflow-hidden">
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
              {t('pricingPage.hero.label')}
            </motion.p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-4 md:mb-6 tracking-tight">
              {t('pricingPage.hero.headline')}{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{t('pricingPage.hero.headlineHighlight')}</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-8">
              {t('pricingPage.hero.subheadline')}
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
      <section className="py-8 md:py-16">
        <div className="container">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-5xl mx-auto"
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
                        {t('pricingPage.mostPopular')}
                      </span>
                    </motion.div>
                  )}
                  
                  <CardHeader className="relative pt-6 pb-4 sm:pt-8">
                    <CardTitle className="text-lg sm:text-xl">{plan.name}</CardTitle>
                    <div className="mt-3 sm:mt-4">
                      <span className={`text-3xl sm:text-4xl font-medium ${plan.featured ? 'bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent' : ''}`}>
                        €{plan.price}
                      </span>
                      <span className="text-muted-foreground text-sm sm:text-base"> {t('pricingPage.perMonth')}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-2">{plan.description}</p>
                    <p className={`text-xs sm:text-sm font-medium mt-2 sm:mt-3 ${plan.featured ? 'bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent' : 'text-primary'}`}>{plan.outcome}</p>
                  </CardHeader>
                  
                  <CardContent className="relative pt-4 pb-6 sm:pb-8">
                    <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
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
                      <Link to={localizedPath("/demo")}>{plan.cta}</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Try Light Section */}
      <section className="py-12 md:py-16">
        <div className="container">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="card-refined relative overflow-hidden border-primary/20">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
              <div className="absolute inset-0 shimmer opacity-20" />
              
              <CardContent className="relative py-8 md:py-10 px-6 md:px-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="text-center md:text-left">
                    <motion.span 
                      className="inline-block text-sm font-medium text-primary mb-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      {t('lightOffer.banner.label')}
                    </motion.span>
                    <h3 className="text-xl md:text-2xl font-medium mb-2">
                      {t('lightOffer.banner.headline')}
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-base">
                      {t('lightOffer.banner.description')}
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl md:text-4xl font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        €{t('lightOffer.banner.price')}
                      </span>
                      <span className="text-muted-foreground text-sm">{t('lightOffer.banner.perMonth')}</span>
                    </div>
                    <Button asChild className="btn-accent whitespace-nowrap">
                      <Link to={localizedPath("/light")} className="flex items-center gap-2">
                        {t('lightOffer.banner.cta')}
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* What's included / not included */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <motion.div 
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-center mb-8 md:mb-12">
              {t('pricingPage.included.title')}
            </h2>

            <motion.div 
              className="grid sm:grid-cols-2 gap-4 md:gap-8"
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
                    <h3 className="font-medium mb-4 text-success">{t('pricingPage.included.always')}</h3>
                    <ul className="space-y-3 text-sm">
                      {alwaysItems.map((item, index) => (
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
                    <h3 className="font-medium mb-4 text-muted-foreground">{t('pricingPage.included.never')}</h3>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      {neverItems.map((item, index) => (
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
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs sm:text-sm font-medium text-primary mb-3 md:mb-4 tracking-wide uppercase">{t('pricingPage.faq.label')}</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
                {t('pricingPage.faq.headline')}
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
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

      {/* CTA */}
      <section className="py-16 md:py-24 bg-muted/30 relative overflow-hidden">
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
              <span>{t('pricingPage.cta.trustBadge')}</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              {t('pricingPage.cta.headline')}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t('pricingPage.cta.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-accent">
                <Link to={localizedPath("/demo")} className="flex items-center gap-2">
                  {t('pricingPage.cta.button')}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to={localizedPath("/product")}>{t('pricingPage.cta.secondary')}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </MarketingLayout>
  );
};

export default Pricing;
