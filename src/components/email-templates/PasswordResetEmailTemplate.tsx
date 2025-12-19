import { ArrowRight, Shield, Clock } from "lucide-react";

interface PasswordResetEmailTemplateProps {
  userName: string;
  resetLink: string;
}

export const PasswordResetEmailTemplate = ({
  userName,
  resetLink,
}: PasswordResetEmailTemplateProps) => {
  return (
    <div style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif", backgroundColor: "#faf9f8", padding: "40px 20px" }}>
      <div style={{ maxWidth: "600px", margin: "0 auto", backgroundColor: "#ffffff", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
        {/* Header with gradient */}
        <div style={{ 
          background: "linear-gradient(135deg, #1a4a42 0%, #2d6358 100%)", 
          padding: "40px 32px",
          textAlign: "center" as const
        }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "16px" }}>
            <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
              <path d="M50 15 L50 50 M35 25 Q50 15 65 25 M50 50 L30 80 M50 50 L40 75 M50 50 L60 75 M50 50 L70 80" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
              <path d="M40 20 Q50 5 60 20" fill="none" stroke="#ffffff" strokeWidth="3" />
              <ellipse cx="35" cy="22" rx="8" ry="12" fill="#ffffff" transform="rotate(-30 35 22)" />
              <ellipse cx="50" cy="15" rx="6" ry="10" fill="#ffffff" />
              <ellipse cx="65" cy="22" rx="8" ry="12" fill="#ffffff" transform="rotate(30 65 22)" />
            </svg>
            <span style={{ fontSize: "24px", fontWeight: "700", color: "#ffffff", letterSpacing: "-0.5px" }}>
              One Rooted
            </span>
          </div>
          <div style={{ 
            display: "inline-flex", 
            alignItems: "center", 
            justifyContent: "center",
            backgroundColor: "rgba(255,255,255,0.15)", 
            borderRadius: "50%",
            width: "64px",
            height: "64px",
            marginBottom: "16px"
          }}>
            <Shield size={32} color="#ffffff" />
          </div>
          <h1 style={{ color: "#ffffff", fontSize: "28px", fontWeight: "600", margin: "0", letterSpacing: "-0.5px" }}>
            Wachtwoord resetten
          </h1>
        </div>

        {/* Content */}
        <div style={{ padding: "40px 32px" }}>
          <p style={{ fontSize: "16px", color: "#1a2e2a", marginBottom: "24px", lineHeight: "1.6" }}>
            Hallo <strong>{userName}</strong>,
          </p>
          
          <p style={{ fontSize: "16px", color: "#4a5e5a", marginBottom: "24px", lineHeight: "1.6" }}>
            We hebben een verzoek ontvangen om het wachtwoord voor je One Rooted account te resetten. Klik op de onderstaande knop om een nieuw wachtwoord in te stellen.
          </p>

          {/* Warning box */}
          <div style={{ 
            backgroundColor: "#f5f7f6", 
            borderRadius: "10px", 
            padding: "20px", 
            marginBottom: "32px",
            display: "flex",
            alignItems: "flex-start",
            gap: "12px",
            borderLeft: "4px solid #c9943e"
          }}>
            <Clock size={20} color="#c9943e" style={{ flexShrink: 0, marginTop: "2px" }} />
            <p style={{ fontSize: "14px", color: "#4a5e5a", margin: "0", lineHeight: "1.5" }}>
              Deze link is <strong style={{ color: "#1a2e2a" }}>30 minuten</strong> geldig. Na deze periode moet je een nieuwe aanvraag doen.
            </p>
          </div>

          {/* CTA Button */}
          <div style={{ textAlign: "center" as const, marginBottom: "32px" }}>
            <a 
              href={resetLink}
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
              Wachtwoord resetten
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
            fontFamily: "monospace",
            marginBottom: "32px"
          }}>
            {resetLink}
          </p>

          {/* Security notice */}
          <div style={{ 
            backgroundColor: "#fef2f2", 
            borderRadius: "10px", 
            padding: "20px", 
            border: "1px solid #fecaca"
          }}>
            <p style={{ fontSize: "14px", color: "#7f1d1d", margin: "0 0 8px 0", fontWeight: "600" }}>
              🔒 Beveiligingsmelding
            </p>
            <p style={{ fontSize: "13px", color: "#991b1b", margin: "0", lineHeight: "1.5" }}>
              Heb je dit verzoek niet gedaan? Negeer deze email dan. Je wachtwoord blijft ongewijzigd. Als je je zorgen maakt over de beveiliging van je account, neem dan contact met ons op.
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
            Hulp nodig? Neem contact op via support@onerooted.nl
          </p>
          <p style={{ fontSize: "12px", color: "#aab5b2", margin: "0", textAlign: "center" as const }}>
            © 2024 One Rooted · Het Hiring OS voor moderne teams
          </p>
        </div>
      </div>
    </div>
  );
};
