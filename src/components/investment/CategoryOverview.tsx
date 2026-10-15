import React from 'react';
import Link from 'next/link';
import {
  BarrelIcon,
  TruckIcon,
  SproutIcon,
  FishIcon,
  HouseIcon,
  GrowthChartIcon,
} from './InvestmentIcons';

interface CategoryCardItem {
  id: string;
  anchor: string;
  name: string;
  description: string;
  icon: React.ReactNode;
}

const CATEGORIES: CategoryCardItem[] = [
  {
    id: 'oil-and-gas',
    anchor: '#oil-and-gas',
    name: 'Oil & Gas Distribution',
    description: 'Wholesale sourcing, sales, and commercial distribution of refined petroleum products.',
    icon: <BarrelIcon size={22} color="#0B6B3A" />,
  },
  {
    id: 'logistics',
    anchor: '#logistics',
    name: 'Logistics & Supply Chain Management',
    description: 'Long-haul transportation, regional freight movement, and dependable commercial distribution.',
    icon: <TruckIcon size={22} color="#0B6B3A" />,
  },
  {
    id: 'poultry',
    anchor: '#poultry',
    name: 'Poultry & Agricultural Logistics',
    description: 'Cold-chain distribution and wholesale supply of processed agricultural products.',
    icon: <SproutIcon size={22} color="#0B6B3A" />,
  },
  {
    id: 'fish-farm',
    anchor: '#fish-farm',
    name: 'Fish Farm Settlement',
    description: 'Development support and integrated aquaculture management.',
    icon: <FishIcon size={22} color="#0B6B3A" />,
  },
  {
    id: 'real-estate',
    anchor: '#real-estate',
    name: 'Real Estate Services',
    description: 'Property acquisition, brokerage, sales, and real estate investment advisory.',
    icon: <HouseIcon size={22} color="#0B6B3A" />,
  },
  {
    id: 'business-development',
    anchor: '#business-development',
    name: 'Business Development',
    description: 'Strategic facilitation, public-sector partnerships, capacity building, and commercial development.',
    icon: <GrowthChartIcon size={22} color="#0B6B3A" />,
  },
];

export default function CategoryOverview() {
  return (
    <section className="investment-categories-section" aria-label="Services Overview">
      <div className="container investment-container">
        <div className="investment-categories-header">
          <p className="investment-categories-eyebrow">SERVICES OVERVIEW</p>
          <h2 className="investment-categories-title">Our Service Categories</h2>
        </div>

        <div className="investment-categories-grid">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={cat.anchor}
              className="investment-category-card"
              aria-label={`Jump to ${cat.name}`}
            >
              <div className="investment-cat-icon-box">{cat.icon}</div>
              <h3 className="investment-cat-name">{cat.name}</h3>
              <p className="investment-cat-desc">{cat.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
