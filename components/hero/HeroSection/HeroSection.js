'use client';

import { siteConfig } from '../../../config/siteConfig';
import './HeroSection.css';

function HeroSection() {
  const { hero } = siteConfig;
  const image = hero.images?.[0] ?? '/slider/hero.png';

  return (
    <section id="home" className="hero">
      <img
        src={image}
        alt={hero.title || 'BrandingLift digital solutions banner'}
        className="hero__image"
      />
    </section>
  );
}

export default HeroSection;
