import React from 'react';

interface IconProps {
  size?: number;
  className?: string;
  color?: string;
}

// Company Information Icons (Mint badges on left column)

export function BuildingIcon({ size = 18, color = "#0b6b3a" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <path d="M4 3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v5h3a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3zm2 1v16h8V4H6zm10 6v10h2V10h-2zM8 6h2v2H8V6zm4 0h2v2h-2V6zm-4 4h2v2H8v-2zm4 0h2v2h-2v-2zm-4 4h2v2H8v-2zm4 0h2v2h-2v-2z" />
    </svg>
  );
}

export function RcBadgeIcon({ size = 18, color = "#0b6b3a" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <path d="M12 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm-6 16c0-2.67 5.33-4 6-4 .32 0 .8.03 1.34.1a5.45 5.45 0 0 0-.34 1.9c0 1.3.45 2.5 1.2 3.44-.73.36-1.55.56-2.2.56H6v-2zm12.5-4a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zm1.6 2.38-2.1 2.1-.9-.9-.7.7 1.6 1.6 2.8-2.8-.7-.7z"/>
    </svg>
  );
}

export function MapPinIcon({ size = 18, color = "#0b6b3a" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C7.58 2 4 5.58 4 10c0 5.25 7 12 8 12s8-6.75 8-12c0-4.42-3.58-8-8-8zm0 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
    </svg>
  );
}

export function PhoneHandsetIcon({ size = 18, color = "#0b6b3a" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a1 1 0 0 0-1.01.24l-2.2 2.2a15.05 15.05 0 0 1-6.59-6.59l2.2-2.21a1 1 0 0 0 .25-1.01A11.36 11.36 0 0 1 8.57 3.9a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1C3 13.06 10.94 21 20.89 21a1 1 0 0 0 1-1v-3.62a1 1 0 0 0-1-1z" />
    </svg>
  );
}

export function MailEnvelopeIcon({ size = 18, color = "#0b6b3a" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export function ClockHoursIcon({ size = 18, color = "#0b6b3a" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 7 12 12 15 14" />
    </svg>
  );
}

export function SocialGroupIcon({ size = 18, color = "#0b6b3a" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
    </svg>
  );
}

// Green Social Buttons for Company Info Row (order: LinkedIn, Instagram, Facebook, X)

export function LinkedInGreenIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#0b6b3a" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z"/>
    </svg>
  );
}

export function InstagramGreenIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#0b6b3a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function FacebookGreenIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#0b6b3a" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

export function XGreenIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#0b6b3a" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

// 6 Interest Chips Icons (Order: Oil & Gas, Logistics, Agriculture, Real Estate, Business Development, General Enquiry)

export function ChipOilGasIcon({ size = 16, color = "#0b6b3a" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    </svg>
  );
}

export function ChipLogisticsIcon({ size = 16, color = "#0b6b3a" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <path d="M1 4a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v10h1.59a1 1 0 0 1 .7.29l2.42 2.42a1 1 0 0 1 .29.71V18a1 1 0 0 1-1 1h-1.08a3 3 0 0 1-5.84 0H9.92a3 3 0 0 1-5.84 0H2a1 1 0 0 1-1-1V4zm14 9V8h3.17l1.6 1.6V13H15zm-8 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm11 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
    </svg>
  );
}

export function ChipAgricultureIcon({ size = 16, color = "#0b6b3a" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 22s5.5-1.5 8-6c2.5-4.5 1-12 1-12s-7.5 1.5-10 6c-2.5 4.5 1 12 1 12z" />
      <path d="M12 16c2.5 2.5 6 4 9 4 0-3-1.5-6.5-4-9" />
      <path d="M11 4c3 1.5 5 4.5 5.5 7.5" />
    </svg>
  );
}

export function ChipRealEstateIcon({ size = 16, color = "#0b6b3a" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

export function ChipBusinessDevIcon({ size = 16, color = "#0b6b3a" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
      <rect x="2" y="16" width="3.5" height="5" rx="0.5" fill={color} stroke="none" />
      <rect x="8.5" y="12" width="3.5" height="9" rx="0.5" fill={color} stroke="none" />
      <rect x="15" y="9" width="3.5" height="12" rx="0.5" fill={color} stroke="none" />
    </svg>
  );
}

export function ChipGeneralEnquiryIcon({ size = 16, color = "#0b6b3a" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      <circle cx="8.5" cy="12" r="1.2" fill={color} stroke="none" />
      <circle cx="12" cy="12" r="1.2" fill={color} stroke="none" />
      <circle cx="15.5" cy="12" r="1.2" fill={color} stroke="none" />
    </svg>
  );
}

// Arrow Icon
export function ArrowRightLineIcon({ size = 16, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
