import { useTranslation } from "react-i18next";
import { Check, X, AlertTriangle, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { seoPages, type SEOPage } from "@/pages/seo/data/seoPageData";

interface CorePageCheck {
  page: string;
  path: string;
  titleKey: string;
  descKey: string;
  hasCanonical: boolean;
  hasJsonLd: "organization" | "product" | "both" | "none";
}

const corePages: CorePageCheck[] = [
  { page: "Home", path: "/", titleKey: "seo.home.title", descKey: "seo.home.description", hasCanonical: true, hasJsonLd: "both" },
  { page: "Product", path: "/product", titleKey: "product.seo.title", descKey: "product.seo.description", hasCanonical: true, hasJsonLd: "product" },
  { page: "Pricing", path: "/pricing", titleKey: "pricingPage.seo.title", descKey: "pricingPage.seo.description", hasCanonical: true, hasJsonLd: "product" },
  { page: "Use Cases", path: "/use-cases", titleKey: "useCasesPage.seo.title", descKey: "useCasesPage.seo.description", hasCanonical: true, hasJsonLd: "organization" },
  { page: "Why One Rooted", path: "/why-onerooted", titleKey: "whyPage.seo.title", descKey: "whyPage.seo.description", hasCanonical: true, hasJsonLd: "organization" },
  { page: "Partners", path: "/partners", titleKey: "partnersPage.seo.title", descKey: "partnersPage.seo.description", hasCanonical: true, hasJsonLd: "organization" },
  { page: "Team", path: "/team", titleKey: "teamPage.seo.title", descKey: "teamPage.seo.description", hasCanonical: true, hasJsonLd: "organization" },
  { page: "Demo", path: "/demo", titleKey: "demoPage.seo.title", descKey: "demoPage.seo.description", hasCanonical: true, hasJsonLd: "organization" },
  { page: "Privacy", path: "/privacy", titleKey: "privacyPage.seo.title", descKey: "privacyPage.seo.description", hasCanonical: true, hasJsonLd: "organization" },
  { page: "Terms", path: "/terms", titleKey: "termsPage.seo.title", descKey: "termsPage.seo.description", hasCanonical: true, hasJsonLd: "organization" },
  { page: "Light Plan", path: "/light", titleKey: "lightOffer.page.seo.title", descKey: "lightOffer.page.seo.description", hasCanonical: true, hasJsonLd: "product" },
  { page: "Pitch Deck", path: "/pitch-deck", titleKey: "pitchDeck.seo.title", descKey: "pitchDeck.seo.description", hasCanonical: true, hasJsonLd: "organization" },
];

type StatusType = "pass" | "warn" | "fail";

function StatusIcon({ status }: { status: StatusType }) {
  if (status === "pass") return <Check className="h-4 w-4 text-green-600" />;
  if (status === "warn") return <AlertTriangle className="h-4 w-4 text-amber-500" />;
  return <X className="h-4 w-4 text-red-600" />;
}

function LengthBadge({ length, max }: { length: number; max: number }) {
  const status: StatusType = length === 0 ? "fail" : length > max ? "warn" : "pass";
  const colorClass = status === "pass" 
    ? "border-green-300 bg-green-50 text-green-700" 
    : status === "warn" 
    ? "border-amber-300 bg-amber-50 text-amber-700" 
    : "border-red-300 bg-red-50 text-red-700";
  return (
    <Badge variant="outline" className={`${colorClass} text-xs font-mono`}>
      {length}/{max}
    </Badge>
  );
}

function PriorityBadge({ priority }: { priority: string }) {
  const colorClass = priority === "P0" 
    ? "bg-red-100 text-red-700 border-red-200" 
    : priority === "P1" 
    ? "bg-amber-100 text-amber-700 border-amber-200" 
    : "bg-slate-100 text-slate-600 border-slate-200";
  return <Badge variant="outline" className={`${colorClass} text-xs`}>{priority}</Badge>;
}

function TypeBadge({ type }: { type: string }) {
  const labels: Record<string, string> = {
    software_type: "Software",
    comparison: "Comparison",
    alternative: "Alternative",
    feature: "Feature",
    guide: "Guide",
    integration: "Integration",
    industry: "Industry",
    role: "Role",
    glossary: "Glossary",
    usecase: "Use Case",
  };
  return <Badge variant="secondary" className="text-xs">{labels[type] || type}</Badge>;
}

export default function SEOAudit() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || "en";

  const getTranslatedValue = (key: string): string => {
    const value = t(key, { defaultValue: "" });
    return typeof value === "string" ? value : "";
  };

  // Core pages audit
  const coreAuditResults = corePages.map((check) => {
    const title = getTranslatedValue(check.titleKey);
    const desc = getTranslatedValue(check.descKey);
    
    return {
      ...check,
      title,
      desc,
      titleLength: title.length,
      descLength: desc.length,
      titleStatus: (title.length === 0 ? "fail" : title.length > 60 ? "warn" : "pass") as StatusType,
      descStatus: (desc.length === 0 ? "fail" : desc.length > 160 ? "warn" : "pass") as StatusType,
    };
  });

  // SEO pages audit - filter by current language
  const filteredSeoPages = seoPages.filter(p => p.language === currentLang);
  
  const seoAuditResults = filteredSeoPages.map((page: SEOPage) => {
    // Try multiple naming conventions based on page type
    const pageTypeKeyMap: Record<string, string> = {
      industry: `seoPages.industries.${page.contentKey}`,
      integration: `integrations.${page.contentKey}`,
    };
    
    const baseKey = pageTypeKeyMap[page.pageType] || `seoPages.${page.contentKey}`;
    
    // Try different key patterns
    const titleKeys = [
      `${baseKey}.metaTitle`,
      `${baseKey}.meta.title`,
      `seoPages.${page.contentKey}.metaTitle`,
      `seoPages.${page.contentKey}.meta.title`,
    ];
    
    const descKeys = [
      `${baseKey}.metaDescription`,
      `${baseKey}.meta.description`,
      `seoPages.${page.contentKey}.metaDescription`,
      `seoPages.${page.contentKey}.meta.description`,
    ];
    
    let title = "";
    for (const key of titleKeys) {
      title = getTranslatedValue(key);
      if (title) break;
    }
    
    let desc = "";
    for (const key of descKeys) {
      desc = getTranslatedValue(key);
      if (desc) break;
    }
    
    return {
      ...page,
      title,
      desc,
      titleLength: title.length,
      descLength: desc.length,
      titleStatus: (title.length === 0 ? "fail" : title.length > 60 ? "warn" : "pass") as StatusType,
      descStatus: (desc.length === 0 ? "fail" : desc.length > 160 ? "warn" : "pass") as StatusType,
    };
  });

  // Stats for core pages
  const corePassCount = coreAuditResults.filter(r => r.titleStatus === "pass" && r.descStatus === "pass").length;
  const coreWarnCount = coreAuditResults.filter(r => r.titleStatus === "warn" || r.descStatus === "warn").length;
  const coreFailCount = coreAuditResults.filter(r => r.titleStatus === "fail" || r.descStatus === "fail").length;

  // Stats for SEO pages
  const seoPassCount = seoAuditResults.filter(r => r.titleStatus === "pass" && r.descStatus === "pass").length;
  const seoWarnCount = seoAuditResults.filter(r => r.titleStatus === "warn" || r.descStatus === "warn").length;
  const seoFailCount = seoAuditResults.filter(r => r.titleStatus === "fail" || r.descStatus === "fail").length;

  // Group SEO pages by type
  const groupedSeoPages = seoAuditResults.reduce((acc, page) => {
    const type = page.pageType;
    if (!acc[type]) acc[type] = [];
    acc[type].push(page);
    return acc;
  }, {} as Record<string, typeof seoAuditResults>);

  return (
    <div className="min-h-screen bg-muted/30 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">SEO Audit Checklist</h1>
          <p className="text-muted-foreground">
            Verifying meta titles, descriptions, canonical URLs, and structured data for all pages.
          </p>
          <div className="flex items-center gap-4 mt-3">
            <span className="text-sm text-muted-foreground">Current language:</span>
            <div className="flex gap-2">
              {["en", "nl", "de"].map((lang) => (
                <Button
                  key={lang}
                  variant={currentLang === lang ? "default" : "outline"}
                  size="sm"
                  onClick={() => i18n.changeLanguage(lang)}
                >
                  {lang.toUpperCase()}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <Tabs defaultValue="core" className="space-y-6">
          <TabsList>
            <TabsTrigger value="core">
              Core Pages ({corePages.length})
            </TabsTrigger>
            <TabsTrigger value="seo">
              SEO Pages ({filteredSeoPages.length})
            </TabsTrigger>
            <TabsTrigger value="guidelines">
              Guidelines
            </TabsTrigger>
          </TabsList>

          {/* Core Pages Tab */}
          <TabsContent value="core" className="space-y-6">
            {/* Summary Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{coreAuditResults.length}</div>
                </CardContent>
              </Card>
              <Card className="border-green-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-green-700">Passing</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-700">{corePassCount}</div>
                </CardContent>
              </Card>
              <Card className="border-amber-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-amber-700">Warnings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-amber-700">{coreWarnCount}</div>
                </CardContent>
              </Card>
              <Card className="border-red-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-red-700">Failing</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-red-700">{coreFailCount}</div>
                </CardContent>
              </Card>
            </div>

            {/* Core Pages Table */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Core Marketing Pages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[140px]">Page</TableHead>
                        <TableHead>Title</TableHead>
                        <TableHead className="w-[70px]">Len</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead className="w-[70px]">Len</TableHead>
                        <TableHead className="w-[70px]">JSON-LD</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {coreAuditResults.map((result) => (
                        <TableRow key={result.path}>
                          <TableCell className="font-medium">
                            <a 
                              href={`/${currentLang}${result.path}`} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 hover:text-primary"
                            >
                              {result.page}
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <StatusIcon status={result.titleStatus} />
                              <span className="text-sm truncate max-w-[180px]" title={result.title}>
                                {result.title || <span className="text-red-600 italic">Missing</span>}
                              </span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <LengthBadge length={result.titleLength} max={60} />
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <StatusIcon status={result.descStatus} />
                              <span className="text-sm truncate max-w-[220px]" title={result.desc}>
                                {result.desc || <span className="text-red-600 italic">Missing</span>}
                              </span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <LengthBadge length={result.descLength} max={160} />
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline" className="text-xs">
                              {result.hasJsonLd}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* SEO Pages Tab */}
          <TabsContent value="seo" className="space-y-6">
            {/* Summary Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total ({currentLang.toUpperCase()})</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{seoAuditResults.length}</div>
                </CardContent>
              </Card>
              <Card className="border-green-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-green-700">Passing</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-700">{seoPassCount}</div>
                </CardContent>
              </Card>
              <Card className="border-amber-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-amber-700">Warnings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-amber-700">{seoWarnCount}</div>
                </CardContent>
              </Card>
              <Card className="border-red-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-red-700">Failing</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-red-700">{seoFailCount}</div>
                </CardContent>
              </Card>
            </div>

            {/* SEO Pages by Type */}
            {Object.entries(groupedSeoPages).map(([type, pages]) => (
              <Card key={type}>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <TypeBadge type={type} />
                    <span className="capitalize">{type.replace("_", " ")} Pages</span>
                    <span className="text-sm font-normal text-muted-foreground">({pages.length})</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[60px]">P</TableHead>
                          <TableHead className="w-[180px]">Slug</TableHead>
                          <TableHead>Title</TableHead>
                          <TableHead className="w-[70px]">Len</TableHead>
                          <TableHead>Description</TableHead>
                          <TableHead className="w-[70px]">Len</TableHead>
                          <TableHead className="w-[70px]">Index</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {pages.map((result) => (
                          <TableRow key={result.slug}>
                            <TableCell>
                              <PriorityBadge priority={result.priority} />
                            </TableCell>
                            <TableCell className="font-mono text-xs">
                              <a 
                                href={`/${currentLang}/${result.slug}`} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 hover:text-primary"
                              >
                                /{result.slug}
                                <ExternalLink className="h-3 w-3" />
                              </a>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <StatusIcon status={result.titleStatus} />
                                <span className="text-sm truncate max-w-[160px]" title={result.title}>
                                  {result.title || <span className="text-red-600 italic">Missing</span>}
                                </span>
                              </div>
                            </TableCell>
                            <TableCell>
                              <LengthBadge length={result.titleLength} max={60} />
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <StatusIcon status={result.descStatus} />
                                <span className="text-sm truncate max-w-[180px]" title={result.desc}>
                                  {result.desc || <span className="text-red-600 italic">Missing</span>}
                                </span>
                              </div>
                            </TableCell>
                            <TableCell>
                              <LengthBadge length={result.descLength} max={160} />
                            </TableCell>
                            <TableCell>
                              {result.noindex ? (
                                <Badge variant="outline" className="text-xs border-amber-300 bg-amber-50 text-amber-700">noindex</Badge>
                              ) : (
                                <Badge variant="outline" className="text-xs border-green-300 bg-green-50 text-green-700">index</Badge>
                              )}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Guidelines Tab */}
          <TabsContent value="guidelines">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">SEO Best Practices</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h4 className="font-medium mb-2">Meta Title</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Max 60 characters (displays fully in SERPs)</li>
                    <li>• Include primary keyword near the start</li>
                    <li>• Brand name at end with separator</li>
                    <li>• Unique per page, no duplicates</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Meta Description</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Max 160 characters (avoids truncation)</li>
                    <li>• Include call-to-action or value prop</li>
                    <li>• Unique per page, no duplicates</li>
                    <li>• Should entice clicks from SERP</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Canonical URL</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Self-referencing canonical on all pages</li>
                    <li>• Absolute URLs preferred</li>
                    <li>• Prevents duplicate content issues</li>
                    <li>• Include hreflang for multi-language</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Structured Data (JSON-LD)</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Organization schema on company pages</li>
                    <li>• SoftwareApplication on product pages</li>
                    <li>• BreadcrumbList for navigation</li>
                    <li>• FAQPage for FAQ sections</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Legend */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Status Legend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Pass - meets requirements</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-amber-500" />
                    <span>Warning - exceeds recommended length</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <X className="h-4 w-4 text-red-600" />
                    <span>Fail - missing or empty</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
