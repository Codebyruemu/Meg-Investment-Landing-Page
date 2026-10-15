import React from 'react';

export function PlanCardSkeleton() {
  return (
    <div className="skeleton-card" aria-hidden="true">
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
        <div className="skeleton-shimmer" style={{ width: '65%', height: '26px' }} />
        <div className="skeleton-shimmer" style={{ width: '25%', height: '22px', borderRadius: '9999px' }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', padding: '24px 0', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)', marginBottom: '24px' }}>
        <div>
          <div className="skeleton-shimmer" style={{ width: '40%', height: '12px', marginBottom: '8px' }} />
          <div className="skeleton-shimmer" style={{ width: '80%', height: '24px' }} />
        </div>
        <div>
          <div className="skeleton-shimmer" style={{ width: '40%', height: '12px', marginBottom: '8px' }} />
          <div className="skeleton-shimmer" style={{ width: '80%', height: '24px' }} />
        </div>
      </div>

      <div style={{ marginBottom: '28px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          <div className="skeleton-shimmer" style={{ width: '30%', height: '12px' }} />
          <div className="skeleton-shimmer" style={{ width: '20%', height: '12px' }} />
        </div>
        <div className="skeleton-shimmer" style={{ width: '100%', height: '8px', borderRadius: '9999px' }} />
      </div>

      <div className="skeleton-shimmer" style={{ width: '100%', height: '46px', marginTop: 'auto', borderRadius: '10px' }} />
    </div>
  );
}
