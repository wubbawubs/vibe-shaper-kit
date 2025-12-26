import { MarketingLayout } from "@/components/marketing/MarketingLayout";
import { motion } from "framer-motion";
import { Clock, CheckCircle, Users, Calendar, MessageCircle } from "lucide-react";
import { SEO } from "@/components/SEO";
import { useTranslation } from "react-i18next";
import { useLanguageFromUrl } from "@/i18n/useLanguage";
import { CalendlyEmbed } from "@/components/calendly/CalendlyEmbed";
import { Card, CardContent } from "@/components/ui/card";

const Demo = () => {
  const { t } = useTranslation();
  useLanguageFromUrl();

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
            className="max-w-3xl mx-auto text-center mb-12"
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

          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            {/* Calendly Embed - Takes more space */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <CalendlyEmbed className="shadow-xl" />
            </motion.div>

            {/* What to expect - Side panel */}
            <motion.div 
              className="lg:col-span-2 space-y-6"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div>
                <h2 className="text-xl font-semibold mb-5">{t('demoPage.expect.headline')}</h2>
                
                <motion.div 
                  className="space-y-4"
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
                      className="flex gap-3 group"
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.div 
                        className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        <item.icon className="h-4 w-4 text-primary" />
                      </motion.div>
                      <div>
                        <h3 className="font-medium text-sm mb-0.5">{item.title}</h3>
                        <p className="text-xs text-muted-foreground">{item.desc}</p>
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
                  <div className="absolute top-3 left-3 text-4xl font-serif text-primary/20">"</div>
                  <CardContent className="pt-8 pb-4 px-6">
                    <p className="text-muted-foreground italic relative z-10 text-sm leading-relaxed">
                      {t('demoPage.expect.testimonial')}
                    </p>
                    <p className="text-xs font-semibold mt-3">{t('demoPage.expect.testimonialAuthor')}</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10"
              >
                <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <Clock className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">{t('demoPage.expect.quickResponse')}</p>
                  <p className="text-xs text-muted-foreground">{t('demoPage.expect.quickResponseDesc')}</p>
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
