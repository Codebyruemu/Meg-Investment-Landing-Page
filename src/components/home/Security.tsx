import React from 'react';
import { securityItems } from '@/content/home-content';
import { SecurityIcon } from '../common/Icons';

export default function Security() {
  return (
    <section className="section-wrapper" id="security">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Governance & Protection</span>
          <h2 className="section-title">Institutional-grade Security</h2>
          <p className="section-subtitle">
            Rigorous protocols safeguarding investor identity, sensitive data, and portfolio assets.
          </p>
        </div>

        {/* Exactly four items as defined in specification */}
        <div className="security-grid">
          {securityItems.map((item) => (
            <div key={item.id} className="security-card">
              <div className="security-icon-box">
                <SecurityIcon type={item.id} />
              </div>
              <h3 className="security-title">
                {item.title}
              </h3>
              <p className="security-desc">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
