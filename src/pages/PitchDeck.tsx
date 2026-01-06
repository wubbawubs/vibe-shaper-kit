import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { usePDF } from "react-to-pdf";
import { Download, Users, Zap, BarChart3, Shield, Check, ArrowRight, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import logo from "@/assets/onerooted-logo.png";
import luuk from "@/assets/team/luuk.jpeg";
import robin from "@/assets/team/robin.jpeg";
import erik from "@/assets/team/erik.jpeg";
import juliette from "@/assets/team/juliette.jpeg";

const pillars = [
  { icon: BarChart3, key: "data" },
  { icon: Zap, key: "workflows" },
  { icon: Users, key: "intelligence" },
  { icon: Shield, key: "accountability" },
];

const teamMembers = [
  { name: "Robin", image: robin, linkedin: "https://www.linkedin.com/in/robindennie024/" },
  { name: "Erik", image: erik, linkedin: "https://www.linkedin.com/in/erik-dijkshoorn-1a72aa17/" },
  { name: "Juliette", image: juliette, linkedin: "https://www.linkedin.com/in/juliette-welten-ab566061/" },
  { name: "Luuk", image: luuk, linkedin: "https://www.linkedin.com/in/luuk-wubs-32a451252/" },
];

export default function PitchDeck() {
  const { t } = useTranslation();
  const { lang } = useParams();
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { toPDF, targetRef: pdfRef } = usePDF({
    filename: `OneRooted-PitchDeck-${lang || "en"}.pdf`,
    page: {
      margin: 0,
      format: "A4",
      orientation: "landscape",
    },
  });

  const plans = [
    { key: "light", price: "99" },
    { key: "base", price: "299" },
    { key: "plus", price: "399" },
    { key: "premium", price: "599" },
  ];

  return (
    <>
      <SEO 
        title={t("pitchDeck.seo.title")}
        description={t("pitchDeck.seo.description")}
      />
      
      {/* Fixed download button */}
      <div className="fixed top-4 right-4 z-50 print:hidden">
        <Button 
          onClick={() => toPDF()} 
          className="bg-primary hover:bg-primary/90 shadow-lg"
        >
          <Download className="w-4 h-4 mr-2" />
          {t("pitchDeck.exportButton")}
        </Button>
      </div>

      <div ref={pdfRef} className="bg-background">
        {/* Slide 1: Cover */}
        <section className="min-h-screen flex flex-col items-center justify-center p-8 md:p-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,hsl(var(--primary)/0.08),transparent_50%)]" />
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <img 
              src={logo} 
              alt="OneRooted" 
              className="h-16 md:h-20 mx-auto mb-8"
            />
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-6 tracking-tight">
              {t("pitchDeck.cover.headline")}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              {t("pitchDeck.cover.subheadline")}
            </p>
          </div>
        </section>

        {/* Slide 2: The Problem */}
        <section className="min-h-screen flex flex-col items-center justify-center p-8 md:p-16 bg-muted/30">
          <div className="max-w-5xl mx-auto w-full">
            <p className="text-sm uppercase tracking-widest text-label font-medium mb-4">
              {t("pitchDeck.problem.label")}
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold text-foreground mb-12">
              {t("pitchDeck.problem.headline")}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {["ats", "slack", "excel"].map((tool) => (
                <div key={tool} className="bg-background border border-border rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {t(`problem.tools.${tool}.name`)}
                  </h3>
                  <p className="text-muted-foreground">
                    {t(`problem.tools.${tool}.description`)}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-xl md:text-2xl text-foreground font-medium">
                {t("pitchDeck.problem.consequence")}
              </p>
            </div>
          </div>
        </section>

        {/* Slide 3: The Solution */}
        <section className="min-h-screen flex flex-col items-center justify-center p-8 md:p-16">
          <div className="max-w-5xl mx-auto w-full">
            <p className="text-sm uppercase tracking-widest text-label font-medium mb-4">
              {t("pitchDeck.solution.label")}
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold text-foreground mb-6">
              {t("pitchDeck.solution.headline")}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl">
              {t("pitchDeck.solution.description")}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map(({ icon: Icon, key }) => (
                <div key={key} className="bg-muted/50 border border-border rounded-xl p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {t(`whatIs.pillars.${key}.title`)}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t(`whatIs.pillars.${key}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Slide 4: How It Works */}
        <section className="min-h-screen flex flex-col items-center justify-center p-8 md:p-16 bg-muted/30">
          <div className="max-w-5xl mx-auto w-full">
            <p className="text-sm uppercase tracking-widest text-label font-medium mb-4">
              {t("pitchDeck.howItWorks.label")}
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold text-foreground mb-12">
              {t("pitchDeck.howItWorks.headline")}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((step) => (
                <div key={step} className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
                      {step}
                    </div>
                    {step < 3 && (
                      <ArrowRight className="w-5 h-5 text-muted-foreground hidden md:block absolute -right-4 top-3" />
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {t(`pitchDeck.howItWorks.steps.${step}.title`)}
                  </h3>
                  <p className="text-muted-foreground">
                    {t(`pitchDeck.howItWorks.steps.${step}.description`)}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-background border border-border rounded-xl p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {["40%", "60%", "1", "100%"].map((stat, i) => (
                  <div key={i}>
                    <p className="text-3xl md:text-4xl font-semibold text-primary mb-1">{stat}</p>
                    <p className="text-sm text-muted-foreground">
                      {t(`pitchDeck.howItWorks.stats.${i}`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Slide 5: Pricing */}
        <section className="min-h-screen flex flex-col items-center justify-center p-8 md:p-16">
          <div className="max-w-6xl mx-auto w-full">
            <p className="text-sm uppercase tracking-widest text-label font-medium mb-4 text-center">
              {t("pitchDeck.pricing.label")}
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold text-foreground mb-12 text-center">
              {t("pitchDeck.pricing.headline")}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {plans.map(({ key, price }) => (
                <div 
                  key={key} 
                  className={`bg-background border rounded-xl p-6 ${
                    key === "plus" ? "border-primary ring-1 ring-primary" : "border-border"
                  }`}
                >
                  {key === "plus" && (
                    <span className="text-xs uppercase tracking-wider text-primary font-medium mb-2 block">
                      {t("pricingPage.mostPopular")}
                    </span>
                  )}
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {t(`pitchDeck.pricing.plans.${key}.name`)}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {t(`pitchDeck.pricing.plans.${key}.description`)}
                  </p>
                  <p className="text-3xl font-semibold text-foreground mb-4">
                    €{price}
                    <span className="text-base font-normal text-muted-foreground">
                      {t("pricingPage.perMonth")}
                    </span>
                  </p>
                  <ul className="space-y-2">
                    {(t(`pitchDeck.pricing.plans.${key}.features`, { returnObjects: true }) as string[]).map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="text-center text-muted-foreground mt-8">
              {t("pitchDeck.pricing.note")}
            </p>
          </div>
        </section>

        {/* Slide 6: Team & Contact */}
        <section className="min-h-screen flex flex-col items-center justify-center p-8 md:p-16 bg-muted/30">
          <div className="max-w-5xl mx-auto w-full">
            <p className="text-sm uppercase tracking-widest text-label font-medium mb-4 text-center">
              {t("pitchDeck.team.label")}
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold text-foreground mb-4 text-center">
              {t("pitchDeck.team.headline")}
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              {t("pitchDeck.team.subheadline")}
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {teamMembers.map((member) => (
                <div key={member.name} className="text-center">
                  <div className="relative mb-3">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto object-cover border-2 border-border"
                    />
                  </div>
                  <h3 className="font-semibold text-foreground">{member.name}</h3>
                  <a 
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="w-3 h-3" />
                    LinkedIn
                  </a>
                </div>
              ))}
            </div>

            <div className="bg-background border border-border rounded-xl p-8 text-center">
              <p className="text-sm text-muted-foreground mb-2">
                {t("pitchDeck.team.partOf")}
              </p>
              <p className="text-xl font-semibold text-foreground mb-6">One-Time Group</p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <div className="text-muted-foreground">
                  <p className="font-medium text-foreground">{t("pitchDeck.team.contact.email")}</p>
                  <a href="mailto:info@onerooted.nl" className="text-primary hover:underline">
                    info@onerooted.nl
                  </a>
                </div>
                <div className="hidden md:block w-px h-8 bg-border" />
                <div className="text-muted-foreground">
                  <p className="font-medium text-foreground">{t("pitchDeck.team.contact.website")}</p>
                  <a href="https://onerooted.nl" className="text-primary hover:underline">
                    onerooted.nl
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
