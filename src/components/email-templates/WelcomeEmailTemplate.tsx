import { ArrowRight, CheckCircle2, Users, BarChart3, Zap } from "lucide-react";
import logoWhite from "@/assets/onerooted-logo-white.png";

interface WelcomeEmailTemplateProps {
  userName: string;
  organizationName: string;
  loginLink: string;
  language?: "nl" | "en";
}

export const WelcomeEmailTemplate = ({
  userName,
  organizationName,
  loginLink,
  language = "nl",
}: WelcomeEmailTemplateProps) => {
  const isNL = language === "nl";
  
  return (
    <div style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif", backgroundColor: "#f8f9fa", padding: "40px 20px" }}>
      <div style={{ maxWidth: "600px", margin: "0 auto", backgroundColor: "#ffffff", borderRadius: "8px", overflow: "hidden", boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }}>
        
        {/* Header - compact with status badge */}
        <div style={{ 
          background: "linear-gradient(135deg, #1a4a42 0%, #2d6358 60%, #a17d3a 100%)", 
          padding: "24px 32px",
        }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <img 
                src={logoWhite} 
                alt="OneRooted" 
                style={{ height: "32px", width: "auto", filter: "brightness(0) invert(1)" }} 
              />
              <span style={{ fontSize: "18px", fontWeight: "600", color: "#ffffff", letterSpacing: "-0.3px" }}>
                OneRooted
              </span>
            </div>
            <div style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: "6px", 
              backgroundColor: "rgba(255,255,255,0.15)", 
              padding: "6px 12px", 
              borderRadius: "16px"
            }}>
              <CheckCircle2 size={14} color="#ffffff" />
              <span style={{ color: "#ffffff", fontSize: "12px", fontWeight: "500" }}>
                {isNL ? "Account aangemaakt" : "Account created"}
              </span>
            </div>
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: "40px 32px 32px" }}>
          <p style={{ fontSize: "16px", color: "#1a2e2a", marginBottom: "24px", lineHeight: "1.7" }}>
            {isNL ? `Welkom ${userName},` : `Welcome ${userName},`}
          </p>
          
          <p style={{ fontSize: "16px", color: "#3a4a46", marginBottom: "16px", lineHeight: "1.7" }}>
            {isNL 
              ? <>Je account voor <strong style={{ color: "#1a4a42" }}>{organizationName}</strong> is succesvol aangemaakt. Je kunt nu direct aan de slag met het stroomlijnen van jullie hiringproces.</>
              : <>Your account for <strong style={{ color: "#1a4a42" }}>{organizationName}</strong> has been successfully created. You can now start organizing and improving your hiring process in OneRooted.</>
            }
          </p>

          <p style={{ fontSize: "15px", color: "#5a6a66", marginBottom: "32px", lineHeight: "1.7" }}>
            {isNL 
              ? "OneRooted is gebouwd om overzicht, samenwerking en betere beslissingen samen te brengen in één systeem."
              : "OneRooted is built to bring structure, collaboration, and decision-making together in a single system."
            }
          </p>

          {/* Get started with - card style with icons */}
          <div style={{ marginBottom: "40px" }}>
            <p style={{ fontSize: "15px", fontWeight: "600", color: "#1a2e2a", marginBottom: "16px" }}>
              {isNL ? "Wat je kunt doen:" : "What you can do:"}
            </p>
            
            <div style={{ display: "flex", flexDirection: "column" as const, gap: "12px" }}>
              {/* Card 1 - Kandidaten beheren */}
              <div style={{ 
                display: "flex", 
                alignItems: "flex-start", 
                gap: "14px",
                backgroundColor: "#f8f9fa",
                padding: "18px",
                borderRadius: "10px"
              }}>
                <div style={{ 
                  backgroundColor: "#1a4a42", 
                  borderRadius: "10px", 
                  padding: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0
                }}>
                  <Users size={20} color="#ffffff" />
                </div>
                <div>
                  <p style={{ fontSize: "15px", fontWeight: "600", color: "#1a2e2a", margin: "0 0 4px 0" }}>
                    {isNL ? "Kandidaten beheren" : "Manage candidates"}
                  </p>
                  <p style={{ fontSize: "14px", color: "#6a7a76", margin: "0", lineHeight: "1.5" }}>
                    {isNL ? "Volg kandidaten door elke fase van je pipeline" : "Track every candidate across the full hiring flow"}
                  </p>
                </div>
              </div>
              
              {/* Card 2 - Inzichten & rapportages */}
              <div style={{ 
                display: "flex", 
                alignItems: "flex-start", 
                gap: "14px",
                backgroundColor: "#f8f9fa",
                padding: "18px",
                borderRadius: "10px"
              }}>
                <div style={{ 
                  backgroundColor: "#c9943e", 
                  borderRadius: "10px", 
                  padding: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0
                }}>
                  <BarChart3 size={20} color="#ffffff" />
                </div>
                <div>
                  <p style={{ fontSize: "15px", fontWeight: "600", color: "#1a2e2a", margin: "0 0 4px 0" }}>
                    {isNL ? "Inzichten & rapportages" : "Insights & reporting"}
                  </p>
                  <p style={{ fontSize: "14px", color: "#6a7a76", margin: "0", lineHeight: "1.5" }}>
                    {isNL ? "Krijg real-time data over je hiring performance" : "See what's working, where things slow down, and where to act"}
                  </p>
                </div>
              </div>
              
              {/* Card 3 - Automatiseer workflows */}
              <div style={{ 
                display: "flex", 
                alignItems: "flex-start", 
                gap: "14px",
                backgroundColor: "#f8f9fa",
                padding: "18px",
                borderRadius: "10px"
              }}>
                <div style={{ 
                  backgroundColor: "#2d6358", 
                  borderRadius: "10px", 
                  padding: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0
                }}>
                  <Zap size={20} color="#ffffff" />
                </div>
                <div>
                  <p style={{ fontSize: "15px", fontWeight: "600", color: "#1a2e2a", margin: "0 0 4px 0" }}>
                    {isNL ? "Automatiseer workflows" : "Automated workflows"}
                  </p>
                  <p style={{ fontSize: "14px", color: "#6a7a76", margin: "0", lineHeight: "1.5" }}>
                    {isNL ? "Bespaar tijd met slimme automatiseringen" : "Reduce manual work and focus on decisions that matter"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA - breathing room */}
          <div style={{ textAlign: "center" as const, marginBottom: "40px", paddingTop: "8px" }}>
            <a 
              href={loginLink}
              style={{ 
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "#1a4a42",
                color: "#ffffff", 
                padding: "14px 28px", 
                borderRadius: "6px", 
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: "600"
              }}
            >
              {isNL ? "Ga naar OneRooted" : "Go to OneRooted"}
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Tip block - calmer, coach-like */}
          <div style={{ 
            backgroundColor: "#f8f9fa", 
            borderRadius: "6px", 
            padding: "16px 20px", 
            borderLeft: "3px solid #a17d3a"
          }}>
            <p style={{ fontSize: "12px", fontWeight: "600", color: "#6a7a76", margin: "0 0 6px 0", textTransform: "uppercase", letterSpacing: "0.5px" }}>
              Tip
            </p>
            <p style={{ fontSize: "14px", color: "#3a4a46", margin: "0", lineHeight: "1.6" }}>
              {isNL 
                ? "Begin met het aanmaken van je eerste vacature om direct kandidaten te ontvangen."
                : "Create your first job opening to start receiving candidates right away."
              }
            </p>
          </div>
        </div>

        {/* Footer */}
        <div style={{ 
          backgroundColor: "#f8f9fa", 
          padding: "20px 32px",
          borderTop: "1px solid #e8ecea"
        }}>
          <p style={{ fontSize: "13px", color: "#6a7a76", margin: "0 0 4px 0" }}>
            {isNL 
              ? "Je ontvangt deze mail omdat je account is aangemaakt in OneRooted."
              : "You're receiving this email because an account was created for you in OneRooted."
            }
          </p>
          <p style={{ fontSize: "13px", color: "#6a7a76", margin: "0 0 16px 0" }}>
            {isNL 
              ? "Heb je vragen? We helpen je graag."
              : "Need help? We're happy to assist."
            }
          </p>
          <p style={{ fontSize: "12px", color: "#9aa9a5", margin: "0" }}>
            © 2025 OneRooted · {isNL ? "Hiring heeft geen nieuwe tool nodig. Het heeft een systeem nodig." : "Hiring doesn't need another tool. It needs a system."}
          </p>
        </div>
      </div>
    </div>
  );
};
