import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { usePDF } from "react-to-pdf";
import { Download } from "lucide-react";
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
  primaryLight: 'rgba(45, 74, 66, 0.85)',
  primaryForeground: '#ffffff',
  foreground: '#1f2937',
  mutedForeground: '#6b7280',
  label: '#d97706',
  border: '#e5e7eb',
  muted: '#f3f4f6',
  white: '#ffffff',
};

// Base64 encoded SVG icons for PDF compatibility
const icons = {
  data: `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2d4a42" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>')}`,
  workflows: `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2d4a42" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>')}`,
  intelligence: `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2d4a42" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>')}`,
  accountability: `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2d4a42" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>')}`,
  check: `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#2d4a42" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>')}`,
  linkedin: `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>')}`,
};

const pillars = [
  { icon: icons.data, key: "data" },
  { icon: icons.workflows, key: "workflows" },
  { icon: icons.intelligence, key: "intelligence" },
  { icon: icons.accountability, key: "accountability" },
];

const teamMembers = [
  { name: "Robin", image: robin, linkedin: "https://www.linkedin.com/in/robindennie024/" },
  { name: "Erik", image: erik, linkedin: "https://www.linkedin.com/in/erik-dijkshoorn-1a72aa17/" },
  { name: "Juliette", image: juliette, linkedin: "https://www.linkedin.com/in/juliette-welten-ab566061/" },
  { name: "Luuk", image: luuk, linkedin: "https://www.linkedin.com/in/luuk-wubs-32a451252/" },
];

// A4 page dimensions at 96dpi
const PAGE_WIDTH = 794;
const PAGE_HEIGHT = 1123;

// Page styles
const pageStyle: React.CSSProperties = {
  width: `${PAGE_WIDTH}px`,
  height: `${PAGE_HEIGHT}px`,
  backgroundColor: colors.white,
  boxSizing: 'border-box',
  padding: '40px 48px',
  position: 'relative',
  overflow: 'hidden',
};

export default function PitchDeck() {
  const { t } = useTranslation();
  const { lang } = useParams();
  
  const { toPDF, targetRef: pdfRef } = usePDF({
    filename: `OneRooted-PitchDeck-${lang || "en"}.pdf`,
    page: {
      margin: 0,
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

      {/* PDF Container */}
      <div 
        ref={pdfRef} 
        style={{ 
          backgroundColor: '#e5e7eb', 
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px'
        }}
      >
        {/* ========== PAGE 1 ========== */}
        <section style={pageStyle} data-page="1">
          {/* Header */}
          <table style={{ borderCollapse: 'collapse', marginBottom: '24px' }}>
            <tbody>
              <tr>
                <td style={{ verticalAlign: 'middle', paddingRight: '10px' }}>
                  <img src={logo} alt="One Rooted" style={{ height: '28px', display: 'block' }} />
                </td>
                <td style={{ verticalAlign: 'middle', paddingRight: '10px' }}>
                  <span style={{ color: '#9ca3af' }}>|</span>
                </td>
                <td style={{ verticalAlign: 'middle' }}>
                  <span style={{ fontSize: '16px', fontWeight: 500, color: colors.foreground }}>One Rooted</span>
                </td>
              </tr>
            </tbody>
          </table>

          {/* Hero */}
          <h1 style={{ fontSize: '32px', fontWeight: 600, color: colors.foreground, marginBottom: '8px', lineHeight: 1.1 }}>
            {t("pitchDeck.cover.headline")}
          </h1>
          <p style={{ fontSize: '14px', color: colors.mutedForeground, marginBottom: '24px', lineHeight: 1.5 }}>
            Not another ATS, the next-gen Talent Acquisition SaaS that centralises hiring workflows, automates candidate tracking, and scales with your business.
          </p>

          {/* Problem Section */}
          <div style={{ 
            padding: '24px', 
            backgroundColor: colors.primaryLight, 
            borderRadius: '12px', 
            marginBottom: '20px' 
          }}>
            <p style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.7)', fontWeight: 500, marginBottom: '6px' }}>
              {t("pitchDeck.problem.label")}
            </p>
            <h2 style={{ fontSize: '20px', fontWeight: 600, color: colors.primaryForeground, marginBottom: '16px', lineHeight: 1.2 }}>
              {t("pitchDeck.problem.headline")}
            </h2>
            
            <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '8px', marginBottom: '16px' }}>
              <tbody>
                <tr>
                  {["ats", "slack", "excel"].map((tool) => (
                    <td key={tool} style={{ width: '33.33%', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '6px', padding: '10px', verticalAlign: 'top' }}>
                      <h3 style={{ fontSize: '12px', fontWeight: 600, color: colors.primaryForeground, marginBottom: '4px' }}>
                        {t(`problem.tools.${tool}.name`)}
                      </h3>
                      <p style={{ fontSize: '10px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.4, margin: 0 }}>
                        {t(`problem.tools.${tool}.description`)}
                      </p>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>

            <p style={{ fontSize: '13px', color: colors.primaryForeground, fontWeight: 500, textAlign: 'center', margin: 0 }}>
              {t("pitchDeck.problem.consequence")}
            </p>
          </div>

          {/* Solution Section */}
          <div style={{ marginBottom: '16px' }}>
            <p style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: colors.label, fontWeight: 500, marginBottom: '6px' }}>
              {t("pitchDeck.solution.label")}
            </p>
            <h2 style={{ fontSize: '20px', fontWeight: 600, color: colors.foreground, marginBottom: '6px', lineHeight: 1.2 }}>
              {t("pitchDeck.solution.headline")}
            </h2>
            <p style={{ fontSize: '12px', color: colors.mutedForeground, marginBottom: '16px', lineHeight: 1.4 }}>
              {t("pitchDeck.solution.description")}
            </p>
            
            <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '8px' }}>
              <tbody>
                <tr>
                  {pillars.map(({ icon, key }) => (
                    <td key={key} style={{ width: '25%', backgroundColor: colors.muted, border: `1px solid ${colors.border}`, borderRadius: '6px', padding: '10px', verticalAlign: 'top' }}>
                      <table style={{ width: '28px', height: '28px', backgroundColor: 'rgba(45, 74, 66, 0.1)', borderRadius: '4px', marginBottom: '6px', borderCollapse: 'collapse' }}>
                        <tbody>
                          <tr>
                            <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                              <img src={icon} alt="" style={{ width: '14px', height: '14px', display: 'block', margin: '0 auto' }} />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <h3 style={{ fontSize: '12px', fontWeight: 600, color: colors.foreground, marginBottom: '4px' }}>
                        {t(`whatIs.pillars.${key}.title`)}
                      </h3>
                      <p style={{ fontSize: '10px', color: colors.mutedForeground, lineHeight: 1.3, margin: 0 }}>
                        {t(`whatIs.pillars.${key}.description`)}
                      </p>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          {/* Page number */}
          <div style={{ position: 'absolute', bottom: '20px', right: '24px', fontSize: '11px', color: colors.mutedForeground }}>
            1 / 2
          </div>
        </section>

        {/* ========== PAGE 2 ========== */}
        <section style={pageStyle} data-page="2">
          {/* How It Works */}
          <div style={{ padding: '24px', backgroundColor: colors.primaryLight, borderRadius: '12px', marginBottom: '20px' }}>
            <p style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.7)', fontWeight: 500, marginBottom: '6px' }}>
              {t("pitchDeck.howItWorks.label")}
            </p>
            <h2 style={{ fontSize: '20px', fontWeight: 600, color: colors.primaryForeground, marginBottom: '16px', lineHeight: 1.2 }}>
              {t("pitchDeck.howItWorks.headline")}
            </h2>
            
            <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '12px', marginBottom: '16px' }}>
              <tbody>
                <tr>
                  {[1, 2, 3].map((step) => (
                    <td key={step} style={{ width: '33.33%', textAlign: 'center', verticalAlign: 'top' }}>
                      <table style={{ width: '28px', height: '28px', backgroundColor: colors.white, borderRadius: '50%', borderCollapse: 'collapse', margin: '0 auto 8px' }}>
                        <tbody>
                          <tr>
                            <td style={{ textAlign: 'center', verticalAlign: 'middle', color: colors.primary, fontWeight: 600, fontSize: '12px', lineHeight: 1 }}>
                              {step}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <h3 style={{ fontSize: '12px', fontWeight: 600, color: colors.primaryForeground, marginBottom: '4px' }}>
                        {t(`pitchDeck.howItWorks.steps.${step}.title`)}
                      </h3>
                      <p style={{ fontSize: '10px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.3, margin: 0 }}>
                        {t(`pitchDeck.howItWorks.steps.${step}.description`)}
                      </p>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>

            <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '6px', padding: '12px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                  <tr>
                    {["40%", "60%", "1", "100%"].map((stat, i) => (
                      <td key={i} style={{ width: '25%', textAlign: 'center', padding: '4px' }}>
                        <p style={{ fontSize: '18px', fontWeight: 600, color: colors.white, margin: 0, lineHeight: 1 }}>{stat}</p>
                        <p style={{ fontSize: '10px', color: 'rgba(255,255,255,0.8)', margin: 0 }}>
                          {t(`pitchDeck.howItWorks.stats.${i}`)}
                        </p>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Pricing */}
          <div style={{ marginBottom: '20px' }}>
            <p style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: colors.label, fontWeight: 500, marginBottom: '6px', textAlign: 'center' }}>
              {t("pitchDeck.pricing.label")}
            </p>
            <h2 style={{ fontSize: '20px', fontWeight: 600, color: colors.foreground, marginBottom: '16px', textAlign: 'center', lineHeight: 1.2 }}>
              {t("pitchDeck.pricing.headline")}
            </h2>
            
            <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '6px' }}>
              <tbody>
                <tr>
                  {plans.map(({ key, price }) => (
                    <td key={key} style={{ width: '25%', backgroundColor: colors.white, border: key === "plus" ? `2px solid ${colors.primary}` : `1px solid ${colors.border}`, borderRadius: '6px', padding: '10px', verticalAlign: 'top' }}>
                      {key === "plus" && (
                        <span style={{ fontSize: '8px', textTransform: 'uppercase', letterSpacing: '0.05em', color: colors.primary, fontWeight: 500, display: 'block', marginBottom: '2px' }}>
                          {t("pricingPage.mostPopular")}
                        </span>
                      )}
                      <h3 style={{ fontSize: '12px', fontWeight: 600, color: colors.foreground, marginBottom: '2px' }}>
                        {t(`pitchDeck.pricing.plans.${key}.name`)}
                      </h3>
                      <p style={{ fontSize: '9px', color: colors.mutedForeground, marginBottom: '6px', lineHeight: 1.3 }}>
                        {t(`pitchDeck.pricing.plans.${key}.description`)}
                      </p>
                      <p style={{ fontSize: '16px', fontWeight: 600, color: colors.foreground, marginBottom: '6px' }}>
                        €{price}<span style={{ fontSize: '9px', fontWeight: 400, color: colors.mutedForeground }}>/mo</span>
                      </p>
                      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <tbody>
                          {(t(`pitchDeck.pricing.plans.${key}.features`, { returnObjects: true }) as string[]).slice(0, 3).map((feature, i) => (
                            <tr key={i}>
                              <td style={{ width: '12px', verticalAlign: 'top', paddingBottom: '2px' }}>
                                <img src={icons.check} alt="" style={{ width: '8px', height: '8px', display: 'block' }} />
                              </td>
                              <td style={{ fontSize: '9px', color: colors.mutedForeground, lineHeight: 1.3, paddingBottom: '2px' }}>
                                {feature}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
            <p style={{ textAlign: 'center', fontSize: '10px', color: colors.mutedForeground, marginTop: '10px' }}>
              {t("pitchDeck.pricing.note")}
            </p>
          </div>

          {/* Team */}
          <div style={{ padding: '20px', backgroundColor: colors.primaryLight, borderRadius: '12px' }}>
            <p style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.7)', fontWeight: 500, marginBottom: '4px', textAlign: 'center' }}>
              {t("pitchDeck.team.label")}
            </p>
            <h2 style={{ fontSize: '18px', fontWeight: 600, color: colors.primaryForeground, marginBottom: '4px', textAlign: 'center', lineHeight: 1.2 }}>
              {t("pitchDeck.team.headline")}
            </h2>
            <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.8)', textAlign: 'center', marginBottom: '16px' }}>
              {t("pitchDeck.team.subheadline")}
            </p>
            
            <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '12px', marginBottom: '16px' }}>
              <tbody>
                <tr>
                  {teamMembers.map((member) => (
                    <td key={member.name} style={{ width: '25%', textAlign: 'center', verticalAlign: 'top' }}>
                      <img 
                        src={member.image} 
                        alt={member.name}
                        style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(255,255,255,0.3)', display: 'block', margin: '0 auto 6px' }}
                      />
                      <h3 style={{ fontWeight: 600, color: colors.primaryForeground, fontSize: '12px', margin: '0 0 2px 0' }}>{member.name}</h3>
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" style={{ fontSize: '9px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
                        <img src={icons.linkedin} alt="" style={{ width: '9px', height: '9px', verticalAlign: 'middle', marginRight: '3px' }} />
                        LinkedIn
                      </a>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>

            <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '6px', padding: '12px', textAlign: 'center' }}>
              <p style={{ fontSize: '9px', color: 'rgba(255,255,255,0.7)', marginBottom: '2px' }}>
                {t("pitchDeck.team.partOf")}
              </p>
              <p style={{ fontSize: '14px', fontWeight: 600, color: colors.primaryForeground, marginBottom: '8px' }}>One-Time Group</p>
              <table style={{ borderCollapse: 'collapse', margin: '0 auto' }}>
                <tbody>
                  <tr>
                    <td style={{ textAlign: 'right', paddingRight: '10px' }}>
                      <a href="mailto:info@onerooted.nl" style={{ color: colors.white, textDecoration: 'none', fontSize: '12px' }}>info@onerooted.nl</a>
                    </td>
                    <td style={{ color: 'rgba(255,255,255,0.5)', textAlign: 'center' }}>|</td>
                    <td style={{ textAlign: 'left', paddingLeft: '10px' }}>
                      <a href="https://onerooted.nl" style={{ color: colors.white, textDecoration: 'none', fontSize: '12px' }}>onerooted.nl</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Page number */}
          <div style={{ position: 'absolute', bottom: '20px', right: '24px', fontSize: '11px', color: colors.mutedForeground }}>
            2 / 2
          </div>
        </section>
      </div>
    </>
  );
}
