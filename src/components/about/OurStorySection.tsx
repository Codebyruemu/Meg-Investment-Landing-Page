"use client";

import React from "react";
import Image from "next/image";
import "./OurStorySection.css";

type StoryItem = {
  title: string;
  description: string;
};

const storyItems: StoryItem[] = [
  {
    title: "About",
    description:
      "Meseg Capital Investment Ltd is a growth-driven Nigerian enterprise committed to creating sustainable value through strategic investments, operational excellence, and strong partnerships. Incorporated in 2015 after operating as Segun James General Services since 2010, the company has developed experience across logistics, real estate, agricultural supply chains, public-sector development, and energy distribution.",
  },
  {
    title: "Our Mission",
    description:
      "To deliver high-quality, reliable, and resilient solutions driven by innnovation, empathy, and absolute professionalism; consistently exceeding client expectations and meeting their evolving needs.",
  },
  {
    title: "Our Vision",
    description:
      "To set the benchmark for industry leadership through strategic partnership, driven by a commitment to operational excellence, ethical integrity, and sustainable long-term value.",
  },
];

const coreValues: StoryItem[] = [
  {
    title: "Integrity",
    description:
      "We build relationships around transparency, accountability, and responsible business practices.",
  },
  {
    title: "Operational Excellence",
    description:
      "We pursue efficiency, reliability, and high standards across every business operation.",
  },
  {
    title: "Strategic Partnerships",
    description:
      "We collaborate with businesses, institutions, and industry stakeholders to create mutually beneficial opportunities.",
  },
];

export default function OurStorySection() {
  return (
    <section
      className="our-story-section"
      id="our-story"
      aria-labelledby="our-story-heading"
    >
      <div className="our-story-container">
        {/* Introductory heading */}
        <header className="our-story-header">
          <span className="our-story-eyebrow">All About Our Company</span>

          <h2 className="our-story-heading" id="our-story-heading">
            Our Story
          </h2>

          <p className="our-story-intro">
            We are committed to providing quality services and dependable
            solutions. Our journey is driven by professionalism, innovation, and
            a dedication to creating lasting value for our clients.
          </p>
        </header>

        {/* Story content and core values */}
        <div className="our-story-grid">
          {/* Left column */}
          <div className="our-story-column our-story-column--left">
            {storyItems.map((item) => (
              <article className="our-story-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>

          {/* Center image */}
          <div className="our-story-image">
            <Image
              src="/images/our-story-team.jpg"
              alt="Team members working together on a project"
              fill
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 22vw"
              priority={false}
              className="our-story-image__photo"
            />
          </div>

          {/* Right column */}
          <div className="our-story-column our-story-column--right">
            {coreValues.map((item) => (
              <article className="our-story-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
