import { MarketingLayout } from "@/components/marketing/MarketingLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Building2, Handshake, ArrowRight, Check, Zap, Target, BarChart3, Eye } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SEO } from "@/components/SEO";
import { useTranslation } from "react-i18next";
import { useLanguageFromUrl } from "@/i18n/useLanguage";

const Partners = () => {
  const { t } = useTranslation();
  useLanguageFromUrl();

  const partnerBenefitsData = t('partnersPage.perspectives.partner.benefits', { returnObjects: true });
  const partnerBenefits = Array.isArray(partnerBenefitsData) ? partnerBenefitsData : [];
  
  const clientBenefitsData = t('partnersPage.perspectives.client.benefits', { returnObjects: true });
  const clientBenefits = Array.isArray(clientBenefitsData) ? clientBenefitsData : [];
  
  const howItWorksStepsData = t('partnersPage.howItWorks.steps', { returnObjects: true });
  const howItWorksSteps = Array.isArray(howItWorksStepsData) ? howItWorksStepsData : [];
  
  const faqItemsRaw = t('partnersPage.faq.items', { returnObjects: true });
  const faqItemsData = Array.isArray(faqItemsRaw) ? faqItemsRaw : [];

  const stepIcons = [Handshake, Zap, Eye, BarChart3];
  const collaborationSteps = howItWorksSteps.map((step: { title: string; desc: string }, index: number) => ({
    icon: stepIcons[index] || Zap,
    title: step.title,
    desc: step.desc,
  }));

  const faqItems = faqItemsData;

  return (
    <MarketingLayout>
      <SEO 
        title={t('partnersPage.seo.title')}
        description={t('partnersPage.seo.description')}
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
              {t('partnersPage.hero.label')}
            </motion.p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 md:mb-6 tracking-tight leading-[1.1]">
              {t('partnersPage.hero.headline')}{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{t('partnersPage.hero.headlineHighlight')}</span>{t('partnersPage.hero.headlineSuffix')}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto">
              {t('partnersPage.hero.subheadline')}
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4"
            >
              <Button asChild size="lg" className="h-12 sm:h-14 px-6 sm:px-8 text-base bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25">
                <Link to="/demo">
                  {t('partnersPage.hero.cta')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="h-12 sm:h-14 px-6 sm:px-8 text-base text-muted-foreground hover:text-foreground">
                <Link to="/product">
                  {t('partnersPage.hero.ctaSecondary')}
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
              {t('partnersPage.perspectives.headline')}
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              {t('partnersPage.perspectives.subheadline')}
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
                      <h3 className="text-xl font-semibold">{t('partnersPage.perspectives.partner.title')}</h3>
                      <p className="text-sm text-muted-foreground">{t('partnersPage.perspectives.partner.subtitle')}</p>
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
                      <h3 className="text-xl font-semibold">{t('partnersPage.perspectives.client.title')}</h3>
                      <p className="text-sm text-muted-foreground">{t('partnersPage.perspectives.client.subtitle')}</p>
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
              <p className="text-xs sm:text-sm font-medium text-primary mb-3 md:mb-4 tracking-wide uppercase">{t('partnersPage.howItWorks.label')}</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 md:mb-4">
                {t('partnersPage.howItWorks.headline')}
              </h2>
              <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
                {t('partnersPage.howItWorks.subheadline')}
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
                {t('partnersPage.howItWorks.punchline')}
              </p>
              <p className="text-muted-foreground mt-1">
                {t('partnersPage.howItWorks.punchlineDesc')}
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
              {t('partnersPage.infrastructure.headline')}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-background/60 mb-6 sm:mb-8 max-w-2xl mx-auto">
              {t('partnersPage.infrastructure.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center text-left max-w-xl mx-auto">
              <div className="flex-1 p-3 sm:p-4 border border-background/10 rounded-xl">
                <p className="font-semibold mb-1 text-sm sm:text-base">{t('partnersPage.infrastructure.forPartners')}</p>
                <p className="text-xs sm:text-sm text-background/50">{t('partnersPage.infrastructure.forPartnersDesc')}</p>
              </div>
              <div className="flex-1 p-3 sm:p-4 border border-background/10 rounded-xl">
                <p className="font-semibold mb-1 text-sm sm:text-base">{t('partnersPage.infrastructure.forClients')}</p>
                <p className="text-xs sm:text-sm text-background/50">{t('partnersPage.infrastructure.forClientsDesc')}</p>
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
              <p className="text-xs sm:text-sm font-medium text-primary mb-3 md:mb-4 tracking-wide uppercase">{t('partnersPage.faq.label')}</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
                {t('partnersPage.faq.headline')}
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Accordion type="single" collapsible className="w-full space-y-3">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index + 1}`} className="border border-border/50 rounded-xl px-6 bg-background">
                    <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
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
              {t('partnersPage.cta.headline')}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t('partnersPage.cta.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="h-14 px-8 text-base bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25">
                <Link to="/demo" className="flex items-center gap-2">
                  {t('partnersPage.cta.button')}
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 px-8 text-base">
                <Link to="/product">{t('partnersPage.cta.secondary')}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </MarketingLayout>
  );
};

export default Partners;
