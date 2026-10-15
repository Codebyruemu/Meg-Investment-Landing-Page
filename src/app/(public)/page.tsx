import React from 'react';
import Hero from '@/components/home/Hero';
import WhatWeDo from '@/components/home/WhatWeDo';
import InvestmentOpportunities from '@/components/home/InvestmentOpportunities';
import WhyInvestWithUs from '@/components/home/WhyInvestWithUs';
import HowItWorks from '@/components/home/HowItWorks';
import TrackRecord from '@/components/home/TrackRecord';
import GetStartedCta from '@/components/home/GetStartedCta';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. What We Do */}
      <WhatWeDo />

      {/* 3. Investment Opportunities */}
      <InvestmentOpportunities />

      {/* 4. Why Invest With Us */}
      <WhyInvestWithUs />

      {/* 5. How It Works */}
      <HowItWorks />

      {/* 6. Track Record */}
      <TrackRecord />

      {/* 7. Get Started CTA */}
      <GetStartedCta />
    </>
  );
}
