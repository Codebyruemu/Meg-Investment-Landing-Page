import React from "react";
import {
  ExploreStepIcon,
  UnderstandStepIcon,
  InvestStepIcon,
  ManageStepIcon,
  TrackStepIcon,
} from "../common/Icons";

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Explore",
      description: "Discover available investment opportunities.",
      icon: <ExploreStepIcon size={20} color="#014924" />,
    },
    {
      step: "02",
      title: "Understand",
      description: "Review the opportunity terms and requirements.",
      icon: <UnderstandStepIcon size={20} color="#014924" />,
    },
    {
      step: "03",
      title: "Invest",
      description: "Complete the investment process.",
      icon: <InvestStepIcon size={20} color="#014924" />,
    },
    {
      step: "04",
      title: "We Manage",
      description: "Our team handles the relevant energy market operations.",
      icon: <ManageStepIcon size={20} color="#014924" />,
    },
    {
      step: "05",
      title: "Track",
      description: "Receive updates and reports on your investment on the App.",
      icon: <TrackStepIcon size={20} color="#014924" />,
    },
  ];

  return (
    <section className="mesegco-how-it-works-section" id="how-it-works">
      <div className="mesegco-container">
        <div className="mesegco-how-it-works-layout">
          {/* Left Intro */}
          <div className="mesegco-how-it-works-intro">
            <span className="mesegco-eyebrow">HOW IT WORKS</span>
            <h2 className="mesegco-section-title">A Simple Process</h2>
            <p className="mesegco-section-body">
              From interest to returns — we make the investment journey
              straightforward.
            </p>
          </div>

          {/* Right 5 Steps */}
          <div className="mesegco-steps-grid">
            {steps.map((item) => (
              <div key={item.step} className="mesegco-step-item">
                <div className="mesegco-step-badge-row">
                  <span className="mesegco-step-badge">{item.step}</span>
                  <span className="mesegco-step-icon">{item.icon}</span>
                </div>
                <h3 className="mesegco-step-title">{item.title}</h3>
                <p className="mesegco-step-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
