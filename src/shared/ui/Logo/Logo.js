'use client';

import { useState } from 'react';
import { siteConfig } from '@/lib/config/siteConfig';
import NavLink from '@/shared/ui/NavLink/NavLink';
import './Logo.css';

const logoUrl = '/image.png';

function Logo({ href = '#home', compact, twoLine }) {
  const [imgError, setImgError] = useState(false);
  const { brand } = siteConfig;
  const showTagline = twoLine !== false && brand.tagline;

  return (
    <NavLink
      href={href}
      className={`logo ${compact ? 'logo--compact' : ''} ${showTagline ? 'logo--two-line' : ''}`}
      aria-label={`${brand.name} home`}
    >
      {!imgError && (
        <img
          src={logoUrl}
          alt={brand.name}
          className="logo__img"
          onError={() => setImgError(true)}
        />
      )}
    </NavLink>
  );
}

export default Logo;
