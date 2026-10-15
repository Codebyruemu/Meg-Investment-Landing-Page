import React from 'react';
import Link from 'next/link';

interface RoutePlaceholderProps {
  title: string;
  code: string;
  description: string;
}

export default function RoutePlaceholder({ title, code, description }: RoutePlaceholderProps) {
  return (
    <div className="container section-wrapper" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <span className="section-tag" style={{ marginBottom: '16px' }}>{code}</span>
      <h1 style={{ fontSize: '32px', marginBottom: '16px', color: 'var(--color-primary-dark)' }}>{title}</h1>
      <p style={{ maxWidth: '520px', marginBottom: '32px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
        {description}
      </p>
      <Link href="/" className="btn btn-primary">
        Return to Home (L-01)
      </Link>
    </div>
  );
}
