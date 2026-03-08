import { MarketingLayout } from "@/components/marketing/MarketingLayout";
import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";
import { useTranslation } from "react-i18next";
import { useLanguageFromUrl } from "@/i18n/useLanguage";

interface Section {
  title: string;
  content: string;
  items?: string[];
  email?: string;
}

const Terms = () => {
  const { t, i18n } = useTranslation();
  useLanguageFromUrl();

  const sections = t('termsPage.sections', { returnObjects: true }) as Section[];

  const formatDate = () => {
    const locale = i18n.language === 'nl' ? 'nl-NL' : i18n.language === 'de' ? 'de-DE' : 'en-US';
    return new Date().toLocaleDateString(locale, { month: 'long', day: 'numeric', year: 'numeric' });
  };

  return (
    <MarketingLayout>
      <SEO 
        title={t('termsPage.seo.title')}
        description={t('termsPage.seo.description')}
        
      />
      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div 
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-medium mb-8">{t('termsPage.title')}</h1>
            
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-xl mb-8">
                {t('termsPage.lastUpdated')} {formatDate()}
              </p>

              {Array.isArray(sections) && sections.map((section, index) => (
                <div key={index}>
                  <h2 className="text-2xl font-medium text-foreground mt-12 mb-4">{section.title}</h2>
                  <p>
                    {section.content}
                    {section.email && (
                      <>
                        {" "}
                        <a href={`mailto:${section.email}`} className="text-primary hover:underline">
                          {section.email}
                        </a>
                      </>
                    )}
                  </p>
                  {section.items && (
                    <ul className="list-disc pl-6 space-y-2 mt-4">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </MarketingLayout>
  );
};

export default Terms;