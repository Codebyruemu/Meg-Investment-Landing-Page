import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "../common/Icons";

export default function PartnershipCta() {
  return (
    <section
      className="about-section about-cta-section"
      id="partnership-cta"
      aria-label="Partnership Call to Action"
    >
      <div className="container about-cta-container">
        <div className="about-cta-grid">
          {/* Left Column: Illustrative Partnership Image */}
          <div className="about-cta-image-wrapper">
            <Image
              src="/images/partnership-cta-img.jpg"
              alt="Two business executives reviewing financial performance on a tablet"
              width={573}
              height={317}
              className="about-cta-image"
              priority
              loading="eager"
            />
          </div>

          {/* Right Column: Narrative and CTAs */}
          <div className="about-cta-content">
            <div className="about-eyebrow-wrapper">
              <span className="about-eyebrow">GET STARTED</span>
              <span className="about-eyebrow-line" aria-hidden="true" />
            </div>

            <h2 className="about-section-title about-cta-title">
              Building Partnerships. Creating Opportunities. Delivering Value.
            </h2>

            <p className="about-cta-body">
              Discover how Meseg Capital Investment Ltd can support your
              business or investment objectives.
            </p>

            <div className="about-cta-actions">
              <Link href="/investment-opportunities" className="about-cta-btn-primary">
                <span>Explore Opportunities</span>
                <ArrowRightIcon size={18} />
              </Link>
              <Link href="/contact" className="about-cta-btn-secondary">
                <span>Speak With Our Team</span>
                <ArrowRightIcon size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
