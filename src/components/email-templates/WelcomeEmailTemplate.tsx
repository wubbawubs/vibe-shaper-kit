import { ArrowRight, CheckCircle2, Users, BarChart3, Zap } from "lucide-react";
import { OneRootedLogoWhite } from "./OneRootedLogoWhite";

interface WelcomeEmailTemplateProps {
  userName: string;
  organizationName: string;
  loginLink: string;
}

export const WelcomeEmailTemplate = ({
  userName,
  organizationName,
  loginLink,
}: WelcomeEmailTemplateProps) => {
  return (
    <div style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif", backgroundColor: "#faf9f8", padding: "40px 20px" }}>
      <div style={{ maxWidth: "600px", margin: "0 auto", backgroundColor: "#ffffff", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
        {/* Header with gradient */}
        <div style={{ 
          background: "linear-gradient(135deg, #1a4a42 0%, #2d6358 50%, #c9943e 100%)", 
          padding: "40px 32px",
          textAlign: "center" as const
        }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "16px" }}>
            <OneRootedLogoWhite size={48} />
            <span style={{ fontSize: "24px", fontWeight: "700", color: "#ffffff", letterSpacing: "-0.5px" }}>
              One Rooted
            </span>
          </div>
          <div style={{ 
            display: "inline-flex", 
            alignItems: "center", 
            gap: "8px", 
            backgroundColor: "rgba(255,255,255,0.15)", 
            padding: "8px 16px", 
            borderRadius: "20px",
            marginBottom: "16px"
          }}>
            <CheckCircle2 size={18} color="#ffffff" />
            <span style={{ color: "#ffffff", fontSize: "14px", fontWeight: "500" }}>Account aangemaakt</span>
          </div>
          <h1 style={{ color: "#ffffff", fontSize: "28px", fontWeight: "600", margin: "0", letterSpacing: "-0.5px" }}>
            Welkom bij One Rooted!
          </h1>
        </div>

        {/* Content */}
        <div style={{ padding: "40px 32px" }}>
          <p style={{ fontSize: "16px", color: "#1a2e2a", marginBottom: "24px", lineHeight: "1.6" }}>
            Hallo <strong>{userName}</strong>,
          </p>
          
          <p style={{ fontSize: "16px", color: "#4a5e5a", marginBottom: "32px", lineHeight: "1.6" }}>
            Geweldig dat je erbij bent! Je account voor <strong style={{ color: "#1a4a42" }}>{organizationName}</strong> is succesvol aangemaakt. Je kunt nu direct aan de slag met het stroomlijnen van je hiring proces.
          </p>

          {/* Features grid */}
          <div style={{ marginBottom: "32px" }}>
            <p style={{ fontSize: "14px", color: "#1a2e2a", fontWeight: "600", marginBottom: "16px" }}>
              Wat je kunt doen:
            </p>
            <div style={{ display: "grid", gap: "12px" }}>
              <div style={{ 
                display: "flex", 
                alignItems: "flex-start", 
                gap: "12px",
                backgroundColor: "#f5f7f6",
                padding: "16px",
                borderRadius: "10px"
              }}>
                <div style={{ 
                  backgroundColor: "#1a4a42", 
                  borderRadius: "8px", 
                  padding: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  <Users size={18} color="#ffffff" />
                </div>
                <div>
                  <p style={{ fontSize: "14px", fontWeight: "600", color: "#1a2e2a", margin: "0 0 4px 0" }}>
                    Kandidaten beheren
                  </p>
                  <p style={{ fontSize: "13px", color: "#6a7a76", margin: "0" }}>
                    Volg kandidaten door elke fase van je pipeline
                  </p>
                </div>
              </div>
              
              <div style={{ 
                display: "flex", 
                alignItems: "flex-start", 
                gap: "12px",
                backgroundColor: "#f5f7f6",
                padding: "16px",
                borderRadius: "10px"
              }}>
                <div style={{ 
                  backgroundColor: "#c9943e", 
                  borderRadius: "8px", 
                  padding: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  <BarChart3 size={18} color="#ffffff" />
                </div>
                <div>
                  <p style={{ fontSize: "14px", fontWeight: "600", color: "#1a2e2a", margin: "0 0 4px 0" }}>
                    Inzichten & rapportages
                  </p>
                  <p style={{ fontSize: "13px", color: "#6a7a76", margin: "0" }}>
                    Krijg real-time data over je hiring performance
                  </p>
                </div>
              </div>
              
              <div style={{ 
                display: "flex", 
                alignItems: "flex-start", 
                gap: "12px",
                backgroundColor: "#f5f7f6",
                padding: "16px",
                borderRadius: "10px"
              }}>
                <div style={{ 
                  backgroundColor: "#2d6358", 
                  borderRadius: "8px", 
                  padding: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  <Zap size={18} color="#ffffff" />
                </div>
                <div>
                  <p style={{ fontSize: "14px", fontWeight: "600", color: "#1a2e2a", margin: "0 0 4px 0" }}>
                    Automatiseer workflows
                  </p>
                  <p style={{ fontSize: "13px", color: "#6a7a76", margin: "0" }}>
                    Bespaar tijd met slimme automatiseringen
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div style={{ textAlign: "center" as const, marginBottom: "32px" }}>
            <a 
              href={loginLink}
              style={{ 
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "linear-gradient(135deg, #1a4a42 0%, #2d6358 100%)", 
                color: "#ffffff", 
                padding: "16px 32px", 
                borderRadius: "10px", 
                textDecoration: "none",
                fontSize: "16px",
                fontWeight: "600",
                boxShadow: "0 4px 14px rgba(26, 74, 66, 0.25)"
              }}
            >
              Ga naar One Rooted
              <ArrowRight size={18} />
            </a>
          </div>

          <div style={{ 
            backgroundColor: "#fef9f0", 
            borderRadius: "10px", 
            padding: "20px", 
            marginBottom: "24px",
            border: "1px solid #f5e6cd"
          }}>
            <p style={{ fontSize: "14px", color: "#8a6b2e", margin: "0", textAlign: "center" as const }}>
              💡 <strong>Tip:</strong> Begin met het aanmaken van je eerste vacature om direct kandidaten te ontvangen.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div style={{ 
          backgroundColor: "#f5f7f6", 
          padding: "24px 32px",
          borderTop: "1px solid #e5e9e8"
        }}>
          <p style={{ fontSize: "13px", color: "#8a9a96", margin: "0 0 8px 0", textAlign: "center" as const }}>
            Vragen? Neem contact op via support@onerooted.nl
          </p>
          <p style={{ fontSize: "12px", color: "#aab5b2", margin: "0", textAlign: "center" as const }}>
            © 2024 One Rooted · Het Hiring OS voor moderne teams
          </p>
        </div>
      </div>
    </div>
  );
};
