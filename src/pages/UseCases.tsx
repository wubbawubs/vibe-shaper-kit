import { MarketingLayout } from "@/components/marketing/MarketingLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { TrendingUp, Users, Handshake, RefreshCw, ArrowRight, Check, Sparkles } from "lucide-react";
import { SEO } from "@/components/SEO";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLanguageFromUrl } from "@/i18n/useLanguage";

const UseCases = () => {
  const { t } = useTranslation();
  useLanguageFromUrl();
  
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const animationProps = prefersReducedMotion
    ? { initial: {}, animate: {}, transition: {} }
    : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 } };

  const icons = [TrendingUp, Users, Handshake, RefreshCw];
  
  const casesData = t('useCasesPage.cases', { returnObjects: true }) as Array<{
    title: string;
    problem: string;
    solution: string;
    outcomes: string[];
    stat: string;
    statLabel: string;
  }>;

  const useCases = (Array.isArray(casesData) ? casesData : []).map((caseItem, idx) => ({
    icon: icons[idx] || TrendingUp,
    ...caseItem,
  }));

  return (
    <MarketingLayout>
      <SEO 
        title={t('useCasesPage.seo.title')}
        description={t('useCasesPage.seo.description')}
        url="https://onerooted.com/use-cases"
      />
      {/* Hero */}
      <section className="py-16 md:py-24 relative overflow-hidden" aria-labelledby="usecases-hero-title">
        {/* Background glow */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" 
          aria-hidden="true"
          role="presentation"
        />
        
        <div className="container relative">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            {...animationProps}
          >
            <motion.p 
              className="text-sm font-medium text-label mb-4 tracking-wide uppercase"
              initial={prefersReducedMotion ? {} : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={prefersReducedMotion ? {} : { delay: 0.2 }}
            >
              {t('useCasesPage.hero.label')}
            </motion.p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 tracking-tight leading-[1.1]">
              {t('useCasesPage.hero.headline')}{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{t('useCasesPage.hero.headlineHighlight')}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('useCasesPage.hero.subheadline')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-8 md:py-16">
        <div className="container">
          <motion.div 
            className="space-y-8 max-w-5xl mx-auto"
            initial={prefersReducedMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: prefersReducedMotion ? 0 : 0.15,
                },
              },
            }}
          >
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                variants={prefersReducedMotion ? {} : {
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
              >
                <Card className="overflow-hidden group hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 border-border/50">
                  <CardHeader className="bg-muted/30 pb-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                      <div className="flex items-center gap-4">
                        <div 
                          className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0"
                        >
                          <useCase.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                        </div>
                        <CardTitle className="text-xl font-semibold">{useCase.title}</CardTitle>
                      </div>
                      
                      {/* Stat badge - now visible on all screens */}
                      <div className="flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 sm:px-4 sm:py-2 rounded-full w-fit">
                        <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
                        <span className="text-xs sm:text-sm font-semibold">{useCase.stat} {useCase.statLabel}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-sm font-semibold text-label mb-2 tracking-wide uppercase">{t('useCasesPage.theProblem')}</h4>
                        <p className="text-foreground">{useCase.problem}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-label mb-2 tracking-wide uppercase">{t('useCasesPage.howHelps')}</h4>
                        <p className="text-foreground">{useCase.solution}</p>
                      </div>
                    </div>
                    <div className="mt-6 pt-6 border-t border-border/50">
                      <h4 className="text-sm font-semibold text-muted-foreground mb-3">{t('useCasesPage.keyOutcomes')}</h4>
                      <div className="flex flex-wrap gap-3">
                        {useCase.outcomes.map((outcome, outcomeIndex) => (
                          <motion.span 
                            key={outcomeIndex} 
                            className="inline-flex items-center gap-2 text-sm bg-primary/10 text-primary px-4 py-2 rounded-full"
                            initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: prefersReducedMotion ? 0 : 0.05 * outcomeIndex, duration: 0.3 }}
                          >
                            <Check className="h-3.5 w-3.5" aria-hidden="true" />
                            {outcome}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 relative overflow-hidden" aria-labelledby="usecases-cta-title">
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" 
          aria-hidden="true"
          role="presentation"
        />
        
        <div className="container relative">
          <motion.div 
            className="text-center max-w-2xl mx-auto"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={prefersReducedMotion ? {} : { duration: 0.6 }}
          >
            <h2 id="usecases-cta-title" className="text-3xl md:text-4xl font-semibold mb-4">
              {t('useCasesPage.cta.headline')}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t('useCasesPage.cta.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="h-12 sm:h-14 px-6 sm:px-8 text-base bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25">
                <Link to="/demo" className="flex items-center gap-2">
                  {t('useCasesPage.cta.button')}
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 sm:h-14 px-6 sm:px-8 text-base">
                <Link to="/product">{t('useCasesPage.cta.secondary')}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </MarketingLayout>
  );
};

export default UseCases;
