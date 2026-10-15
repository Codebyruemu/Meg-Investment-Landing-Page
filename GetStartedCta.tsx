import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "../common/Icons";

export default function GetStartedCta() {
  return (
    <section className="mesegco-get-started-section" id="get-started">
      <div className="mesegco-container">
        <div className="mesegco-get-started-card">
          {/* Left Column: Image */}
          <div className="mesegco-get-started-img-wrap">
            <Image
              src="/images/cta-refinery-tanks-3.jpg"
              alt="Refined Petroleum Storage Tanks and Tanker"
              width={574}
              height={265}
              loading="eager"
              className="mesegco-get-started-img"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          {/* Right Column: Copy & Actions */}
          <div className="mesegco-get-started-content">
            <div className="mesegco-get-started-eyebrow-row">
              <span className="mesegco-eyebrow">GET STARTED</span>
              <span className="mesegco-eyebrow-line" />
            </div>

            <h2 className="mesegco-cta-title">
              Ready to Explore Energy Investment Opportunities?
            </h2>

            <p className="mesegco-cta-body">
              Discover how you can participate in the petroleum products
              distribution sector and speak with our team today.
            </p>

            <div className="mesegco-cta-actions">
              <Link
                href="/investment-opportunities"
                className="mesegco-btn-primary"
              >
                <span>Explore Opportunities</span>
                <ArrowRightIcon size={16} />
              </Link>
              <Link href="/contact" className="mesegco-btn-outline">
                <span>Speak With Our Team</span>
                <ArrowRightIcon size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
