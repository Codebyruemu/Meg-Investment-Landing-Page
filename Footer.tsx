"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { PublicSettings } from "@/lib/api/types";
import { MesegLogo } from "../common/Icons";

interface FooterProps {
  settings: PublicSettings | null;
}

export default function Footer({ settings }: FooterProps) {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  if (
    ["/", "/about", "/contact", "/terms", "/investment-opportunities"].includes(
      pathname,
    )
  ) {
    return (
      <footer
        className="contact-footer site-footer"
        id="main-footer"
        aria-label="Site Footer"
      >
        <div className="container contact-container">
          <div className="contact-footer-top">
            {/* Logo */}
            <div className="contact-footer-brand">
              <Link
                href="/"
                aria-label="Meseg Capital Home"
                style={{ display: "inline-block" }}
              >
                <Image
                  src="/images/meseg-logo-footer.png"
                  alt="MESEG CAPITAL INVESTMENT LTD."
                  width={118}
                  height={40}
                  style={{ height: "36px", width: "auto", display: "block" }}
                />
              </Link>
            </div>

            {/* Column 1: Company */}
            <div className="contact-footer-col">
              <h3 className="contact-footer-title">Company</h3>
              <ul className="contact-footer-list">
                <li>
                  <Link href="/about" className="contact-footer-link">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/investment-opportunities"
                    className="contact-footer-link"
                  >
                    Investments
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Invest */}
            <div className="contact-footer-col">
              <h3 className="contact-footer-title">Invest</h3>
              <ul className="contact-footer-list">
                <li>
                  <Link
                    href="/investment-opportunities"
                    className="contact-footer-link"
                  >
                    Investment Opportunities
                  </Link>
                </li>
                <li>
                  <Link href="/how-it-works" className="contact-footer-link">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="contact-footer-link">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Invest (Repeated heading in source reference) */}
            <div className="contact-footer-col contact-footer-col-contact">
              <h3 className="contact-footer-title">Contact</h3>
              <ul className="contact-footer-list">
                <li className="contact-footer-contact-item">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <a
                    href="mailto:info@mesegcapital.com"
                    className="contact-footer-link"
                  >
                    info@mesegcapital.com
                  </a>
                </li>
                <li className="contact-footer-contact-item">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <a href="tel:+2348061486142" className="contact-footer-link">
                    +234 8061486142
                  </a>
                </li>
                <li className="contact-footer-contact-item">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>
                    Plot 4, jamiu Oloto St, Magodo phase 1, isheri Lagos State
                  </span>
                </li>
              </ul>
            </div>

            {/* Social Icons (Order: LinkedIn, X, Instagram) */}
            <div className="contact-footer-socials">
              <a
                href={
                  settings?.socials?.linkedin ||
                  "https://linkedin.com/company/mesegcapital"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="contact-footer-social-link"
                aria-label="Follow Meseg Capital on LinkedIn"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
                </svg>
              </a>
              <a
                href={settings?.socials?.x || "https://x.com/mesegcapital"}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-footer-social-link"
                aria-label="Follow Meseg Capital on X"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href={
                  settings?.socials?.instagram ||
                  "https://instagram.com/mesegcapital"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="contact-footer-social-link"
                aria-label="Follow Meseg Capital on Instagram"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          <hr className="contact-footer-divider" />

          {/* Bottom Row */}
          <div className="contact-footer-bottom">
            <div className="contact-footer-copyright">
              © {currentYear} MESEG Capital Investment Ltd. All rights reserved.
            </div>
            <div className="contact-footer-legal">
              <Link href="/privacy" className="contact-footer-legal-link">
                Privacy Policy
              </Link>
              <span className="contact-footer-legal-pipe">|</span>
              <Link href="/terms" className="contact-footer-legal-link">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="site-footer" id="main-footer">
      <div className="container">
        <div className="footer-top-grid">
          {/* Column 1: Brand & Regulatory Identifiers */}
          <div>
            <Link
              href="/"
              className="footer-brand-logo"
              aria-label="Meseg Capital Home"
              style={{ display: "inline-block", marginBottom: "16px" }}
            >
              <MesegLogo />
            </Link>
            <p
              style={{
                color: "#8C9E98",
                fontSize: "13.5px",
                lineHeight: 1.6,
                maxWidth: "300px",
                marginBottom: "16px",
              }}
            >
              Disciplined, asset-backed wealth creation. Transparent investment
              structures engineered for sustainable returns.
            </p>
            {settings?.rc_number && (
              <p
                style={{
                  fontSize: "12.5px",
                  color: "#6C7F78",
                  marginBottom: "4px",
                }}
              >
                <strong style={{ color: "#A3B5AF" }}>Incorporation:</strong>{" "}
                {settings.rc_number}
              </p>
            )}
            {settings?.sec_registration_number && (
              <p style={{ fontSize: "12.5px", color: "#6C7F78" }}>
                <strong style={{ color: "#A3B5AF" }}>
                  Regulatory Oversight:
                </strong>{" "}
                {settings.sec_registration_number}
              </p>
            )}
          </div>

          {/* Column 2: Company Navigation */}
          <div>
            <h3 className="footer-col-title">Company</h3>
            <ul className="footer-nav-list">
              <li>
                <Link href="/about" className="footer-nav-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#opportunities" className="footer-nav-link">
                  Investment Opportunities
                </Link>
              </li>
              <li>
                <Link href="/contact" className="footer-nav-link">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Invest Navigation */}
          <div>
            <h3 className="footer-col-title">Invest</h3>
            <ul className="footer-nav-list">
              <li>
                <Link href="#opportunities" className="footer-nav-link">
                  Investment Opportunities
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="footer-nav-link">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/faq" className="footer-nav-link">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Socials */}
          <div>
            <h3 className="footer-col-title">Contact & Registered Office</h3>
            <div className="footer-contact-item">
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                aria-hidden="true"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <a
                href={`mailto:${settings?.support_email || "support@mesegcapital.com"}`}
                className="footer-nav-link"
              >
                {settings?.support_email || "support@mesegcapital.com"}
              </a>
            </div>

            <div className="footer-contact-item">
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <a
                href={`tel:${settings?.support_phone || ""}`}
                className="footer-nav-link"
              >
                {settings?.support_phone || "+234 1 888 3490"}
              </a>
            </div>

            {settings?.whatsapp_url && (
              <div className="footer-contact-item">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  aria-hidden="true"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                <a
                  href={settings.whatsapp_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-nav-link"
                >
                  WhatsApp Support
                </a>
              </div>
            )}

            {settings?.address && (
              <p
                style={{
                  fontSize: "12.5px",
                  color: "#6C7F78",
                  marginTop: "10px",
                  lineHeight: 1.5,
                }}
              >
                {settings.address}
              </p>
            )}

            {/* Social Icons */}
            {settings?.socials && (
              <div className="footer-social-row">
                {settings.socials.x && (
                  <a
                    href={settings.socials.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon-btn"
                    aria-label="Follow Meseg Capital on X"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                )}
                {settings.socials.instagram && (
                  <a
                    href={settings.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon-btn"
                    aria-label="Follow Meseg Capital on Instagram"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </a>
                )}
                {settings.socials.facebook && (
                  <a
                    href={settings.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon-btn"
                    aria-label="Follow Meseg Capital on Facebook"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                )}
                {settings.socials.linkedin && (
                  <a
                    href={settings.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon-btn"
                    aria-label="Follow Meseg Capital on LinkedIn"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
                    </svg>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        <hr className="footer-divider" />

        {/* Bottom Bar */}
        <div className="footer-bottom-row">
          <div>
            © {currentYear} Meseg Capital Investment Ltd. All rights reserved.
          </div>

          <div className="footer-legal-links">
            <Link href="/terms" className="footer-legal-link">
              Terms & Refund Policy
            </Link>
            <Link href="/privacy" className="footer-legal-link">
              Privacy
            </Link>
            <Link href="/risk" className="footer-legal-link">
              Risk Disclosure
            </Link>
          </div>
        </div>

        <div className="footer-reg-info">
          {settings?.rc_number && (
            <span>
              Meseg Capital Investment Ltd is registered under the Corporate
              Affairs Commission ({settings.rc_number}).{" "}
            </span>
          )}
          <span>
            Investments carry risk of loss. Past performance is not indicative
            of future returns. Read all offering documentation and risk
            disclosures before allocating capital.
          </span>
        </div>
      </div>
    </footer>
  );
}
