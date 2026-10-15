import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon, MarketAccessIcon, IndustryExpertiseIcon, InvestmentManagementIcon } from '../common/Icons';

export default function WhatWeDo() {
  const features = [
    {
      id: 'market-access',
      title: 'Energy Market Access',
      description: 'We connect investors with opportunities across the petroleum products distribution value chain.',
      icon: <MarketAccessIcon size={28} color="#0B6B3A" />,
    },
    {
      id: 'industry-expertise',
      title: 'Industry Expertise',
      description: 'Our team brings deep knowledge of petroleum trading distribution and supply operations.',
      icon: <IndustryExpertiseIcon size={28} color="#0B6B3A" />,
    },
    {
      id: 'investment-management',
      title: 'Investment Management',
      description: 'We manage the relevant operational activities on behalf of participating investors.',
      icon: <InvestmentManagementIcon size={28} color="#0B6B3A" />,
    },
  ];

  return (
    <section className="mesegco-what-we-do-section" id="what-we-do">
      <div className="mesegco-container">
        <div className="mesegco-what-we-do-layout">
          {/* Left Column: Title & Intro */}
          <div className="mesegco-what-we-do-intro">
            <span className="mesegco-eyebrow">WHAT WE DO</span>
            <h2 className="mesegco-section-title">
              Connecting Capital With Energy Opportunities
            </h2>
            <p className="mesegco-section-body">
              We bridge the gap between investors and the energy sector by providing access to investment opportunities in the refined petroleum products distribution market. Our expertise and industry knowledge allow you to participate in this sector without managing the day-to-day operations.
            </p>
            <Link href="/about" className="mesegco-text-link">
              <span>Learn More About Us</span>
              <ArrowRightIcon size={16} className="text-orange" />
            </Link>
          </div>

          {/* Right Column: 3 Feature Cards */}
          <div className="mesegco-what-we-do-grid">
            {features.map((feature) => (
              <div key={feature.id} className="mesegco-feature-card">
                <div className="mesegco-feature-icon-box">
                  {feature.icon}
                </div>
                <h3 className="mesegco-feature-card-title">{feature.title}</h3>
                <p className="mesegco-feature-card-desc">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
