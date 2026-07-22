import React, { useState } from 'react';
import { siteConfig } from '../../../config/siteConfig';
import './Logo.css';

const logoUrl = process.env.PUBLIC_URL + '/image.png';

function Logo({ href = '#home', compact, twoLine }) {
  const [imgError, setImgError] = useState(false);
  const { brand } = siteConfig;
  const showTagline = twoLine !== false && brand.tagline;

  return (
    <a href={href} className={`logo ${compact ? 'logo--compact' : ''} ${showTagline ? 'logo--two-line' : ''}`} aria-label={`${brand.name} home`}>
      {!imgError && (
        <img
          src={logoUrl}
          alt={brand.name}
          className="logo__img"
          onError={() => setImgError(true)}
        />
      )}
      {/* <span className="logo__text-wrap">
        <span className="logo__text">{brand.name}</span>
        {showTagline && <span className="logo__tagline">{brand.tagline}</span>}
      </span> */}
    </a>
  );
}

export default Logo;
