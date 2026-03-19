import React from 'react';
import { siteConfig } from '../../../config/siteConfig';
import './AboutBlock.css';

function AboutBlock() {
  const about = siteConfig.about || {};
  const intro = about.intro || '';
  const points = about.points || [];
  const image = about.image || 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80';
  const imageAlt = about.imageAlt || 'Our team at work';

  return (
    <div className="about-block">
      <div className="about-block__card">
        <div className="about-block__main">
          <div className="about-block__content">
            <p className="about-block__lead">
              {intro.startsWith('BrandingLift') ? (
                <>
                  <strong>BrandingLift</strong>
                  {intro.slice('BrandingLift'.length)}
                </>
              ) : (
                intro
              )}
            </p>
            <ul className="about-block__list">
              {points.map((text, i) => (
                <li key={i} className="about-block__item">
                  <span className="about-block__mark" aria-hidden />
                  <span className="about-block__item-text">{text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="about-block__media">
            <img src={image} alt={imageAlt} className="about-block__image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutBlock;
