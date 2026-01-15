import { EMAIL_ICONS, EMAIL_ASSETS, EMAIL_STYLES, EMAIL_COMPONENT_STYLES } from "./emailConstants";

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
    <div style={EMAIL_COMPONENT_STYLES.wrapper}>
      <div style={EMAIL_COMPONENT_STYLES.container}>
        
        {/* Header - table-based for Outlook */}
        <div style={EMAIL_COMPONENT_STYLES.header}>
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
              </tr>
            </tbody>
          </table>
        </div>

        {/* Body */}
        <div style={EMAIL_COMPONENT_STYLES.body}>
          <p style={{ fontSize: "16px", color: EMAIL_STYLES.textColor, marginBottom: "24px", lineHeight: "1.7" }}>
            {isNL ? `Hallo ${recipientName},` : `Hi ${recipientName},`}
          </p>
          
          <p style={{ fontSize: "16px", color: EMAIL_STYLES.textMuted, marginBottom: "16px", lineHeight: "1.7" }}>
            {isNL 
              ? <><strong style={{ color: EMAIL_STYLES.primaryColor }}>{inviterName}</strong> heeft je uitgenodigd om samen te werken aan hiring voor <strong style={{ color: EMAIL_STYLES.primaryColor }}>{organizationName}</strong> in OneRooted.</>
              : <><strong style={{ color: EMAIL_STYLES.primaryColor }}>{inviterName}</strong> has invited you to collaborate on hiring for <strong style={{ color: EMAIL_STYLES.primaryColor }}>{organizationName}</strong> using OneRooted.</>
            }
          </p>

          <p style={{ fontSize: "15px", color: "#5a6a66", marginBottom: "32px", lineHeight: "1.7" }}>
            {isNL 
              ? <>Je krijgt toegang als <strong style={{ color: EMAIL_STYLES.primaryColor }}>{role}</strong>.</>
              : <>You've been granted access as a <strong style={{ color: EMAIL_STYLES.primaryColor }}>{role}</strong>.</>
            }
          </p>

          {/* What you can do - table-based cards */}
          <div style={{ marginBottom: "40px" }}>
            <p style={{ fontSize: "15px", fontWeight: 600, color: EMAIL_STYLES.textColor, marginBottom: "16px" }}>
              {isNL ? "Wat je kunt doen:" : "What you can do:"}
            </p>
            
            {/* Card 1 - Kandidaten volgen */}
            <table cellPadding={0} cellSpacing={0} border={0} style={{ width: "100%", marginBottom: "12px" }}>
              <tbody>
                <tr>
                  <td style={{ 
                    ...EMAIL_COMPONENT_STYLES.featureCard,
                    verticalAlign: "top"
                  }}>
                    <table cellPadding={0} cellSpacing={0} border={0} style={{ width: "100%" }}>
                      <tbody>
                        <tr>
                          <td style={{ width: "54px", verticalAlign: "top", paddingRight: "14px" }}>
                            <div style={{ 
                              ...EMAIL_COMPONENT_STYLES.iconBox,
                              backgroundColor: EMAIL_STYLES.primaryColor,
                            }}>
                              <img src={EMAIL_ICONS.users} width={20} height={20} alt="" style={{ display: "inline-block" }} />
                            </div>
                          </td>
                          <td style={{ verticalAlign: "top" }}>
                            <p style={{ fontSize: "15px", fontWeight: 600, color: EMAIL_STYLES.textColor, margin: "0 0 4px 0" }}>
                              {isNL ? "Kandidaten volgen" : "Track candidates"}
                            </p>
                            <p style={{ fontSize: "14px", color: EMAIL_STYLES.mutedColor, margin: 0, lineHeight: "1.5" }}>
                              {isNL ? "Van intake tot hire in één systeem" : "From intake to hire in one system"}
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            
            {/* Card 2 - Samenwerken */}
            <table cellPadding={0} cellSpacing={0} border={0} style={{ width: "100%", marginBottom: "12px" }}>
              <tbody>
                <tr>
                  <td style={{ 
                    ...EMAIL_COMPONENT_STYLES.featureCard,
                    verticalAlign: "top"
                  }}>
                    <table cellPadding={0} cellSpacing={0} border={0} style={{ width: "100%" }}>
                      <tbody>
                        <tr>
                          <td style={{ width: "54px", verticalAlign: "top", paddingRight: "14px" }}>
                            <div style={{ 
                              ...EMAIL_COMPONENT_STYLES.iconBox,
                              backgroundColor: EMAIL_STYLES.accentColor,
                            }}>
                              <img src={EMAIL_ICONS.eye} width={20} height={20} alt="" style={{ display: "inline-block" }} />
                            </div>
                          </td>
                          <td style={{ verticalAlign: "top" }}>
                            <p style={{ fontSize: "15px", fontWeight: 600, color: EMAIL_STYLES.textColor, margin: "0 0 4px 0" }}>
                              {isNL ? "Samenwerken" : "Collaborate"}
                            </p>
                            <p style={{ fontSize: "14px", color: EMAIL_STYLES.mutedColor, margin: 0, lineHeight: "1.5" }}>
                              {isNL ? "Met je team en externe partners in één gedeeld systeem" : "With teams and external partners in one shared system"}
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            
            {/* Card 3 - Realtime inzicht */}
            <table cellPadding={0} cellSpacing={0} border={0} style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <td style={{ 
                    ...EMAIL_COMPONENT_STYLES.featureCard,
                    verticalAlign: "top"
                  }}>
                    <table cellPadding={0} cellSpacing={0} border={0} style={{ width: "100%" }}>
                      <tbody>
                        <tr>
                          <td style={{ width: "54px", verticalAlign: "top", paddingRight: "14px" }}>
                            <div style={{ 
                              ...EMAIL_COMPONENT_STYLES.iconBox,
                              backgroundColor: EMAIL_STYLES.secondaryColor,
                            }}>
                              <img src={EMAIL_ICONS.barChart3} width={20} height={20} alt="" style={{ display: "inline-block" }} />
                            </div>
                          </td>
                          <td style={{ verticalAlign: "top" }}>
                            <p style={{ fontSize: "15px", fontWeight: 600, color: EMAIL_STYLES.textColor, margin: "0 0 4px 0" }}>
                              {isNL ? "Realtime inzicht" : "Real-time visibility"}
                            </p>
                            <p style={{ fontSize: "14px", color: EMAIL_STYLES.mutedColor, margin: 0, lineHeight: "1.5" }}>
                              {isNL ? "In voortgang en resultaten" : "Into progress and outcomes"}
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* CTA - table-based button for Outlook */}
          <div style={{ textAlign: "center", marginBottom: "40px", paddingTop: "8px" }}>
            <table cellPadding={0} cellSpacing={0} border={0} style={{ margin: "0 auto" }}>
              <tbody>
                <tr>
                  <td style={EMAIL_COMPONENT_STYLES.ctaButton}>
                    <a 
                      href={inviteLink}
                      style={EMAIL_COMPONENT_STYLES.ctaLink}
                    >
                      {isNL ? "Accepteer uitnodiging" : "Accept invitation"}
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
          <div style={{ 
            backgroundColor: EMAIL_STYLES.backgroundColor, 
            borderRadius: "6px", 
            padding: "16px 20px", 
            borderLeft: `3px solid ${EMAIL_STYLES.warningAccent}`
          }}>
            <p style={{ fontSize: "12px", fontWeight: 600, color: EMAIL_STYLES.mutedColor, margin: "0 0 6px 0", textTransform: "uppercase", letterSpacing: "0.5px" }}>
              {isNL ? "Of kopieer deze link" : "Or copy this link"}
            </p>
            <p style={{ 
              fontSize: "13px", 
              color: EMAIL_STYLES.textMuted, 
              margin: 0,
              wordBreak: "break-all",
              fontFamily: "monospace",
              lineHeight: "1.6"
            }}>
              {inviteLink}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div style={EMAIL_COMPONENT_STYLES.footer}>
          <p style={{ fontSize: "13px", color: EMAIL_STYLES.mutedColor, margin: "0 0 4px 0" }}>
            {isNL 
              ? "Deze uitnodiging verloopt over 7 dagen."
              : "This invitation expires in 7 days."
            }
          </p>
          <p style={{ fontSize: "13px", color: EMAIL_STYLES.mutedColor, margin: "0 0 16px 0" }}>
            {isNL 
              ? "Vragen? Antwoord gerust op deze e-mail."
              : "Questions? Just reply to this email."
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
