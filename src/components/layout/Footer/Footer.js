import React from 'react';
import { siteConfig } from '../../../config/siteConfig';
import {
  IconEmail,
  IconPhone,
  IconFacebook,
  IconLinkedIn,
  IconInstagram,
} from '../../ui/Icons/Icons';
import './Footer.css';

const socialIcons = {
  facebook: IconFacebook,
  linkedin: IconLinkedIn,
  instagram: IconInstagram,
};

function Footer() {
  const { brand, contact, social } = siteConfig;

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="footer__name">{brand.name}</span>
          {brand.tagline && <span className="footer__tagline">{brand.tagline}</span>}
        </div>
        <div className="footer__contact">
          {contact.email && (
            <a href={`mailto:${contact.email}`} className="footer__link">
              <IconEmail className="footer__icon" />
              {contact.email}
            </a>
          )}
          {contact.phone2 && (
            <a href={`tel:${contact.phone2.replace(/\s/g, '')}`} className="footer__link">
              <IconPhone className="footer__icon" />
              {contact.phone2}
              {contact.phone2Label && ` (${contact.phone2Label})`}
            </a>
          )}
        </div>
        <div className="footer__social">
          <span className="footer__follow">Follow us:</span>
          {social?.map((item) => {
            const Icon = socialIcons[item.icon];
            return Icon ? (
              <a
                key={item.icon}
                href={item.url}
                className="footer__social-link"
                aria-label={item.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon />
              </a>
            ) : null;
          })}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
