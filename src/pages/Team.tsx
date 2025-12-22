import { MarketingLayout } from "@/components/marketing/MarketingLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Linkedin, Heart, Target, Zap, Users, ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { useTranslation } from "react-i18next";
import { useLanguageFromUrl } from "@/i18n/useLanguage";

const Team = () => {
  const { t } = useTranslation();
  useLanguageFromUrl();

  const teamMembers = [
    {
      name: t('team.members.robin.name'),
      role: t('team.members.robin.role'),
      tagline: t('team.members.robin.tagline'),
      bio: t('team.members.robin.bio'),
      linkedin: "#",
    },
    {
      name: t('team.members.erik.name'),
      role: t('team.members.erik.role'),
      tagline: t('team.members.erik.tagline'),
      bio: t('team.members.erik.bio'),
      linkedin: "#",
    },
    {
      name: t('team.members.juliette.name'),
      role: t('team.members.juliette.role'),
      tagline: t('team.members.juliette.tagline'),
      bio: t('team.members.juliette.bio'),
      linkedin: "#",
    },
    {
      name: t('team.members.luuk.name'),
      role: t('team.members.luuk.role'),
      tagline: t('team.members.luuk.tagline'),
      bio: t('team.members.luuk.bio'),
      linkedin: "#",
    },
  ];

  const valueIcons = [Heart, Target, Zap, Users];
  const values = [
    {
      icon: valueIcons[0],
      title: t('team.values.humanFirst.title'),
      description: t('team.values.humanFirst.description'),
    },
    {
      icon: valueIcons[1],
      title: t('team.values.outcomeObsessed.title'),
      description: t('team.values.outcomeObsessed.description'),
    },
    {
      icon: valueIcons[2],
      title: t('team.values.transparent.title'),
      description: t('team.values.transparent.description'),
    },
    {
      icon: valueIcons[3],
      title: t('team.values.collaborative.title'),
      description: t('team.values.collaborative.description'),
    },
  ];

  return (
    <MarketingLayout>
      <SEO 
        title={t('team.seo.title')}
        description={t('team.seo.description')}
        url="https://onerooted.com/team"
      />
      {/* Hero */}
      <section className="py-12 md:py-28 relative overflow-hidden">
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
              {t('team.hero.badge')}
            </motion.p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-4 md:mb-6 tracking-tight">
              {t('team.hero.titlePart1')}{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{t('team.hero.titleHighlight')}</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
              {t('team.hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-12 md:py-28 bg-muted/30">
        <div className="container">
          {/* Collective Frame */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-base md:text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-8 md:mb-12 px-4"
          >
            {t('team.teamGrid.intro')}
          </motion.p>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto"
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
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
              >
                <Card className="card-refined group h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <CardContent className="pt-6 pb-6 sm:pt-8 sm:pb-8">
                    {/* Avatar placeholder */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mb-4 sm:mb-6 flex items-center justify-center">
                      <span className="text-xl sm:text-2xl font-medium text-primary">
                        {member.name.split(" ").map(n => n[0]).join("")}
                      </span>
                    </div>
                    
                    <div className="flex items-start justify-between gap-3 sm:gap-4">
                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">{member.tagline}</p>
                        <h3 className="font-medium text-base sm:text-lg mb-1 truncate">{member.name}</h3>
                        <p className="text-xs sm:text-sm text-primary mb-2 sm:mb-3">{member.role}</p>
                        <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3">{member.bio}</p>
                      </div>
                      
                      <a 
                        href={member.linkedin}
                        className="shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label={`${member.name} on LinkedIn`}
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 md:py-28">
        <div className="container">
          <motion.div 
            className="text-center mb-10 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs sm:text-sm font-medium text-primary mb-3 md:mb-4 tracking-wide uppercase">{t('team.valuesSection.badge')}</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium">{t('team.valuesSection.title')}</h2>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto"
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
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
                className="text-center p-2 sm:p-4"
              >
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-primary/10 mx-auto mb-3 sm:mb-5 flex items-center justify-center">
                  <value.icon className="h-5 w-5 sm:h-7 sm:w-7 text-primary" />
                </div>
                <h3 className="font-medium text-sm sm:text-base mb-1 sm:mb-2">{value.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Part of One-Time Group */}
      <section className="py-12 md:py-28 bg-muted/30">
        <div className="container">
          <motion.div 
            className="max-w-3xl mx-auto text-center px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs sm:text-sm font-medium text-primary mb-3 md:mb-4 tracking-wide uppercase">{t('team.story.badge')}</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-4 md:mb-6">{t('team.story.title')}</h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8">
              {t('team.story.description')}
            </p>
            <p className="text-sm md:text-base text-muted-foreground">
              {t('team.story.location')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-12 md:py-28">
        <div className="container">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="card-refined overflow-hidden relative">
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-xl opacity-50" />
              <div className="absolute inset-[1px] bg-card rounded-xl" />
              
              <CardContent className="relative py-8 md:py-12 px-6 md:px-12 text-center">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-3 md:mb-4">
                  {t('team.joinUs.title')}
                </h2>
                <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8 max-w-xl mx-auto">
                  {t('team.joinUs.description')}
                </p>
                <Button asChild size="lg" className="btn-accent h-11 sm:h-12 px-6 sm:px-8">
                  <Link to="/demo" className="flex items-center gap-2">
                    {t('team.joinUs.cta')}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-28 bg-muted/30 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container relative">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm px-4 py-2 rounded-full mb-8">
              <Users className="h-4 w-4" />
              <span>{t('team.finalCta.badge')}</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-4 md:mb-6">
              {t('team.finalCta.title')}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto">
              {t('team.finalCta.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button asChild size="lg" className="btn-accent">
                <Link to="/why-onerooted" className="flex items-center gap-2">
                  {t('team.finalCta.whyWeBuilt')}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/product">{t('team.finalCta.learnMore')}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </MarketingLayout>
  );
};

export default Team;
