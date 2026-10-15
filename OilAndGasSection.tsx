import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FuelPumpIcon,
  FuelDropletIcon,
  AviationFuelIcon,
  GasCylinderIcon,
  CommercialScaleIcon,
  ArrowRight,
} from './InvestmentIcons';

export default function OilAndGasSection() {
  return (
    <section className="investment-oil-section" id="oil-and-gas" aria-label="Oil & Gas Distribution">
      <div className="container investment-container">
        {/* Top: Text left, Two Photos right */}
        <div className="investment-oil-top-grid">
          <div className="investment-oil-copy">
            <p className="investment-service-eyebrow">OIL & GAS DISTRIBUTION</p>
            <h2 className="investment-service-heading">
              Powering Business Through Reliable Energy Distribution.
            </h2>
            <div className="investment-service-body">
              <p>
                Meseg Capital Investment Ltd participates in Nigeria&apos;s downstream petroleum sector, providing wholesale petroleum sourcing and distribution solutions to commercial and industrial customers.
              </p>
              <p>
                Our petroleum portfolio includes AGO, PMS, DPK, ATK and LPG, supported by an expanding distribution strategy designed for bulk B2B supply and strategic commercial partnerships.
              </p>
            </div>
            <div className="investment-btn-wrapper">
              <Link href="/contact" className="investment-service-btn">
                <span>Learn More</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>

          <div className="investment-oil-images">
            <div className="investment-oil-img-box">
              <Image
                src="/images/investment/energy-tanker.png"
                alt="Petroleum tanker truck delivering commercial fuel"
                width={298}
                height={322}
                className="investment-service-img"
              />
            </div>
            <div className="investment-oil-img-box">
              <Image
                src="/images/investment/energy-fuel-nozzle.png"
                alt="Refined fuel dispensing nozzle at commercial terminal"
                width={300}
                height={322}
                className="investment-service-img"
              />
            </div>
          </div>
        </div>

        {/* Middle: Energy Products Strip */}
        <div className="investment-energy-products-panel">
          <div className="investment-energy-label">OUR ENERGY PRODUCTS</div>
          <div className="investment-energy-cells">
            <div className="investment-energy-cell">
              <FuelPumpIcon size={20} color="#0B6B3A" />
              <span className="investment-energy-name">AGO</span>
            </div>
            <div className="investment-energy-cell">
              <FuelPumpIcon size={20} color="#0B6B3A" />
              <span className="investment-energy-name">PMS</span>
            </div>
            <div className="investment-energy-cell">
              <FuelDropletIcon size={20} color="#0B6B3A" />
              <span className="investment-energy-name">DPK</span>
            </div>
            <div className="investment-energy-cell">
              <AviationFuelIcon size={20} color="#0B6B3A" />
              <span className="investment-energy-name">ATK</span>
            </div>
            <div className="investment-energy-cell">
              <GasCylinderIcon size={20} color="#0B6B3A" />
              <span className="investment-energy-name">LPG</span>
            </div>
          </div>
        </div>

        {/* Bottom: Built for Commercial Scale Panel */}
        <div className="investment-scale-panel">
          <div className="investment-scale-left">
            <h3 className="investment-scale-title">Built for Commercial Scale</h3>
            <p className="investment-scale-body">
              Our downstream strategy focuses on bulk B2B deliveries, commercial supply agreements, and strategic distribution relationships across Nigeria&apos;s industrial and commercial markets.
            </p>
          </div>
          <div className="investment-scale-divider" aria-hidden="true" />
          <div className="investment-scale-right">
            <div className="investment-scale-icon-box">
              <CommercialScaleIcon size={26} color="#014924" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
