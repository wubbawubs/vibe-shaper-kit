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
import { ATSChecklist } from "@/components/seo/ATSChecklist";
import { ATSComparisonMatrix } from "@/components/seo/ATSComparisonMatrix";

// New template sections
import { SEOIntegrationHowTo } from "./sections/SEOIntegrationHowTo";
import { SEOIndustryWorkflow } from "./sections/SEOIndustryWorkflow";
import { SEORoleStakeholder } from "./sections/SEORoleStakeholder";
import { SEOGlossaryDefinition } from "./sections/SEOGlossaryDefinition";

const BASE_URL = "https://onerooted.nl";

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

  // Determine content key based on page type
  const getContentKeyPrefix = () => {
    switch (pageData.pageType) {
      case "industry":
        return `seoPages.industries.${pageData.contentKey}`;
      case "integration":
        return `seoPages.integrations.${pageData.contentKey}`;
      case "role":
        return `seoPages.stakeholders.${pageData.contentKey}`;
      case "glossary":
        return `seoPages.glossary.${pageData.contentKey}`;
      default:
        return `seoPages.${pageData.contentKey}`;
    }
  };
  const contentKey = getContentKeyPrefix();
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

  // Common content extraction
  const getCommonContent = () => ({
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
  });

  // Render based on template
  const renderContent = () => {
    const content = getCommonContent();

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
        const showComparisonMatrix = seoSlug === "ats-vergelijken" || seoSlug === "beste-ats-software" || seoSlug === "best-ats-software" || seoSlug === "ats-comparison";
        
        return (
          <>
            <SEOHero {...content.hero} />
            {showComparisonMatrix && <ATSComparisonMatrix />}
            {criteria.length > 0 && !showComparisonMatrix && (
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

      case "T-GUIDE": // Guide pages (like ats-kosten, ats-checklist)
        const guideCriteria = t(`${contentKey}.criteria`, { returnObjects: true, defaultValue: [] }) as { title: string; description: string; mustHave: boolean }[];
        const showTCOCalculator = seoSlug === "ats-kosten";
        const showATSChecklist = seoSlug === "ats-checklist";
        
        return (
          <>
            <SEOHero {...content.hero} />
            {showTCOCalculator && <TCOCalculator />}
            {showATSChecklist && <ATSChecklist />}
            {guideCriteria.length > 0 && !showATSChecklist && (
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

      case "T-FEAT": // Feature pages
        return (
          <>
            <SEOHero {...content.hero} />
            {content.painPoints.length > 0 && (
              <SEOPainPoints
                headline={t(`${contentKey}.problemHeadline`, "Uitdagingen zonder deze feature")}
                painPoints={content.painPoints}
              />
            )}
            {content.solutionPoints.length > 0 && (
              <SEOSolution
                headline={t(`${contentKey}.solutionHeadline`, "Hoe OneRooted dit oplost")}
                solutionPoints={content.solutionPoints}
              />
            )}
            {content.features.length > 0 && (
              <SEOFeatureHighlights
                headline={t(`${contentKey}.featuresHeadline`, "Kernfunctionaliteit")}
                features={content.features}
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

      case "T-USE": // Use case pages
        return (
          <>
            <SEOHero {...content.hero} />
            {content.painPoints.length > 0 && (
              <SEOPainPoints
                headline={t(`${contentKey}.challengesHeadline`, "Specifieke uitdagingen")}
                painPoints={content.painPoints}
              />
            )}
            {content.solutionPoints.length > 0 && (
              <SEOSolution
                headline={t(`${contentKey}.solutionHeadline`, "Hoe OneRooted helpt")}
                solutionPoints={content.solutionPoints}
              />
            )}
            {content.features.length > 0 && (
              <SEOFeatureHighlights
                headline={t(`${contentKey}.featuresHeadline`, "Relevante features")}
                features={content.features}
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

      case "T-INT": // Integration pages
        const integrationSteps = t(`${contentKey}.integrationSteps`, { returnObjects: true, defaultValue: [] }) as { title: string; description: string; duration?: string }[];
        const integrationBenefits = t(`${contentKey}.integrationBenefits`, { returnObjects: true, defaultValue: [] }) as string[];
        const integrationName = pageData.primaryKeyword.replace("ATS ", "").replace(" integratie", "").replace(" koppeling", "");
        
        return (
          <>
            <SEOHero {...content.hero} />
            <SEOIntegrationHowTo
              headline={t(`${contentKey}.howToHeadline`, `Zo koppel je ${integrationName}`)}
              subheadline={t(`${contentKey}.howToSubheadline`, "")}
              integrationName={integrationName}
              steps={integrationSteps}
              benefits={integrationBenefits}
              technicalNote={t(`${contentKey}.technicalNote`, "")}
            />
            {content.solutionPoints.length > 0 && (
              <SEOSolution
                headline={t(`${contentKey}.solutionHeadline`, "Wat de integratie oplevert")}
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

      case "T-IND": // Industry pages
        const industryLabel = t(`${contentKey}.label`, "");
        const industryName = industryLabel || pageData.primaryKeyword.replace("ATS voor ", "").replace("ATS for ", "");
        
        // Fetch raw translations for industry data with Array.isArray checks
        const challengesRaw = t(`${contentKey}.challenges`, { returnObjects: true });
        const challenges = Array.isArray(challengesRaw) ? challengesRaw : [];
        
        const workflowRaw = t(`${contentKey}.workflow`, { returnObjects: true });
        const workflowSteps = Array.isArray(workflowRaw) ? workflowRaw as { stage: string; description: string; metric?: string }[] : [];
        
        const complianceRaw = t(`${contentKey}.compliance`, { returnObjects: true });
        const compliancePoints = Array.isArray(complianceRaw) ? complianceRaw : [];
        
        const kpisRaw = t(`${contentKey}.kpis`, { returnObjects: true });
        const keyMetrics = Array.isArray(kpisRaw) ? kpisRaw as { metric: string; target: string; description?: string }[] : [];
        
        const rolesRaw = t(`${contentKey}.roles`, { returnObjects: true });
        const commonRoles = Array.isArray(rolesRaw) ? rolesRaw : [];
        
        // Transform kpis to keyMetrics format
        const formattedMetrics = keyMetrics.map(kpi => ({
          label: kpi.metric,
          value: kpi.target
        }));
        
        return (
          <>
            <SEOHero {...content.hero} />
            <SEOIndustryWorkflow
              headline={t(`${contentKey}.workflowHeadline`, `Recruitment in ${industryName}`)}
              industryName={industryName}
              challenges={challenges.length > 0 ? challenges : content.painPoints}
              workflowSteps={workflowSteps}
              compliancePoints={compliancePoints}
              keyMetrics={formattedMetrics}
              commonRoles={commonRoles}
            />
            {content.solutionPoints.length > 0 && (
              <SEOSolution
                headline={t(`${contentKey}.solutionHeadline`, `Hoe OneRooted helpt in ${industryName.toLowerCase()}`)}
                solutionPoints={content.solutionPoints}
              />
            )}
            {content.features.length > 0 && (
              <SEOFeatureHighlights
                headline={t(`${contentKey}.featuresHeadline`, "Relevante functionaliteit")}
                features={content.features}
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

      case "T-ROLE": // Stakeholder/Role pages
        const roleName = pageData.primaryKeyword.replace("ATS voor ", "").replace("ATS for ", "");
        const kpis = t(`${contentKey}.kpis`, { returnObjects: true, defaultValue: [] }) as { metric: string; description: string; howWeHelp: string }[];
        const buyingObjections = t(`${contentKey}.buyingObjections`, { returnObjects: true, defaultValue: [] }) as { objection: string; response: string }[];
        const valueProps = t(`${contentKey}.valueProps`, { returnObjects: true, defaultValue: [] }) as string[];
        
        return (
          <>
            <SEOHero {...content.hero} />
            <SEORoleStakeholder
              headline={t(`${contentKey}.stakeholderHeadline`, `Waarom ${roleName.toLowerCase()} kiezen voor OneRooted`)}
              roleName={roleName}
              painPoints={content.painPoints}
              kpis={kpis}
              buyingObjections={buyingObjections}
              valueProps={valueProps.length > 0 ? valueProps : content.solutionPoints}
            />
            <SEOCTA
              headline={t("finalCta.headline")}
              subheadline={t("finalCta.subheadline")}
              ctaText={t("finalCta.cta")}
              variant="dark"
            />
          </>
        );

      case "T-GLOSS": // Glossary/Knowledge base pages
        const term = t(`${contentKey}.term`, pageData.primaryKeyword);
        const definition = t(`${contentKey}.definition`, "");
        const explanation = t(`${contentKey}.explanation`, "");
        const whyItMatters = t(`${contentKey}.whyItMatters`, "");
        const examples = t(`${contentKey}.examples`, { returnObjects: true, defaultValue: [] }) as string[];
        const relatedTerms = t(`${contentKey}.relatedTerms`, { returnObjects: true, defaultValue: [] }) as { slug: string; term: string }[];
        const relatedFeature = t(`${contentKey}.relatedFeature`, { returnObjects: true, defaultValue: null }) as { slug: string; title: string; description: string } | null;
        
        return (
          <>
            <SEOGlossaryDefinition
              term={term}
              definition={definition}
              explanation={explanation}
              whyItMatters={whyItMatters}
              examples={examples}
              relatedTerms={relatedTerms}
              relatedFeature={relatedFeature || undefined}
            />
            <SEOCTA
              headline={t("finalCta.headline")}
              subheadline={t("finalCta.subheadline")}
              ctaText={t("finalCta.cta")}
              variant="default"
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
