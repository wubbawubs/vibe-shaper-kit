import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { usePDF } from "react-to-pdf";
import { Download, Users, Zap, BarChart3, Shield, Check, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import logo from "@/assets/onerooted-logo-transparent.avif";
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
  
  const { toPDF, targetRef: pdfRef } = usePDF({
    filename: `OneRooted-PitchDeck-${lang || "en"}.pdf`,
    page: {
      margin: 20,
      format: "A4",
      orientation: "portrait",
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

      <div ref={pdfRef} className="bg-white max-w-4xl mx-auto">
        {/* Cover */}
        <div className="text-center py-16 px-8 border-2 border-primary rounded-lg m-4">
          <img 
            src={logo} 
            alt="One Rooted" 
            className="h-12 mx-auto mb-6"
          />
          <h1 className="text-4xl font-semibold text-foreground mb-3 tracking-tight">
            {t("pitchDeck.cover.headline")}
          </h1>
          <p className="text-lg text-muted-foreground">
            {t("pitchDeck.cover.subheadline")}
          </p>
        </div>

        {/* The Problem */}
        <div className="py-10 px-8 border-2 border-primary rounded-lg m-4">
          <p className="text-xs uppercase tracking-widest text-label font-medium mb-2">
            {t("pitchDeck.problem.label")}
          </p>
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            {t("pitchDeck.problem.headline")}
          </h2>
          
          <div className="grid grid-cols-3 gap-3 mb-6">
            {["ats", "slack", "excel"].map((tool) => (
              <div key={tool} className="bg-white border border-border rounded-lg p-3">
                <h3 className="text-sm font-semibold text-foreground mb-1">
                  {t(`problem.tools.${tool}.name`)}
                </h3>
                <p className="text-xs text-muted-foreground leading-snug">
                  {t(`problem.tools.${tool}.description`)}
                </p>
              </div>
            ))}
          </div>

          <p className="text-base text-foreground font-medium text-center">
            {t("pitchDeck.problem.consequence")}
          </p>
        </div>

        {/* The Solution */}
        <div className="py-10 px-8 border-2 border-primary rounded-lg m-4">
          <p className="text-xs uppercase tracking-widest text-label font-medium mb-2">
            {t("pitchDeck.solution.label")}
          </p>
          <h2 className="text-2xl font-semibold text-foreground mb-2">
            {t("pitchDeck.solution.headline")}
          </h2>
          <p className="text-sm text-muted-foreground mb-6">
            {t("pitchDeck.solution.description")}
          </p>
          
          <div className="grid grid-cols-4 gap-3">
            {pillars.map(({ icon: Icon, key }) => (
              <div key={key} className="bg-muted/40 border border-border rounded-lg p-3">
                <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center mb-2">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-1">
                  {t(`whatIs.pillars.${key}.title`)}
                </h3>
                <p className="text-xs text-muted-foreground leading-snug">
                  {t(`whatIs.pillars.${key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="py-10 px-8 border-2 border-primary rounded-lg m-4" style={{ pageBreakAfter: 'always' }}>
          <p className="text-xs uppercase tracking-widest text-label font-medium mb-2">
            {t("pitchDeck.howItWorks.label")}
          </p>
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            {t("pitchDeck.howItWorks.headline")}
          </h2>
          
          <div className="grid grid-cols-3 gap-4 mb-6">
            {[1, 2, 3].map((step) => (
              <div key={step}>
                <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-xs mb-2">
                  {step}
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-1">
                  {t(`pitchDeck.howItWorks.steps.${step}.title`)}
                </h3>
                <p className="text-xs text-muted-foreground leading-snug">
                  {t(`pitchDeck.howItWorks.steps.${step}.description`)}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white border border-border rounded-lg p-4">
            <div className="grid grid-cols-4 gap-3 text-center">
              {["40%", "60%", "1", "100%"].map((stat, i) => (
                <div key={i}>
                  <p className="text-xl font-semibold text-primary">{stat}</p>
                  <p className="text-xs text-muted-foreground">
                    {t(`pitchDeck.howItWorks.stats.${i}`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="py-10 px-8 border-2 border-primary rounded-lg m-4">
          <p className="text-xs uppercase tracking-widest text-label font-medium mb-2 text-center">
            {t("pitchDeck.pricing.label")}
          </p>
          <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">
            {t("pitchDeck.pricing.headline")}
          </h2>
          
          <div className="grid grid-cols-4 gap-2">
            {plans.map(({ key, price }) => (
              <div 
                key={key} 
                className={`bg-white border rounded-lg p-3 ${
                  key === "plus" ? "border-primary ring-1 ring-primary" : "border-border"
                }`}
              >
                {key === "plus" && (
                  <span className="text-[10px] uppercase tracking-wider text-primary font-medium block mb-1">
                    {t("pricingPage.mostPopular")}
                  </span>
                )}
                <h3 className="text-sm font-semibold text-foreground">
                  {t(`pitchDeck.pricing.plans.${key}.name`)}
                </h3>
                <p className="text-[10px] text-muted-foreground mb-2 leading-snug">
                  {t(`pitchDeck.pricing.plans.${key}.description`)}
                </p>
                <p className="text-lg font-semibold text-foreground mb-2">
                  €{price}
                  <span className="text-[10px] font-normal text-muted-foreground">/mo</span>
                </p>
                <ul className="space-y-0.5">
                  {(t(`pitchDeck.pricing.plans.${key}.features`, { returnObjects: true }) as string[]).slice(0, 3).map((feature, i) => (
                    <li key={i} className="flex items-start gap-1 text-[10px] text-muted-foreground">
                      <Check className="w-2.5 h-2.5 text-primary mt-0.5 shrink-0" />
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-muted-foreground mt-4">
            {t("pitchDeck.pricing.note")}
          </p>
        </div>

        {/* Team & Contact */}
        <div className="py-10 px-8 border-2 border-primary rounded-lg m-4">
          <p className="text-xs uppercase tracking-widest text-label font-medium mb-2 text-center">
            {t("pitchDeck.team.label")}
          </p>
          <h2 className="text-2xl font-semibold text-foreground mb-2 text-center">
            {t("pitchDeck.team.headline")}
          </h2>
          <p className="text-sm text-muted-foreground text-center mb-6">
            {t("pitchDeck.team.subheadline")}
          </p>
          
          <div className="grid grid-cols-4 gap-4 mb-6">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-14 h-14 rounded-full mx-auto object-cover border border-border mb-2"
                />
                <h3 className="font-semibold text-foreground text-sm">{member.name}</h3>
                <a 
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[10px] text-muted-foreground hover:text-primary"
                >
                  <Linkedin className="w-2.5 h-2.5" />
                  LinkedIn
                </a>
              </div>
            ))}
          </div>

          <div className="bg-white border border-border rounded-lg p-4 text-center">
            <p className="text-[10px] text-muted-foreground mb-1">
              {t("pitchDeck.team.partOf")}
            </p>
            <p className="text-base font-semibold text-foreground mb-3">One-Time Group</p>
            
            <div className="flex items-center justify-center gap-6 text-sm">
              <a href="mailto:info@onerooted.nl" className="text-primary hover:underline">
                info@onerooted.nl
              </a>
              <span className="text-border">|</span>
              <a href="https://onerooted.nl" className="text-primary hover:underline">
                onerooted.nl
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
