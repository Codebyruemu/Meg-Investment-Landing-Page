import React from 'react';
import Link from 'next/link';
import { Product } from '@/lib/api/types';
import { formatKoboToNaira, calculateCapacityPercentage } from '@/lib/formatters';

interface PlanCardProps {
  product: Product;
}

export default function PlanCard({ product }: PlanCardProps) {
  const capacityPercent = calculateCapacityPercentage(product.capacity_used, product.capacity_limit);

  return (
    <article className="plan-card" aria-label={`Investment Plan: ${product.name}`}>
      <div className="plan-header">
        <h3 className="plan-name">
          {product.name}
        </h3>
        {product.is_full ? (
          <span className="badge-subscribed">Fully subscribed</span>
        ) : (
          <span className="badge-active">Active</span>
        )}
      </div>

      <div className="plan-metrics-grid">
        <div className="metric-item">
          <span className="metric-label">Target Rate</span>
          <span className="metric-val-rate">
            {`${product.distribution_rate}%`}
          </span>
          <span className="metric-val-sub">
            {`${product.distribution_frequency} payout`}
          </span>
        </div>

        <div className="metric-item">
          <span className="metric-label">Duration</span>
          <span className="metric-val-num">
            {`${product.duration_months} Months`}
          </span>
          <span className="metric-val-sub">Fixed tenure</span>
        </div>

        <div className="metric-item" style={{ gridColumn: 'span 2' }}>
          <span className="metric-label">Minimum Investment</span>
          <span className="metric-val-num">
            {formatKoboToNaira(product.min_amount)}
          </span>
        </div>
      </div>

      {/* Capacity Bar */}
      <div className="plan-capacity-block">
        <div className="capacity-labels">
          <span style={{ color: 'var(--color-text-secondary)' }}>Capacity Filled</span>
          <span style={{ color: product.is_full ? 'var(--color-accent-amber)' : 'var(--color-brand)' }}>
            {`${capacityPercent}%`}
          </span>
        </div>
        <div className="capacity-bar-track">
          <div 
            className={`capacity-bar-fill ${product.is_full ? 'is-full' : ''}`}
            style={{ width: `${capacityPercent}%` }}
            role="progressbar"
            aria-valuenow={capacityPercent}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
      </div>

      {/* View plan CTA: routes to L-04 (/plans/[slug]). Full products can still be clicked */}
      <div className="plan-card-cta">
        <Link 
          href={`/plans/${product.slug}`} 
          className="btn btn-secondary" 
          style={{ width: '100%' }}
        >
          View plan
        </Link>
      </div>
    </article>
  );
}
