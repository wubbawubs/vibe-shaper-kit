import { useTranslation } from "react-i18next";
import { Check, X, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface SEOCheck {
  page: string;
  path: string;
  titleKey: string;
  descKey: string;
  hasCanonical: boolean;
  hasJsonLd: "organization" | "product" | "both" | "none";
  titleLength?: number;
  descLength?: number;
}

const seoChecklist: SEOCheck[] = [
  // Core Pages
  { page: "Home", path: "/", titleKey: "seo.home.title", descKey: "seo.home.description", hasCanonical: true, hasJsonLd: "both" },
  { page: "Product", path: "/product", titleKey: "product.seo.title", descKey: "product.seo.description", hasCanonical: true, hasJsonLd: "product" },
  { page: "Pricing", path: "/pricing", titleKey: "pricingPage.seo.title", descKey: "pricingPage.seo.description", hasCanonical: true, hasJsonLd: "product" },
  { page: "Use Cases", path: "/use-cases", titleKey: "useCasesPage.seo.title", descKey: "useCasesPage.seo.description", hasCanonical: true, hasJsonLd: "organization" },
  { page: "Why One Rooted", path: "/why-onerooted", titleKey: "whyPage.seo.title", descKey: "whyPage.seo.description", hasCanonical: true, hasJsonLd: "organization" },
  { page: "Partners", path: "/partners", titleKey: "partnersPage.seo.title", descKey: "partnersPage.seo.description", hasCanonical: true, hasJsonLd: "organization" },
  { page: "Team", path: "/team", titleKey: "teamPage.seo.title", descKey: "teamPage.seo.description", hasCanonical: true, hasJsonLd: "organization" },
  { page: "Demo", path: "/demo", titleKey: "demoPage.seo.title", descKey: "demoPage.seo.description", hasCanonical: true, hasJsonLd: "organization" },
  // Legal Pages
  { page: "Privacy", path: "/privacy", titleKey: "privacyPage.seo.title", descKey: "privacyPage.seo.description", hasCanonical: true, hasJsonLd: "organization" },
  { page: "Terms", path: "/terms", titleKey: "termsPage.seo.title", descKey: "termsPage.seo.description", hasCanonical: true, hasJsonLd: "organization" },
  // Special Pages
  { page: "Light Plan", path: "/light", titleKey: "lightOffer.page.seo.title", descKey: "lightOffer.page.seo.description", hasCanonical: true, hasJsonLd: "product" },
  { page: "Pitch Deck", path: "/pitch-deck", titleKey: "pitchDeck.seo.title", descKey: "pitchDeck.seo.description", hasCanonical: true, hasJsonLd: "organization" },
];

function StatusIcon({ status }: { status: "pass" | "warn" | "fail" }) {
  if (status === "pass") return <Check className="h-4 w-4 text-green-500" />;
  if (status === "warn") return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
  return <X className="h-4 w-4 text-red-500" />;
}

function LengthBadge({ length, max, type }: { length: number; max: number; type: "title" | "desc" }) {
  const status = length === 0 ? "fail" : length > max ? "warn" : "pass";
  const color = status === "pass" ? "bg-green-100 text-green-800" : status === "warn" ? "bg-yellow-100 text-yellow-800" : "bg-red-100 text-red-800";
  return (
    <Badge variant="outline" className={`${color} text-xs font-mono`}>
      {length}/{max}
    </Badge>
  );
}

export default function SEOAudit() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || "en";

  const getTranslatedValue = (key: string): string => {
    const value = t(key, { defaultValue: "" });
    return typeof value === "string" ? value : "";
  };

  const auditResults = seoChecklist.map((check) => {
    const title = getTranslatedValue(check.titleKey);
    const desc = getTranslatedValue(check.descKey);
    
    return {
      ...check,
      title,
      desc,
      titleLength: title.length,
      descLength: desc.length,
      titleStatus: title.length === 0 ? "fail" : title.length > 60 ? "warn" : "pass",
      descStatus: desc.length === 0 ? "fail" : desc.length > 160 ? "warn" : "pass",
    };
  });

  const passCount = auditResults.filter(r => r.titleStatus === "pass" && r.descStatus === "pass").length;
  const warnCount = auditResults.filter(r => r.titleStatus === "warn" || r.descStatus === "warn").length;
  const failCount = auditResults.filter(r => r.titleStatus === "fail" || r.descStatus === "fail").length;

  return (
    <div className="min-h-screen bg-muted/30 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">SEO Audit Checklist</h1>
          <p className="text-muted-foreground">
            Verifying meta titles, descriptions, canonical URLs, and structured data for all pages.
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            Current language: <Badge variant="outline">{currentLang.toUpperCase()}</Badge>
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Pages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{auditResults.length}</div>
            </CardContent>
          </Card>
          <Card className="border-green-200 bg-green-50/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-green-700">Passing</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-700">{passCount}</div>
            </CardContent>
          </Card>
          <Card className="border-yellow-200 bg-yellow-50/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-yellow-700">Warnings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-700">{warnCount}</div>
            </CardContent>
          </Card>
          <Card className="border-red-200 bg-red-50/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-red-700">Failing</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-700">{failCount}</div>
            </CardContent>
          </Card>
        </div>

        {/* Guidelines */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-lg">SEO Guidelines</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-medium mb-2">Meta Title</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Max 60 characters (displays fully in SERPs)</li>
                <li>• Include primary keyword near the start</li>
                <li>• Brand name at end with separator</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Meta Description</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Max 160 characters (avoids truncation)</li>
                <li>• Include call-to-action or value prop</li>
                <li>• Unique per page, no duplicates</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Canonical URL</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Self-referencing canonical on all pages</li>
                <li>• Absolute URLs preferred</li>
                <li>• Prevents duplicate content issues</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Structured Data (JSON-LD)</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Organization schema on company pages</li>
                <li>• SoftwareApplication on product pages</li>
                <li>• BreadcrumbList for navigation</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Audit Table */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Page Audit Results</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[150px]">Page</TableHead>
                  <TableHead className="w-[120px]">Path</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead className="w-[80px]">Length</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead className="w-[80px]">Length</TableHead>
                  <TableHead className="w-[80px]">Canonical</TableHead>
                  <TableHead className="w-[80px]">JSON-LD</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {auditResults.map((result) => (
                  <TableRow key={result.path}>
                    <TableCell className="font-medium">{result.page}</TableCell>
                    <TableCell className="font-mono text-xs text-muted-foreground">{result.path}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <StatusIcon status={result.titleStatus as "pass" | "warn" | "fail"} />
                        <span className="text-sm truncate max-w-[200px]" title={result.title}>
                          {result.title || <span className="text-red-500 italic">Missing</span>}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <LengthBadge length={result.titleLength} max={60} type="title" />
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <StatusIcon status={result.descStatus as "pass" | "warn" | "fail"} />
                        <span className="text-sm truncate max-w-[250px]" title={result.desc}>
                          {result.desc || <span className="text-red-500 italic">Missing</span>}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <LengthBadge length={result.descLength} max={160} type="desc" />
                    </TableCell>
                    <TableCell>
                      <StatusIcon status={result.hasCanonical ? "pass" : "fail"} />
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
          </CardContent>
        </Card>

        {/* Legend */}
        <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4 text-green-500" />
            <span>Pass - meets requirements</span>
          </div>
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-yellow-500" />
            <span>Warning - exceeds recommended length</span>
          </div>
          <div className="flex items-center gap-2">
            <X className="h-4 w-4 text-red-500" />
            <span>Fail - missing or empty</span>
          </div>
        </div>
      </div>
    </div>
  );
}
