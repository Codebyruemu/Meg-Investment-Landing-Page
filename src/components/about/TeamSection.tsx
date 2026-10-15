import React from "react";
import Image from "next/image";
import Link from "next/link";
import { defaultTeamMembers, type TeamMember } from "@/lib/api/mock-data";

interface TeamSectionProps {
  teamMembers?: TeamMember[];
}

export default function TeamSection({ teamMembers }: TeamSectionProps) {
  const members =
    teamMembers && teamMembers.length > 0 ? teamMembers : defaultTeamMembers;
  const [lead, ...others] = members;

  return (
    <section
      className="about-section about-team-section"
      id="team"
      aria-label="Leadership & Team"
    >
      <div className="container about-team-container">
        <div className="about-team-header">
          <span className="about-eyebrow">LEADERSHIP & PEOPLE</span>
          <h2 className="about-section-title about-team-title">
            The Team Behind Our Success
          </h2>
        </div>

        <div className="about-team-featured">
          <div className="about-team-image-wrapper">
            <Image
              src={lead.image}
              alt={`${lead.name}, ${lead.role}`}
              fill
              sizes="(max-width: 767px) 100vw, 400px"
              className="about-team-image"
              priority
              loading="eager"
            />
          </div>
          <div className="about-team-info">
            <h3 className="about-team-name">
              <Link href={`/leadership#${lead.id}`}>{lead.name}</Link>
            </h3>
            <div className="about-team-role">{lead.role}</div>
            <p className="about-team-bio">{lead.bio}</p>
          </div>
        </div>

        {others.length > 0 && (
          <div className="about-team-grid">
            {others.map((member) => (
              <div
                key={member.id}
                className="about-team-card about-team-card-hover"
              >
                <div className="about-team-image-wrapper">
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.role}`}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 25vw"
                    className="about-team-image"
                    priority
                    loading="eager"
                  />
                </div>
                <div className="about-team-info">
                  <h3 className="about-team-name">
                    <Link href={`/leadership#${member.id}`}>{member.name}</Link>
                  </h3>
                  <div className="about-team-role">{member.role}</div>
                  <div className="about-team-view-more">
                    <svg
                      id={`chevron-${member.id}`}
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
