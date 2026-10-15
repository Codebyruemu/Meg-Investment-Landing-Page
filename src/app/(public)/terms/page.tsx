import TermsHero from "@/components/legal/TermsHero";
import { mockTerms } from "@/lib/api/mock-data";
import TermsTableOfContents from "@/components/legal/TermsTableOfContents";

export default function TermsPage() {
  return (
    <>
      <TermsHero />

      <section className="terms-content-section">
        <div className="container">
          <div className="terms-introduction">
            <p className="terms-intro-paragraph">
              These Service Terms establish the fundamental conditions and
              provisions governing membership, platform access, investment
              participation, payment processing, withdrawal procedures, referral
              activities, and ancillary services administered through the MEIM
              Investment Management Platform operated by Meseg Capital
              Investment Ltd.
            </p>
          </div>

          <div className="terms-wrapper">
            <TermsTableOfContents terms={mockTerms} />

            <div className="terms-list">
              {mockTerms.map((term) => (
                <article key={term.id} className="terms-item" id={term.id}>
                  <h2 className="terms-item-title">{term.title}</h2>
                  <div className="terms-item-text">
                    {term.text.split("\n\n").map((paragraph, idx) => (
                      <p key={idx}>{paragraph.trim()}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
