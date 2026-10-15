import React from 'react';
import { PublicSettings } from '@/lib/api/types';
import { PaystackMark, FlutterwaveMark, BankPartnerMark } from '../common/Icons';

interface TrustRowProps {
  settings: PublicSettings | null;
}

export default function TrustRow({ settings }: TrustRowProps) {
  return (
    <section className="trust-row-section" aria-label="Regulatory and Institutional Partners">
      <div className="container trust-row-container">
        {/* Registration & Regulatory Identifiers strictly driven by /public/settings */}
        <div className="trust-reg-block">
          <div className="reg-pill">
            <span className="reg-label">Incorporation</span>
            <span className="reg-value">{settings?.rc_number || 'Registered Entity'}</span>
          </div>

          <div style={{ width: '1px', height: '24px', backgroundColor: 'var(--color-border)' }} />

          <div className="reg-pill">
            <span className="reg-label">SEC Oversight</span>
            <span className="reg-value">{settings?.sec_registration_number || 'Licensed & Supervised'}</span>
          </div>
        </div>

        {/* Payment and Banking Partner Marks */}
        <div className="trust-partner-block">
          <PaystackMark />
          <FlutterwaveMark />
          <BankPartnerMark name="Settlement Banks" />
        </div>
      </div>
    </section>
  );
}
