import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Check, X, Minus, Star, ChevronDown, Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

type ScoreValue = "full" | "partial" | "none" | "na";

interface ATSSystem {
  id: string;
  name: string;
  logo?: string;
  isHighlighted?: boolean;
  tagline?: string;
}

interface ComparisonCategory {
  id: string;
  name: string;
  criteria: {
    id: string;
    name: string;
    tooltip?: string;
    weight: number;
    scores: Record<string, ScoreValue>;
  }[];
}

export function ATSComparisonMatrix() {
  const { t, i18n } = useTranslation();
  const langPrefix = i18n.language === "nl" ? "/nl" : i18n.language === "de" ? "/de" : "";
  
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set(["core"]));
  const [selectedSystems, setSelectedSystems] = useState<string[]>(["onerooted", "recruitee", "bullhorn"]);

  const systems: ATSSystem[] = useMemo(() => 
    t("atsComparison.systems", { returnObjects: true, defaultValue: [] }) as ATSSystem[]
  , [t]);

  const categories: ComparisonCategory[] = useMemo(() => 
    t("atsComparison.categories", { returnObjects: true, defaultValue: [] }) as ComparisonCategory[]
  , [t]);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId);
      } else {
        newSet.add(categoryId);
      }
      return newSet;
    });
  };

  const toggleSystem = (systemId: string) => {
    if (systemId === "onerooted") return; // OneRooted always shown
    setSelectedSystems(prev => {
      if (prev.includes(systemId)) {
        return prev.filter(id => id !== systemId);
      }
      if (prev.length >= 4) {
        return [...prev.slice(1), systemId];
      }
      return [...prev, systemId];
    });
  };

  const getScoreIcon = (score: ScoreValue, isHighlighted: boolean) => {
    switch (score) {
      case "full":
        return (
          <div className={cn(
            "h-6 w-6 rounded-full flex items-center justify-center",
            isHighlighted ? "bg-primary text-primary-foreground" : "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400"
          )}>
            <Check className="h-4 w-4" />
          </div>
        );
      case "partial":
        return (
          <div className="h-6 w-6 rounded-full flex items-center justify-center bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400">
            <Minus className="h-4 w-4" />
          </div>
        );
      case "none":
        return (
          <div className="h-6 w-6 rounded-full flex items-center justify-center bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400">
            <X className="h-4 w-4" />
          </div>
        );
      case "na":
        return (
          <div className="h-6 w-6 rounded-full flex items-center justify-center bg-muted text-muted-foreground">
            <span className="text-xs">—</span>
          </div>
        );
    }
  };

  const calculateSystemScore = (systemId: string): number => {
    let totalWeight = 0;
    let achievedWeight = 0;

    categories.forEach(cat => {
      cat.criteria.forEach(criterion => {
        const score = criterion.scores[systemId];
        totalWeight += criterion.weight;
        if (score === "full") achievedWeight += criterion.weight;
        else if (score === "partial") achievedWeight += criterion.weight * 0.5;
      });
    });

    return totalWeight > 0 ? Math.round((achievedWeight / totalWeight) * 100) : 0;
  };

  const visibleSystems = systems.filter(s => selectedSystems.includes(s.id));

  if (systems.length === 0 || categories.length === 0) {
    return null;
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-primary border-primary/30">
            {t("atsComparison.badge", "Objectieve Vergelijking")}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("atsComparison.title", "ATS Systemen")} <span className="text-primary">{t("atsComparison.titleHighlight", "Vergeleken")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("atsComparison.subtitle", "Vergelijk de belangrijkste ATS-systemen op de criteria die er toe doen.")}
          </p>
        </div>

        {/* System selector */}
        <div className="mb-8">
          <p className="text-sm text-muted-foreground mb-3">{t("atsComparison.selectSystems", "Selecteer systemen om te vergelijken:")}</p>
          <div className="flex flex-wrap gap-2">
            {systems.map(system => (
              <button
                key={system.id}
                onClick={() => toggleSystem(system.id)}
                disabled={system.id === "onerooted"}
                className={cn(
                  "px-4 py-2 rounded-lg border text-sm font-medium transition-all",
                  selectedSystems.includes(system.id)
                    ? system.isHighlighted
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-foreground text-background border-foreground"
                    : "bg-background text-muted-foreground border-border hover:border-foreground/50",
                  system.id === "onerooted" && "cursor-default"
                )}
              >
                {system.name}
                {system.isHighlighted && <Star className="h-3 w-3 ml-1 inline" />}
              </button>
            ))}
          </div>
        </div>

        {/* Comparison table */}
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            {/* Header row */}
            <div className="grid border-b border-border bg-muted/50" style={{ gridTemplateColumns: `280px repeat(${visibleSystems.length}, 1fr)` }}>
              <div className="p-4 font-semibold text-foreground border-r border-border">
                {t("atsComparison.criteria", "Criteria")}
              </div>
              {visibleSystems.map(system => {
                const score = calculateSystemScore(system.id);
                return (
                  <div 
                    key={system.id} 
                    className={cn(
                      "p-4 text-center border-r last:border-r-0 border-border",
                      system.isHighlighted && "bg-primary/5"
                    )}
                  >
                    <div className="font-bold text-foreground flex items-center justify-center gap-1">
                      {system.name}
                      {system.isHighlighted && <Star className="h-4 w-4 text-primary fill-primary" />}
                    </div>
                    {system.tagline && (
                      <div className="text-xs text-muted-foreground mt-1">{system.tagline}</div>
                    )}
                    <div className={cn(
                      "mt-2 text-2xl font-bold",
                      system.isHighlighted ? "text-primary" : "text-foreground"
                    )}>
                      {score}%
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Category rows */}
            {categories.map(category => {
              const isExpanded = expandedCategories.has(category.id);
              
              return (
                <div key={category.id}>
                  {/* Category header */}
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className="w-full grid border-b border-border bg-muted/30 hover:bg-muted/50 transition-colors"
                    style={{ gridTemplateColumns: `280px repeat(${visibleSystems.length}, 1fr)` }}
                  >
                    <div className="p-3 flex items-center gap-2 font-semibold text-foreground border-r border-border text-left">
                      <ChevronDown className={cn(
                        "h-4 w-4 transition-transform",
                        isExpanded && "rotate-180"
                      )} />
                      {category.name}
                      <Badge variant="secondary" className="ml-auto text-xs">
                        {category.criteria.length}
                      </Badge>
                    </div>
                    {visibleSystems.map(system => {
                      const catScore = category.criteria.reduce((acc, c) => {
                        const s = c.scores[system.id];
                        if (s === "full") return acc + 1;
                        if (s === "partial") return acc + 0.5;
                        return acc;
                      }, 0);
                      const maxScore = category.criteria.length;
                      
                      return (
                        <div 
                          key={system.id} 
                          className={cn(
                            "p-3 text-center border-r last:border-r-0 border-border",
                            system.isHighlighted && "bg-primary/5"
                          )}
                        >
                          <span className={cn(
                            "font-medium",
                            catScore === maxScore ? "text-emerald-600 dark:text-emerald-400" : "text-muted-foreground"
                          )}>
                            {catScore}/{maxScore}
                          </span>
                        </div>
                      );
                    })}
                  </button>

                  {/* Criteria rows */}
                  <motion.div
                    initial={false}
                    animate={{ height: isExpanded ? "auto" : 0 }}
                    className="overflow-hidden"
                  >
                    {category.criteria.map((criterion, idx) => (
                      <div 
                        key={criterion.id}
                        className={cn(
                          "grid border-b border-border",
                          idx % 2 === 0 ? "bg-background" : "bg-muted/10"
                        )}
                        style={{ gridTemplateColumns: `280px repeat(${visibleSystems.length}, 1fr)` }}
                      >
                        <div className="p-3 pl-8 flex items-center gap-2 text-sm text-foreground border-r border-border">
                          {criterion.name}
                          {criterion.tooltip && (
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Info className="h-3.5 w-3.5 text-muted-foreground cursor-help" />
                              </TooltipTrigger>
                              <TooltipContent className="max-w-xs">
                                {criterion.tooltip}
                              </TooltipContent>
                            </Tooltip>
                          )}
                        </div>
                        {visibleSystems.map(system => (
                          <div 
                            key={system.id} 
                            className={cn(
                              "p-3 flex items-center justify-center border-r last:border-r-0 border-border",
                              system.isHighlighted && "bg-primary/5"
                            )}
                          >
                            {getScoreIcon(criterion.scores[system.id] || "na", system.isHighlighted || false)}
                          </div>
                        ))}
                      </div>
                    ))}
                  </motion.div>
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Legend */}
        <div className="mt-6 flex flex-wrap gap-6 justify-center text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            {getScoreIcon("full", false)}
            <span>{t("atsComparison.legend.full", "Volledig ondersteund")}</span>
          </div>
          <div className="flex items-center gap-2">
            {getScoreIcon("partial", false)}
            <span>{t("atsComparison.legend.partial", "Gedeeltelijk / met beperkingen")}</span>
          </div>
          <div className="flex items-center gap-2">
            {getScoreIcon("none", false)}
            <span>{t("atsComparison.legend.none", "Niet beschikbaar")}</span>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            {t("atsComparison.ctaText", "Overtuigd? Zie OneRooted in actie.")}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="h-12 px-8">
              <Link to={`${langPrefix}/demo`}>
                {t("atsComparison.ctaButton", "Plan een demo")}
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-8">
              <Link to={`${langPrefix}/pricing`}>
                {t("atsComparison.ctaSecondary", "Bekijk prijzen")}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
