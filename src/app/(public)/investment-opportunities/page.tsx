import React from 'react';
import type { Metadata } from 'next';
import InvestmentHero from '@/components/investment/InvestmentHero';
import OperationsSections from '@/components/investment/OperationsSections';
import InvestmentPartnershipCta from '@/components/investment/InvestmentPartnershipCta';

export const metadata: Metadata = {
  title: 'Investment Opportunities & Commercial Services — MESEG Capital Investment Ltd',
  description:
    'From petroleum distribution and logistics to agriculture and real estate, Meseg Capital Investment Ltd combines sector knowledge, operational capability, and strategic partnerships to serve businesses across Nigeria.',
  openGraph: {
    title: 'Capabilities Across Critical Sectors — MESEG Capital Investment Ltd',
    description:
      'Explore MESEG commercial capabilities across petroleum distribution, logistics, poultry & agriculture, aquaculture, real estate, and strategic business development.',
    url: '/investment-opportunities',
    siteName: 'MESEG Capital Investment Ltd',
    images: [
      {
        url: '/images/investment/sector-collage.png',
        width: 1200,
        height: 630,
        alt: 'MESEG Capital Investment Opportunities Across Critical Sectors',
      },
    ],
  },
};

export default function InvestmentOpportunitiesPage() {
  return (
    <>
      {/* 2. OUR SERVICES Hero */}
      <InvestmentHero />

      <OperationsSections />

      {/* 10. Partnership CTA (Collage left, heading/body right, single green Get In Touch button) */}
      <InvestmentPartnershipCta />
    </>
  );
}
