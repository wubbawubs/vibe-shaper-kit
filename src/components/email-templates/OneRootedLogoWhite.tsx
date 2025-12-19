export const OneRootedLogoWhite = ({ size = 48 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 100 120" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Leaves */}
    <ellipse 
      cx="50" 
      cy="18" 
      rx="10" 
      ry="16" 
      fill="#ffffff" 
    />
    <ellipse 
      cx="32" 
      cy="28" 
      rx="10" 
      ry="16" 
      fill="#ffffff" 
      transform="rotate(-35 32 28)"
    />
    <ellipse 
      cx="68" 
      cy="28" 
      rx="10" 
      ry="16" 
      fill="#ffffff" 
      transform="rotate(35 68 28)"
    />
    
    {/* Stem */}
    <path 
      d="M50 35 L50 55" 
      stroke="#ffffff" 
      strokeWidth="6" 
      strokeLinecap="round"
    />
    
    {/* Roots */}
    <path 
      d="M50 55 Q45 70 30 95" 
      stroke="#ffffff" 
      strokeWidth="5" 
      strokeLinecap="round"
      fill="none"
    />
    <path 
      d="M50 55 Q48 72 40 100" 
      stroke="#ffffff" 
      strokeWidth="4" 
      strokeLinecap="round"
      fill="none"
    />
    <path 
      d="M50 55 L50 105" 
      stroke="#ffffff" 
      strokeWidth="4" 
      strokeLinecap="round"
      fill="none"
    />
    <path 
      d="M50 55 Q52 72 60 100" 
      stroke="#ffffff" 
      strokeWidth="4" 
      strokeLinecap="round"
      fill="none"
    />
    <path 
      d="M50 55 Q55 70 70 95" 
      stroke="#ffffff" 
      strokeWidth="5" 
      strokeLinecap="round"
      fill="none"
    />
    
    {/* Smaller side roots */}
    <path 
      d="M35 75 Q28 82 22 88" 
      stroke="#ffffff" 
      strokeWidth="3" 
      strokeLinecap="round"
      fill="none"
    />
    <path 
      d="M65 75 Q72 82 78 88" 
      stroke="#ffffff" 
      strokeWidth="3" 
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);
