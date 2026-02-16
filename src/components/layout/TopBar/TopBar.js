import React from 'react';
import { siteConfig } from '../../../config/siteConfig';
import {
  IconEmail,
  IconPhone,
  IconFacebook,
  IconTwitter,
  IconLinkedIn,
  IconInstagram,
} from '../../ui/Icons/Icons';
import './TopBar.css';

const socialIcons = {
  facebook: IconFacebook,
  twitter: IconTwitter,
  linkedin: IconLinkedIn,
  instagram: IconInstagram,
};

function TopBar() {
  const { contact, social } = siteConfig;

  return (
    <div className="topbar">
      <div className="topbar__inner">
        <div className="topbar__contact">
          <a href={`mailto:${contact.email}`} className="topbar__link">
            <IconEmail className="topbar__icon" />
            {contact.email}
          </a>
        
          {contact.phone2 && (
            <a href={`tel:${contact.phone2.replace(/\s/g, '')}`} className="topbar__link">
              <IconPhone className="topbar__icon" />
              {contact.phone2} ({contact.phone2Label})
            </a>
          )}
        </div>
        <div className="topbar__social">
          <span className="topbar__follow">Follow us:</span>
          {social?.map((item) => {
            const Icon = socialIcons[item.icon];
            return Icon ? (
              <a
                key={item.icon}
                href={item.url}
                className="topbar__social-link"
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
    </div>
  );
}

export default TopBar;
