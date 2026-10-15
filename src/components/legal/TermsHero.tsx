import React from "react";

export default function TermsHero() {
  return (
    <section
      className="terms-hero-section"
      id="terms-hero"
      aria-label="Terms Hero"
    >
      <div className="terms-hero-overlay" />
      <div className="container terms-hero-container">
        <div className="terms-hero-content">
          <span className="terms-hero-eyebrow">LEGAL DOCUMENTATION</span>
          <h1 className="terms-hero-title">
            MEIM Investment Management Platform
            <span className="terms-hero-title-accent">SERVICE TERMS</span>
          </h1>
          <p className="terms-hero-subtitle">Meseg Capital Investment Ltd</p>
        </div>
      </div>
    </section>
  );
}
