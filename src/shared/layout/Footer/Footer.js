import { siteConfig } from '@/lib/config/siteConfig';
import NavLink from '@/shared/ui/NavLink/NavLink';
import {
  IconEmail,
  IconPhone,
  IconFacebook,
  IconLinkedIn,
  IconInstagram,
} from '@/shared/ui/Icons/Icons';
import './Footer.css';

const socialIcons = {
  facebook: IconFacebook,
  linkedin: IconLinkedIn,
  instagram: IconInstagram,
};

function Footer() {
  const { brand, contact, social, nav } = siteConfig;
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__grid">
          <div className="footer__brand">
            <span className="footer__name">{brand.name}</span>
            {brand.tagline && <span className="footer__tagline">{brand.tagline}</span>}
            <p className="footer__about">
              Strategy, design, and digital solutions that help your brand stand out and grow.
            </p>
          </div>

          <div className="footer__column">
            <h3 className="footer__heading">Quick links</h3>
            <ul className="footer__nav">
              {nav.map((item) => (
                <li key={item.label}>
                  <NavLink href={item.href} className="footer__nav-link">
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__column">
            <h3 className="footer__heading">Contact</h3>
            <ul className="footer__contact-list">
              {contact.email && (
                <li>
                  <a href={`mailto:${contact.email}`} className="footer__link">
                    <IconEmail className="footer__icon" />
                    {contact.email}
                  </a>
                </li>
              )}
              {contact.phone2 && (
                <li>
                  <a href={`tel:${contact.phone2.replace(/\s/g, '')}`} className="footer__link">
                    <IconPhone className="footer__icon" />
                    {contact.phone2}
                    {contact.phone2Label && ` (${contact.phone2Label})`}
                  </a>
                </li>
              )}
            </ul>
          </div>

          <div className="footer__column">
            <h3 className="footer__heading">Follow us</h3>
            <div className="footer__social">
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
            <NavLink href="/contact" className="footer__cta">
              Contact us
            </NavLink>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            &copy; {year} {brand.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
