import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, ChevronRight, BarChart3, Download, AlertTriangle, CheckCircle2, Circle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface ChecklistItem {
  id: string;
  category: string;
  title: string;
  description: string;
  weight: number;
  mustHave: boolean;
}

interface ChecklistCategory {
  id: string;
  name: string;
  icon: string;
  items: ChecklistItem[];
}

export function ATSChecklist() {
  const { t, i18n } = useTranslation();
  const langPrefix = i18n.language === "nl" ? "/nl" : i18n.language === "de" ? "/de" : "";
  
  const categories: ChecklistCategory[] = useMemo(() => {
    const rawCategories = t("atsChecklist.categories", { returnObjects: true, defaultValue: [] }) as {
      id: string;
      name: string;
      icon: string;
      items: { id: string; title: string; description: string; weight: number; mustHave: boolean }[];
    }[];
    
    return rawCategories.map(cat => ({
      ...cat,
      items: cat.items.map(item => ({
        ...item,
        category: cat.id,
      })),
    }));
  }, [t]);

  const allItems = useMemo(() => categories.flatMap(cat => cat.items), [categories]);
  
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [showResults, setShowResults] = useState(false);

  const toggleItem = (itemId: string) => {
    setCheckedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  const score = useMemo(() => {
    let totalWeight = 0;
    let achievedWeight = 0;
    let mustHaveTotal = 0;
    let mustHaveAchieved = 0;
    let niceToHaveTotal = 0;
    let niceToHaveAchieved = 0;

    allItems.forEach(item => {
      totalWeight += item.weight;
      if (item.mustHave) {
        mustHaveTotal++;
        if (checkedItems.has(item.id)) {
          mustHaveAchieved++;
          achievedWeight += item.weight;
        }
      } else {
        niceToHaveTotal++;
        if (checkedItems.has(item.id)) {
          niceToHaveAchieved++;
          achievedWeight += item.weight;
        }
      }
    });

    const percentage = totalWeight > 0 ? Math.round((achievedWeight / totalWeight) * 100) : 0;
    const mustHavePercentage = mustHaveTotal > 0 ? Math.round((mustHaveAchieved / mustHaveTotal) * 100) : 0;

    return {
      percentage,
      mustHavePercentage,
      mustHaveAchieved,
      mustHaveTotal,
      niceToHaveAchieved,
      niceToHaveTotal,
      checkedCount: checkedItems.size,
      totalCount: allItems.length,
    };
  }, [checkedItems, allItems]);

  const getScoreLabel = (percentage: number): { label: string; color: string; description: string } => {
    if (percentage >= 90) return { 
      label: t("atsChecklist.scores.excellent.label", "Uitstekend"), 
      color: "text-green-600", 
      description: t("atsChecklist.scores.excellent.description", "Dit ATS voldoet aan vrijwel alle criteria.") 
    };
    if (percentage >= 70) return { 
      label: t("atsChecklist.scores.good.label", "Goed"), 
      color: "text-emerald-600", 
      description: t("atsChecklist.scores.good.description", "Solide keuze, let op de ontbrekende must-haves.") 
    };
    if (percentage >= 50) return { 
      label: t("atsChecklist.scores.acceptable.label", "Acceptabel"), 
      color: "text-amber-600", 
      description: t("atsChecklist.scores.acceptable.description", "Er missen belangrijke features, overweeg alternatieven.") 
    };
    if (percentage >= 30) return { 
      label: t("atsChecklist.scores.weak.label", "Zwak"), 
      color: "text-orange-600", 
      description: t("atsChecklist.scores.weak.description", "Veel ontbrekende criteria, niet aanbevolen.") 
    };
    return { 
      label: t("atsChecklist.scores.poor.label", "Onvoldoende"), 
      color: "text-red-600", 
      description: t("atsChecklist.scores.poor.description", "Voldoet niet aan basiseisen voor een modern ATS.") 
    };
  };

  const getCategoryScore = (categoryId: string) => {
    const categoryItems = allItems.filter(item => item.category === categoryId);
    const checked = categoryItems.filter(item => checkedItems.has(item.id)).length;
    return { checked, total: categoryItems.length };
  };

  const handleReset = () => {
    setCheckedItems(new Set());
    setShowResults(false);
    setActiveCategory(null);
  };

  const scoreInfo = getScoreLabel(score.percentage);

  if (categories.length === 0) {
    return null;
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-primary border-primary/30">
            {t("atsChecklist.badge", "Interactieve Tool")}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("atsChecklist.title", "ATS Selectie")} <span className="text-primary">{t("atsChecklist.titleHighlight", "Scorecard")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("atsChecklist.subtitle", "Evalueer een ATS objectief. Vink aan wat het systeem biedt en krijg een gewogen score.")}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Categories sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  {t("atsChecklist.categoriesTitle", "Categorieën")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {categories.map(category => {
                  const catScore = getCategoryScore(category.id);
                  const isActive = activeCategory === category.id;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(isActive ? null : category.id)}
                      className={cn(
                        "w-full flex items-center justify-between p-3 rounded-lg text-left transition-all",
                        isActive 
                          ? "bg-primary text-primary-foreground" 
                          : "bg-muted/50 hover:bg-muted text-foreground"
                      )}
                    >
                      <span className="font-medium">{category.name}</span>
                      <div className="flex items-center gap-2">
                        <span className={cn(
                          "text-sm",
                          isActive ? "text-primary-foreground/80" : "text-muted-foreground"
                        )}>
                          {catScore.checked}/{catScore.total}
                        </span>
                        <ChevronRight className={cn(
                          "h-4 w-4 transition-transform",
                          isActive && "rotate-90"
                        )} />
                      </div>
                    </button>
                  );
                })}

                {/* Score summary in sidebar */}
                <div className="pt-4 mt-4 border-t border-border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">{t("atsChecklist.totalScore", "Totaalscore")}</span>
                    <span className={cn("font-bold text-lg", scoreInfo.color)}>{score.percentage}%</span>
                  </div>
                  <Progress value={score.percentage} className="h-2" />
                  <p className={cn("text-sm mt-2 font-medium", scoreInfo.color)}>{scoreInfo.label}</p>
                </div>

                {/* Action buttons */}
                <div className="space-y-2 pt-4">
                  <Button 
                    onClick={() => setShowResults(true)}
                    className="w-full"
                    disabled={checkedItems.size === 0}
                  >
                    {t("atsChecklist.viewResults", "Bekijk resultaten")}
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={handleReset}
                    className="w-full"
                    disabled={checkedItems.size === 0}
                  >
                    {t("atsChecklist.reset", "Reset checklist")}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Checklist items */}
          <div className="lg:col-span-2 space-y-6">
            <AnimatePresence mode="wait">
              {categories
                .filter(cat => !activeCategory || cat.id === activeCategory)
                .map(category => (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg flex items-center gap-2">
                          {category.name}
                          <Badge variant="secondary" className="ml-2">
                            {getCategoryScore(category.id).checked}/{getCategoryScore(category.id).total}
                          </Badge>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        {category.items.map(item => {
                          const isChecked = checkedItems.has(item.id);
                          return (
                            <motion.div
                              key={item.id}
                              className={cn(
                                "p-4 rounded-lg border transition-all cursor-pointer",
                                isChecked 
                                  ? "bg-primary/5 border-primary/30" 
                                  : "bg-background border-border hover:border-primary/20"
                              )}
                              onClick={() => toggleItem(item.id)}
                              whileHover={{ scale: 1.005 }}
                              whileTap={{ scale: 0.995 }}
                            >
                              <div className="flex items-start gap-3">
                                <Checkbox
                                  checked={isChecked}
                                  onCheckedChange={() => toggleItem(item.id)}
                                  className="mt-1"
                                />
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 flex-wrap">
                                    <span className={cn(
                                      "font-medium",
                                      isChecked && "text-primary"
                                    )}>
                                      {item.title}
                                    </span>
                                    {item.mustHave && (
                                      <Badge variant="destructive" className="text-xs">
                                        {t("atsChecklist.mustHave", "Must-have")}
                                      </Badge>
                                    )}
                                  </div>
                                  <p className="text-sm text-muted-foreground mt-1">
                                    {item.description}
                                  </p>
                                </div>
                                <div className={cn(
                                  "h-6 w-6 rounded-full flex items-center justify-center transition-colors",
                                  isChecked ? "bg-primary text-primary-foreground" : "bg-muted"
                                )}>
                                  {isChecked ? (
                                    <Check className="h-4 w-4" />
                                  ) : (
                                    <Circle className="h-4 w-4 text-muted-foreground" />
                                  )}
                                </div>
                              </div>
                            </motion.div>
                          );
                        })}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Results modal/section */}
        <AnimatePresence>
          {showResults && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setShowResults(false)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-background border border-border rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={e => e.stopPropagation()}
              >
                <div className="p-6 border-b border-border">
                  <h3 className="text-2xl font-bold">{t("atsChecklist.resultsTitle", "Jouw ATS Scorecard")}</h3>
                </div>
                
                <div className="p-6 space-y-6">
                  {/* Main score */}
                  <div className="text-center py-6">
                    <div className={cn("text-6xl font-bold mb-2", scoreInfo.color)}>
                      {score.percentage}%
                    </div>
                    <div className={cn("text-xl font-semibold mb-2", scoreInfo.color)}>
                      {scoreInfo.label}
                    </div>
                    <p className="text-muted-foreground">{scoreInfo.description}</p>
                  </div>

                  {/* Score breakdown */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Card className={cn(
                      "border-2",
                      score.mustHavePercentage === 100 ? "border-green-500/30 bg-green-50/50 dark:bg-green-950/20" : "border-amber-500/30 bg-amber-50/50 dark:bg-amber-950/20"
                    )}>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          {score.mustHavePercentage === 100 ? (
                            <CheckCircle2 className="h-5 w-5 text-green-600" />
                          ) : (
                            <AlertTriangle className="h-5 w-5 text-amber-600" />
                          )}
                          <span className="font-semibold">{t("atsChecklist.mustHaves", "Must-haves")}</span>
                        </div>
                        <div className="text-2xl font-bold">
                          {score.mustHaveAchieved}/{score.mustHaveTotal}
                        </div>
                        <Progress value={score.mustHavePercentage} className="h-2 mt-2" />
                      </CardContent>
                    </Card>

                    <Card className="border border-border">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Circle className="h-5 w-5 text-muted-foreground" />
                          <span className="font-semibold">{t("atsChecklist.niceToHaves", "Nice-to-haves")}</span>
                        </div>
                        <div className="text-2xl font-bold">
                          {score.niceToHaveAchieved}/{score.niceToHaveTotal}
                        </div>
                        <Progress 
                          value={score.niceToHaveTotal > 0 ? (score.niceToHaveAchieved / score.niceToHaveTotal) * 100 : 0} 
                          className="h-2 mt-2" 
                        />
                      </CardContent>
                    </Card>
                  </div>

                  {/* Missing must-haves warning */}
                  {score.mustHavePercentage < 100 && (
                    <div className="p-4 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 rounded-lg">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5" />
                        <div>
                          <p className="font-semibold text-amber-800 dark:text-amber-200">
                            {t("atsChecklist.missingMustHaves", "Ontbrekende must-haves")}
                          </p>
                          <ul className="mt-2 space-y-1">
                            {allItems
                              .filter(item => item.mustHave && !checkedItems.has(item.id))
                              .map(item => (
                                <li key={item.id} className="flex items-center gap-2 text-sm text-amber-700 dark:text-amber-300">
                                  <X className="h-4 w-4" />
                                  {item.title}
                                </li>
                              ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* CTA */}
                  <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg text-center">
                    <p className="text-muted-foreground mb-3">
                      {t("atsChecklist.ctaText", "Benieuwd hoe OneRooted scoort op deze checklist?")}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <Button asChild>
                        <Link to={`${langPrefix}/demo`}>
                          {t("atsChecklist.ctaButton", "Plan een demo")}
                        </Link>
                      </Button>
                      <Button variant="outline" onClick={() => setShowResults(false)}>
                        {t("atsChecklist.continueEditing", "Verder bewerken")}
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
