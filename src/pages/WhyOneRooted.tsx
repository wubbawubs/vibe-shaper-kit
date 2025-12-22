import { MarketingLayout } from "@/components/marketing/MarketingLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { AlertTriangle, Lightbulb, Target, ArrowRight, Rocket, Quote } from "lucide-react";
import { SEO } from "@/components/SEO";
import { useTranslation } from "react-i18next";
import { useLanguageFromUrl } from "@/i18n/useLanguage";

const WhyOneRooted = () => {
  const { t } = useTranslation();
  useLanguageFromUrl();

  const atsProblems = [
    { title: t('whyOneRooted.atsProblems.storage.title'), desc: t('whyOneRooted.atsProblems.storage.desc') },
    { title: t('whyOneRooted.atsProblems.fragment.title'), desc: t('whyOneRooted.atsProblems.fragment.desc') },
    { title: t('whyOneRooted.atsProblems.collaboration.title'), desc: t('whyOneRooted.atsProblems.collaboration.desc') },
    { title: t('whyOneRooted.atsProblems.recruiters.title'), desc: t('whyOneRooted.atsProblems.recruiters.desc') },
  ];

  const roadmapItems = [
    { title: t('whyOneRooted.roadmap.intelligence.title'), desc: t('whyOneRooted.roadmap.intelligence.desc') },
    { title: t('whyOneRooted.roadmap.ecosystems.title'), desc: t('whyOneRooted.roadmap.ecosystems.desc') },
    { title: t('whyOneRooted.roadmap.predictive.title'), desc: t('whyOneRooted.roadmap.predictive.desc') },
    { title: t('whyOneRooted.roadmap.global.title'), desc: t('whyOneRooted.roadmap.global.desc') },
  ];

  const whatYouNeed = t('whyOneRooted.insight.whatYouNeed', { returnObjects: true }) as string[];

  const originSteps = [
    { step: "01", title: t('whyOneRooted.origin.steps.frustration.title'), text: t('whyOneRooted.origin.steps.frustration.text') },
    { step: "02", title: t('whyOneRooted.origin.steps.realization.title'), text: t('whyOneRooted.origin.steps.realization.text') },
    { step: "03", title: t('whyOneRooted.origin.steps.solution.title'), text: t('whyOneRooted.origin.steps.solution.text') },
  ];

  return (
    <MarketingLayout>
      <SEO 
        title={t('whyOneRooted.seo.title')}
        description={t('whyOneRooted.seo.description')}
        url="https://onerooted.com/why-onerooted"
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
              {t('whyOneRooted.hero.badge')}
            </motion.p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 tracking-tight leading-[1.1]">
              {t('whyOneRooted.hero.titlePart1')}{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{t('whyOneRooted.hero.titleHighlight')}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('whyOneRooted.hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why ATS fail */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-8 md:mb-12"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0"
                whileHover={{ scale: 1.05 }}
              >
                <AlertTriangle className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
              </motion.div>
              <div>
                <p className="text-xs sm:text-sm font-medium text-primary mb-1 tracking-wide uppercase">{t('whyOneRooted.problem.badge')}</p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">{t('whyOneRooted.problem.title')}</h2>
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
                  <Card className="h-full group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-border/50 hover:border-primary/30">
                    <CardContent className="py-6 px-6">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <AlertTriangle className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2">{item.title}</h3>
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
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-8 md:mb-12"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0"
                whileHover={{ scale: 1.05 }}
              >
                <Lightbulb className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
              </motion.div>
              <div>
                <p className="text-xs sm:text-sm font-medium text-primary mb-1 tracking-wide uppercase">{t('whyOneRooted.insight.badge')}</p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">{t('whyOneRooted.insight.title')}</h2>
              </div>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-2 gap-8 md:gap-12 items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Structured text */}
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground">
                  {t('whyOneRooted.insight.description')}
                </p>
                
                <div className="space-y-4">
                  <p className="text-sm font-medium text-foreground uppercase tracking-wide">{t('whyOneRooted.insight.whatYouNeedLabel')}</p>
                  <ul className="space-y-3">
                    {whatYouNeed.map((item, index) => (
                      <motion.li 
                        key={index}
                        className="flex items-center gap-3 text-muted-foreground"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * index }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <p className="text-foreground font-semibold pt-2">
                  {t('whyOneRooted.insight.conclusion')}
                </p>
              </div>
              
              {/* Visual comparison - improved */}
              <div className="space-y-6">
                {/* Traditional ATS */}
                <motion.div 
                  className="p-6 rounded-2xl border border-border/50 bg-muted/30 relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                      <AlertTriangle className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <p className="text-sm font-medium text-muted-foreground">{t('whyOneRooted.insight.comparison.ats.label')}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <span className="text-base sm:text-lg font-semibold text-foreground/70">{t('whyOneRooted.insight.comparison.ats.store')}</span>
                    <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                    <span className="text-base sm:text-lg font-semibold text-foreground/70">{t('whyOneRooted.insight.comparison.ats.track')}</span>
                    <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                    <span className="text-base sm:text-lg font-semibold text-foreground/70">{t('whyOneRooted.insight.comparison.ats.report')}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-3">{t('whyOneRooted.insight.comparison.ats.caption')}</p>
                </motion.div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg"
                  >
                    <ArrowRight className="h-5 w-5 text-primary-foreground rotate-90" />
                  </motion.div>
                </div>

                {/* Hiring OS */}
                <motion.div 
                  className="p-6 rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/10 via-primary/5 to-accent/5 relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Subtle glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-2xl" />
                  
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <Lightbulb className="h-4 w-4 text-primary-foreground" />
                      </div>
                      <p className="text-sm font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{t('whyOneRooted.insight.comparison.os.label')}</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-foreground">
                      <span className="text-sm sm:text-base font-medium">{t('whyOneRooted.insight.comparison.os.collaborate')}</span>
                      <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                      <span className="text-sm sm:text-base font-medium">{t('whyOneRooted.insight.comparison.os.decide')}</span>
                      <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                      <span className="text-sm sm:text-base font-medium">{t('whyOneRooted.insight.comparison.os.improve')}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-3">{t('whyOneRooted.insight.comparison.os.caption')}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How OneRooted was born */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-8 md:mb-12"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0"
                whileHover={{ scale: 1.05 }}
              >
                <Target className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
              </motion.div>
              <div>
                <p className="text-xs sm:text-sm font-medium text-primary mb-1 tracking-wide uppercase">{t('whyOneRooted.origin.badge')}</p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">{t('whyOneRooted.origin.title')}</h2>
              </div>
            </motion.div>

            <motion.div 
              className="grid sm:grid-cols-3 gap-6 md:gap-8"
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
              {originSteps.map((item, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                  className="relative text-center sm:text-left"
                >
                  <div className="text-4xl sm:text-6xl font-bold text-primary/10 mb-2 sm:mb-4">{item.step}</div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Quote */}
            <motion.div 
              className="mt-10 md:mt-16 p-6 md:p-8 rounded-2xl bg-card border border-border/50 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Quote className="h-8 w-8 md:h-10 md:w-10 text-primary/20 absolute top-4 left-4 md:top-6 md:left-6" />
              <blockquote className="text-lg sm:text-xl md:text-2xl font-medium text-center px-4 sm:px-8 py-4">
                {t('whyOneRooted.origin.quote')}
              </blockquote>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Where we're going */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-8 md:mb-12"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0"
                whileHover={{ scale: 1.05 }}
              >
                <Rocket className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
              </motion.div>
              <div>
                <p className="text-xs sm:text-sm font-medium text-primary mb-1 tracking-wide uppercase">{t('whyOneRooted.future.badge')}</p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">{t('whyOneRooted.future.title')}</h2>
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
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
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
              {t('whyOneRooted.cta.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t('whyOneRooted.cta.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="h-14 px-8 text-base bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25">
                <Link to="/demo" className="flex items-center gap-2">
                  {t('whyOneRooted.cta.requestDemo')}
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 px-8 text-base">
                <Link to="/product">{t('whyOneRooted.cta.seeHow')}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </MarketingLayout>
  );
};

export default WhyOneRooted;
