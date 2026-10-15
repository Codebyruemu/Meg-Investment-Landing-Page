import React from "react";
import AboutHeroImageCollage from "./AboutHeroImageCollage";
import "./AboutHero.css";

export default function AboutHero() {
  return (
    <section className="about-hero-section">
      <div className="about-hero-wrapper">
        {/* Left: Text Content */}
        <div className="about-hero-text">
          <h2 className="about-hero-title">
            The Right Partner for Sustainable Wealth Creation
          </h2>
          <a href="#our-story" className="about-hero-cta">
            Learn More
          </a>
        </div>

        {/* Right: Image Collage */}
        <div className="about-hero-collage-container">
          <AboutHeroImageCollage />
        </div>
      </div>
    </section>
  );
}
