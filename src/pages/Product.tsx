import { MarketingLayout } from "@/components/marketing/MarketingLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ProductHeroAnimation } from "@/components/marketing/product/ProductHeroAnimation";
import { RankingSystemVisualization } from "@/components/marketing/product/RankingSystemVisualization";
import { ProcessFlowAnimation } from "@/components/marketing/product/ProcessFlowAnimation";
import { MetricsDashboardAnimation } from "@/components/marketing/product/MetricsDashboardAnimation";
import { CollaborationAnimation } from "@/components/marketing/product/CollaborationAnimation";
import { Check, Minus, Sparkles, ArrowRight, Zap, Eye, BarChart3, Users2 } from "lucide-react";
import { SEO } from "@/components/SEO";
import { useTranslation } from "react-i18next";
import { getLocalizedPath } from "@/i18n/useLanguage";
import { type Language } from "@/i18n/config";

const Product = () => {
  const { t } = useTranslation();
  const { lang } = useParams<{ lang: string }>();

  const getLocalizedHref = (href: string) => {
    return lang ? getLocalizedPath(href, lang as Language) : href;
  };

  const traditionalItems = t("product.atsComparison.traditionalItems", { returnObjects: true }) as string[];
  const onerootedItems = t("product.atsComparison.onerootedItems", { returnObjects: true }) as string[];

  return (
    <MarketingLayout>
      <SEO 
        title={t("product.seo.title")}
        description={t("product.seo.description")}
        url="https://onerooted.com/product"
      />
      {/* Hero */}
      <section className="py-12 md:py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.p 
                className="text-xs md:text-sm font-medium text-label mb-3 md:mb-4 tracking-wide uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {t("product.hero.label")}
              </motion.p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 md:mb-6 tracking-tight leading-[1.1]">
                {t("product.hero.headline")}{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {t("product.hero.headlineHighlight")}
                </span>{" "}
                {t("product.hero.headlineSuffix")}
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-6 md:mb-8 max-w-xl">
                {t("product.hero.subheadline")}
              </p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3"
              >
                <Button asChild size="lg" className="h-12 md:h-14 px-6 md:px-8 text-base bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25">
                  <Link to={getLocalizedHref("/demo")}>
                    {t("product.hero.cta")}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="ghost" size="lg" className="h-12 md:h-14 px-6 md:px-8 text-base text-muted-foreground hover:text-foreground">
                  <Link to={getLocalizedHref("/pricing")}>
                    {t("product.hero.ctaSecondary")}
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden md:block"
            >
              <ProductHeroAnimation />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ranking System */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm font-medium text-label tracking-wide uppercase">
                  {t("product.ranking.label")}
                </p>
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                {t("product.ranking.headline")}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t("product.ranking.description")}
              </p>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <RankingSystemVisualization />
          </motion.div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Eye className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm font-medium text-label tracking-wide uppercase">
                  {t("product.pipeline.label")}
                </p>
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                {t("product.pipeline.headline")}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t("product.pipeline.description")}
              </p>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ProcessFlowAnimation />
          </motion.div>
        </div>
      </section>

      {/* Intelligence Layer */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <BarChart3 className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm font-medium text-label tracking-wide uppercase">
                  {t("product.intelligence.label")}
                </p>
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                {t("product.intelligence.headline")}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t("product.intelligence.description")}
              </p>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <MetricsDashboardAnimation />
          </motion.div>
        </div>
      </section>

      {/* Collaboration */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Users2 className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm font-medium text-label tracking-wide uppercase">
                  {t("product.collaboration.label")}
                </p>
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                {t("product.collaboration.headline")}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t("product.collaboration.description")}
              </p>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <CollaborationAnimation />
          </motion.div>
        </div>
      </section>

      {/* ATS Comparison */}
      <section className="py-16 md:py-24 bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-sm font-medium text-background/60 mb-4 tracking-wide uppercase">
              {t("product.atsComparison.label")}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
              {t("product.atsComparison.headline")}
            </h2>
            <p className="text-lg text-background/60 max-w-xl mx-auto">
              {t("product.atsComparison.description")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full border-background/10 bg-background/5 backdrop-blur-sm">
                <CardContent className="py-8 px-6">
                  <h3 className="font-semibold mb-6 text-background/50">
                    {t("product.atsComparison.traditional")}
                  </h3>
                  <ul className="space-y-4 text-sm text-background/60">
                    {traditionalItems.map((item, i) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <Minus className="w-4 h-4 text-background/30 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full relative overflow-hidden border-primary/30 bg-background">
                <CardContent className="py-8 px-6 relative">
                  <div className="flex items-center gap-2 mb-6">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-primary">OneRooted</h3>
                  </div>
                  <ul className="space-y-4 text-sm">
                    {onerootedItems.map((item, i) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.12 }}
                        className="flex items-start gap-3"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + i * 0.12, type: "spring", stiffness: 300 }}
                          className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5"
                        >
                          <Check className="w-3 h-3 text-primary" />
                        </motion.div>
                        <span className="text-foreground">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              {t("product.cta.headline")}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t("product.cta.description")}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="h-14 px-8 text-base bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25">
                <Link to={getLocalizedHref("/demo")} className="flex items-center gap-2">
                  {t("product.cta.button")}
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 px-8 text-base">
                <Link to={getLocalizedHref("/pricing")}>{t("product.cta.secondary")}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </MarketingLayout>
  );
};

export default Product;
