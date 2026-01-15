import { EMAIL_ICONS, EMAIL_ASSETS, EMAIL_STYLES, EMAIL_COMPONENT_STYLES } from "./emailConstants";

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
    <div style={EMAIL_COMPONENT_STYLES.wrapper}>
      <div style={EMAIL_COMPONENT_STYLES.container}>
        
        {/* Header - table-based for Outlook with status badge */}
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
                                  <img src={EMAIL_ICONS.checkCircle} width={14} height={14} alt="" style={{ display: "block" }} />
                                </td>
                                <td style={{ verticalAlign: "middle" }}>
                                  <span style={{ color: "#ffffff", fontSize: "12px", fontWeight: 500 }}>
                                    {isNL ? "Account aangemaakt" : "Account created"}
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
            {isNL ? `Welkom ${userName},` : `Welcome ${userName},`}
          </p>
          
          <p style={{ fontSize: "16px", color: EMAIL_STYLES.textMuted, marginBottom: "16px", lineHeight: "1.7" }}>
            {isNL 
              ? <>Je account voor <strong style={{ color: EMAIL_STYLES.primaryColor }}>{organizationName}</strong> is succesvol aangemaakt. Je kunt nu direct aan de slag met het stroomlijnen van jullie hiringproces.</>
              : <>Your account for <strong style={{ color: EMAIL_STYLES.primaryColor }}>{organizationName}</strong> has been successfully created. You can now start organizing and improving your hiring process in OneRooted.</>
            }
          </p>

          <p style={{ fontSize: "15px", color: "#5a6a66", marginBottom: "32px", lineHeight: "1.7" }}>
            {isNL 
              ? "OneRooted is gebouwd om overzicht, samenwerking en betere beslissingen samen te brengen in één systeem."
              : "OneRooted is built to bring structure, collaboration, and decision-making together in a single system."
            }
          </p>

          {/* What you can do - table-based cards */}
          <div style={{ marginBottom: "40px" }}>
            <p style={{ fontSize: "15px", fontWeight: 600, color: EMAIL_STYLES.textColor, marginBottom: "16px" }}>
              {isNL ? "Wat je kunt doen:" : "What you can do:"}
            </p>
            
            {/* Card 1 - Kandidaten beheren */}
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
                              {isNL ? "Kandidaten beheren" : "Manage candidates"}
                            </p>
                            <p style={{ fontSize: "14px", color: EMAIL_STYLES.mutedColor, margin: 0, lineHeight: "1.5" }}>
                              {isNL ? "Volg kandidaten door elke fase van je pipeline" : "Track every candidate across the full hiring flow"}
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            
            {/* Card 2 - Inzichten & rapportages */}
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
                              <img src={EMAIL_ICONS.barChart3} width={20} height={20} alt="" style={{ display: "inline-block" }} />
                            </div>
                          </td>
                          <td style={{ verticalAlign: "top" }}>
                            <p style={{ fontSize: "15px", fontWeight: 600, color: EMAIL_STYLES.textColor, margin: "0 0 4px 0" }}>
                              {isNL ? "Inzichten & rapportages" : "Insights & reporting"}
                            </p>
                            <p style={{ fontSize: "14px", color: EMAIL_STYLES.mutedColor, margin: 0, lineHeight: "1.5" }}>
                              {isNL ? "Krijg real-time data over je hiring performance" : "See what's working, where things slow down, and where to act"}
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            
            {/* Card 3 - Automatiseer workflows */}
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
                              <img src={EMAIL_ICONS.zap} width={20} height={20} alt="" style={{ display: "inline-block" }} />
                            </div>
                          </td>
                          <td style={{ verticalAlign: "top" }}>
                            <p style={{ fontSize: "15px", fontWeight: 600, color: EMAIL_STYLES.textColor, margin: "0 0 4px 0" }}>
                              {isNL ? "Automatiseer workflows" : "Automated workflows"}
                            </p>
                            <p style={{ fontSize: "14px", color: EMAIL_STYLES.mutedColor, margin: 0, lineHeight: "1.5" }}>
                              {isNL ? "Bespaar tijd met slimme automatiseringen" : "Reduce manual work and focus on decisions that matter"}
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
                      href={loginLink}
                      style={EMAIL_COMPONENT_STYLES.ctaLink}
                    >
                      {isNL ? "Ga naar OneRooted" : "Go to OneRooted"}
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

          {/* Tip block */}
          <div style={{ 
            backgroundColor: EMAIL_STYLES.backgroundColor, 
            borderRadius: "6px", 
            padding: "16px 20px", 
            borderLeft: `3px solid ${EMAIL_STYLES.warningAccent}`
          }}>
            <p style={{ fontSize: "12px", fontWeight: 600, color: EMAIL_STYLES.mutedColor, margin: "0 0 6px 0", textTransform: "uppercase", letterSpacing: "0.5px" }}>
              Tip
            </p>
            <p style={{ fontSize: "14px", color: EMAIL_STYLES.textMuted, margin: 0, lineHeight: "1.6" }}>
              {isNL 
                ? "Begin met het aanmaken van je eerste vacature om direct kandidaten te ontvangen."
                : "Create your first job opening to start receiving candidates right away."
              }
            </p>
          </div>
        </div>

        {/* Footer */}
        <div style={EMAIL_COMPONENT_STYLES.footer}>
          <p style={{ fontSize: "13px", color: EMAIL_STYLES.mutedColor, margin: "0 0 4px 0" }}>
            {isNL 
              ? "Je ontvangt deze mail omdat je account is aangemaakt in OneRooted."
              : "You're receiving this email because an account was created for you in OneRooted."
            }
          </p>
          <p style={{ fontSize: "13px", color: EMAIL_STYLES.mutedColor, margin: "0 0 16px 0" }}>
            {isNL 
              ? "Heb je vragen? We helpen je graag."
              : "Need help? We're happy to assist."
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
