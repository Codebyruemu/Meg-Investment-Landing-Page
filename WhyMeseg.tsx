import React from 'react';
import { whyMesegItems } from '@/content/home-content';
import { FeatureIcon } from '../common/Icons';

export default function WhyMeseg() {
  return (
    <section className="section-wrapper" id="why-meseg">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Value Proposition</span>
          <h2 className="section-title">Why Meseg</h2>
          <p className="section-subtitle">
            An investment thesis rooted in capital protection, collateral backing, and disciplined risk management.
          </p>
        </div>

        {/* Exactly four items as defined in specification */}
        <div className="why-meseg-grid">
          {whyMesegItems.map((item) => (
            <div key={item.id} className="feature-card">
              <div className="feature-icon-wrapper">
                <FeatureIcon icon={item.icon} />
              </div>
              <h3 className="feature-title">
                {item.title}
              </h3>
              <p className="feature-desc">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
