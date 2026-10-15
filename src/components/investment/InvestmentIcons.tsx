import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
  color?: string;
}

// 1. Oil & Gas - Petroleum Barrel
export function BarrelIcon({ size = 20, color = '#0B6B3A' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
      <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
    </svg>
  );
}

// 2. Logistics - Delivery Freight Truck
export function TruckIcon({ size = 20, color = '#0B6B3A' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M1 3h14v13H1z" />
      <path d="M15 8h4l3 3v5h-7V8z" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="17.5" cy="18.5" r="2.5" />
    </svg>
  );
}

// 3. Poultry & Agriculture - Sprout / Agricultural Crops
export function SproutIcon({ size = 20, color = '#0B6B3A' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 20h10" />
      <path d="M12 20V10" />
      <path d="M12 10c0-4 4-6 8-6 0 4-2 8-8 8z" />
      <path d="M12 14c0-3-3-5-6-5 0 3 2 6 6 6z" />
    </svg>
  );
}

// 4. Fish Farm - Fish
export function FishIcon({ size = 20, color = '#0B6B3A' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6.5 12C3 15 2 20 2 20s5-1 8-4.5c4-4.5 9-3 12-4.5-3-1.5-8 0-12-4.5C7 3 2 2 2 2s1 5 4.5 8" />
      <circle cx="17" cy="11" r="1" fill={color} />
    </svg>
  );
}

// 5. Real Estate - Building / Property House
export function HouseIcon({ size = 20, color = '#0B6B3A' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 21h18M3 10h18M5 10v11M9 10v11M15 10v11M19 10v11M12 2L2 7h20L12 2z" />
    </svg>
  );
}

// 6. Business Development - Growth Chart / Trending Line
export function GrowthChartIcon({ size = 20, color = '#0B6B3A' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
      <line x1="2" y1="21" x2="22" y2="21" />
    </svg>
  );
}

// Energy Product: Fuel Pump (AGO, PMS)
export function FuelPumpIcon({ size = 18, color = '#0B6B3A' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="11" height="18" rx="2" />
      <line x1="3" y1="9" x2="14" y2="9" />
      <path d="M14 7h2a2 2 0 0 1 2 2v10a2 2 0 0 0 2 2 2 2 0 0 0 2-2V9a4 4 0 0 0-4-4h-4" />
      <circle cx="8.5" cy="14" r="1.5" />
    </svg>
  );
}

// Energy Product: Droplet (DPK)
export function FuelDropletIcon({ size = 18, color = '#0B6B3A' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    </svg>
  );
}

// Energy Product: Aviation / Jet Fuel (ATK)
export function AviationFuelIcon({ size = 18, color = '#0B6B3A' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
    </svg>
  );
}

// Energy Product: Gas Cylinder (LPG)
export function GasCylinderIcon({ size = 18, color = '#0B6B3A' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="6" y="7" width="12" height="14" rx="4" />
      <path d="M9 7V4h6v3" />
      <line x1="6" y1="13" x2="18" y2="13" />
      <circle cx="12" cy="5" r="1" />
    </svg>
  );
}

// Commercial Scale Badge Icon
export function CommercialScaleIcon({ size = 28, color = '#014924' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="3" width="20" height="18" rx="3" />
      <path d="M7 16l3-4 3 2 4-5" />
      <polyline points="13 9 17 9 17 13" />
    </svg>
  );
}

// Small Arrow Right for Buttons
export function ArrowRight({ size = 14, color = 'currentColor' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
