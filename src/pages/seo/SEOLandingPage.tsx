import { useParams, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MarketingLayout } from "@/components/marketing/MarketingLayout";
import { SEOHead } from "@/components/seo/SEOHead";
import { getSEOPageBySlug, getAllSEOSlugs } from "./data/seoPageData";

// Sections
import { SEOHero } from "./sections/SEOHero";
import { SEOPainPoints } from "./sections/SEOPainPoints";
import { SEOSolution } from "./sections/SEOSolution";
import { SEOFeatureHighlights } from "./sections/SEOFeatureHighlights";
import { SEOComparisonTable } from "./sections/SEOComparisonTable";
import { SEOCTA } from "./sections/SEOCTA";
import { SEORelatedPages } from "./sections/SEORelatedPages";
import { SEOMigrationPath } from "./sections/SEOMigrationPath";
import { SEOBuyingCriteria } from "./sections/SEOBuyingCriteria";
import { TCOCalculator } from "@/components/seo/TCOCalculator";

const BASE_URL = "https://onerooted.com";

export default function SEOLandingPage() {
  const { seoSlug, lang } = useParams<{ seoSlug: string; lang?: string }>();
  const { t } = useTranslation();
  
  // Validate slug exists
  const validSlugs = getAllSEOSlugs();
  if (!seoSlug || !validSlugs.includes(seoSlug)) {
    return <Navigate to="/" replace />;
  }
  
  const pageData = getSEOPageBySlug(seoSlug);
  if (!pageData) {
    return <Navigate to="/" replace />;
  }

  const contentKey = `seoPages.${pageData.contentKey}`;
  const langPrefix = lang ? `/${lang}` : "";
  const currentUrl = `${langPrefix}/${seoSlug}`;
  
  // Generate alternate languages
  const alternateLanguages = [
    { lang: "en", url: `${BASE_URL}/${seoSlug}` },
    { lang: "nl", url: `${BASE_URL}/nl/${seoSlug}` },
    { lang: "de", url: `${BASE_URL}/de/${seoSlug}` },
  ];

  // Generate breadcrumbs
  const breadcrumbs = [
    { name: "Home", url: langPrefix || "/" },
    { name: t(`${contentKey}.breadcrumb`, pageData.primaryKeyword), url: currentUrl },
  ];

  // Get related pages for internal linking
  const relatedPages = pageData.relatedSlugs.slice(0, 3).map(slug => {
    const related = getSEOPageBySlug(slug);
    return related ? {
      slug,
      title: t(`seoPages.${related.contentKey}.title`, related.primaryKeyword),
      description: t(`seoPages.${related.contentKey}.shortDescription`, ""),
    } : null;
  }).filter(Boolean) as { slug: string; title: string; description: string }[];

  // Render based on template
  const renderContent = () => {
    const content = {
      hero: {
        label: t(`${contentKey}.label`, ""),
        headline: t(`${contentKey}.headline`, pageData.primaryKeyword),
        headlineHighlight: t(`${contentKey}.headlineHighlight`, ""),
        subheadline: t(`${contentKey}.subheadline`, ""),
        ctaText: t("finalCta.cta", "Demo aanvragen"),
        ctaSecondaryText: t("finalCta.ctaSecondary", "Bekijk prijzen"),
      },
      painPoints: t(`${contentKey}.painPoints`, { returnObjects: true, defaultValue: [] }) as string[],
      solutionPoints: t(`${contentKey}.solutionPoints`, { returnObjects: true, defaultValue: [] }) as string[],
      features: t(`${contentKey}.features`, { returnObjects: true, defaultValue: [] }) as { icon: string; title: string; description: string }[],
    };

    switch (pageData.template) {
      case "T-A": // Software Type
        return (
          <>
            <SEOHero {...content.hero} />
            {content.painPoints.length > 0 && (
              <SEOPainPoints
                headline={t(`${contentKey}.problemHeadline`, "Het probleem met traditionele tools")}
                painPoints={content.painPoints}
                consequence={t(`${contentKey}.consequence`, "")}
              />
            )}
            {content.solutionPoints.length > 0 && (
              <SEOSolution
                headline={t(`${contentKey}.solutionHeadline`, "OneRooted is anders")}
                solutionPoints={content.solutionPoints}
                uniqueAngle={t(`${contentKey}.uniqueAngle`, "")}
              />
            )}
            {content.features.length > 0 && (
              <SEOFeatureHighlights
                headline={t(`${contentKey}.featuresHeadline`, "Wat je krijgt")}
                features={content.features}
              />
            )}
            <SEOComparisonTable
              headline={t("comparison.headline", "Niet het zoveelste ATS")}
              traditionalLabel={t("comparison.traditional", "Traditioneel ATS")}
              rows={[
                { aspect: "Focus", traditional: t("comparison.rows.focus.ats"), onerooted: t("comparison.rows.focus.onerooted") },
                { aspect: "Workflows", traditional: t("comparison.rows.flex.ats"), onerooted: t("comparison.rows.flex.onerooted") },
                { aspect: "Prioriteit", traditional: t("comparison.rows.priority.ats"), onerooted: t("comparison.rows.priority.onerooted") },
                { aspect: "Data", traditional: t("comparison.rows.data.ats"), onerooted: t("comparison.rows.data.onerooted") },
              ]}
            />
            <SEOCTA
              headline={t("finalCta.headline")}
              subheadline={t("finalCta.subheadline")}
              ctaText={t("finalCta.cta")}
              ctaSecondaryText={t("finalCta.ctaSecondary")}
              variant="dark"
            />
          </>
        );

      case "T-ALT": // Alternative
        const migrationSteps = t(`${contentKey}.migrationSteps`, { returnObjects: true, defaultValue: [] }) as { title: string; description: string; duration?: string }[];
        const migrationBenefits = t(`${contentKey}.migrationBenefits`, { returnObjects: true, defaultValue: [] }) as string[];
        
        return (
          <>
            <SEOHero {...content.hero} />
            {content.painPoints.length > 0 && (
              <SEOPainPoints
                headline={t(`${contentKey}.whySwitchHeadline`, `Waarom teams overstappen van ${pageData.primaryKeyword.replace(" alternatief", "")}`)}
                painPoints={content.painPoints}
              />
            )}
            {migrationSteps.length > 0 && (
              <SEOMigrationPath
                headline={t(`${contentKey}.migrationHeadline`, "Stap voor stap overstappen")}
                competitorName={pageData.primaryKeyword.replace(" alternatief", "").replace(" alternative", "")}
                steps={migrationSteps}
                benefits={migrationBenefits}
              />
            )}
            {content.solutionPoints.length > 0 && (
              <SEOSolution
                headline={t(`${contentKey}.solutionHeadline`, "Wat OneRooted anders doet")}
                solutionPoints={content.solutionPoints}
              />
            )}
            <SEOCTA
              headline={t("finalCta.headline")}
              subheadline={t("finalCta.subheadline")}
              ctaText={t("finalCta.cta")}
              variant="dark"
            />
          </>
        );

      case "T-COMP": // Comparison
        const criteria = t(`${contentKey}.criteria`, { returnObjects: true, defaultValue: [] }) as { title: string; description: string; mustHave: boolean }[];
        
        return (
          <>
            <SEOHero {...content.hero} />
            {criteria.length > 0 && (
              <SEOBuyingCriteria
                headline={t(`${contentKey}.criteriaHeadline`, "Waar moet je op letten?")}
                criteria={criteria}
              />
            )}
            {content.solutionPoints.length > 0 && (
              <SEOSolution
                headline={t(`${contentKey}.solutionHeadline`, "Waarom OneRooted")}
                solutionPoints={content.solutionPoints}
              />
            )}
            <SEOCTA
              headline={t("finalCta.headline")}
              subheadline={t("finalCta.subheadline")}
              ctaText={t("finalCta.cta")}
              variant="dark"
            />
          </>
        );

      case "T-GUIDE": // Guide pages (like ats-kosten)
        const guideCriteria = t(`${contentKey}.criteria`, { returnObjects: true, defaultValue: [] }) as { title: string; description: string; mustHave: boolean }[];
        const showTCOCalculator = seoSlug === "ats-kosten";
        
        return (
          <>
            <SEOHero {...content.hero} />
            {showTCOCalculator && <TCOCalculator />}
            {guideCriteria.length > 0 && (
              <SEOBuyingCriteria
                headline={t(`${contentKey}.criteriaHeadline`, "Waar moet je op letten?")}
                criteria={guideCriteria}
              />
            )}
            {content.solutionPoints.length > 0 && (
              <SEOSolution
                headline={t(`${contentKey}.solutionHeadline`, "Waarom OneRooted")}
                solutionPoints={content.solutionPoints}
              />
            )}
            <SEOCTA
              headline={t("finalCta.headline")}
              subheadline={t("finalCta.subheadline")}
              ctaText={t("finalCta.cta")}
              variant="dark"
            />
          </>
        );

      default: // Fallback for other templates
        return (
          <>
            <SEOHero {...content.hero} />
            <SEOCTA
              headline={t("finalCta.headline")}
              subheadline={t("finalCta.subheadline")}
              ctaText={t("finalCta.cta")}
              variant="dark"
            />
          </>
        );
    }
  };

  return (
    <MarketingLayout>
      <SEOHead
        title={`${t(`${contentKey}.metaTitle`, pageData.primaryKeyword)} | One Rooted`}
        description={t(`${contentKey}.metaDescription`, "")}
        keywords={pageData.secondaryKeywords}
        url={currentUrl}
        breadcrumbs={breadcrumbs}
        alternateLanguages={alternateLanguages}
        includeSoftwareSchema={pageData.schemaTypes.includes("SoftwareApplication")}
        softwareCategory={pageData.primaryKeyword}
        noindex={pageData.noindex}
      />
      
      {renderContent()}
      
      {relatedPages.length > 0 && (
        <SEORelatedPages
          headline={t("seoPages.relatedPages", "Gerelateerde pagina's")}
          pages={relatedPages}
        />
      )}
    </MarketingLayout>
  );
}
