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

// Colors for inline styles (PDF-safe)
const colors = {
  primary: '#2d4a42',
  primaryLight: 'rgba(45, 74, 66, 0.8)',
  primaryForeground: '#ffffff',
  foreground: '#1f2937',
  mutedForeground: '#6b7280',
  label: '#d97706',
  border: '#e5e7eb',
  muted: '#f3f4f6',
  white: '#ffffff',
};

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

      <div ref={pdfRef} style={{ backgroundColor: colors.white, maxWidth: '896px', margin: '0 auto', padding: '16px' }}>
        {/* Cover - White */}
        <div style={{ padding: '64px 32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
            <img 
              src={logo} 
              alt="One Rooted" 
              style={{ height: '32px' }}
            />
            <span style={{ color: '#9ca3af', margin: '0 12px' }}>|</span>
            <span style={{ fontSize: '18px', fontWeight: 500, color: colors.foreground }}>One Rooted</span>
          </div>
          <h1 style={{ fontSize: '36px', fontWeight: 600, color: colors.foreground, marginBottom: '12px', letterSpacing: '-0.025em' }}>
            {t("pitchDeck.cover.headline")}
          </h1>
          <p style={{ fontSize: '16px', color: colors.mutedForeground, maxWidth: '672px', lineHeight: 1.6 }}>
            Not another ATS, the next-gen Talent Acquisition SaaS that centralises hiring workflows, automates candidate tracking, and scales with your business.
          </p>
        </div>

        {/* The Problem - Primary BG */}
        <div style={{ 
          padding: '40px 32px', 
          backgroundColor: colors.primaryLight, 
          borderRadius: '16px', 
          marginBottom: '16px' 
        }}>
          <p style={{ 
            fontSize: '12px', 
            textTransform: 'uppercase', 
            letterSpacing: '0.1em', 
            color: 'rgba(255,255,255,0.7)', 
            fontWeight: 500, 
            marginBottom: '8px' 
          }}>
            {t("pitchDeck.problem.label")}
          </p>
          <h2 style={{ fontSize: '24px', fontWeight: 600, color: colors.primaryForeground, marginBottom: '24px' }}>
            {t("pitchDeck.problem.headline")}
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '24px' }}>
            {["ats", "slack", "excel"].map((tool) => (
              <div key={tool} style={{ 
                backgroundColor: 'rgba(255,255,255,0.1)', 
                borderRadius: '8px', 
                padding: '12px',
                minHeight: '80px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
                <h3 style={{ fontSize: '14px', fontWeight: 600, color: colors.primaryForeground, marginBottom: '4px' }}>
                  {t(`problem.tools.${tool}.name`)}
                </h3>
                <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.4 }}>
                  {t(`problem.tools.${tool}.description`)}
                </p>
              </div>
            ))}
          </div>

          <p style={{ fontSize: '16px', color: colors.primaryForeground, fontWeight: 500, textAlign: 'center' }}>
            {t("pitchDeck.problem.consequence")}
          </p>
        </div>

        {/* The Solution - White */}
        <div style={{ padding: '40px 32px' }}>
          <p style={{ 
            fontSize: '12px', 
            textTransform: 'uppercase', 
            letterSpacing: '0.1em', 
            color: colors.label, 
            fontWeight: 500, 
            marginBottom: '8px' 
          }}>
            {t("pitchDeck.solution.label")}
          </p>
          <h2 style={{ fontSize: '24px', fontWeight: 600, color: colors.foreground, marginBottom: '8px' }}>
            {t("pitchDeck.solution.headline")}
          </h2>
          <p style={{ fontSize: '14px', color: colors.mutedForeground, marginBottom: '24px', lineHeight: 1.5 }}>
            {t("pitchDeck.solution.description")}
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
            {pillars.map(({ icon: Icon, key }) => (
              <div key={key} style={{ 
                backgroundColor: colors.muted, 
                border: `1px solid ${colors.border}`, 
                borderRadius: '8px', 
                padding: '12px' 
              }}>
                <div style={{ 
                  width: '32px', 
                  height: '32px', 
                  backgroundColor: 'rgba(45, 74, 66, 0.1)', 
                  borderRadius: '4px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  marginBottom: '8px' 
                }}>
                  <Icon style={{ width: '16px', height: '16px', color: colors.primary }} />
                </div>
                <h3 style={{ fontSize: '14px', fontWeight: 600, color: colors.foreground, marginBottom: '4px' }}>
                  {t(`whatIs.pillars.${key}.title`)}
                </h3>
                <p style={{ fontSize: '12px', color: colors.mutedForeground, lineHeight: 1.4 }}>
                  {t(`whatIs.pillars.${key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works - Primary BG */}
        <div style={{ 
          padding: '40px 32px', 
          backgroundColor: colors.primaryLight, 
          borderRadius: '16px', 
          marginBottom: '16px',
          pageBreakAfter: 'always'
        }}>
          <p style={{ 
            fontSize: '12px', 
            textTransform: 'uppercase', 
            letterSpacing: '0.1em', 
            color: 'rgba(255,255,255,0.7)', 
            fontWeight: 500, 
            marginBottom: '8px' 
          }}>
            {t("pitchDeck.howItWorks.label")}
          </p>
          <h2 style={{ fontSize: '24px', fontWeight: 600, color: colors.primaryForeground, marginBottom: '24px' }}>
            {t("pitchDeck.howItWorks.headline")}
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '24px' }}>
            {[1, 2, 3].map((step) => (
              <div key={step} style={{ textAlign: 'center' }}>
                <div style={{ 
                  width: '32px', 
                  height: '32px', 
                  backgroundColor: colors.white, 
                  color: colors.primary, 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontWeight: 600, 
                  fontSize: '14px', 
                  marginBottom: '12px',
                  marginLeft: 'auto',
                  marginRight: 'auto'
                }}>
                  {step}
                </div>
                <h3 style={{ fontSize: '14px', fontWeight: 600, color: colors.primaryForeground, marginBottom: '4px' }}>
                  {t(`pitchDeck.howItWorks.steps.${step}.title`)}
                </h3>
                <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.4 }}>
                  {t(`pitchDeck.howItWorks.steps.${step}.description`)}
                </p>
              </div>
            ))}
          </div>

          <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '8px', padding: '16px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', textAlign: 'center' }}>
              {["40%", "60%", "1", "100%"].map((stat, i) => (
                <div key={i}>
                  <p style={{ fontSize: '20px', fontWeight: 600, color: colors.white }}>{stat}</p>
                  <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.8)' }}>
                    {t(`pitchDeck.howItWorks.stats.${i}`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing - White */}
        <div style={{ padding: '40px 32px', pageBreakInside: 'avoid' }}>
          <p style={{ 
            fontSize: '12px', 
            textTransform: 'uppercase', 
            letterSpacing: '0.1em', 
            color: colors.label, 
            fontWeight: 500, 
            marginBottom: '8px',
            textAlign: 'center'
          }}>
            {t("pitchDeck.pricing.label")}
          </p>
          <h2 style={{ fontSize: '24px', fontWeight: 600, color: colors.foreground, marginBottom: '24px', textAlign: 'center' }}>
            {t("pitchDeck.pricing.headline")}
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
            {plans.map(({ key, price }) => (
              <div 
                key={key} 
                style={{ 
                  backgroundColor: colors.white, 
                  border: key === "plus" ? `2px solid ${colors.primary}` : `1px solid ${colors.border}`,
                  borderRadius: '8px', 
                  padding: '12px'
                }}
              >
                {key === "plus" && (
                  <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.05em', color: colors.primary, fontWeight: 500, display: 'block', marginBottom: '4px' }}>
                    {t("pricingPage.mostPopular")}
                  </span>
                )}
                <h3 style={{ fontSize: '14px', fontWeight: 600, color: colors.foreground }}>
                  {t(`pitchDeck.pricing.plans.${key}.name`)}
                </h3>
                <p style={{ fontSize: '10px', color: colors.mutedForeground, marginBottom: '8px', lineHeight: 1.4 }}>
                  {t(`pitchDeck.pricing.plans.${key}.description`)}
                </p>
                <p style={{ fontSize: '18px', fontWeight: 600, color: colors.foreground, marginBottom: '8px' }}>
                  €{price}
                  <span style={{ fontSize: '10px', fontWeight: 400, color: colors.mutedForeground }}>/mo</span>
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {(t(`pitchDeck.pricing.plans.${key}.features`, { returnObjects: true }) as string[]).slice(0, 3).map((feature, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '4px', fontSize: '10px', color: colors.mutedForeground, marginBottom: '2px' }}>
                      <Check style={{ width: '10px', height: '10px', color: colors.primary, marginTop: '2px', flexShrink: 0 }} />
                      <span style={{ lineHeight: 1.4 }}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p style={{ textAlign: 'center', fontSize: '12px', color: colors.mutedForeground, marginTop: '16px' }}>
            {t("pitchDeck.pricing.note")}
          </p>
        </div>

        {/* Team & Contact - Primary BG */}
        <div style={{ 
          padding: '40px 32px', 
          backgroundColor: colors.primaryLight, 
          borderRadius: '16px' 
        }}>
          <p style={{ 
            fontSize: '12px', 
            textTransform: 'uppercase', 
            letterSpacing: '0.1em', 
            color: 'rgba(255,255,255,0.7)', 
            fontWeight: 500, 
            marginBottom: '8px',
            textAlign: 'center'
          }}>
            {t("pitchDeck.team.label")}
          </p>
          <h2 style={{ fontSize: '24px', fontWeight: 600, color: colors.primaryForeground, marginBottom: '8px', textAlign: 'center' }}>
            {t("pitchDeck.team.headline")}
          </h2>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)', textAlign: 'center', marginBottom: '24px' }}>
            {t("pitchDeck.team.subheadline")}
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '24px' }}>
            {teamMembers.map((member) => (
              <div key={member.name} style={{ textAlign: 'center' }}>
                <img 
                  src={member.image} 
                  alt={member.name}
                  style={{ 
                    width: '56px', 
                    height: '56px', 
                    borderRadius: '50%', 
                    objectFit: 'cover', 
                    border: '2px solid rgba(255,255,255,0.3)', 
                    marginBottom: '8px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    display: 'block'
                  }}
                />
                <h3 style={{ fontWeight: 600, color: colors.primaryForeground, fontSize: '14px' }}>{member.name}</h3>
                <a 
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '10px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}
                >
                  <Linkedin style={{ width: '10px', height: '10px' }} />
                  LinkedIn
                </a>
              </div>
            ))}
          </div>

          <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '8px', padding: '16px', textAlign: 'center' }}>
            <p style={{ fontSize: '10px', color: 'rgba(255,255,255,0.7)', marginBottom: '4px' }}>
              {t("pitchDeck.team.partOf")}
            </p>
            <p style={{ fontSize: '16px', fontWeight: 600, color: colors.primaryForeground, marginBottom: '12px' }}>One-Time Group</p>
            
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px', fontSize: '14px' }}>
              <a href="mailto:info@onerooted.nl" style={{ color: colors.white, textDecoration: 'none' }}>
                info@onerooted.nl
              </a>
              <span style={{ color: 'rgba(255,255,255,0.5)' }}>|</span>
              <a href="https://onerooted.nl" style={{ color: colors.white, textDecoration: 'none' }}>
                onerooted.nl
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
