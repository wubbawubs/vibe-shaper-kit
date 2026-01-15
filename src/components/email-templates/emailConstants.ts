// Base64 encoded SVG icons for email compatibility (Outlook, Gmail, Apple Mail)
// These replace Lucide React icons which don't render in HTML emails

export const EMAIL_ICONS = {
  // ArrowRight - white, for CTA buttons
  arrowRight: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNNSAxMmgxNCIvPjxwYXRoIGQ9Im0xMiA1IDcgNy03IDciLz48L3N2Zz4=",
  
  // Shield - white, for security badges
  shield: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMjAgMTNjMCA1LTMuNSA3LjUtOCAxMC41LTQuNS0zLTgtNS41LTgtMTAuNVYzLjRhMSAxIDAgMCAxIC42OC0uOTVsMi00LjVBMSAxIDAgMCAxIDggMWg4YTEgMSAwIDAgMSAuNjguMjhsMiA0LjVhMSAxIDAgMCAxIC42OC45NXoiLz48L3N2Zz4=",
  
  // Users - white, for team/candidate features
  users: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMTYgMjF2LTJhNCA0IDAgMCAwLTQtNEg2YTQgNCAwIDAgMC00IDR2MiIvPjxjaXJjbGUgY3g9IjkiIGN5PSI3IiByPSI0Ii8+PHBhdGggZD0iTTIyIDIxdi0yYTQgNCAwIDAgMC0zLTMuODciLz48cGF0aCBkPSJNMTYgMy4xM2E0IDQgMCAwIDEgMCA3Ljc1Ii8+PC9zdmc+",
  
  // Eye - white, for visibility/collaboration
  eye: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMiAxMnMzLTcgMTAtNyAxMCA3IDEwIDctMy43IDctMTAgNy0xMC03LTEwLTciLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIzIi8+PC9zdmc+",
  
  // BarChart3 - white, for analytics/insights
  barChart3: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMTggMjBWMTAiLz48cGF0aCBkPSJNMTIgMjBWNCIvPjxwYXRoIGQ9Ik02IDIwdi02Ii8+PC9zdmc+",
  
  // Zap - white, for automation
  zap: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNNCAxNGwxMC0xNHY4aDZsLTEwIDE0di04eiIvPjwvc3ZnPg==",
  
  // CheckCircle2 - white, for success badges
  checkCircle: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxwYXRoIGQ9Im05IDEyIDIgMiA0LTQiLz48L3N2Zz4=",

  // Shield - muted gray color for security notice (not badge)
  shieldMuted: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM2YTdhNzYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMjAgMTNjMCA1LTMuNSA3LjUtOCAxMC41LTQuNS0zLTgtNS41LTgtMTAuNVYzLjRhMSAxIDAgMCAxIC42OC0uOTVsMi00LjVBMSAxIDAgMCAxIDggMWg4YTEgMSAwIDAgMSAuNjguMjhsMiA0LjVhMSAxIDAgMCAxIC42OC45NXoiLz48L3N2Zz4=",
};

// Absolute URLs for email assets (must be publicly accessible)
export const EMAIL_ASSETS = {
  logoWhite: "https://vibe-shaper-kit.lovable.app/onerooted-logo-white.png",
};

// Standard email styles for consistency
export const EMAIL_STYLES = {
  fontFamily: "'Inter', 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
  primaryColor: "#1a4a42",
  primaryGradient: "linear-gradient(135deg, #1a4a42 0%, #2d6358 60%, #a17d3a 100%)",
  accentColor: "#c9943e",
  secondaryColor: "#2d6358",
  textColor: "#1a2e2a",
  textMuted: "#3a4a46",
  mutedColor: "#6a7a76",
  lightMuted: "#9aa9a5",
  backgroundColor: "#f8f9fa",
  cardBackground: "#ffffff",
  borderColor: "#e8ecea",
  warningAccent: "#a17d3a",
};

// Reusable email component styles
export const EMAIL_COMPONENT_STYLES = {
  wrapper: {
    fontFamily: EMAIL_STYLES.fontFamily,
    backgroundColor: EMAIL_STYLES.backgroundColor,
    padding: "40px 20px",
    WebkitTextSizeAdjust: "100%" as const,
    msTextSizeAdjust: "100%" as const,
  },
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    backgroundColor: EMAIL_STYLES.cardBackground,
    borderRadius: "8px",
    overflow: "hidden" as const,
    boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
  },
  header: {
    background: EMAIL_STYLES.primaryGradient,
    padding: "24px 32px",
  },
  body: {
    padding: "40px 32px 32px",
    backgroundColor: EMAIL_STYLES.cardBackground,
  },
  footer: {
    backgroundColor: EMAIL_STYLES.backgroundColor,
    padding: "20px 32px",
    borderTop: `1px solid ${EMAIL_STYLES.borderColor}`,
  },
  ctaButton: {
    backgroundColor: EMAIL_STYLES.primaryColor,
    borderRadius: "6px",
    padding: "14px 28px",
    textAlign: "center" as const,
  },
  ctaLink: {
    color: "#ffffff",
    textDecoration: "none",
    fontSize: "15px",
    fontWeight: "600",
    display: "inline-block",
  },
  featureCard: {
    backgroundColor: EMAIL_STYLES.backgroundColor,
    padding: "18px",
    borderRadius: "10px",
  },
  iconBox: {
    borderRadius: "10px",
    padding: "10px",
    width: "40px",
    height: "40px",
    textAlign: "center" as const,
    verticalAlign: "middle" as const,
  },
};
