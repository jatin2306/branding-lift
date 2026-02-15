import React, { useState, useEffect } from 'react';
import { siteConfig } from '../../../config/siteConfig';
import Logo from '../../ui/Logo/Logo';
import Button from '../../ui/Button/Button';
import './NavBar.css';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { nav, cta } = siteConfig;

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`navbar ${menuOpen ? 'navbar--menu-open' : ''} ${scrolled ? 'navbar--scrolled' : ''}`}
      role="navigation"
    >
      <div className="navbar__inner">
        <div className="navbar__logo-wrap">
          <Logo href="#home" compact />
        </div>

        <button
          type="button"
          className="navbar__toggle"
          aria-expanded={menuOpen}
          aria-controls="navbar-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="navbar__toggle-bar" aria-hidden />
          <span className="navbar__toggle-bar" aria-hidden />
          <span className="navbar__toggle-bar" aria-hidden />
        </button>

        <div id="navbar-menu" className={`navbar__menu ${menuOpen ? 'navbar__menu--open' : ''}`}>
          <div className="navbar__links-wrap">
            <ul className="navbar__links">
              {nav.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="navbar__link" onClick={() => setMenuOpen(false)}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="navbar__actions">
            <Button href="#contact" variant="primary" className="navbar__cta">
              {cta.primary}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
