import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./InvestmentHero.css";

export default function InvestmentHero() {
  return (
    <section
      className="investment-hero-section"
      aria-label="Meseg Invest Platform"
    >
      <div className="container investment-hero-container">
        {/* First: App Introduction */}
        <div className="investment-hero-content-section">
          <div className="investment-hero-grid">
            {/* Left: Text Content */}
            <div className="investment-hero-content">
              <h2 className="investment-hero-title investment-hero-title--desktop">
                Meseg Invest
              </h2>
              <p className="investment-hero-caption">
                The smartest way to invest in the energy market.
              </p>

              {/* Second: How It Works Section */}
              <div className="investment-how-works-grid">
                {/* Left: Process Steps */}
                <div className="investment-process-column">
                  <h3 className="investment-process-title">How it works</h3>

                  <div className="investment-steps-wrapper">
                    <div className="investment-step">
                      <div className="investment-step-circle">1</div>
                      <p className="investment-step-text">
                        Do your due diligence
                        <br />
                        (ask our team)
                      </p>
                    </div>

                    <div className="investment-step">
                      <div className="investment-step-circle">2</div>
                      <p className="investment-step-text">Download the app</p>
                    </div>

                    <div className="investment-step">
                      <div className="investment-step-circle">3</div>
                      <p className="investment-step-text">
                        Choose an investment level
                      </p>
                    </div>

                    <div className="investment-step investment-step--last">
                      <div className="investment-step-circle">4</div>
                      <p className="investment-step-text">Invest</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right: Coming Soon Badge */}
              <div className="investment-coming-soon-column">
                <div className="investment-coming-soon-badge">
                  App coming soon
                </div>

                <Link href="/terms" className="investment-learn-more-btn">
                  Learn More
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* Right: App Image */}
            <div className="investment-hero-image-wrapper">
              <h2 className="investment-hero-title investment-hero-title--mobile">
                Meseg Invest
              </h2>
              <Image
                src="/images/Meseg-app-img.png"
                alt="Meseg Invest Platform App Interface"
                width={400}
                height={450}
                className="investment-hero-image"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
