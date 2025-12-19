import { ArrowRight, Shield } from "lucide-react";
import logoWhite from "@/assets/onerooted-logo-white.png";

interface PasswordResetEmailTemplateProps {
  userName: string;
  resetLink: string;
  language?: "nl" | "en";
}

export const PasswordResetEmailTemplate = ({
  userName,
  resetLink,
  language = "nl",
}: PasswordResetEmailTemplateProps) => {
  const isNL = language === "nl";
  
  return (
    <div style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif", backgroundColor: "#f8f9fa", padding: "40px 20px" }}>
      <div style={{ maxWidth: "600px", margin: "0 auto", backgroundColor: "#ffffff", borderRadius: "8px", overflow: "hidden", boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }}>
        
        {/* Header - compact with security indicator */}
        <div style={{ 
          background: "linear-gradient(135deg, #1a4a42 0%, #2d6358 100%)", 
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
              <Shield size={14} color="#ffffff" />
              <span style={{ color: "#ffffff", fontSize: "12px", fontWeight: "500" }}>
                {isNL ? "Beveiligd" : "Secure"}
              </span>
            </div>
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: "40px 32px 32px" }}>
          <p style={{ fontSize: "16px", color: "#1a2e2a", marginBottom: "24px", lineHeight: "1.7" }}>
            {isNL ? `Hallo ${userName},` : `Hi ${userName},`}
          </p>
          
          <p style={{ fontSize: "16px", color: "#3a4a46", marginBottom: "24px", lineHeight: "1.7" }}>
            {isNL 
              ? "We hebben een verzoek ontvangen om het wachtwoord voor je OneRooted account te resetten."
              : "We received a request to reset the password for your OneRooted account."
            }
          </p>

          {/* Time warning - subtle */}
          <div style={{ 
            backgroundColor: "#fef9f0", 
            borderRadius: "6px", 
            padding: "14px 16px", 
            marginBottom: "32px",
            borderLeft: "3px solid #a17d3a"
          }}>
            <p style={{ fontSize: "14px", color: "#6a5a3a", margin: "0", lineHeight: "1.5" }}>
              {isNL 
                ? <>Deze link is <strong>30 minuten</strong> geldig.</>
                : <>This link is valid for <strong>30 minutes</strong>.</>
              }
            </p>
          </div>

          {/* CTA - breathing room */}
          <div style={{ textAlign: "center" as const, marginBottom: "40px", paddingTop: "8px" }}>
            <a 
              href={resetLink}
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
              {isNL ? "Wachtwoord resetten" : "Reset password"}
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Fallback link */}
          <div style={{ borderTop: "1px solid #e8ecea", paddingTop: "24px", marginBottom: "24px" }}>
            <p style={{ fontSize: "13px", color: "#8a9a96", marginBottom: "8px" }}>
              {isNL ? "Of kopieer deze link in je browser:" : "Or copy this link into your browser:"}
            </p>
            <p style={{ 
              fontSize: "12px", 
              color: "#5a6a66", 
              backgroundColor: "#f5f7f6", 
              padding: "10px 12px", 
              borderRadius: "4px",
              wordBreak: "break-all" as const,
              fontFamily: "monospace"
            }}>
              {resetLink}
            </p>
          </div>

          {/* Security notice - calmer */}
          <div style={{ 
            backgroundColor: "#f8f9fa", 
            borderRadius: "6px", 
            padding: "16px 20px"
          }}>
            <p style={{ fontSize: "12px", fontWeight: "600", color: "#6a7a76", margin: "0 0 8px 0", display: "flex", alignItems: "center", gap: "6px" }}>
              <Shield size={14} />
              {isNL ? "Beveiligingsmelding" : "Security notice"}
            </p>
            <p style={{ fontSize: "13px", color: "#5a6a66", margin: "0", lineHeight: "1.6" }}>
              {isNL 
                ? "Heb je dit verzoek niet gedaan? Negeer deze email dan. Je wachtwoord blijft ongewijzigd."
                : "Didn't request this? Ignore this email. Your password will remain unchanged."
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
          <p style={{ fontSize: "13px", color: "#6a7a76", margin: "0 0 16px 0" }}>
            {isNL 
              ? "Heb je vragen of zorgen over je account? Neem contact op."
              : "Have questions or concerns about your account? Get in touch."
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
