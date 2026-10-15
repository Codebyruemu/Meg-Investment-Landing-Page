import React from 'react';
import Link from 'next/link';
import { referralContent } from '@/content/home-content';
import { PublicSettings } from '@/lib/api/types';

interface ReferralProgrammeProps {
  settings: PublicSettings | null;
}

export default function ReferralProgramme({ settings }: ReferralProgrammeProps) {
  const referralPercent = settings?.referral_percent ?? 2.5;

  return (
    <section className="section-wrapper" id="referrals">
      <div className="container">
        <div className="referral-card">
          <div className="referral-left">
            <span className="section-tag" style={{ backgroundColor: 'rgba(255, 255, 255, 0.12)', color: '#FCD34D', marginBottom: '16px' }}>
              Incentives
            </span>
            <h2 className="referral-heading">
              {referralContent.heading}
            </h2>
            <p className="referral-sentence">
              {referralContent.sentenceOne}
            </p>
            <p className="referral-sentence" style={{ marginBottom: '28px' }}>
              {referralContent.sentenceTwo}
            </p>
            <Link href="/referrals" className="btn btn-gold">
              {referralContent.ctaText}
            </Link>
          </div>

          <div className="referral-right">
            <span className="referral-stat-label">Referral Reward</span>
            <span className="referral-stat-value">
              {`${referralPercent}%`}
            </span>
            <span style={{ fontSize: '12px', color: '#A9C2BA', maxWidth: '180px', lineHeight: 1.4 }}>
              Credited directly per funded subscription
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
