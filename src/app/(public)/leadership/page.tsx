import React from "react";
import Image from "next/image";
import Link from "next/link";
import { defaultTeamMembers } from "@/lib/api/mock-data";

export const metadata = {
  title: "Leadership - Meseg Capital Investment",
  description: "Meet the leadership team behind Meseg Capital Investment Ltd",
};

export default function LeadershipPage() {
  return (
    <main>
      <section className="leadership-section">
        <div className="container">
          <div className="leadership-header">
            <Link href="/about#team" className="leadership-back">
              Back to About
            </Link>
            <h1 className="leadership-title">Leadership & Team</h1>
            <p className="leadership-subtitle">
              Meet the experienced professionals leading Meseg Capital
              Investment Ltd
            </p>
          </div>

          <div className="leadership-grid">
            {defaultTeamMembers.map((member) => (
              <div key={member.id} id={member.id} className="leadership-card">
                <div className="leadership-image-wrapper">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="leadership-image"
                  />
                </div>
                <div className="leadership-info">
                  <h2 className="leadership-name">{member.name}</h2>
                  <div className="leadership-role">{member.role}</div>
                  <p className="leadership-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
