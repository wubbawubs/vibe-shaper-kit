import { ArrowRight, Users, Eye, BarChart3 } from "lucide-react";
import logoWhite from "@/assets/onerooted-logo-white.png";

interface InvitationEmailTemplateProps {
  recipientName: string;
  inviterName: string;
  organizationName: string;
  role: string;
  inviteLink: string;
  language?: "nl" | "en";
}

export const InvitationEmailTemplate = ({
  recipientName,
  inviterName,
  organizationName,
  role,
  inviteLink,
  language = "nl",
}: InvitationEmailTemplateProps) => {
  const isNL = language === "nl";
  
  return (
    <div style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif", backgroundColor: "#f8f9fa", padding: "40px 20px" }}>
      <div style={{ maxWidth: "600px", margin: "0 auto", backgroundColor: "#ffffff", borderRadius: "8px", overflow: "hidden", boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }}>
        
        {/* Header - compact, logo left */}
        <div style={{ 
          background: "linear-gradient(135deg, #1a4a42 0%, #2d6358 60%, #a17d3a 100%)", 
          padding: "24px 32px",
        }}>
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
        </div>

        {/* Body */}
        <div style={{ padding: "40px 32px 32px" }}>
          <p style={{ fontSize: "16px", color: "#1a2e2a", marginBottom: "24px", lineHeight: "1.7" }}>
            {isNL ? `Hallo ${recipientName},` : `Hi ${recipientName},`}
          </p>
          
          <p style={{ fontSize: "16px", color: "#3a4a46", marginBottom: "16px", lineHeight: "1.7" }}>
            {isNL 
              ? <><strong style={{ color: "#1a4a42" }}>{inviterName}</strong> heeft je uitgenodigd om samen te werken aan hiring voor <strong style={{ color: "#1a4a42" }}>{organizationName}</strong> in OneRooted.</>
              : <><strong style={{ color: "#1a4a42" }}>{inviterName}</strong> has invited you to collaborate on hiring for <strong style={{ color: "#1a4a42" }}>{organizationName}</strong> using OneRooted.</>
            }
          </p>

          <p style={{ fontSize: "15px", color: "#5a6a66", marginBottom: "32px", lineHeight: "1.7" }}>
            {isNL 
              ? <>Je krijgt toegang als <strong style={{ color: "#1a4a42" }}>{role}</strong>.</>
              : <>You've been granted access as a <strong style={{ color: "#1a4a42" }}>{role}</strong>.</>
            }
          </p>

          {/* What you can do - card style with icons */}
          <div style={{ marginBottom: "40px" }}>
            <p style={{ fontSize: "15px", fontWeight: "600", color: "#1a2e2a", marginBottom: "16px" }}>
              {isNL ? "Wat je kunt doen:" : "What you can do:"}
            </p>
            
            <div style={{ display: "flex", flexDirection: "column" as const, gap: "12px" }}>
              {/* Card 1 - Kandidaten volgen */}
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
                    {isNL ? "Kandidaten volgen" : "Track candidates"}
                  </p>
                  <p style={{ fontSize: "14px", color: "#6a7a76", margin: "0", lineHeight: "1.5" }}>
                    {isNL ? "Van intake tot hire in één systeem" : "From intake to hire in one system"}
                  </p>
                </div>
              </div>
              
              {/* Card 2 - Samenwerken */}
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
                  <Eye size={20} color="#ffffff" />
                </div>
                <div>
                  <p style={{ fontSize: "15px", fontWeight: "600", color: "#1a2e2a", margin: "0 0 4px 0" }}>
                    {isNL ? "Samenwerken" : "Collaborate"}
                  </p>
                  <p style={{ fontSize: "14px", color: "#6a7a76", margin: "0", lineHeight: "1.5" }}>
                    {isNL ? "Met je team en externe partners in één gedeeld systeem" : "With teams and external partners in one shared system"}
                  </p>
                </div>
              </div>
              
              {/* Card 3 - Realtime inzicht */}
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
                  <BarChart3 size={20} color="#ffffff" />
                </div>
                <div>
                  <p style={{ fontSize: "15px", fontWeight: "600", color: "#1a2e2a", margin: "0 0 4px 0" }}>
                    {isNL ? "Realtime inzicht" : "Real-time visibility"}
                  </p>
                  <p style={{ fontSize: "14px", color: "#6a7a76", margin: "0", lineHeight: "1.5" }}>
                    {isNL ? "In voortgang en resultaten" : "Into progress and outcomes"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA - breathing room */}
          <div style={{ textAlign: "center" as const, marginBottom: "40px", paddingTop: "8px" }}>
            <a 
              href={inviteLink}
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
              {isNL ? "Accepteer uitnodiging" : "Accept invitation"}
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Fallback link */}
          <div style={{ 
            backgroundColor: "#f8f9fa", 
            borderRadius: "6px", 
            padding: "16px 20px", 
            borderLeft: "3px solid #a17d3a"
          }}>
            <p style={{ fontSize: "12px", fontWeight: "600", color: "#6a7a76", margin: "0 0 6px 0", textTransform: "uppercase", letterSpacing: "0.5px" }}>
              {isNL ? "Of kopieer deze link" : "Or copy this link"}
            </p>
            <p style={{ 
              fontSize: "13px", 
              color: "#3a4a46", 
              margin: "0",
              wordBreak: "break-all" as const,
              fontFamily: "monospace",
              lineHeight: "1.6"
            }}>
              {inviteLink}
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
              ? "Deze uitnodiging verloopt over 7 dagen."
              : "This invitation expires in 7 days."
            }
          </p>
          <p style={{ fontSize: "13px", color: "#6a7a76", margin: "0 0 16px 0" }}>
            {isNL 
              ? "Vragen? Antwoord gerust op deze e-mail."
              : "Questions? Just reply to this email."
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
