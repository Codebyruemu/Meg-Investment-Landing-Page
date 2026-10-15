'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import './Header.css';

export default function Header() {
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount in case page is already scrolled
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Lock body scroll when mobile nav is open
  useEffect(() => {
    if (isMobileNavOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileNavOpen]);

  const closeMobileNav = () => setIsMobileNavOpen(false);

  return (
    <>
      <header className={`site-header ${isSticky ? 'is-sticky' : ''}`} id="main-header">
        <div className="container header-container">
          {/* Logo and Company Name Section */}
          <Link href="/" className="header-branding" aria-label="Meseg Capital Home">
            <div className="header-logo-wrapper">
              <Image
                src="/images/Meseg-logo-2.png"
                alt="Meseg Capital Logo"
                width={48}
                height={48}
                className="header-logo-image"
                priority
              />
            </div>
            <div className="company-name">
              <div className="company-name-primary">Meseg Capital</div>
              <div className="company-name-secondary">Investment</div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="header-nav-desktop" aria-label="Main Navigation">
            <Link href="/" className={`nav-link ${pathname === '/' ? 'is-active' : ''}`}>
              Home
            </Link>
            <Link href="/about" className={`nav-link ${pathname === '/about' ? 'is-active' : ''}`}>
              About Us
            </Link>
            <Link href="/investment-opportunities" className={`nav-link ${pathname === '/investment-opportunities' ? 'is-active' : ''}`}>
              Investment Opportunities
            </Link>
            <Link href="/contact" className={`nav-link ${pathname === '/contact' ? 'is-active' : ''}`}>
              Contact
            </Link>
          </nav>

          {/* Desktop CTA actions */}
          <div className="header-actions-desktop">
            <Link href={pathname === "/about" ? "#partnership-cta" : "#get-started"} className="mesegco-btn-brand">
              <span>Get Started</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>

          {/* Mobile Hamburger Menu Toggle Button */}
          <button
            type="button"
            className="hamburger-btn"
            onClick={() => setIsMobileNavOpen(true)}
            aria-label="Open mobile navigation menu"
            aria-expanded={isMobileNavOpen}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      {/* Full-height Mobile Navigation Panel & Backdrop */}
      <div 
        className={`mobile-nav-overlay ${isMobileNavOpen ? 'is-open' : ''}`}
        onClick={closeMobileNav}
        aria-hidden="true"
      />
      
      <div 
        className={`mobile-nav-panel ${isMobileNavOpen ? 'is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Panel"
      >
        <div className="mobile-nav-header">
          <Image
            src="/images/Meseg-logo-2.png"
            alt="Meseg Capital Logo"
            width={40}
            height={40}
            className="mobile-logo-image"
          />
          <button 
            type="button" 
            className="mobile-close-btn" 
            onClick={closeMobileNav}
            aria-label="Close navigation menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <nav className="mobile-nav-links" aria-label="Mobile Navigation">
          <Link href="/" className={`mobile-nav-link ${pathname === '/' ? 'is-active' : ''}`} onClick={closeMobileNav}>
            Home
          </Link>
          <Link href="/about" className={`mobile-nav-link ${pathname === '/about' ? 'is-active' : ''}`} onClick={closeMobileNav}>
            About Us
          </Link>
          <Link href="/investment-opportunities" className={`mobile-nav-link ${pathname === '/investment-opportunities' ? 'is-active' : ''}`} onClick={closeMobileNav}>
            Investment Opportunities
          </Link>
          <Link href="/contact" className={`mobile-nav-link ${pathname === '/contact' ? 'is-active' : ''}`} onClick={closeMobileNav}>
            Contact
          </Link>
        </nav>

        <div className="mobile-nav-actions">
          <Link href={pathname === "/about" ? "#partnership-cta" : "#get-started"} className="mesegco-btn-brand" style={{ width: '100%', justifyContent: 'center' }} onClick={closeMobileNav}>
            <span>Get Started</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
}
