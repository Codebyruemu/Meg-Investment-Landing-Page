import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  DropletIcon,
  PipelineIcon,
  FuelDispenserIcon,
  WholesaleIcon,
} from "../common/Icons";

export default function InvestmentOpportunities() {
  const opportunities = [
    {
      id: "off-take",
      title: "Off-take",
      description:
        "Structured opportunities for the acquisition and distribution of petroleum products.",
      image: "/images/opp-offtake-2.jpg",
      icon: <DropletIcon size={18} color="#014924" />,
      link: "/investment-opportunities#current-operations",
    },
    {
      id: "bulk-distribution",
      title: "Bulk Distribution",
      description:
        "Investment opportunities connected to large-volume petroleum product distribution.",
      image: "/images/opp-bulk-2.jpg",
      icon: <PipelineIcon size={18} color="#014924" />,
      link: "/investment-opportunities#current-operations",
    },
    {
      id: "tarmac-sales",
      title: "Tarmac Sales",
      description:
        "Opportunities within petroleum product sales and supply operations.",
      image: "/images/opp-tarmac-2.jpg",
      icon: <FuelDispenserIcon size={18} color="#014924" />,
      link: "/investment-opportunities#current-operations",
    },
    {
      id: "wholesale-supply",
      title: "Wholesale Supply",
      description:
        "Connecting capital to wholesale supply of refined petroleum products.",
      image: "/images/opp-wholesale.jpg",
      icon: <WholesaleIcon size={18} color="#014924" />,
      link: "/investment-opportunities#current-operations",
    },
  ];

  return (
    <section className="mesegco-opportunities-section" id="opportunities">
      <div className="mesegco-container">
        <div className="mesegco-section-header">
          <span className="mesegco-eyebrow">INVESTMENT OPPORTUNITIES</span>
          <h2 className="mesegco-section-title">Where Your Investments Work</h2>
          <p className="mesegco-section-subtitle">
            Access a range of structured opportunities across the refined
            petroleum products distribution value chain
          </p>
        </div>

        <div className="mesegco-opportunities-grid">
          {opportunities.map((item, index) => (
            <article key={item.id} className="mesegco-opportunity-card">
              <div className="opportunity-card-img-wrapper">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  loading={index === 0 ? "eager" : "lazy"}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="opportunity-card-img"
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div className="opportunity-card-content">
                <div className="opportunity-card-header">
                  <span className="opportunity-icon-span">{item.icon}</span>
                  <h3 className="opportunity-card-title">{item.title}</h3>
                </div>

                <p className="opportunity-card-desc">{item.description}</p>

                <Link href={item.link} className="opportunity-card-link">
                  <span>Learn More</span>
                  <ArrowRightIcon size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
