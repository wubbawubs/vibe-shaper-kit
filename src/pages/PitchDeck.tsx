import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { Download, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { useState, useCallback } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
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
  padding: '36px 44px',
  position: 'relative',
  overflow: 'hidden',
};

// Step circle style - absolute positioning for perfect PDF centering
const stepCircleStyle: React.CSSProperties = {
  width: '32px',
  height: '32px',
  backgroundColor: colors.white,
  borderRadius: '50%',
  position: 'relative',
  margin: '0 auto 6px',
};

const stepNumberStyle: React.CSSProperties = {
  color: colors.primary,
  fontWeight: 700,
  fontSize: '13px',
  lineHeight: 1,
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -52%)',
};

// Icon box style - fixed for PDF alignment
  const iconBoxStyle: React.CSSProperties = {
    width: '26px',
    height: '26px',
    backgroundColor: 'rgba(45, 74, 66, 0.1)',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '6px',
    flexShrink: 0,
  };

export default function PitchDeck() {
  const { t } = useTranslation();
  const { lang } = useParams();
  const [isExporting, setIsExporting] = useState(false);

  const exportToPDF = useCallback(async () => {
    setIsExporting(true);
    document.documentElement.classList.add('pdf-exporting');
    
    try {
      // Wait for fonts to load
      await document.fonts.ready;
      
      // Wait for all images to load
      await Promise.all(
        Array.from(document.images)
          .filter(img => !img.complete)
          .map(img => new Promise(res => { img.onload = img.onerror = () => res(true); }))
      );
      
      await new Promise(resolve => setTimeout(resolve, 200));

      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'pt',
        format: 'a4',
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      // Export each page
      const pageIds = ['pdf-page-1', 'pdf-page-2'];
      
      for (let i = 0; i < pageIds.length; i++) {
        const element = document.getElementById(pageIds[i]);
        if (!element) continue;

        const canvas = await html2canvas(element, {
          scale: 2,
          backgroundColor: '#ffffff',
          logging: false,
          useCORS: true,
          allowTaint: false,
          removeContainer: true,
        });

        const imgData = canvas.toDataURL('image/png');

        if (i > 0) {
          pdf.addPage();
        }

        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      }

      pdf.save(`OneRooted-PitchDeck-${lang || 'en'}.pdf`);
    } catch (error) {
      console.error('PDF export failed:', error);
    } finally {
      document.documentElement.classList.remove('pdf-exporting');
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

      {/* PDF Container - Preview wrapper */}
      <div 
        style={{ 
          backgroundColor: '#e5e7eb', 
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
          minHeight: '100vh',
        }}
      >
        {/* ========== PAGE 1 ========== */}
        <section id="pdf-page-1" style={pageStyle}>
          {/* Header - Brand row with fixed alignment */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <img 
              src={logo} 
              alt="One Rooted" 
              style={{ height: '24px', width: 'auto', display: 'block' }} 
            />
            <span style={{ color: '#9ca3af', lineHeight: 1, fontSize: '16px' }}>|</span>
            <span style={{ fontSize: '15px', fontWeight: 600, color: colors.foreground, lineHeight: 1 }}>One Rooted</span>
          </div>

          {/* Hero - Compact */}
          <h1 style={{ fontSize: '28px', fontWeight: 600, color: colors.foreground, marginBottom: '6px', lineHeight: 1.1 }}>
            {t("pitchDeck.cover.headline")}
          </h1>
          <p style={{ fontSize: '12px', color: colors.mutedForeground, marginBottom: '16px', lineHeight: 1.5 }}>
            Not another ATS, the next-gen Talent Acquisition SaaS that centralises hiring workflows, automates candidate tracking, and scales with your business.
          </p>

          {/* Problem Section - Compact */}
          <div style={{ 
            padding: '16px', 
            backgroundColor: colors.primaryLight, 
            borderRadius: '10px', 
            marginBottom: '14px' 
          }}>
            <p style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.7)', fontWeight: 500, marginBottom: '4px' }}>
              {t("pitchDeck.problem.label")}
            </p>
            <h2 style={{ fontSize: '16px', fontWeight: 600, color: colors.primaryForeground, marginBottom: '12px', lineHeight: 1.2 }}>
              {t("pitchDeck.problem.headline")}
            </h2>
            
            <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
              {["ats", "slack", "excel"].map((tool) => (
                <div key={tool} style={{ flex: 1, backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '6px', padding: '8px' }}>
                  <h3 style={{ fontSize: '11px', fontWeight: 600, color: colors.primaryForeground, marginBottom: '3px' }}>
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

          {/* Solution Section - Compact */}
          <div style={{ marginBottom: '14px' }}>
            <p style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: colors.label, fontWeight: 500, marginBottom: '4px' }}>
              {t("pitchDeck.solution.label")}
            </p>
            <h2 style={{ fontSize: '16px', fontWeight: 600, color: colors.foreground, marginBottom: '4px', lineHeight: 1.2 }}>
              {t("pitchDeck.solution.headline")}
            </h2>
            <p style={{ fontSize: '10px', color: colors.mutedForeground, marginBottom: '10px', lineHeight: 1.4 }}>
              {t("pitchDeck.solution.description")}
            </p>
            
            <div style={{ display: 'flex', gap: '8px' }}>
              {pillars.map(({ icon, key }) => (
                <div key={key} style={{ flex: 1, backgroundColor: colors.muted, border: `1px solid ${colors.border}`, borderRadius: '6px', padding: '8px' }}>
                  <div style={iconBoxStyle}>
                    <img src={icon} alt="" style={{ width: '14px', height: '14px', display: 'block' }} />
                  </div>
                  <h3 style={{ fontSize: '10px', fontWeight: 600, color: colors.foreground, marginBottom: '3px' }}>
                    {t(`whatIs.pillars.${key}.title`)}
                  </h3>
                  <p style={{ fontSize: '9px', color: colors.mutedForeground, lineHeight: 1.3, margin: 0 }}>
                    {t(`whatIs.pillars.${key}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works - NOW ON PAGE 1 */}
          <div style={{ padding: '16px', backgroundColor: colors.primaryLight, borderRadius: '10px' }}>
            <p style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.7)', fontWeight: 500, marginBottom: '4px' }}>
              {t("pitchDeck.howItWorks.label")}
            </p>
            <h2 style={{ fontSize: '16px', fontWeight: 600, color: colors.primaryForeground, marginBottom: '12px', lineHeight: 1.2 }}>
              {t("pitchDeck.howItWorks.headline")}
            </h2>
            
            <div style={{ display: 'flex', gap: '16px', marginBottom: '12px' }}>
              {[1, 2, 3].map((step) => (
                <div key={step} style={{ flex: 1, textAlign: 'center' }}>
                  <div style={stepCircleStyle}>
                    <span style={stepNumberStyle}>{step}</span>
                  </div>
                  <h3 style={{ fontSize: '11px', fontWeight: 600, color: colors.primaryForeground, marginBottom: '3px' }}>
                    {t(`pitchDeck.howItWorks.steps.${step}.title`)}
                  </h3>
                  <p style={{ fontSize: '9px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.3, margin: 0 }}>
                    {t(`pitchDeck.howItWorks.steps.${step}.description`)}
                  </p>
                </div>
              ))}
            </div>

            <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '6px', padding: '10px' }}>
              <div style={{ display: 'flex' }}>
                {["40%", "60%", "1", "100%"].map((stat, i) => (
                  <div key={i} style={{ flex: 1, textAlign: 'center', padding: '2px' }}>
                    <p style={{ fontSize: '16px', fontWeight: 600, color: colors.white, margin: 0, lineHeight: 1 }}>{stat}</p>
                    <p style={{ fontSize: '9px', color: 'rgba(255,255,255,0.8)', margin: 0, marginTop: '2px' }}>
                      {t(`pitchDeck.howItWorks.stats.${i}`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Page number */}
          <div style={{ position: 'absolute', bottom: '18px', right: '22px', fontSize: '10px', color: colors.mutedForeground }}>
            1 / 2
          </div>
        </section>

        {/* ========== PAGE 2 ========== */}
        <section id="pdf-page-2" style={pageStyle}>
          {/* Pricing */}
          <div style={{ marginBottom: '20px' }}>
            <p style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: colors.label, fontWeight: 500, marginBottom: '4px', textAlign: 'center' }}>
              {t("pitchDeck.pricing.label")}
            </p>
            <h2 style={{ fontSize: '18px', fontWeight: 600, color: colors.foreground, marginBottom: '14px', textAlign: 'center', lineHeight: 1.2 }}>
              {t("pitchDeck.pricing.headline")}
            </h2>
            
            <div style={{ display: 'flex', gap: '8px' }}>
              {plans.map(({ key, price }) => (
                <div key={key} style={{ 
                  flex: 1, 
                  backgroundColor: colors.white, 
                  border: key === "plus" ? `2px solid ${colors.primary}` : `1px solid ${colors.border}`, 
                  borderRadius: '6px', 
                  padding: '12px'
                }}>
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
                  <p style={{ fontSize: '18px', fontWeight: 600, color: colors.foreground, marginBottom: '8px' }}>
                    €{price}<span style={{ fontSize: '9px', fontWeight: 400, color: colors.mutedForeground }}>/mo</span>
                  </p>
                  <div>
                    {(t(`pitchDeck.pricing.plans.${key}.features`, { returnObjects: true }) as string[]).slice(0, 3).map((feature, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '4px', marginBottom: '3px' }}>
                        <img src={icons.check} alt="" style={{ width: '8px', height: '8px', marginTop: '2px', display: 'block', flexShrink: 0 }} />
                        <span style={{ fontSize: '9px', color: colors.mutedForeground, lineHeight: 1.3 }}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p style={{ textAlign: 'center', fontSize: '10px', color: colors.mutedForeground, marginTop: '10px' }}>
              {t("pitchDeck.pricing.note")}
            </p>
          </div>

          {/* Team */}
          <div style={{ padding: '20px', backgroundColor: colors.primaryLight, borderRadius: '10px' }}>
            <p style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.7)', fontWeight: 500, marginBottom: '4px', textAlign: 'center' }}>
              {t("pitchDeck.team.label")}
            </p>
            <h2 style={{ fontSize: '18px', fontWeight: 600, color: colors.primaryForeground, marginBottom: '4px', textAlign: 'center', lineHeight: 1.2 }}>
              {t("pitchDeck.team.headline")}
            </h2>
            <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.8)', textAlign: 'center', marginBottom: '16px' }}>
              {t("pitchDeck.team.subheadline")}
            </p>
            
            <div className="teamRow" style={{ display: 'flex', marginBottom: '16px' }}>
              {teamMembers.map((member, index) => (
                <div key={member.name} className="teamMember" style={{ flex: 1, textAlign: 'center', marginRight: index < teamMembers.length - 1 ? '16px' : '0' }}>
                  <img 
                    src={member.image} 
                    alt={member.name}
                    style={{ width: '52px', height: '52px', borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(255,255,255,0.3)', display: 'block', margin: '0 auto 6px' }}
                  />
                  <h3 style={{ fontWeight: 600, color: colors.primaryForeground, fontSize: '12px', margin: '0 0 2px 0' }}>{member.name}</h3>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="socialRow" style={{ fontSize: '9px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span className="socialIcon" style={{ width: '10px', height: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginRight: '4px' }}>
                      <img src={icons.linkedin} alt="" style={{ width: '10px', height: '10px', display: 'block' }} />
                    </span>
                    <span className="socialText" style={{ lineHeight: 1 }}>LinkedIn</span>
                  </a>
                </div>
              ))}
            </div>

            <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '6px', padding: '14px', textAlign: 'center' }}>
              <p style={{ fontSize: '9px', color: 'rgba(255,255,255,0.7)', marginBottom: '2px' }}>
                {t("pitchDeck.team.partOf")}
              </p>
              <p style={{ fontSize: '14px', fontWeight: 600, color: colors.primaryForeground, marginBottom: '8px' }}>One-Time Group</p>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                <a href="mailto:info@onerooted.nl" style={{ color: colors.white, textDecoration: 'none', fontSize: '12px' }}>info@onerooted.nl</a>
                <span style={{ color: 'rgba(255,255,255,0.5)' }}>|</span>
                <a href="https://onerooted.nl" style={{ color: colors.white, textDecoration: 'none', fontSize: '12px' }}>onerooted.nl</a>
              </div>
            </div>
          </div>

          {/* Page number */}
          <div style={{ position: 'absolute', bottom: '18px', right: '22px', fontSize: '10px', color: colors.mutedForeground }}>
            2 / 2
          </div>
        </section>
      </div>
    </>
  );
}
