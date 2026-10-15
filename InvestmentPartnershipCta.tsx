import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "./InvestmentIcons";

export default function InvestmentPartnershipCta() {
  return (
    <section
      className="investment-cta-section"
      id="get-started"
      aria-label="Partner With Us"
    >
      <div className="container investment-container">
        <div className="investment-cta-grid">
          {/* Collage on Left */}
          <div className="investment-cta-image-wrapper">
            <Image
              src="/images/investment/hanshake-img.jpg"
              alt="Sector collage showing logistics, petroleum, agriculture, and real estate operations"
              width={252}
              height={116}
              className="investment-cta-image"
            />
          </div>

          {/* Content on Right */}
          <div className="investment-cta-content">
            <div className="investment-cta-eyebrow-row">
              <span className="investment-cta-eyebrow">GET STARTED</span>
              <span className="investment-cta-line" aria-hidden="true" />
            </div>
            <h2 className="investment-cta-title">
              Partner With Us for
              <br />
              Sustainable Growth.
            </h2>
            <p className="investment-cta-body">
              Let&apos;s work together to unlock opportunities across
              Nigeria&apos;s key sectors.
            </p>
            <div className="investment-cta-actions">
              <Link href="/contact" className="investment-cta-btn-green">
                <span>Get In Touch</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
