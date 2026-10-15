import React from 'react';
import Link from 'next/link';
import { closingBandContent } from '@/content/home-content';

export default function ClosingBand() {
  return (
    <section className="closing-band-section" id="closing-cta">
      <div className="container">
        <div className="closing-band-content">
          <h2 className="closing-band-headline">
            {closingBandContent.headline}
          </h2>
          <Link 
            href="/get-the-app" 
            className="btn btn-gold" 
            style={{ padding: '0 32px' }}
          >
            {closingBandContent.ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
}
