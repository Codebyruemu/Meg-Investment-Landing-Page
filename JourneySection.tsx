import React from 'react';
import {
  JourneyLogisticsIcon,
  JourneyCorporateIcon,
  JourneyAgricultureIcon,
  JourneyEnergyIcon,
} from './AboutIcons';

interface MilestoneItem {
  icon: React.ReactNode;
  years: string;
  title: string;
  body: string;
}

const milestones: MilestoneItem[] = [
  {
    icon: <JourneyLogisticsIcon size={32} color="#0B6B3A" />,
    years: '2010 – 2014',
    title: 'Logistics Foundation',
    body: 'Operated as Segun James General Services, providing long-haul newspaper distribution between Lagos and major South-South destinations.',
  },
  {
    icon: <JourneyCorporateIcon size={32} color="#0B6B3A" />,
    years: '2015 – 2017',
    title: 'Corporate Expansion',
    body: 'Meseg Capital Investment Ltd was incorporated and expanded into property acquisition, brokerage, and real estate investment activities.',
  },
  {
    icon: <JourneyAgricultureIcon size={32} color="#0B6B3A" />,
    years: '2021 – Present',
    title: 'Agricultural Supply Chain',
    body: 'Expanded into frozen poultry sourcing and wholesale distribution, connecting regional producers with major Lagos retail markets.',
  },
  {
    icon: <JourneyEnergyIcon size={32} color="#0B6B3A" />,
    years: '2026 – Present',
    title: 'Energy Distribution',
    body: 'Expanded into mainstream petroleum distribution through a registered dealership relationship with Dangote Refinery.',
  },
];

export default function JourneySection() {
  return (
    <section className="about-section about-journey-section" id="journey" aria-label="Our Journey of Growth">
      <div className="container about-journey-container">
        <div className="about-journey-header">
          <span className="about-eyebrow">OUR EXPERIENCE</span>
          <h2 className="about-section-title about-journey-title">
            Our Journey of Growth
          </h2>
        </div>

        {/* Desktop / Tablet Timeline Grid */}
        <div className="about-journey-grid">
          {milestones.map((item, idx) => {
            const isLast = idx === milestones.length - 1;
            return (
              <div key={idx} className="about-journey-column">
                <div className="about-journey-icon-box">{item.icon}</div>
                <div className="about-journey-years">{item.years}</div>
                
                <div className="about-journey-title-row">
                  <h3 className="about-journey-milestone-title">{item.title}</h3>
                  <div className={`about-journey-connector ${isLast ? 'is-last' : ''}`} aria-hidden="true">
                    <span className="about-journey-connector-line" />
                    <span className="about-journey-connector-dot" />
                  </div>
                </div>

                <p className="about-journey-body">{item.body}</p>
              </div>
            );
          })}
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="about-journey-mobile-timeline" aria-hidden="true">
          <div className="about-journey-mobile-track" />
          {milestones.map((item, idx) => (
            <div key={idx} className="about-journey-mobile-item">
              <div className="about-journey-mobile-node">
                <span className="about-journey-mobile-dot" />
              </div>
              <div className="about-journey-mobile-content">
                <div className="about-journey-mobile-header">
                  <span className="about-journey-icon-box">{item.icon}</span>
                  <span className="about-journey-years">{item.years}</span>
                </div>
                <h3 className="about-journey-milestone-title">{item.title}</h3>
                <p className="about-journey-body">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
