import { ArrowRight } from "lucide-react";
import logoWhite from "@/assets/onerooted-logo-white.png";

interface InvitationEmailTemplateProps {
  recipientName: string;
  inviterName: string;
  organizationName: string;
  role: string;
  inviteLink: string;
}

export const InvitationEmailTemplate = ({
  recipientName,
  inviterName,
  organizationName,
  role,
  inviteLink,
}: InvitationEmailTemplateProps) => {
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
            <img 
              src={logoWhite} 
              alt="One Rooted" 
              style={{ height: "40px", width: "auto", filter: "brightness(0) invert(1)" }} 
            />
            <span style={{ fontSize: "24px", fontWeight: "700", color: "#ffffff", letterSpacing: "-0.5px" }}>
              One Rooted
            </span>
          </div>
          <h1 style={{ color: "#ffffff", fontSize: "28px", fontWeight: "600", margin: "0", letterSpacing: "-0.5px" }}>
            Je bent uitgenodigd!
          </h1>
        </div>

        {/* Content */}
        <div style={{ padding: "40px 32px" }}>
          <p style={{ fontSize: "16px", color: "#1a2e2a", marginBottom: "24px", lineHeight: "1.6" }}>
            Hallo <strong>{recipientName}</strong>,
          </p>
          
          <p style={{ fontSize: "16px", color: "#4a5e5a", marginBottom: "24px", lineHeight: "1.6" }}>
            <strong style={{ color: "#1a4a42" }}>{inviterName}</strong> heeft je uitgenodigd om lid te worden van <strong style={{ color: "#1a4a42" }}>{organizationName}</strong> op One Rooted als <strong style={{ color: "#c9943e" }}>{role}</strong>.
          </p>

          <div style={{ 
            backgroundColor: "#f5f7f6", 
            borderRadius: "10px", 
            padding: "24px", 
            marginBottom: "32px",
            borderLeft: "4px solid #1a4a42"
          }}>
            <p style={{ fontSize: "14px", color: "#4a5e5a", margin: "0 0 8px 0", fontWeight: "500" }}>
              Wat je kunt doen met One Rooted:
            </p>
            <ul style={{ margin: "0", paddingLeft: "20px", color: "#1a2e2a" }}>
              <li style={{ marginBottom: "8px", fontSize: "14px" }}>Beheer kandidaten door de hele pipeline</li>
              <li style={{ marginBottom: "8px", fontSize: "14px" }}>Werk samen met je team in real-time</li>
              <li style={{ fontSize: "14px" }}>Krijg inzichten en rapportages over je hiring proces</li>
            </ul>
          </div>

          {/* CTA Button */}
          <div style={{ textAlign: "center" as const, marginBottom: "32px" }}>
            <a 
              href={inviteLink}
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
              Accepteer uitnodiging
              <ArrowRight size={18} />
            </a>
          </div>

          <p style={{ fontSize: "14px", color: "#8a9a96", marginBottom: "16px", lineHeight: "1.6" }}>
            Of kopieer deze link naar je browser:
          </p>
          <p style={{ 
            fontSize: "13px", 
            color: "#1a4a42", 
            backgroundColor: "#f5f7f6", 
            padding: "12px 16px", 
            borderRadius: "8px",
            wordBreak: "break-all" as const,
            fontFamily: "monospace"
          }}>
            {inviteLink}
          </p>
        </div>

        {/* Footer */}
        <div style={{ 
          backgroundColor: "#f5f7f6", 
          padding: "24px 32px",
          borderTop: "1px solid #e5e9e8"
        }}>
          <p style={{ fontSize: "13px", color: "#8a9a96", margin: "0 0 8px 0", textAlign: "center" as const }}>
            Deze uitnodiging verloopt over 7 dagen.
          </p>
          <p style={{ fontSize: "12px", color: "#aab5b2", margin: "0", textAlign: "center" as const }}>
            © 2024 One Rooted · Het Hiring OS voor moderne teams
          </p>
        </div>
      </div>
    </div>
  );
};
