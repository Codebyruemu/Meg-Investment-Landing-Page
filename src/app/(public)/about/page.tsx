import React from "react";
import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import QuestionCTA from "@/components/about/QuestionCTA";
import JourneySection from "@/components/about/JourneySection";
import TeamSection from "@/components/about/TeamSection";
import PartnershipCta from "@/components/about/PartnershipCta";
import OurStorySection from "@/components/about/OurStorySection";

export const metadata: Metadata = {
  title: "About Us — MESEG Capital Investment Ltd",
  description:
    "Since 2010, Meseg Capital Investment Ltd has grown from a logistics-focused enterprise into a diversified Nigerian company operating across energy, logistics, agriculture, real estate, and business development.",
  openGraph: {
    title: "About Us — MESEG Capital Investment Ltd",
    description: "Building Value Across Nigeria’s Essential Sectors.",
    url: "/about",
    siteName: "MESEG Capital Investment Ltd",
    images: [
      {
        url: "/images/about/about-hero.jpg",
        width: 1440,
        height: 518,
        alt: "About MESEG Capital Investment Ltd",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <>
      {/* 1. About Hero */}
      <AboutHero />

      {/* 2. Question CTA Section */}
      <QuestionCTA />

      {/* 3. Mission,vision / Our Story Section */}
      <OurStorySection />

      {/* 5. Our Experience / Journey */}
      <JourneySection />

      {/* 6. Leadership & People / Team */}
      <TeamSection />

      {/* 7. Get Started / Partnership CTA */}
      <PartnershipCta />
    </>
  );
}
