import { MarketingLayout } from "@/components/marketing/MarketingLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  Briefcase, Users, Zap, Check, ArrowRight, Sparkles, 
  Target, BarChart3, UserPlus, Link2, Shield, Clock,
  Building2, Rocket, User, AlertTriangle, TrendingUp,
  Star, Quote, CheckCircle2
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SEO } from "@/components/SEO";
import { useTranslation } from "react-i18next";
import { useLanguageFromUrl } from "@/i18n/useLanguage";

// New components
// LightHeroAnimation removed - using counters instead
import { AnimatedCounter } from "@/components/marketing/light/AnimatedCounter";
import { TrustBadges } from "@/components/marketing/light/TrustBadges";
import { ComparisonTable } from "@/components/marketing/light/ComparisonTable";
import { HowItWorksSteps } from "@/components/marketing/light/HowItWorksSteps";
import { TestimonialCard } from "@/components/marketing/light/TestimonialCard";

const Light = () => {
  const { t } = useTranslation();
  const { localizedPath } = useLanguageFromUrl();

  const featureIcons = [Briefcase, Users, BarChart3, Target, UserPlus, Link2];
  const features = (t('lightOffer.page.features.items', { returnObjects: true }) as Array<{ title: string; description: string }>).map((item, index) => ({
    ...item,
    icon: featureIcons[index] || Zap
  }));

  const problemItems = t('lightOffer.page.problem.items', { returnObjects: true }) as Array<{ title: string; description: string; cost: string }>;
  const solutionPoints = t('lightOffer.page.solution.points', { returnObjects: true }) as string[];
  const talentPoolStats = t('lightOffer.page.talentPool.stats', { returnObjects: true }) as Array<{ value: string; label: string }>;
  const talentPoolCategories = t('lightOffer.page.talentPool.categories', { returnObjects: true }) as string[];
  const howItWorksSteps = t('lightOffer.page.howItWorks.steps', { returnObjects: true }) as Array<{ number: string; title: string; description: string }>;
  const comparisonHeaders = t('lightOffer.page.comparison.headers', { returnObjects: true }) as string[];
  const comparisonRows = t('lightOffer.page.comparison.rows', { returnObjects: true }) as Array<{ label: string; light: string; agency: string; jobboard: string }>;
  const testimonials = t('lightOffer.page.testimonials.items', { returnObjects: true }) as Array<{ quote: string; author: string; role: string; company: string }>;
  const personas = t('lightOffer.page.forWho.personas', { returnObjects: true }) as Array<{ title: string; subtitle: string; description: string; points: string[] }>;
  const guaranteeItems = t('lightOffer.page.guarantee.items', { returnObjects: true }) as Array<{ title: string; description: string }>;
  const pricingIncludes = t('lightOffer.page.pricing.includes', { returnObjects: true }) as string[];
  const faqs = t('lightOffer.page.faq.items', { returnObjects: true }) as Array<{ question: string; answer: string }>;

  const personaIcons = [Rocket, Building2, User];

  return (
    <MarketingLayout>
      <SEO 
        title={t('lightOffer.page.seo.title')}
        description={t('lightOffer.page.seo.description')}
        
      />

      {/* Hero Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-primary/10 via-accent/5 to-transparent rounded-full blur-3xl pointer-events-none" />
        
        <div className="container relative">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm px-4 py-2 rounded-full mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
            >
              <span className="font-medium">{t('lightOffer.page.hero.label')}</span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 tracking-tight">
              {t('lightOffer.page.hero.headline')}{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {t('lightOffer.page.hero.headlineHighlight')}
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              {t('lightOffer.page.hero.subheadline')}
            </p>

            {/* Stats with Animated Counters */}
            <motion.div
              className="flex flex-wrap justify-center gap-12 mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <AnimatedCounter 
                value={t('lightOffer.page.hero.stats.companies')} 
                label={t('lightOffer.page.hero.stats.companiesLabel')}
                duration={1.5}
              />
              <AnimatedCounter 
                value={t('lightOffer.page.hero.stats.candidates')} 
                label={t('lightOffer.page.hero.stats.candidatesLabel')}
                duration={2}
              />
            </motion.div>

            {/* Hero CTA */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-baseline gap-2">
                <span className="text-2xl text-muted-foreground line-through">€{t('lightOffer.page.pricing.previousPrice')}</span>
                <span className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  €{t('lightOffer.page.pricing.price')}
                </span>
                <span className="text-xl text-muted-foreground">{t('lightOffer.page.pricing.perMonth')}</span>
              </div>
            </motion.div>
            <motion.div
              className="mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Button asChild size="lg" className="btn-accent text-lg px-8 py-6">
                <Link to={localizedPath("/demo")} className="flex items-center gap-2">
                  {t('lightOffer.page.pricing.cta')}
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <p className="text-sm text-muted-foreground mt-3">{t('lightOffer.page.pricing.trust')}</p>
            </motion.div>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <TrustBadges />
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-medium text-label mb-3 tracking-wide uppercase">{t('lightOffer.page.problem.label')}</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold max-w-4xl mx-auto">
              {t('lightOffer.page.problem.headline')}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            {problemItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-destructive/20 bg-destructive/5 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <AlertTriangle className="h-8 w-8 text-destructive" />
                      <span className="text-sm font-bold text-destructive bg-destructive/10 px-3 py-1 rounded-full">{item.cost}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-center text-xl md:text-2xl font-medium max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {t('lightOffer.page.problem.conclusion')}
          </motion.p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm font-medium text-label mb-3 tracking-wide uppercase">{t('lightOffer.page.solution.label')}</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6">
                {t('lightOffer.page.solution.headline')}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {t('lightOffer.page.solution.description')}
              </p>
              <ul className="space-y-4">
                {solutionPoints.map((point, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <CheckCircle2 className="h-6 w-6 text-success shrink-0 mt-0.5" />
                    <span className="text-lg">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="relative overflow-hidden border-2 border-primary/20 hover:border-primary/30 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
                <CardContent className="relative pt-8 pb-8">
                  <div className="text-center mb-6">
                    <p className="text-sm font-medium text-primary mb-2">{t('lightOffer.page.pricing.label')}</p>
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-lg text-muted-foreground line-through">€{t('lightOffer.page.pricing.previousPrice')}</span>
                      <span className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">€{t('lightOffer.page.pricing.price')}</span>
                      <span className="text-muted-foreground">{t('lightOffer.page.pricing.perMonth')}</span>
                    </div>
                    <p className="text-sm text-success font-medium mt-2">{t('lightOffer.page.pricing.savings')}</p>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {pricingIncludes.map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-success" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild size="lg" className="btn-accent w-full">
                    <Link to={localizedPath("/demo")} className="flex items-center justify-center gap-2">
                      {t('lightOffer.page.pricing.cta')}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <p className="text-xs text-center text-muted-foreground mt-3">{t('lightOffer.page.pricing.trust')}</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-medium text-label mb-3 tracking-wide uppercase">{t('lightOffer.page.features.label')}</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
              {t('lightOffer.page.features.title')}
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <feature.icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Talent Pool Section with Animated Counters */}
      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-medium text-label mb-3 tracking-wide uppercase">{t('lightOffer.page.talentPool.label')}</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6">
              {t('lightOffer.page.talentPool.headline')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t('lightOffer.page.talentPool.description')}
            </p>
          </motion.div>

          {/* Animated Stats */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            {talentPoolStats.map((stat, index) => (
              <AnimatedCounter
                key={index}
                value={stat.value}
                label={stat.label}
                duration={2 + index * 0.3}
              />
            ))}
          </div>

          <motion.div
            className="flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {talentPoolCategories.map((category, index) => (
              <motion.span
                key={index}
                className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium hover:bg-primary/20 transition-colors cursor-default"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                {category}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section with Improved Steps */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-medium text-label mb-3 tracking-wide uppercase">{t('lightOffer.page.howItWorks.label')}</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
              {t('lightOffer.page.howItWorks.headline')}
            </h2>
          </motion.div>

          <HowItWorksSteps steps={howItWorksSteps} />
        </div>
      </section>

      {/* Comparison Section with Enhanced Table */}
      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-medium text-label mb-3 tracking-wide uppercase">{t('lightOffer.page.comparison.label')}</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
              {t('lightOffer.page.comparison.headline')}
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <ComparisonTable headers={comparisonHeaders} rows={comparisonRows} />
          </div>

          <motion.p
            className="text-center text-xl font-medium mt-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {t('lightOffer.page.comparison.conclusion')}
          </motion.p>
        </div>
      </section>

      {/* Testimonials Section with Enhanced Cards */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-medium text-label mb-3 tracking-wide uppercase">{t('lightOffer.page.testimonials.label')}</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
              {t('lightOffer.page.testimonials.headline')}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* For Who Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-medium text-label mb-3 tracking-wide uppercase">{t('lightOffer.page.forWho.label')}</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
              {t('lightOffer.page.forWho.headline')}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {personas.map((persona, index) => {
              const Icon = personaIcons[index] || User;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                    <CardContent className="pt-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-1">{persona.title}</h3>
                      <p className="text-sm text-primary mb-3">{persona.subtitle}</p>
                      <p className="text-muted-foreground mb-4">{persona.description}</p>
                      <ul className="space-y-2">
                        {persona.points.map((point, pointIndex) => (
                          <li key={pointIndex} className="flex items-center gap-2 text-sm">
                            <Check className="h-4 w-4 text-success" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-medium text-label mb-3 tracking-wide uppercase">{t('lightOffer.page.guarantee.label')}</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
              {t('lightOffer.page.guarantee.headline')}
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {guaranteeItems.map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  className="w-14 h-14 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Shield className="h-7 w-7 text-success" />
                </motion.div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm font-medium text-label mb-3 tracking-wide uppercase">
                {t('lightOffer.page.faq.label')}
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
                {t('lightOffer.page.faq.headline')}
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Accordion type="single" collapsible className="w-full space-y-3">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index}
                    value={`faq-${index}`} 
                    className="border border-border/50 rounded-xl px-6 bg-background hover:border-border transition-colors"
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

      {/* Final CTA Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container relative">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6">
              {t('lightOffer.page.cta.headline')}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">
              {t('lightOffer.page.cta.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-accent text-lg px-8 py-6">
                <Link to={localizedPath("/demo")} className="flex items-center gap-2">
                  {t('lightOffer.page.cta.button')}
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                <Link to={localizedPath("/pricing")}>{t('lightOffer.page.cta.secondary')}</Link>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-6 flex items-center justify-center gap-2">
              <Shield className="h-4 w-4 text-success" />
              {t('lightOffer.page.cta.trust')}
            </p>
          </motion.div>
        </div>
      </section>
    </MarketingLayout>
  );
};

export default Light;
