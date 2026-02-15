import React from 'react';
import { siteConfig } from '../../../config/siteConfig';
import Button from '../../ui/Button/Button';
import { IconArrowLeft, IconArrowRight } from '../../ui/Icons/Icons';
import './HeroSection.css';

function HeroSection() {
  const { hero, cta } = siteConfig;

  return (
    <section id="home" className="hero">
      <div className="hero__bg" aria-hidden />
      <div className="hero__overlay" />
      <button type="button" className="hero__arrow hero__arrow--left" aria-label="Previous slide">
        <IconArrowLeft />
      </button>
      <button type="button" className="hero__arrow hero__arrow--right" aria-label="Next slide">
        <IconArrowRight />
      </button>
      <div className="hero__content">
        <div className="hero__tags">
          {hero.tags.map((tag) => (
            <span key={tag} className="hero__tag">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="hero__title">{hero.title}</h1>
        <p className="hero__subtitle">{hero.subtitle}</p>
        <Button href="#contact" variant="secondary" className="hero__cta">
          {cta.hero}
        </Button>
      </div>
      <div className="hero__dots" aria-hidden>
        <span className="hero__dot hero__dot--active" />
        <span className="hero__dot" />
        <span className="hero__dot" />
      </div>
    </section>
  );
}

export default HeroSection;
