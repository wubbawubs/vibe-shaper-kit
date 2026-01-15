import { EMAIL_ICONS, EMAIL_ASSETS, EMAIL_STYLES, EMAIL_COMPONENT_STYLES } from "./emailConstants";

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
    <div style={EMAIL_COMPONENT_STYLES.wrapper}>
      <div style={EMAIL_COMPONENT_STYLES.container}>
        
        {/* Header - table-based with security indicator */}
        <div style={{ 
          background: `linear-gradient(135deg, ${EMAIL_STYLES.primaryColor} 0%, ${EMAIL_STYLES.secondaryColor} 100%)`, 
          padding: "24px 32px",
        }}>
          <table cellPadding={0} cellSpacing={0} border={0} style={{ width: "100%" }}>
            <tbody>
              <tr>
                <td style={{ verticalAlign: "middle" }}>
                  <table cellPadding={0} cellSpacing={0} border={0}>
                    <tbody>
                      <tr>
                        <td style={{ verticalAlign: "middle", paddingRight: "10px" }}>
                          <img 
                            src={EMAIL_ASSETS.logoWhite} 
                            alt="OneRooted" 
                            width={32}
                            height={32}
                            style={{ display: "block" }} 
                          />
                        </td>
                        <td style={{ verticalAlign: "middle" }}>
                          <span style={{ fontSize: "18px", fontWeight: 600, color: "#ffffff", letterSpacing: "-0.3px" }}>
                            OneRooted
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td style={{ textAlign: "right", verticalAlign: "middle" }}>
                  <table cellPadding={0} cellSpacing={0} border={0} style={{ display: "inline-block" }}>
                    <tbody>
                      <tr>
                        <td style={{ 
                          backgroundColor: "rgba(255,255,255,0.15)", 
                          padding: "6px 12px", 
                          borderRadius: "16px",
                          verticalAlign: "middle"
                        }}>
                          <table cellPadding={0} cellSpacing={0} border={0}>
                            <tbody>
                              <tr>
                                <td style={{ verticalAlign: "middle", paddingRight: "6px" }}>
                                  <img src={EMAIL_ICONS.shield} width={14} height={14} alt="" style={{ display: "block" }} />
                                </td>
                                <td style={{ verticalAlign: "middle" }}>
                                  <span style={{ color: "#ffffff", fontSize: "12px", fontWeight: 500 }}>
                                    {isNL ? "Beveiligd" : "Secure"}
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Body */}
        <div style={EMAIL_COMPONENT_STYLES.body}>
          <p style={{ fontSize: "16px", color: EMAIL_STYLES.textColor, marginBottom: "24px", lineHeight: "1.7" }}>
            {isNL ? `Hallo ${userName},` : `Hi ${userName},`}
          </p>
          
          <p style={{ fontSize: "16px", color: EMAIL_STYLES.textMuted, marginBottom: "24px", lineHeight: "1.7" }}>
            {isNL 
              ? "We hebben een verzoek ontvangen om het wachtwoord voor je OneRooted account te resetten."
              : "We received a request to reset the password for your OneRooted account."
            }
          </p>

          {/* Time warning */}
          <div style={{ 
            backgroundColor: "#fef9f0", 
            borderRadius: "6px", 
            padding: "14px 16px", 
            marginBottom: "32px",
            borderLeft: `3px solid ${EMAIL_STYLES.warningAccent}`
          }}>
            <p style={{ fontSize: "14px", color: "#6a5a3a", margin: 0, lineHeight: "1.5" }}>
              {isNL 
                ? <>Deze link is <strong>30 minuten</strong> geldig.</>
                : <>This link is valid for <strong>30 minutes</strong>.</>
              }
            </p>
          </div>

          {/* CTA - table-based button for Outlook */}
          <div style={{ textAlign: "center", marginBottom: "40px", paddingTop: "8px" }}>
            <table cellPadding={0} cellSpacing={0} border={0} style={{ margin: "0 auto" }}>
              <tbody>
                <tr>
                  <td style={EMAIL_COMPONENT_STYLES.ctaButton}>
                    <a 
                      href={resetLink}
                      style={EMAIL_COMPONENT_STYLES.ctaLink}
                    >
                      {isNL ? "Wachtwoord resetten" : "Reset password"}
                      <img 
                        src={EMAIL_ICONS.arrowRight} 
                        width={16} 
                        height={16} 
                        alt="" 
                        style={{ display: "inline-block", verticalAlign: "middle", marginLeft: "8px" }} 
                      />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Fallback link */}
          <div style={{ borderTop: `1px solid ${EMAIL_STYLES.borderColor}`, paddingTop: "24px", marginBottom: "24px" }}>
            <p style={{ fontSize: "13px", color: EMAIL_STYLES.lightMuted, marginBottom: "8px" }}>
              {isNL ? "Of kopieer deze link in je browser:" : "Or copy this link into your browser:"}
            </p>
            <p style={{ 
              fontSize: "12px", 
              color: "#5a6a66", 
              backgroundColor: EMAIL_STYLES.backgroundColor, 
              padding: "10px 12px", 
              borderRadius: "4px",
              wordBreak: "break-all",
              fontFamily: "monospace"
            }}>
              {resetLink}
            </p>
          </div>

          {/* Security notice - table-based */}
          <div style={{ 
            backgroundColor: EMAIL_STYLES.backgroundColor, 
            borderRadius: "6px", 
            padding: "16px 20px"
          }}>
            <table cellPadding={0} cellSpacing={0} border={0} style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <td>
                    <table cellPadding={0} cellSpacing={0} border={0}>
                      <tbody>
                        <tr>
                          <td style={{ verticalAlign: "middle", paddingRight: "6px" }}>
                            <img src={EMAIL_ICONS.shieldMuted} width={14} height={14} alt="" style={{ display: "block" }} />
                          </td>
                          <td style={{ verticalAlign: "middle" }}>
                            <span style={{ fontSize: "12px", fontWeight: 600, color: EMAIL_STYLES.mutedColor }}>
                              {isNL ? "Beveiligingsmelding" : "Security notice"}
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <p style={{ fontSize: "13px", color: "#5a6a66", margin: "8px 0 0 0", lineHeight: "1.6" }}>
                      {isNL 
                        ? "Heb je dit verzoek niet gedaan? Negeer deze email dan. Je wachtwoord blijft ongewijzigd."
                        : "Didn't request this? Ignore this email. Your password will remain unchanged."
                      }
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <div style={EMAIL_COMPONENT_STYLES.footer}>
          <p style={{ fontSize: "13px", color: EMAIL_STYLES.mutedColor, margin: "0 0 16px 0" }}>
            {isNL 
              ? "Heb je vragen of zorgen over je account? Neem contact op."
              : "Have questions or concerns about your account? Get in touch."
            }
          </p>
          <p style={{ fontSize: "12px", color: EMAIL_STYLES.lightMuted, margin: 0 }}>
            © 2025 OneRooted · {isNL ? "Hiring heeft geen nieuwe tool nodig. Het heeft een systeem nodig." : "Hiring doesn't need another tool. It needs a system."}
          </p>
        </div>
      </div>
    </div>
  );
};
