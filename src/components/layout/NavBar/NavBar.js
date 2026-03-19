import React, { useState, useEffect } from 'react';
import { siteConfig, serviceSlug } from '../../../config/siteConfig';
import Logo from '../../ui/Logo/Logo';
import Button from '../../ui/Button/Button';
import { ServiceIcon, IconSearch, IconChevronDown } from '../../ui/Icons/Icons';
import './NavBar.css';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { nav, cta, serviceCategories } = siteConfig;

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

  useEffect(() => {
    const sectionIds = ['home', 'about', 'services', 'contact'];
    const getActive = () => {
      const y = window.scrollY + 120;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= y) return sectionIds[i];
      }
      return 'home';
    };
    setActiveSection(getActive());
    const onScroll = () => setActiveSection(getActive());
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
          <Logo href="#home" />
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
              {nav.map((item) =>
                item.label === 'Services' ? (
                  <li
                    key={item.label}
                    className="navbar__item navbar__item--dropdown"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <a
                      href={item.href}
                      className={`navbar__link navbar__link--trigger ${activeSection === 'services' ? 'navbar__link--active' : ''}`}
                      onClick={(e) => {
                        if (window.innerWidth <= 900) {
                          e.preventDefault();
                          setServicesOpen((v) => !v);
                        }
                      }}
                    >
                      {item.label}
                      <span className="navbar__link-caret" aria-hidden><IconChevronDown /></span>
                    </a>
                    <div className={`navbar__dropdown ${servicesOpen ? 'navbar__dropdown--open' : ''}`}>
                      <div className="navbar__dropdown-inner">
                        {(serviceCategories || []).map((category) => (
                          <div key={category.label} className="navbar__dropdown-col">
                            <div className="navbar__dropdown-title">{category.label}</div>
                            {category.services.map((service) => (
                              <a
                                key={service.name}
                                href={`#service-${serviceSlug(service.name)}`}
                                className="navbar__dropdown-link"
                                onClick={() => { setMenuOpen(false); setServicesOpen(false); }}
                              >
                                <span className="navbar__dropdown-icon">
                                  <ServiceIcon type={service.icon || 'web'} />
                                </span>
                                <span className="navbar__dropdown-text">{service.name}</span>
                              </a>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </li>
                ) : (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className={`navbar__link ${activeSection === item.href.slice(1) ? 'navbar__link--active' : ''}`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="navbar__search-wrap">
            <label htmlFor="navbar-search" className="navbar__search-label">
              <IconSearch className="navbar__search-icon" />
              <input
                id="navbar-search"
                type="search"
                className="navbar__search-input"
                placeholder="Search..."
                autoComplete="off"
                aria-label="Search"
              />
              <span className="navbar__search-kbd">⌘K</span>
            </label>
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
