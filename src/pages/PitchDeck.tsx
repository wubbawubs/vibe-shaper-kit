import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { Download, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { useState, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
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

// Page styles - premium spacing
const pageStyle: React.CSSProperties = {
  width: `${PAGE_WIDTH}px`,
  height: `${PAGE_HEIGHT}px`,
  backgroundColor: colors.white,
  boxSizing: 'border-box',
  padding: '40px 48px',
  position: 'relative',
  overflow: 'hidden',
};

// Step circle style - larger for visual impact
const stepCircleStyle: React.CSSProperties = {
  width: '40px',
  height: '40px',
  backgroundColor: colors.white,
  borderRadius: '50%',
  position: 'relative',
  margin: '0 auto 8px',
};

const stepNumberStyle: React.CSSProperties = {
  color: colors.primary,
  fontWeight: 700,
  fontSize: '15px',
  lineHeight: 1,
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -52%)',
};

// Icon box style - slightly larger
const iconBoxStyle: React.CSSProperties = {
  width: '28px',
  height: '28px',
  backgroundColor: 'rgba(45, 74, 66, 0.1)',
  borderRadius: '5px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '8px',
  flexShrink: 0,
};

export default function PitchDeck() {
  const { t } = useTranslation();
  const { lang } = useParams();
  const [isExporting, setIsExporting] = useState(false);

  const exportToPDF = useCallback(async () => {
    setIsExporting(true);
    
    try {
      const currentUrl = window.location.href;
      const filename = `OneRooted-PitchDeck-${lang || 'en'}.pdf`;

      const response = await supabase.functions.invoke('export-pdf', {
        body: { url: currentUrl, filename },
      });

      if (response.error) {
        throw new Error(response.error.message || 'PDF export failed');
      }

      // The response.data is already an ArrayBuffer when Content-Type is application/pdf
      const blob = new Blob([response.data], { type: 'application/pdf' });

      // Download the file
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      toast.success('PDF exported successfully!');
    } catch (error) {
      console.error('PDF export failed:', error);
      toast.error('PDF export failed. Please try again.');
    } finally {
      setIsExporting(false);
    }
  }, [lang]);

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
          onClick={exportToPDF}
          disabled={isExporting}
          className="bg-primary hover:bg-primary/90 shadow-lg"
        >
          {isExporting ? (
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          ) : (
            <Download className="w-4 h-4 mr-2" />
          )}
          {isExporting ? "Exporting..." : t("pitchDeck.exportButton")}
        </Button>
      </div>

      {/* PDF Container - Preview wrapper (dark canvas bg, removed during export via CSS) */}
      <div 
        id="pdf-export-root"
        className="pdf-export-container pdfPreview"
      >
        {/* ========== PAGE 1 ========== */}
        <section id="pdf-page-1" className="pdf-page" style={pageStyle}>
          {/* Header - Brand row with subtle border */}
          <div className="brandRow pdfHeader" style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingBottom: '14px', borderBottom: '1px solid rgba(0,0,0,0.06)', marginBottom: '20px' }}>
            <img 
              src={logo} 
              alt="One Rooted" 
              className="brandMark"
              style={{ height: '22px', width: 'auto', display: 'block' }} 
            />
            <span className="brandDivider" style={{ color: '#9ca3af', lineHeight: 1, fontSize: '16px' }}>|</span>
            <span className="brandName" style={{ fontSize: '15px', fontWeight: 600, color: colors.foreground, lineHeight: 1 }}>One Rooted</span>
          </div>

          {/* Hero - Larger typography */}
          <h1 style={{ fontSize: '32px', fontWeight: 600, color: colors.foreground, marginBottom: '8px', lineHeight: 1.15 }}>
            {t("pitchDeck.cover.headline")}
          </h1>
          <p style={{ fontSize: '12px', color: colors.mutedForeground, marginBottom: '20px', lineHeight: 1.5 }}>
            Not another ATS, the next-gen Talent Acquisition SaaS that centralises hiring workflows, automates candidate tracking, and scales with your business.
          </p>

          {/* Problem Section - More spacious */}
          <div className="pdfSection" style={{ 
            padding: '18px 20px', 
            backgroundColor: colors.primaryLight, 
            borderRadius: '10px', 
            marginBottom: '20px' 
          }}>
            <p style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.7)', fontWeight: 500, marginBottom: '6px' }}>
              {t("pitchDeck.problem.label")}
            </p>
            <h2 style={{ fontSize: '18px', fontWeight: 600, color: colors.primaryForeground, marginBottom: '14px', lineHeight: 1.2 }}>
              {t("pitchDeck.problem.headline")}
            </h2>
            
            <div style={{ display: 'flex', gap: '10px', marginBottom: '14px' }}>
              {["ats", "slack", "excel"].map((tool) => (
                <div key={tool} className="problemCard" style={{ flex: 1, backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '6px', padding: '10px', minHeight: '56px' }}>
                  <h3 style={{ fontSize: '11px', fontWeight: 600, color: colors.primaryForeground, marginBottom: '4px' }}>
                    {t(`problem.tools.${tool}.name`)}
                  </h3>
                  <p style={{ fontSize: '9px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.4, margin: 0 }}>
                    {t(`problem.tools.${tool}.description`)}
                  </p>
                </div>
              ))}
            </div>

            <p style={{ fontSize: '11px', color: colors.primaryForeground, fontWeight: 500, textAlign: 'center', margin: 0 }}>
              {t("pitchDeck.problem.consequence")}
            </p>
          </div>

          {/* Solution Section - Larger cards */}
          <div className="pdfSection" style={{ marginBottom: '20px' }}>
            <p style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: colors.label, fontWeight: 500, marginBottom: '6px' }}>
              {t("pitchDeck.solution.label")}
            </p>
            <h2 style={{ fontSize: '18px', fontWeight: 600, color: colors.foreground, marginBottom: '6px', lineHeight: 1.2 }}>
              {t("pitchDeck.solution.headline")}
            </h2>
            <p style={{ fontSize: '10px', color: colors.mutedForeground, marginBottom: '12px', lineHeight: 1.4 }}>
              {t("pitchDeck.solution.description")}
            </p>
            
            <div style={{ display: 'flex', gap: '10px' }}>
              {pillars.map(({ icon, key }) => (
                <div key={key} className="pillarCard" style={{ flex: 1, backgroundColor: colors.muted, border: `1px solid ${colors.border}`, borderRadius: '8px', padding: '10px', minHeight: '92px' }}>
                  <div className="iconBox" style={iconBoxStyle}>
                    <img src={icon} alt="" style={{ width: '15px', height: '15px', display: 'block' }} />
                  </div>
                  <h3 style={{ fontSize: '11px', fontWeight: 600, color: colors.foreground, marginBottom: '4px' }}>
                    {t(`whatIs.pillars.${key}.title`)}
                  </h3>
                  <p className="pillarDesc" style={{ fontSize: '9px', color: colors.mutedForeground, lineHeight: 1.35, margin: 0 }}>
                    {t(`whatIs.pillars.${key}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works - Larger step circles and stats */}
          <div style={{ padding: '20px', backgroundColor: colors.primaryLight, borderRadius: '10px' }}>
            <p style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.7)', fontWeight: 500, marginBottom: '6px' }}>
              {t("pitchDeck.howItWorks.label")}
            </p>
            <h2 style={{ fontSize: '18px', fontWeight: 600, color: colors.primaryForeground, marginBottom: '16px', lineHeight: 1.2 }}>
              {t("pitchDeck.howItWorks.headline")}
            </h2>
            
            <div style={{ display: 'flex', gap: '20px', marginBottom: '16px' }}>
              {[1, 2, 3].map((step) => (
                <div key={step} style={{ flex: 1, textAlign: 'center' }}>
                  <div className="stepCircle" style={stepCircleStyle}>
                    <span className="stepNum" style={stepNumberStyle}>{step}</span>
                  </div>
                  <h3 style={{ fontSize: '12px', fontWeight: 600, color: colors.primaryForeground, marginBottom: '4px' }}>
                    {t(`pitchDeck.howItWorks.steps.${step}.title`)}
                  </h3>
                  <p style={{ fontSize: '9px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.35, margin: 0 }}>
                    {t(`pitchDeck.howItWorks.steps.${step}.description`)}
                  </p>
                </div>
              ))}
            </div>

            <div className="statsBar" style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '8px', padding: '14px' }}>
              <div style={{ display: 'flex' }}>
                {["40%", "60%", "1", "100%"].map((stat, i) => (
                  <div key={i} style={{ flex: 1, textAlign: 'center', padding: '2px' }}>
                    <p className="statValue" style={{ fontSize: '20px', fontWeight: 600, color: colors.white, margin: 0, lineHeight: 1 }}>{stat}</p>
                    <p style={{ fontSize: '9px', color: 'rgba(255,255,255,0.8)', margin: 0, marginTop: '4px' }}>
                      {t(`pitchDeck.howItWorks.stats.${i}`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Page number - absolute positioned */}
          <div className="pdfPageNumber">1 / 2</div>
        </section>

        {/* ========== PAGE 2 ========== */}
        <section id="pdf-page-2" className="pdf-page" style={pageStyle}>
          {/* Pricing */}
          <div className="pdfSection" style={{ marginBottom: '24px' }}>
            <p style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: colors.label, fontWeight: 500, marginBottom: '6px', textAlign: 'center' }}>
              {t("pitchDeck.pricing.label")}
            </p>
            <h2 style={{ fontSize: '20px', fontWeight: 600, color: colors.foreground, marginBottom: '16px', textAlign: 'center', lineHeight: 1.2 }}>
              {t("pitchDeck.pricing.headline")}
            </h2>
            
            <div style={{ display: 'flex', gap: '10px' }}>
              {plans.map(({ key, price }) => (
                <div key={key} className="planCard" style={{ 
                  flex: 1, 
                  backgroundColor: colors.white, 
                  border: key === "plus" ? `2px solid ${colors.primary}` : `1px solid ${colors.border}`, 
                  borderRadius: '8px', 
                  padding: '14px',
                  minHeight: '165px',
                  position: 'relative',
                }}>
                  {key === "plus" && (
                    <span style={{ 
                      fontSize: '8px', 
                      textTransform: 'uppercase', 
                      letterSpacing: '0.05em', 
                      color: colors.white, 
                      fontWeight: 600, 
                      display: 'inline-block', 
                      marginBottom: '4px',
                      backgroundColor: colors.primary,
                      padding: '2px 6px',
                      borderRadius: '4px',
                    }}>
                      {t("pricingPage.mostPopular")}
                    </span>
                  )}
                  <h3 style={{ fontSize: '13px', fontWeight: 600, color: colors.foreground, marginBottom: '3px' }}>
                    {t(`pitchDeck.pricing.plans.${key}.name`)}
                  </h3>
                  <p style={{ fontSize: '9px', color: colors.mutedForeground, marginBottom: '8px', lineHeight: 1.35, minHeight: '24px' }}>
                    {t(`pitchDeck.pricing.plans.${key}.description`)}
                  </p>
                  <p className="planPrice" style={{ fontSize: '22px', fontWeight: 600, color: colors.foreground, marginBottom: '10px' }}>
                    €{price}<span style={{ fontSize: '10px', fontWeight: 400, color: colors.mutedForeground }}>/mo</span>
                  </p>
                  <div>
                    {(t(`pitchDeck.pricing.plans.${key}.features`, { returnObjects: true }) as string[]).slice(0, 3).map((feature, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '5px', marginBottom: '4px' }}>
                        <img src={icons.check} alt="" style={{ width: '9px', height: '9px', marginTop: '2px', display: 'block', flexShrink: 0 }} />
                        <span style={{ fontSize: '9px', color: colors.mutedForeground, lineHeight: 1.35 }}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p style={{ textAlign: 'center', fontSize: '10px', color: colors.mutedForeground, marginTop: '12px' }}>
              {t("pitchDeck.pricing.note")}
            </p>
          </div>

          {/* Team */}
          <div style={{ padding: '22px', backgroundColor: colors.primaryLight, borderRadius: '10px' }}>
            <p style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.7)', fontWeight: 500, marginBottom: '6px', textAlign: 'center' }}>
              {t("pitchDeck.team.label")}
            </p>
            <h2 style={{ fontSize: '20px', fontWeight: 600, color: colors.primaryForeground, marginBottom: '6px', textAlign: 'center', lineHeight: 1.2 }}>
              {t("pitchDeck.team.headline")}
            </h2>
            <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.8)', textAlign: 'center', marginBottom: '18px' }}>
              {t("pitchDeck.team.subheadline")}
            </p>
            
            <div className="teamRow" style={{ display: 'flex', marginBottom: '18px' }}>
              {teamMembers.map((member, index) => (
                <div key={member.name} className="teamMember" style={{ flex: 1, textAlign: 'center', marginRight: index < teamMembers.length - 1 ? '20px' : '0' }}>
                  <img 
                    src={member.image} 
                    alt={member.name}
                    style={{ width: '56px', height: '56px', borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(255,255,255,0.3)', display: 'block', margin: '0 auto 8px' }}
                  />
                  <h3 style={{ fontWeight: 600, color: colors.primaryForeground, fontSize: '13px', margin: '0 0 3px 0' }}>{member.name}</h3>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="socialRow" style={{ fontSize: '9px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span className="socialIcon" style={{ width: '10px', height: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginRight: '4px' }}>
                      <img src={icons.linkedin} alt="" style={{ width: '10px', height: '10px', display: 'block' }} />
                    </span>
                    <span className="socialText" style={{ lineHeight: 1 }}>LinkedIn</span>
                  </a>
                </div>
              ))}
            </div>

            <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '8px', padding: '16px', textAlign: 'center' }}>
              <p style={{ fontSize: '9px', color: 'rgba(255,255,255,0.7)', marginBottom: '3px' }}>
                {t("pitchDeck.team.partOf")}
              </p>
              <p style={{ fontSize: '15px', fontWeight: 600, color: colors.primaryForeground, marginBottom: '10px' }}>One-Time Group</p>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px' }}>
                <a href="mailto:info@onerooted.nl" style={{ color: colors.white, textDecoration: 'none', fontSize: '12px' }}>info@onerooted.nl</a>
                <span style={{ color: 'rgba(255,255,255,0.5)' }}>|</span>
                <a href="https://onerooted.nl" style={{ color: colors.white, textDecoration: 'none', fontSize: '12px' }}>onerooted.nl</a>
              </div>
            </div>
          </div>

          {/* Page number - absolute positioned */}
          <div className="pdfPageNumber">2 / 2</div>
        </section>
      </div>
    </>
  );
}
