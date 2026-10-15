import React from 'react';
import Image from 'next/image';

export default function ReceptionSection() {
  return (
    <section className="contact-reception-section" aria-label="Meseg Capital Headquarters Reception">
      <div className="container contact-container">
        <div className="contact-reception-card">
          <Image
            src="/images/contact/contact-reception.png"
            alt="MESEG CAPITAL INVESTMENT LTD. OIL & GAS DIVISION Reception Area"
            width={858}
            height={411}
            className="contact-reception-image"
            priority={false}
          />
        </div>
      </div>
    </section>
  );
}
