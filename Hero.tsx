import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from '../common/Icons';

export default function Hero() {
  return (
    <section className="mesegco-hero-section" id="hero">
      <div className="mesegco-container">
        <div className="mesegco-hero-content">
          <span className="mesegco-hero-eyebrow">
            ENERGY INVESTMENT, MADE ACCESSIBLE
          </span>

          <h1 className="mesegco-hero-title">
            <span className="hero-line-white">Invest in Energy.</span>
            <span className="hero-line-lime">Build Lasting Value.</span>
          </h1>

          <p className="mesegco-hero-body">
            We provide individuals and organizations with access to structured investment opportunities within Nigeria&apos;s refined petroleum products distribution sector, without the need for industry expertise.
          </p>

          <div className="mesegco-hero-actions">
            <Link href="#opportunities" className="mesegco-btn-primary">
              <span>Explore Investment Opportunities</span>
              <ArrowRightIcon size={16} />
            </Link>
            <Link href="#how-it-works" className="mesegco-btn-hero-secondary">
              <span>How It Works</span>
              <ArrowRightIcon size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
