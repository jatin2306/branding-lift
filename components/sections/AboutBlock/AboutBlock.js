import { siteConfig } from '@/config/siteConfig';
import Button from '@/components/ui/Button/Button';
import './AboutBlock.css';

export default function AboutBlock() {
  const about = siteConfig.about || {};
  const {
    tagline,
    intro = [],
    whoWeAre = [],
    mission,
    vision,
    whatWeDoIntro,
    whatWeDo = [],
    whyChooseUs = [],
    industriesIntro,
    industries = [],
    values = [],
    partnerTitle,
    partnerText,
    cta = {},
    image,
    imageAlt,
  } = about;

  return (
    <div className="about-block">
      <div className="about-block__intro-card">
        <div className="about-block__intro-content">
          {tagline && <p className="about-block__tagline">{tagline}</p>}
          {intro.map((paragraph, i) => (
            <p key={i} className="about-block__paragraph">{paragraph}</p>
          ))}
        </div>
        {image && (
          <div className="about-block__intro-media">
            <img src={image} alt={imageAlt || 'BrandingLift team'} className="about-block__image" />
          </div>
        )}
      </div>

      <section className="about-block__section" aria-labelledby="about-who-we-are">
        <h3 id="about-who-we-are" className="about-block__heading">Who We Are</h3>
        {whoWeAre.map((paragraph, i) => (
          <p key={i} className="about-block__paragraph">{paragraph}</p>
        ))}
      </section>

      <div className="about-block__mv-grid">
        <section className="about-block__mv-card" aria-labelledby="about-mission">
          <h3 id="about-mission" className="about-block__heading">Our Mission</h3>
          <p className="about-block__paragraph">{mission}</p>
        </section>
        <section className="about-block__mv-card" aria-labelledby="about-vision">
          <h3 id="about-vision" className="about-block__heading">Our Vision</h3>
          <p className="about-block__paragraph">{vision}</p>
        </section>
      </div>

      <section className="about-block__section" aria-labelledby="about-what-we-do">
        <h3 id="about-what-we-do" className="about-block__heading">What We Do</h3>
        {whatWeDoIntro && <p className="about-block__paragraph about-block__paragraph--lead">{whatWeDoIntro}</p>}
        <div className="about-block__card-grid">
          {whatWeDo.map((item) => (
            <article key={item.title} className="about-block__mini-card">
              <h4 className="about-block__mini-title">{item.title}</h4>
              <p className="about-block__mini-text">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-block__section" aria-labelledby="about-why-us">
        <h3 id="about-why-us" className="about-block__heading">Why Businesses Choose BrandingLift</h3>
        <div className="about-block__card-grid about-block__card-grid--three">
          {whyChooseUs.map((item) => (
            <article key={item.title} className="about-block__mini-card about-block__mini-card--accent">
              <h4 className="about-block__mini-title">{item.title}</h4>
              <p className="about-block__mini-text">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-block__section" aria-labelledby="about-industries">
        <h3 id="about-industries" className="about-block__heading">Industries We Serve</h3>
        {industriesIntro && <p className="about-block__paragraph">{industriesIntro}</p>}
        <ul className="about-block__tags">
          {industries.map((industry) => (
            <li key={industry} className="about-block__tag">{industry}</li>
          ))}
        </ul>
      </section>

      <section className="about-block__section" aria-labelledby="about-values">
        <h3 id="about-values" className="about-block__heading">Our Values</h3>
        <div className="about-block__values-grid">
          {values.map((item) => (
            <article key={item.title} className="about-block__value-card">
              <h4 className="about-block__value-title">{item.title}</h4>
              <p className="about-block__mini-text">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-block__partner" aria-labelledby="about-partner">
        <h3 id="about-partner" className="about-block__partner-title">{partnerTitle}</h3>
        <p className="about-block__paragraph">{partnerText}</p>
      </section>

      {cta.title && (
        <section className="about-block__cta" aria-labelledby="about-cta">
          <h3 id="about-cta" className="about-block__cta-title">{cta.title}</h3>
          {cta.subtitle && <p className="about-block__cta-subtitle">{cta.subtitle}</p>}
          {cta.tagline && <p className="about-block__cta-tagline">{cta.tagline}</p>}
          <Button href="/contact" variant="primary" className="about-block__cta-btn">
            {cta.button || 'Contact us'}
          </Button>
        </section>
      )}
    </div>
  );
}
