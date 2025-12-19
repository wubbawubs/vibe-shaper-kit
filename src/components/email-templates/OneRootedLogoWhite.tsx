export const OneRootedLogoWhite = ({ size = 48 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Three leaves at top */}
    <ellipse 
      cx="50" 
      cy="15" 
      rx="8" 
      ry="14" 
      fill="#ffffff" 
    />
    <ellipse 
      cx="35" 
      cy="22" 
      rx="7" 
      ry="12" 
      fill="#ffffff" 
      transform="rotate(-30 35 22)"
    />
    <ellipse 
      cx="65" 
      cy="22" 
      rx="7" 
      ry="12" 
      fill="#ffffff" 
      transform="rotate(30 65 22)"
    />
    
    {/* Stem */}
    <line 
      x1="50" 
      y1="28" 
      x2="50" 
      y2="50" 
      stroke="#ffffff" 
      strokeWidth="4" 
      strokeLinecap="round"
    />
    
    {/* Roots - fan shape spreading out */}
    <line x1="50" y1="50" x2="25" y2="90" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
    <line x1="50" y1="50" x2="35" y2="88" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="50" y1="50" x2="43" y2="90" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
    <line x1="50" y1="50" x2="50" y2="92" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
    <line x1="50" y1="50" x2="57" y2="90" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
    <line x1="50" y1="50" x2="65" y2="88" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="50" y1="50" x2="75" y2="90" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
  </svg>
);
