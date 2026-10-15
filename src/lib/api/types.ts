/**
 * Canonical typed API contracts for Meseg Capital public endpoints.
 * All field names and response shapes match the product specification exactly.
 */

export interface Product {
  id: string;
  name: string;
  slug: string;
  duration_months: number;
  distribution_rate: number;
  distribution_frequency: string;
  min_amount: number; // in kobo
  max_amount: number; // in kobo
  referral_percent: number;
  capacity_limit: number;
  capacity_used: number;
  is_full: boolean;
  status: 'active' | 'inactive' | 'closed' | string;
}

export interface ProductsResponse {
  data: Product[];
}

export interface PublicSettingsSocials {
  x: string;
  instagram: string;
  facebook: string;
  linkedin: string;
}

export interface PublicSettings {
  rc_number: string;
  sec_registration_number: string;
  referral_percent: number;
  ios_app_url: string;
  android_app_url: string;
  support_email: string;
  support_phone: string;
  whatsapp_url: string;
  address: string;
  socials: PublicSettingsSocials;
}

export interface Terms {
  id: string;
  title: string;
  text: string;
}
