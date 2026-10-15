import React from "react";
import Link from "next/link";
import "./QuestionCTA.css";

export default function QuestionCTA() {
  return (
    <section className="question-cta-section">
      <div className="container question-cta-container">
        <div className="question-cta-content">
          <p className="question-cta-subtitle">Have any question !</p>
          <h2 className="question-cta-title">
            Don't hesitate to contact us any time.
          </h2>
        </div>
        <Link href="/contact" className="question-cta-button">
          Contact Us
        </Link>
      </div>
    </section>
  );
}
