import React from 'react';
import { getTheAppContent } from '@/content/home-content';
import { AppStoreBadge, GooglePlayBadge, QrCodeGraphic, PhoneMockupGraphic } from '../common/Icons';
import { PublicSettings } from '@/lib/api/types';

interface GetTheAppProps {
  settings: PublicSettings | null;
}

export default function GetTheApp({ settings }: GetTheAppProps) {
  const iosUrl = settings?.ios_app_url || '#';
  const androidUrl = settings?.android_app_url || '#';

  return (
    <section className="section-wrapper" id="get-the-app">
      <div className="container">
        <div className="get-app-card">
          <div className="get-app-left">
            <span className="section-tag">Mobile Access</span>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '14px' }}>
              {getTheAppContent.heading}
            </h2>
            <p style={{ fontSize: '16px', lineHeight: 1.6, color: 'var(--color-text-secondary)', marginBottom: '28px' }}>
              {getTheAppContent.subheading}
            </p>

            {/* App Store and Google Play badges */}
            <div className="get-app-store-row">
              <a 
                href={iosUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Download Meseg on the Apple App Store"
              >
                <AppStoreBadge />
              </a>
              <a 
                href={androidUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Get Meseg on Google Play"
              >
                <GooglePlayBadge />
              </a>
            </div>

            {/* QR Code */}
            <div className="get-app-qr-row">
              <QrCodeGraphic />
              <div>
                <div className="qr-text-label">{getTheAppContent.qrLabel}</div>
                <div className="qr-text-sub">Point your camera to install on iOS or Android</div>
              </div>
            </div>
          </div>

          {/* Phone Image Graphic */}
          <div className="get-app-right">
            <PhoneMockupGraphic />
          </div>
        </div>
      </div>
    </section>
  );
}
