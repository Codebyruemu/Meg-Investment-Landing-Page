import React from 'react';
import { Product } from '@/lib/api/types';
import PlanCard from './PlanCard';
import { PlanCardSkeleton } from './PlanCardSkeleton';

interface PlansProps {
  products: Product[] | null;
  isLoading?: boolean;
  hasError?: boolean;
}

export default function Plans({ products, isLoading = false, hasError = false }: PlansProps) {
  // SPEC REQUIREMENT: "If /public/products fails, hide the Plans section. Do NOT show a public API error message."
  if (hasError || products === null) {
    return null;
  }

  // SPEC REQUIREMENT: "Loading state: Show exactly three skeleton plan cards."
  if (isLoading) {
    return (
      <section className="section-wrapper" id="plans" style={{ backgroundColor: 'var(--color-bg-main)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Opportunities</span>
            <h2 className="section-title">Investment Plans</h2>
            <p className="section-subtitle">
              Asset-backed commercial offerings structured for predictable returns.
            </p>
          </div>

          <div className="plans-grid">
            <PlanCardSkeleton />
            <PlanCardSkeleton />
            <PlanCardSkeleton />
          </div>
        </div>
      </section>
    );
  }

  // SPEC REQUIREMENT: "Do not render products whose status is not active."
  const activeProducts = products.filter((p) => p.status === 'active');

  // If after filtering active products there are none, hide cleanly
  if (activeProducts.length === 0) {
    return null;
  }

  return (
    <section className="section-wrapper" id="plans" style={{ backgroundColor: 'var(--color-bg-main)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Opportunities</span>
          <h2 className="section-title">Investment Plans</h2>
          <p className="section-subtitle">
            Curated, asset-backed commercial debt instruments structured for capital preservation and reliable distribution yields.
          </p>
        </div>

        <div className="plans-grid">
          {activeProducts.map((product) => (
            <PlanCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
