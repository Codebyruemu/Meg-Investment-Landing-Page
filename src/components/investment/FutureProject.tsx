"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./FutureProject.css";

type Project = {
  id: string;
  title: string;
  image: string;
  alt: string;
};

const projectSlides: Project[][] = [
  [
    {
      id: "office",
      title: "Office Complex",
      image: "/images/investment/project-office.png",
      alt: "Modern commercial office building",
    },
    {
      id: "energy",
      title: "premium water production factory",
      image: "/images/investment/project-water.jpeg",
      alt: "water production factory",
    },
    {
      id: "tankers",
      title: "Petroleum Distribution",
      image: "/images/investment/project-delivery.jpeg",
      alt: "Petroleum tanker fleet",
    },
  ],
  [
    {
      id: "complex",
      title: "Commercial Development",
      image: "/images/investment/project-office.png",
      alt: "Commercial property development",
    },
    {
      id: "water",
      title: "Water Production",
      image: "/images/investment/water-bottle.jpeg",
      alt: "Bottled water production",
    },
    {
      id: "operations",
      title: "Energy Operations",
      image: "/images/investment/project-fuel-station.jpeg",
      alt: "Energy industry operations",
    },
  ],
];

const AUTO_PLAY_INTERVAL = 5000;

export default function FutureProjects() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % projectSlides.length);
    }, AUTO_PLAY_INTERVAL);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  const showSlide = (index: number) => {
    setActiveSlide((index + projectSlides.length) % projectSlides.length);
  };

  return (
    <section
      className="future-projects"
      aria-labelledby="future-projects-title"
    >
      {/* Hero and image carousel */}
      <div
        className="future-projects-hero"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={(event) => {
          if (
            !event.currentTarget.contains(event.relatedTarget as Node | null)
          ) {
            setIsPaused(false);
          }
        }}
      >
        <div className="future-projects-background" aria-hidden="true" />

        <div className="future-projects-overlay" />

        <div className="future-projects-hero-content">
          <p className="future-projects-eyebrow">OUR VISION FOR TOMORROW</p>

          <h2 id="future-projects-title">What We Are Building Towards</h2>
        </div>

        <div
          className="future-projects-carousel"
          aria-label="Future project images"
          aria-roledescription="carousel"
        >
          <div className="future-projects-track" key={activeSlide}>
            {projectSlides[activeSlide].map((project) => (
              <article className="future-project-card" key={project.id}>
                <div className="future-project-card-image">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 600px) 78vw, (max-width: 900px) 40vw, 220px"
                    priority={activeSlide === 0}
                  />

                  <div className="future-project-card-overlay" />

                  <h3>{project.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Manual carousel controls */}
        <div className="future-projects-controls">
          <button
            type="button"
            className="future-projects-arrow"
            onClick={() => showSlide(activeSlide - 1)}
            aria-label="Previous project group"
          >
            &#8592;
          </button>

          <div
            className="future-projects-dots"
            aria-label="Choose project group"
          >
            {projectSlides.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`future-projects-dot ${
                  activeSlide === index ? "is-active" : ""
                }`}
                onClick={() => showSlide(index)}
                aria-label={`Show project group ${index + 1}`}
                aria-current={activeSlide === index ? "true" : undefined}
              />
            ))}
          </div>

          <button
            type="button"
            className="future-projects-arrow"
            onClick={() => showSlide(activeSlide + 1)}
            aria-label="Next project group"
          >
            &#8594;
          </button>
        </div>
      </div>

      {/* Featured initiatives */}
      <div className="future-projects-initiatives">
        <div className="future-projects-initiatives-inner">
          <article className="future-project-initiative">
            <div className="future-project-initiative-icon" aria-hidden="true">
              🏢
            </div>
            <h3>Modern Office</h3>
          </article>

          <article className="future-project-initiative">
            <div className="future-project-initiative-icon" aria-hidden="true">
              💧
            </div>
            <h3>Table Water Company</h3>
          </article>

          <article className="future-project-initiative">
            <div className="future-project-initiative-icon" aria-hidden="true">
              ⛽
            </div>
            <h3>Energy Retail Stations</h3>
          </article>
        </div>
      </div>
    </section>
  );
}
