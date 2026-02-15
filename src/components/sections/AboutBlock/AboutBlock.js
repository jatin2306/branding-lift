import React from 'react';
import { siteConfig } from '../../../config/siteConfig';
import './AboutBlock.css';

const ABOUT_IMAGE = 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80';

function AboutBlock() {
  const { brand } = siteConfig;

  return (
    <div className="about-block">
      <div className="about-block__text">
        <p>
          <strong>{brand.name}</strong> is a leading brand and digital agency that helps businesses
          boost their online presence. We combine strategy, design, and digital to build brands that lift.
        </p>
        <p>
          From identity and web to content and campaigns, we work with you to create a clear,
          consistent brand that connects with your audience and grows your business worldwide.
        </p>
      </div>
      <div className="about-block__visual">
        <img
          src={ABOUT_IMAGE}
          alt="Team member at work"
          className="about-block__image"
        />
      </div>
    </div>
  );
}

export default AboutBlock;
