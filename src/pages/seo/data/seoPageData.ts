// SEO Landing Pages Data Model - Based on research-driven programmatic SEO plan
// Priority: P0 = immediate, P1 = NL market capture, P2 = long-tail

export type PageType = 
  | "software_type" 
  | "comparison" 
  | "alternative" 
  | "feature" 
  | "guide" 
  | "integration" 
  | "usecase";

export type Template = "T-A" | "T-COMP" | "T-ALT" | "T-FEAT" | "T-GUIDE" | "T-INTEG" | "T-USE";

export type Priority = "P0" | "P1" | "P2";

export type Language = "en" | "nl" | "de";

export interface SEOPage {
  slug: string;
  priority: Priority;
  language: Language;
  pageType: PageType;
  template: Template;
  
  // SEO
  primaryKeyword: string;
  secondaryKeywords: string[];
  
  // Content keys (for i18n)
  contentKey: string;
  
  // Linking
  parentSlugs: string[];
  childSlugs: string[];
  relatedSlugs: string[];
  
  // Schema
  schemaTypes: ("SoftwareApplication" | "BreadcrumbList" | "FAQPage" | "HowTo")[];
  
  // Index control
  noindex?: boolean;
}

// All SEO pages from the Excel plan
export const seoPages: SEOPage[] = [
  // ===== P0: PRIORITY PAGES (Week 1-2) =====
  
  // Software Type Pages
  {
    slug: "ats-software",
    priority: "P0",
    language: "nl",
    pageType: "software_type",
    template: "T-A",
    primaryKeyword: "ATS Software",
    secondaryKeywords: ["recruitmentsysteem", "sollicitantenvolgsysteem", "ATS systeem"],
    contentKey: "ats-software",
    parentSlugs: [],
    childSlugs: ["ats-vergelijken", "beste-ats-software", "ats-checklist"],
    relatedSlugs: ["recruitee-alternatief", "bullhorn-alternatief"],
    schemaTypes: ["SoftwareApplication", "BreadcrumbList"],
  },
  {
    slug: "applicant-tracking-system",
    priority: "P0",
    language: "en",
    pageType: "software_type",
    template: "T-A",
    primaryKeyword: "Applicant Tracking System",
    secondaryKeywords: ["ATS software", "candidate tracking", "recruitment software"],
    contentKey: "applicant-tracking-system",
    parentSlugs: [],
    childSlugs: ["best-ats-software", "ats-comparison"],
    relatedSlugs: ["greenhouse-alternative", "lever-alternative"],
    schemaTypes: ["SoftwareApplication", "BreadcrumbList"],
  },
  {
    slug: "recruitment-software",
    priority: "P0",
    language: "en",
    pageType: "software_type",
    template: "T-A",
    primaryKeyword: "Recruitment Software",
    secondaryKeywords: ["hiring software", "recruiting platform", "talent acquisition software"],
    contentKey: "recruitment-software",
    parentSlugs: [],
    childSlugs: ["best-recruitment-software"],
    relatedSlugs: ["applicant-tracking-system"],
    schemaTypes: ["SoftwareApplication", "BreadcrumbList"],
  },
  
  // Comparison Pages
  {
    slug: "ats-vergelijken",
    priority: "P0",
    language: "nl",
    pageType: "comparison",
    template: "T-COMP",
    primaryKeyword: "ATS vergelijken",
    secondaryKeywords: ["ATS software vergelijking", "welke ATS kiezen", "ATS selectie"],
    contentKey: "ats-vergelijken",
    parentSlugs: ["ats-software"],
    childSlugs: [],
    relatedSlugs: ["beste-ats-software", "ats-checklist"],
    schemaTypes: ["BreadcrumbList"],
  },
  {
    slug: "beste-ats-software",
    priority: "P0",
    language: "nl",
    pageType: "comparison",
    template: "T-COMP",
    primaryKeyword: "Beste ATS software",
    secondaryKeywords: ["top ATS 2025", "ATS ranking", "beste recruitmentsysteem"],
    contentKey: "beste-ats-software",
    parentSlugs: ["ats-software"],
    childSlugs: [],
    relatedSlugs: ["ats-vergelijken", "ats-kosten"],
    schemaTypes: ["BreadcrumbList"],
  },
  
  // Alternative Pages
  {
    slug: "bullhorn-alternatief",
    priority: "P0",
    language: "nl",
    pageType: "alternative",
    template: "T-ALT",
    primaryKeyword: "Bullhorn alternatief",
    secondaryKeywords: ["Bullhorn vervanger", "overstappen van Bullhorn", "Bullhorn concurrent"],
    contentKey: "bullhorn-alternatief",
    parentSlugs: ["ats-software"],
    childSlugs: [],
    relatedSlugs: ["recruitee-alternatief", "carerix-alternatief"],
    schemaTypes: ["BreadcrumbList", "HowTo"],
  },
  {
    slug: "recruitee-alternatief",
    priority: "P0",
    language: "nl",
    pageType: "alternative",
    template: "T-ALT",
    primaryKeyword: "Recruitee alternatief",
    secondaryKeywords: ["Recruitee vervanger", "overstappen van Recruitee", "Tellent alternatief"],
    contentKey: "recruitee-alternatief",
    parentSlugs: ["ats-software"],
    childSlugs: [],
    relatedSlugs: ["bullhorn-alternatief", "homerun-alternatief"],
    schemaTypes: ["BreadcrumbList", "HowTo"],
  },
  
  // Guide Pages
  {
    slug: "ats-checklist",
    priority: "P0",
    language: "nl",
    pageType: "guide",
    template: "T-GUIDE",
    primaryKeyword: "ATS checklist",
    secondaryKeywords: ["ATS selectie checklist", "ATS requirements", "ATS keuze maken"],
    contentKey: "ats-checklist",
    parentSlugs: ["ats-software"],
    childSlugs: [],
    relatedSlugs: ["ats-vergelijken", "ats-kosten"],
    schemaTypes: ["BreadcrumbList", "HowTo"],
  },
  {
    slug: "ats-kosten",
    priority: "P0",
    language: "nl",
    pageType: "guide",
    template: "T-GUIDE",
    primaryKeyword: "ATS kosten",
    secondaryKeywords: ["ATS prijzen", "recruitmentsysteem kosten", "ATS TCO"],
    contentKey: "ats-kosten",
    parentSlugs: ["ats-software"],
    childSlugs: [],
    relatedSlugs: ["ats-checklist", "beste-ats-software"],
    schemaTypes: ["BreadcrumbList"],
  },
  
  // ===== P1: NL MARKET CAPTURE (Week 3-4) =====
  
  // NL-specific alternatives
  {
    slug: "afas-alternatief",
    priority: "P1",
    language: "nl",
    pageType: "alternative",
    template: "T-ALT",
    primaryKeyword: "AFAS alternatief",
    secondaryKeywords: ["AFAS recruitment", "AFAS is geen ATS", "AFAS vervanger"],
    contentKey: "afas-alternatief",
    parentSlugs: ["ats-software"],
    childSlugs: [],
    relatedSlugs: ["hroffice-alternatief", "recruitee-alternatief"],
    schemaTypes: ["BreadcrumbList", "HowTo"],
  },
  {
    slug: "carerix-alternatief",
    priority: "P1",
    language: "nl",
    pageType: "alternative",
    template: "T-ALT",
    primaryKeyword: "Carerix alternatief",
    secondaryKeywords: ["Carerix vervanger", "overstappen van Carerix", "bureausoftware"],
    contentKey: "carerix-alternatief",
    parentSlugs: ["ats-software"],
    childSlugs: [],
    relatedSlugs: ["otys-alternatief", "bullhorn-alternatief"],
    schemaTypes: ["BreadcrumbList", "HowTo"],
  },
  {
    slug: "otys-alternatief",
    priority: "P1",
    language: "nl",
    pageType: "alternative",
    template: "T-ALT",
    primaryKeyword: "OTYS alternatief",
    secondaryKeywords: ["OTYS vervanger", "overstappen van OTYS", "OTYS Go alternatief"],
    contentKey: "otys-alternatief",
    parentSlugs: ["ats-software"],
    childSlugs: [],
    relatedSlugs: ["carerix-alternatief", "bullhorn-alternatief"],
    schemaTypes: ["BreadcrumbList", "HowTo"],
  },
  {
    slug: "hroffice-alternatief",
    priority: "P1",
    language: "nl",
    pageType: "alternative",
    template: "T-ALT",
    primaryKeyword: "HROffice alternatief",
    secondaryKeywords: ["HROffice vervanger", "overstappen van HROffice"],
    contentKey: "hroffice-alternatief",
    parentSlugs: ["ats-software"],
    childSlugs: [],
    relatedSlugs: ["afas-alternatief", "ubeeo-alternatief"],
    schemaTypes: ["BreadcrumbList", "HowTo"],
  },
  {
    slug: "ubeeo-alternatief",
    priority: "P1",
    language: "nl",
    pageType: "alternative",
    template: "T-ALT",
    primaryKeyword: "Ubeeo alternatief",
    secondaryKeywords: ["Ubeeo vervanger", "overstappen van Ubeeo"],
    contentKey: "ubeeo-alternatief",
    parentSlugs: ["ats-software"],
    childSlugs: [],
    relatedSlugs: ["hroffice-alternatief", "homerun-alternatief"],
    schemaTypes: ["BreadcrumbList", "HowTo"],
  },
  {
    slug: "homerun-alternatief",
    priority: "P1",
    language: "nl",
    pageType: "alternative",
    template: "T-ALT",
    primaryKeyword: "Homerun alternatief",
    secondaryKeywords: ["Homerun vervanger", "overstappen van Homerun", "Homerun concurrent"],
    contentKey: "homerun-alternatief",
    parentSlugs: ["ats-software"],
    childSlugs: [],
    relatedSlugs: ["recruitee-alternatief", "ubeeo-alternatief"],
    schemaTypes: ["BreadcrumbList", "HowTo"],
  },
  
  // International alternatives
  {
    slug: "greenhouse-alternative",
    priority: "P1",
    language: "en",
    pageType: "alternative",
    template: "T-ALT",
    primaryKeyword: "Greenhouse alternative",
    secondaryKeywords: ["Greenhouse replacement", "switch from Greenhouse", "Greenhouse competitor"],
    contentKey: "greenhouse-alternative",
    parentSlugs: ["applicant-tracking-system"],
    childSlugs: [],
    relatedSlugs: ["lever-alternative", "workday-alternative"],
    schemaTypes: ["BreadcrumbList", "HowTo"],
  },
  {
    slug: "lever-alternative",
    priority: "P1",
    language: "en",
    pageType: "alternative",
    template: "T-ALT",
    primaryKeyword: "Lever alternative",
    secondaryKeywords: ["Lever replacement", "switch from Lever", "Lever ATS alternative"],
    contentKey: "lever-alternative",
    parentSlugs: ["applicant-tracking-system"],
    childSlugs: [],
    relatedSlugs: ["greenhouse-alternative", "breezy-alternative"],
    schemaTypes: ["BreadcrumbList", "HowTo"],
  },
  {
    slug: "workday-alternative",
    priority: "P1",
    language: "en",
    pageType: "alternative",
    template: "T-ALT",
    primaryKeyword: "Workday alternative",
    secondaryKeywords: ["Workday Recruiting alternative", "switch from Workday"],
    contentKey: "workday-alternative",
    parentSlugs: ["applicant-tracking-system"],
    childSlugs: [],
    relatedSlugs: ["greenhouse-alternative"],
    schemaTypes: ["BreadcrumbList", "HowTo"],
  },
  {
    slug: "breezy-alternative",
    priority: "P1",
    language: "en",
    pageType: "alternative",
    template: "T-ALT",
    primaryKeyword: "Breezy HR alternative",
    secondaryKeywords: ["Breezy replacement", "switch from Breezy HR"],
    contentKey: "breezy-alternative",
    parentSlugs: ["applicant-tracking-system"],
    childSlugs: [],
    relatedSlugs: ["lever-alternative"],
    schemaTypes: ["BreadcrumbList", "HowTo"],
  },
  
  // Additional software type pages
  {
    slug: "hiring-software",
    priority: "P1",
    language: "en",
    pageType: "software_type",
    template: "T-A",
    primaryKeyword: "Hiring Software",
    secondaryKeywords: ["hiring platform", "hiring management software"],
    contentKey: "hiring-software",
    parentSlugs: [],
    childSlugs: [],
    relatedSlugs: ["recruitment-software", "applicant-tracking-system"],
    schemaTypes: ["SoftwareApplication", "BreadcrumbList"],
  },
  {
    slug: "talent-acquisition-software",
    priority: "P1",
    language: "en",
    pageType: "software_type",
    template: "T-A",
    primaryKeyword: "Talent Acquisition Software",
    secondaryKeywords: ["talent acquisition platform", "TA software"],
    contentKey: "talent-acquisition-software",
    parentSlugs: [],
    childSlugs: [],
    relatedSlugs: ["recruitment-software", "hiring-software"],
    schemaTypes: ["SoftwareApplication", "BreadcrumbList"],
  },
  {
    slug: "recruitmentsoftware",
    priority: "P1",
    language: "nl",
    pageType: "software_type",
    template: "T-A",
    primaryKeyword: "Recruitment software",
    secondaryKeywords: ["wervingssoftware", "HR recruitment software"],
    contentKey: "recruitmentsoftware",
    parentSlugs: [],
    childSlugs: [],
    relatedSlugs: ["ats-software"],
    schemaTypes: ["SoftwareApplication", "BreadcrumbList"],
  },
  
  // ===== P2: LONG-TAIL & FEATURES (Week 5-6) =====
  
  // Feature pages
  {
    slug: "kandidaat-ranking-software",
    priority: "P2",
    language: "nl",
    pageType: "feature",
    template: "T-FEAT",
    primaryKeyword: "Kandidaat ranking software",
    secondaryKeywords: ["CV scoring", "automatische kandidaat ranking"],
    contentKey: "kandidaat-ranking",
    parentSlugs: ["ats-software"],
    childSlugs: [],
    relatedSlugs: ["automatische-cv-screening"],
    schemaTypes: ["BreadcrumbList"],
  },
  {
    slug: "automatische-cv-screening",
    priority: "P2",
    language: "nl",
    pageType: "feature",
    template: "T-FEAT",
    primaryKeyword: "Automatische CV screening",
    secondaryKeywords: ["CV parsing", "resume screening software"],
    contentKey: "cv-screening",
    parentSlugs: ["ats-software"],
    childSlugs: [],
    relatedSlugs: ["kandidaat-ranking-software"],
    schemaTypes: ["BreadcrumbList"],
  },
  {
    slug: "recruitment-analytics",
    priority: "P2",
    language: "en",
    pageType: "feature",
    template: "T-FEAT",
    primaryKeyword: "Recruitment Analytics",
    secondaryKeywords: ["hiring analytics", "recruitment metrics"],
    contentKey: "recruitment-analytics",
    parentSlugs: ["recruitment-software"],
    childSlugs: [],
    relatedSlugs: ["candidate-pipeline-management"],
    schemaTypes: ["BreadcrumbList"],
  },
  {
    slug: "candidate-pipeline-management",
    priority: "P2",
    language: "en",
    pageType: "feature",
    template: "T-FEAT",
    primaryKeyword: "Candidate Pipeline Management",
    secondaryKeywords: ["hiring pipeline", "recruitment pipeline software"],
    contentKey: "pipeline-management",
    parentSlugs: ["recruitment-software"],
    childSlugs: [],
    relatedSlugs: ["recruitment-analytics"],
    schemaTypes: ["BreadcrumbList"],
  },
  
  // Use case pages
  {
    slug: "ats-voor-bureaus",
    priority: "P2",
    language: "nl",
    pageType: "usecase",
    template: "T-USE",
    primaryKeyword: "ATS voor bureaus",
    secondaryKeywords: ["recruitmentsoftware uitzendbureaus", "ATS detachering"],
    contentKey: "ats-bureaus",
    parentSlugs: ["ats-software"],
    childSlugs: [],
    relatedSlugs: ["ats-voor-inhouse"],
    schemaTypes: ["BreadcrumbList"],
  },
  {
    slug: "ats-voor-inhouse",
    priority: "P2",
    language: "nl",
    pageType: "usecase",
    template: "T-USE",
    primaryKeyword: "ATS voor inhouse recruiters",
    secondaryKeywords: ["corporate ATS", "internal recruitment software"],
    contentKey: "ats-inhouse",
    parentSlugs: ["ats-software"],
    childSlugs: [],
    relatedSlugs: ["ats-voor-bureaus"],
    schemaTypes: ["BreadcrumbList"],
  },
  {
    slug: "recruitment-software-mkb",
    priority: "P2",
    language: "nl",
    pageType: "usecase",
    template: "T-USE",
    primaryKeyword: "Recruitment software MKB",
    secondaryKeywords: ["ATS klein bedrijf", "recruitmentsysteem MKB"],
    contentKey: "recruitment-mkb",
    parentSlugs: ["ats-software"],
    childSlugs: [],
    relatedSlugs: ["recruitment-software-enterprise"],
    schemaTypes: ["BreadcrumbList"],
  },
  {
    slug: "recruitment-software-enterprise",
    priority: "P2",
    language: "nl",
    pageType: "usecase",
    template: "T-USE",
    primaryKeyword: "Recruitment software enterprise",
    secondaryKeywords: ["enterprise ATS", "groot bedrijf recruitmentsysteem"],
    contentKey: "recruitment-enterprise",
    parentSlugs: ["ats-software"],
    childSlugs: [],
    relatedSlugs: ["recruitment-software-mkb"],
    schemaTypes: ["BreadcrumbList"],
  },
];

// Helper to get page by slug
export function getSEOPageBySlug(slug: string): SEOPage | undefined {
  return seoPages.find(page => page.slug === slug);
}

// Helper to get pages by priority
export function getSEOPagesByPriority(priority: Priority): SEOPage[] {
  return seoPages.filter(page => page.priority === priority);
}

// Helper to get pages by type
export function getSEOPagesByType(pageType: PageType): SEOPage[] {
  return seoPages.filter(page => page.pageType === pageType);
}

// Helper to get pages by language
export function getSEOPagesByLanguage(language: Language): SEOPage[] {
  return seoPages.filter(page => page.language === language);
}

// Get all valid SEO slugs (for routing validation)
export function getAllSEOSlugs(): string[] {
  return seoPages.map(page => page.slug);
}
