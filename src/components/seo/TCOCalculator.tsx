import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Calculator, Users, Calendar, TrendingDown, CheckCircle2, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { getLocalizedPath } from "@/i18n/useLanguage";
import { type Language } from "@/i18n/config";

interface TCOInputs {
  recruiters: number;
  hiresPerYear: number;
  currentToolCost: number;
  implementationMonths: number;
}

interface TCOBreakdown {
  licenses: number;
  implementation: number;
  training: number;
  maintenance: number;
  hiddenCosts: number;
  total: number;
}

export function TCOCalculator() {
  const { t } = useTranslation();
  const { lang } = useParams<{ lang: string }>();
  const currentLang = (lang || "nl") as Language;

  const [inputs, setInputs] = useState<TCOInputs>({
    recruiters: 3,
    hiresPerYear: 50,
    currentToolCost: 200,
    implementationMonths: 3,
  });

  const [showResults, setShowResults] = useState(false);

  // TCO Calculation logic
  const calculation = useMemo(() => {
    const { recruiters, hiresPerYear, currentToolCost, implementationMonths } = inputs;

    // Traditional ATS costs (typical market rates)
    const traditionalLicensePerUser = 150; // €/month
    const traditionalImplementation = 5000 + (recruiters * 500);
    const traditionalTrainingPerUser = 800;
    const traditionalMaintenancePercent = 0.15; // 15% of license cost
    const hiddenCostMultiplier = 1.3; // 30% hidden costs (integrations, customization, support tickets)

    const traditionalMonthlyLicenses = recruiters * traditionalLicensePerUser;
    const traditionalAnnualLicenses = traditionalMonthlyLicenses * 12;
    const traditionalTraining = recruiters * traditionalTrainingPerUser;
    const traditionalMaintenance = traditionalAnnualLicenses * traditionalMaintenancePercent;
    const traditionalHidden = (traditionalAnnualLicenses + traditionalImplementation) * 0.3;

    const traditionalTCO: TCOBreakdown = {
      licenses: traditionalAnnualLicenses,
      implementation: traditionalImplementation,
      training: traditionalTraining,
      maintenance: traditionalMaintenance,
      hiddenCosts: traditionalHidden,
      total: traditionalAnnualLicenses + traditionalImplementation + traditionalTraining + traditionalMaintenance + traditionalHidden,
    };

    // OneRooted costs (transparent pricing)
    const oneRootedBase = 299; // Base plan per month
    const oneRootedPerRecruiter = recruiters <= 3 ? 0 : (recruiters - 3) * 49; // Extra users
    const oneRootedMonthly = oneRootedBase + oneRootedPerRecruiter;
    const oneRootedAnnual = oneRootedMonthly * 12;
    const oneRootedImplementation = 0; // Self-service
    const oneRootedTraining = 0; // Intuitive UI
    const oneRootedMaintenance = 0; // Included
    const oneRootedHidden = 0; // Transparent

    const oneRootedTCO: TCOBreakdown = {
      licenses: oneRootedAnnual,
      implementation: oneRootedImplementation,
      training: oneRootedTraining,
      maintenance: oneRootedMaintenance,
      hiddenCosts: oneRootedHidden,
      total: oneRootedAnnual,
    };

    // Savings
    const annualSavings = traditionalTCO.total - oneRootedTCO.total;
    const savingsPercent = Math.round((annualSavings / traditionalTCO.total) * 100);

    // Cost per hire
    const traditionalCostPerHire = Math.round(traditionalTCO.total / hiresPerYear);
    const oneRootedCostPerHire = Math.round(oneRootedTCO.total / hiresPerYear);

    return {
      traditional: traditionalTCO,
      oneRooted: oneRootedTCO,
      annualSavings,
      savingsPercent,
      traditionalCostPerHire,
      oneRootedCostPerHire,
    };
  }, [inputs]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("nl-NL", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(value);
  };

  const handleCalculate = () => {
    setShowResults(true);
  };

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Calculator className="h-4 w-4" />
            {t("tcoCalculator.label", "TCO Calculator")}
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            {t("tcoCalculator.headline", "Bereken je werkelijke ATS-kosten")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("tcoCalculator.subheadline", "Ontdek de verborgen kosten van traditionele ATS-systemen en hoeveel je kunt besparen.")}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Input Section */}
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-lg font-medium flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  {t("tcoCalculator.inputTitle", "Jouw situatie")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Recruiters */}
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <Label htmlFor="recruiters">{t("tcoCalculator.recruiters", "Aantal recruiters")}</Label>
                    <span className="font-medium text-primary">{inputs.recruiters}</span>
                  </div>
                  <Slider
                    id="recruiters"
                    value={[inputs.recruiters]}
                    onValueChange={(value) => setInputs(prev => ({ ...prev, recruiters: value[0] }))}
                    min={1}
                    max={20}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>1</span>
                    <span>20</span>
                  </div>
                </div>

                {/* Hires per year */}
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <Label htmlFor="hires">{t("tcoCalculator.hiresPerYear", "Hires per jaar")}</Label>
                    <span className="font-medium text-primary">{inputs.hiresPerYear}</span>
                  </div>
                  <Slider
                    id="hires"
                    value={[inputs.hiresPerYear]}
                    onValueChange={(value) => setInputs(prev => ({ ...prev, hiresPerYear: value[0] }))}
                    min={10}
                    max={500}
                    step={10}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>10</span>
                    <span>500</span>
                  </div>
                </div>

                {/* Current tool cost */}
                <div className="space-y-2">
                  <Label htmlFor="currentCost">{t("tcoCalculator.currentCost", "Huidige tool kosten (€/maand)")}</Label>
                  <Input
                    id="currentCost"
                    type="number"
                    value={inputs.currentToolCost}
                    onChange={(e) => setInputs(prev => ({ ...prev, currentToolCost: parseInt(e.target.value) || 0 }))}
                    placeholder="200"
                    className="bg-background"
                  />
                </div>

                {/* Implementation time */}
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <Label htmlFor="implementation">{t("tcoCalculator.implementationTime", "Implementatietijd (maanden)")}</Label>
                    <span className="font-medium text-primary">{inputs.implementationMonths}</span>
                  </div>
                  <Slider
                    id="implementation"
                    value={[inputs.implementationMonths]}
                    onValueChange={(value) => setInputs(prev => ({ ...prev, implementationMonths: value[0] }))}
                    min={1}
                    max={12}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>1</span>
                    <span>12</span>
                  </div>
                </div>

                <Button 
                  onClick={handleCalculate}
                  className="w-full h-12 bg-primary hover:bg-primary/90"
                >
                  {t("tcoCalculator.calculate", "Bereken TCO")}
                </Button>
              </CardContent>
            </Card>

            {/* Results Section */}
            <div className="space-y-6">
              {showResults ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  {/* Savings Card */}
                  <Card className="border-primary/30 bg-primary/5">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <TrendingDown className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">
                            {t("tcoCalculator.potentialSavings", "Potentiële besparing per jaar")}
                          </p>
                          <p className="text-3xl font-semibold text-primary">
                            {formatCurrency(calculation.annualSavings)}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {t("tcoCalculator.savingsDescription", "{{percent}}% lager dan traditionele ATS-systemen", { percent: calculation.savingsPercent })}
                      </p>
                    </CardContent>
                  </Card>

                  {/* Comparison */}
                  <Card className="border-border/50">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg font-medium">
                        {t("tcoCalculator.comparison", "Kostenvergelijking (jaar 1)")}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {/* Traditional ATS */}
                        <div className="p-4 rounded-lg bg-destructive/5 border border-destructive/20">
                          <div className="flex items-center gap-2 mb-3">
                            <AlertTriangle className="h-4 w-4 text-destructive" />
                            <span className="font-medium text-destructive">
                              {t("tcoCalculator.traditionalATS", "Traditioneel ATS")}
                            </span>
                          </div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">{t("tcoCalculator.licenses", "Licenties")}</span>
                              <span>{formatCurrency(calculation.traditional.licenses)}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">{t("tcoCalculator.implementation", "Implementatie")}</span>
                              <span>{formatCurrency(calculation.traditional.implementation)}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">{t("tcoCalculator.training", "Training")}</span>
                              <span>{formatCurrency(calculation.traditional.training)}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">{t("tcoCalculator.maintenance", "Onderhoud")}</span>
                              <span>{formatCurrency(calculation.traditional.maintenance)}</span>
                            </div>
                            <div className="flex justify-between text-destructive">
                              <span>{t("tcoCalculator.hiddenCosts", "Verborgen kosten")}</span>
                              <span>{formatCurrency(calculation.traditional.hiddenCosts)}</span>
                            </div>
                            <div className="flex justify-between font-semibold pt-2 border-t border-destructive/20">
                              <span>{t("tcoCalculator.total", "Totaal")}</span>
                              <span>{formatCurrency(calculation.traditional.total)}</span>
                            </div>
                          </div>
                        </div>

                        {/* OneRooted */}
                        <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                          <div className="flex items-center gap-2 mb-3">
                            <CheckCircle2 className="h-4 w-4 text-primary" />
                            <span className="font-medium text-primary">OneRooted</span>
                          </div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">{t("tcoCalculator.allInclusive", "All-inclusive licentie")}</span>
                              <span>{formatCurrency(calculation.oneRooted.licenses)}</span>
                            </div>
                            <div className="flex justify-between text-primary">
                              <span>{t("tcoCalculator.noImplementation", "Geen implementatiekosten")}</span>
                              <span>€0</span>
                            </div>
                            <div className="flex justify-between text-primary">
                              <span>{t("tcoCalculator.noTraining", "Geen training nodig")}</span>
                              <span>€0</span>
                            </div>
                            <div className="flex justify-between text-primary">
                              <span>{t("tcoCalculator.noHidden", "Geen verborgen kosten")}</span>
                              <span>€0</span>
                            </div>
                            <div className="flex justify-between font-semibold pt-2 border-t border-primary/20">
                              <span>{t("tcoCalculator.total", "Totaal")}</span>
                              <span className="text-primary">{formatCurrency(calculation.oneRooted.total)}</span>
                            </div>
                          </div>
                        </div>

                        {/* Cost per hire */}
                        <div className="p-4 rounded-lg bg-muted/50">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm text-muted-foreground">{t("tcoCalculator.costPerHire", "Kosten per hire")}</p>
                              <div className="flex items-baseline gap-2 mt-1">
                                <span className="text-lg line-through text-muted-foreground">
                                  {formatCurrency(calculation.traditionalCostPerHire)}
                                </span>
                                <span className="text-2xl font-semibold text-primary">
                                  {formatCurrency(calculation.oneRootedCostPerHire)}
                                </span>
                              </div>
                            </div>
                            <Calendar className="h-8 w-8 text-muted-foreground/30" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* CTA */}
                  <Button asChild className="w-full h-12 bg-primary hover:bg-primary/90">
                    <Link to={getLocalizedPath("/demo", currentLang)}>
                      {t("tcoCalculator.cta", "Plan een demo en bespaar")}
                    </Link>
                  </Button>
                </motion.div>
              ) : (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center p-8">
                    <Calculator className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      {t("tcoCalculator.placeholder", "Vul je gegevens in en klik op 'Bereken TCO' om je resultaten te zien.")}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
