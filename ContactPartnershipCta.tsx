import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightLineIcon } from "./ContactIcons";

export default function ContactPartnershipCta() {
  return (
    <section
      className="contact-cta-section"
      id="get-started"
      aria-label="Partnership Call to Action"
    >
      <div className="container contact-container">
        <div className="contact-cta-grid">
          {/* Left Column: Sector Collage */}
          <div className="contact-cta-image-wrapper">
            <Image
              src="/images/contact/contact-sectors-collage.png"
              alt="Key Nigerian Sectors: Energy, Logistics, Agriculture, Real Estate"
              width={380}
              height={186}
              className="contact-cta-image"
            />
          </div>

          {/* Right Column: Copy & Actions */}
          <div className="contact-cta-content">
            <div className="contact-cta-eyebrow-row">
              <span className="contact-cta-eyebrow">GET STARTED</span>
              <span className="contact-cta-line" aria-hidden="true" />
            </div>

            <h2 className="contact-cta-title">
              Partner With Us for
              <br />
              Sustainable Growth.
            </h2>

            <p className="contact-cta-body">
              Let&apos;s work together to unlock opportunities across
              Nigeria&apos;s key sectors.
            </p>

            <div className="contact-cta-actions">
              <Link
                href="/investment-opportunities"
                className="contact-btn-primary"
              >
                <span>Explore Opportunities</span>
                <ArrowRightLineIcon size={16} />
              </Link>
              <a href="#contact-form" className="contact-btn-secondary">
                <span>Get In Touch</span>
                <ArrowRightLineIcon size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
