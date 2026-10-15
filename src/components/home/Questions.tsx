'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { faqItems } from '@/content/home-content';

export default function Questions() {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'faq-1': true, // default first item open
  });

  const toggleItem = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="section-wrapper" id="questions">
      <div className="container">
        <div className="section-header centered">
          <span className="section-tag">Frequently Asked Questions</span>
          <h2 className="section-title">Questions</h2>
          <p className="section-subtitle">
            Essential information regarding investment operations, security, and distribution returns.
          </p>
        </div>

        {/* Clean editorial accordion with smooth 240ms transition and rotating chevron */}
        <div className="faq-accordion-container">
          {faqItems.map((item) => {
            const isOpen = !!openIds[item.id];
            return (
              <div 
                key={item.id} 
                className={`faq-row ${isOpen ? 'is-open' : ''}`}
              >
                <button
                  type="button"
                  className="faq-trigger"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <span>{item.question}</span>
                  <span className={`faq-icon-toggle ${isOpen ? 'is-rotated' : ''}`} aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>
                <div className="faq-content-wrapper">
                  <div 
                    id={`faq-answer-${item.id}`} 
                    className="faq-content-panel"
                    role="region"
                  >
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* See all questions button routing to L-07 (/faq) */}
        <div className="faq-footer-action">
          <Link href="/faq" className="btn btn-secondary">
            See all questions
          </Link>
        </div>
      </div>
    </section>
  );
}
