import "./AboutHeroImageCollage.css";

export default function AboutHeroImageCollage() {
  // Sample images from public folder for testing
  const backImage = "/images/cta-refinery-tanks.jpg";
  const frontImage = "/images/about/about-partnership-cta.jpg";

  return (
    <section className="hero-collage">
      <div className="hero-collage__canvas">
        {/* Back image - upper right layer */}
        <div className="hero-collage__image hero-collage__image--back">
          <img
            src={backImage}
            alt="Company building and operations"
            fetchPriority="high"
          />
        </div>

        {/* Blue decorative accent layer */}
        <div className="hero-collage__accent" aria-hidden="true" />

        {/* Front image - lower left layer */}
        <div className="hero-collage__image hero-collage__image--front">
          <img
            src={frontImage}
            alt="Professional partnership and collaboration"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
