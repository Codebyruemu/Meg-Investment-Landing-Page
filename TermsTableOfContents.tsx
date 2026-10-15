"use client";

import { useState, useEffect } from "react";
import { Terms } from "@/lib/api/types";

interface TermsTableOfContentsProps {
  terms: Terms[];
}

export default function TermsTableOfContents({
  terms,
}: TermsTableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Use Intersection Observer for better scroll detection
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe all term sections
    terms.forEach((term) => {
      const element = document.getElementById(term.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [terms]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
      // Update active immediately for better UX
      setTimeout(() => setActiveId(id), 100);
    }
  };

  return (
    <aside className="terms-toc">
      <nav className="terms-toc-nav">
        <h3 className="terms-toc-title">ON THIS PAGE YOU WILL FIND</h3>
        <ul className="terms-toc-list">
          {terms.map((term) => (
            <li key={term.id} className="terms-toc-item">
              <button
                onClick={() => scrollToSection(term.id)}
                className={`terms-toc-link ${activeId === term.id ? "active" : ""}`}
                aria-current={activeId === term.id ? "page" : undefined}
              >
                {term.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
