import React from 'react';

// Overview Stat Badges (matching Frame 26)
export function StatBadgeIcon({ className, size = 26, color = '#0B6B3A' }: { className?: string; size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="9" r="6" />
      <polygon points="12 15 9.5 21 14.5 21 12 15" fill={color} stroke="none" />
      <circle cx="12" cy="9" r="2.5" fill={color} stroke="none" />
    </svg>
  );
}

// Values Icons (matching Frame 38)
export function ValueIntegrityIcon({ size = 32, color = '#0B6B3A' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M16 3L5 7.5V15C5 22.2 9.7 28.9 16 30.5C22.3 28.9 27 22.2 27 15V7.5L16 3Z"
        fill={color}
      />
      <path
        d="M11 16L14.5 19.5L21.5 12.5"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ValueExcellenceIcon({ size = 32, color = '#0B6B3A' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 4V7M16 25V28M4 16H7M25 16H28M7.5 7.5L9.6 9.6M22.4 22.4L24.5 24.5M7.5 24.5L9.6 22.4M22.4 9.6L24.5 7.5" />
      <circle cx="16" cy="16" r="9" />
      <path d="M12.5 16L15 18.5L20 13.5" strokeWidth="2.2" />
    </svg>
  );
}

export function ValuePartnershipIcon({ size = 32, color = '#0B6B3A' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 13L11 6L18 13L15 16L12 13" />
      <path d="M28 13L21 6L14 13L17 16L20 13" />
      <path d="M8 17L12 21L16 17" />
      <path d="M24 17L20 21L16 17" />
      <path d="M13 22L16 25L19 22" />
      <path d="M7 10L3 14L8 19" />
      <path d="M25 10L29 14L24 19" />
    </svg>
  );
}

export function ValueSustainableIcon({ size = 32, color = '#0B6B3A' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="8" y1="26" x2="8" y2="6" />
      <polyline points="4 10 8 6 12 10" />
      <line x1="16" y1="8" x2="27" y2="8" />
      <line x1="16" y1="14" x2="24" y2="14" />
      <line x1="16" y1="20" x2="21" y2="20" />
      <line x1="16" y1="26" x2="18" y2="26" />
    </svg>
  );
}

// Journey Icons (matching Frame 82)
export function JourneyLogisticsIcon({ size = 32, color = '#0B6B3A' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <line x1="2" y1="10" x2="6" y2="10" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="1" y1="14" x2="5" y2="14" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="3" y1="18" x2="7" y2="18" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path
        d="M7 8C7 7 7.8 6.2 8.8 6.2H19C20 6.2 20.8 7 20.8 8V19C20.8 20 20 20.8 19 20.8H8.8C7.8 20.8 7 20 7 19V8Z"
        fill={color}
      />
      <path
        d="M20.8 10.5H25.5C26.2 10.5 26.8 10.9 27.2 11.5L29.3 14.8C29.6 15.2 29.8 15.7 29.8 16.2V19.5C29.8 20.3 29.1 21 28.3 21H20.8V10.5Z"
        fill={color}
      />
      <circle cx="12" cy="22" r="3" fill="#FFFFFF" stroke={color} strokeWidth="2" />
      <circle cx="24.5" cy="22" r="3" fill="#FFFFFF" stroke={color} strokeWidth="2" />
    </svg>
  );
}

export function JourneyCorporateIcon({ size = 32, color = '#0B6B3A' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M5 12C5 10.9 5.9 10 7 10H25C26.1 10 27 10.9 27 12V24C27 25.1 26.1 26 25 26H7C5.9 26 5 25.1 5 24V12Z"
        fill={color}
      />
      <path
        d="M11 10V8C11 6.9 11.9 6 13 6H19C20.1 6 21 6.9 21 8V10"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <rect x="14" y="14" width="4" height="4" rx="1" fill="#FFFFFF" />
    </svg>
  );
}

export function JourneyAgricultureIcon({ size = 32, color = '#0B6B3A' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M16 28V6" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M16 6C14 7.5 14 9.5 16 11C18 9.5 18 7.5 16 6Z" fill={color} />
      <path d="M16 11C13.5 12.5 13.5 14.5 16 16C18.5 14.5 18.5 12.5 16 11Z" fill={color} />
      <path d="M16 16C13.5 17.5 13.5 19.5 16 21C18.5 19.5 18.5 17.5 16 16Z" fill={color} />
      
      <path d="M9 27C10 22 10.5 15 8 10" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M8 10C6.5 11.2 6.5 12.8 8 14C9.5 12.8 9.5 11.2 8 10Z" fill={color} />
      <path d="M8.5 14C6.5 15.2 6.5 16.8 8.5 18C10.5 16.8 10.5 15.2 8.5 14Z" fill={color} />
      <path d="M9 18C7 19.2 7 20.8 9 22C11 20.8 11 19.2 9 18Z" fill={color} />

      <path d="M23 27C22 22 21.5 15 24 10" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M24 10C22.5 11.2 22.5 12.8 24 14C25.5 12.8 25.5 11.2 24 10Z" fill={color} />
      <path d="M23.5 14C21.5 15.2 21.5 16.8 23.5 18C25.5 16.8 25.5 15.2 23.5 14Z" fill={color} />
      <path d="M23 18C21 19.2 21 20.8 23 22C25 20.8 25 19.2 23 18Z" fill={color} />
    </svg>
  );
}

export function JourneyEnergyIcon({ size = 32, color = '#0B6B3A' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="5" y="6" width="16" height="22" rx="3" fill={color} />
      <rect x="8" y="10" width="10" height="7" rx="1.5" fill="#FFFFFF" />
      <path
        d="M21 11H23C24.1 11 25 11.9 25 13V22C25 23.1 25.9 24 27 24C28.1 24 29 23.1 29 22V13C29 9.7 26.3 7 23 7H21"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="13" cy="22" r="2" fill="#FFFFFF" />
    </svg>
  );
}
