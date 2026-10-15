import React from "react";
import Link from "next/link";
import {
  ArrowRightIcon,
  FixedReturnIcon,
  PassiveModelIcon,
  FlexiblePayoutsIcon,
  IndustryExpertiseIcon,
} from "../common/Icons";

export default function WhyInvestWithUs() {
  const pillars = [
    {
      id: "fixed-return",
      title: "Fixed Annual Return",
      description:
        "Investors receive returns based on a fixed annual return structure defined by the investment terms.",
      icon: <FixedReturnIcon size={32} color="#D68A3D" />,
    },
    {
      id: "passive-model",
      title: "Passive Investment Model",
      description:
        "Participate without having to manage day-to-day operations in the energy sector.",
      icon: <PassiveModelIcon size={32} color="#D68A3D" />,
    },
    {
      id: "flexible-payouts",
      title: "Flexible Payouts",
      description:
        "Payout schedules structured around your investment preferences.",
      icon: <FlexiblePayoutsIcon size={32} color="#D68A3D" />,
    },
    {
      id: "energy-exposure",
      title: "Energy Sector Exposure",
      description:
        "Gain exposure to Nigeria’s energy distribution sector without direct operational involvement.",
      icon: <IndustryExpertiseIcon size={32} color="#D68A3D" />,
    },
  ];

  return (
    <section className="mesegco-why-us-section" id="why-invest-with-us">
      <div className="mesegco-container">
        <div className="mesegco-why-us-layout">
          {/* Left Column */}
          <div className="mesegco-why-us-intro">
            <span className="mesegco-eyebrow-lime">WHY INVEST WITH US</span>
            <h2 className="mesegco-why-us-title">
              Energy opportunities, without the operational complexity.
            </h2>
            <p className="mesegco-why-us-body">
              We make it easy for you to participate in Nigeria&apos;s energy
              sector with a trusted partner, structured opportunities and
              professional management.
            </p>
            <div className="mesegco-why-us-cta-wrap">
              <Link href="#opportunities" className="mesegco-btn-primary">
                <span>Explore Opportunities</span>
                <ArrowRightIcon size={16} />
              </Link>
            </div>
          </div>

          {/* Right Column: 4 Pillars */}
          <div className="mesegco-why-us-grid">
            {pillars.map((pillar) => (
              <div key={pillar.id} className="mesegco-pillar-card">
                <div className="mesegco-pillar-icon-wrap">{pillar.icon}</div>
                <h3 className="mesegco-pillar-title">{pillar.title}</h3>
                <p className="mesegco-pillar-desc">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
