import React from 'react';
import { siteConfig } from '../../../config/siteConfig';
import './Logo.css';

function Logo({ href = '#home', compact, twoLine }) {
  const { brand } = siteConfig;
  const showTagline = twoLine !== false && brand.tagline;

  return (
    <a href={href} className={`logo ${compact ? 'logo--compact' : ''} ${showTagline ? 'logo--two-line' : ''}`} aria-label={`${brand.name} home`}>
      <span className="logo__mark">bl</span>
      <span className="logo__text-wrap">
        <span className="logo__text">{brand.name}</span>
        {showTagline && <span className="logo__tagline">{brand.tagline}</span>}
      </span>
    </a>
  );
}

export default Logo;
