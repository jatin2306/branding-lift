'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { siteConfig, serviceSlug } from '@/lib/config/siteConfig';
import Logo from '@/shared/ui/Logo/Logo';
import Button from '@/shared/ui/Button/Button';
import NavLink from '@/shared/ui/NavLink/NavLink';
import { ServiceIcon, IconSearch, IconChevronDown } from '@/shared/ui/Icons/Icons';
import './NavBar.css';


const CATEGORY_ICON_MAP = {
  Development: 'web',
  'AI & Automation': 'ai',
  Design: 'uiux',
  Marketing: 'marketing',
  Advertising: 'google',
};

function categorySlug(label) {
  return label
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9-]/g, '');
}

function isNavActive(item, activeSection, pathname) {
  if (item.href === '/contact' && pathname === '/contact') return true;
  if (item.label === 'Services' && pathname.startsWith('/services')) return true;
  if (item.label === 'Blogs' && pathname.startsWith('/blogs')) return true;
  if (item.href.startsWith('#') && pathname === '/') {
    return activeSection === item.href.slice(1);
  }
  return false;
}

function NavBar({ scrolled: headerScrolled = false }) {
  const pathname = usePathname();
  const isHome = pathname === '/';
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
    if (!isHome) return undefined;

    const sectionIds = ['home', 'about', 'services', 'blogs', 'contact'];
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
  }, [isHome]);

  const logoHref = isHome ? '#home' : '/';
  const contactHref = cta.primaryHref || '/contact';

  const isScrolled = scrolled || headerScrolled;

  return (
    <nav
      className={`navbar ${menuOpen ? 'navbar--menu-open' : ''} ${isScrolled ? 'navbar--scrolled' : ''}`}
      role="navigation"
    >
      <div className="navbar__inner">
        <div className="navbar__logo-wrap">
          <Logo href={logoHref} />
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
                    <NavLink
                      href={item.href}
                      className={`navbar__link navbar__link--trigger ${isHome && activeSection === 'services' ? 'navbar__link--active' : ''}`}
                      onClick={(e) => {
                        if (window.innerWidth <= 900) {
                          e.preventDefault();
                          setServicesOpen((v) => !v);
                        } else {
                          setMenuOpen(false);
                        }
                      }}
                    >
                      {item.label}
                      <span className="navbar__link-caret" aria-hidden><IconChevronDown /></span>
                    </NavLink>

                    {/* Mega Menu Dropdown */}
                    <div className={`navbar__dropdown ${servicesOpen ? 'navbar__dropdown--open' : ''}`}>
                      <div className="navbar__dropdown-inner">
                        {(serviceCategories || []).map((category) => (
                          <div key={category.label} className="navbar__dropdown-col">
                            <div className="navbar__dropdown-header">
                              <span className="navbar__dropdown-icon-badge">
                                <ServiceIcon type={CATEGORY_ICON_MAP[category.label] || 'web'} />
                              </span>
                              <div className="navbar__dropdown-title">{category.label}</div>
                            </div>
                            {category.description && (
                              <p className="navbar__dropdown-desc">{category.description}</p>
                            )}
                            <ul className="navbar__dropdown-list">
                              {category.services.slice(0, 5).map((service) => (
                                <li key={service.name}>
                                  <NavLink
                                    href={`/services/${serviceSlug(service.name)}`}
                                    className="navbar__dropdown-link"
                                    onClick={() => { setMenuOpen(false); setServicesOpen(false); }}
                                  >
                                    {service.name}
                                  </NavLink>
                                </li>
                              ))}
                            </ul>
                            <NavLink
                              href={`/services/${categorySlug(category.label)}`}
                              className="navbar__dropdown-viewall"
                              onClick={() => { setMenuOpen(false); setServicesOpen(false); }}
                            >
                              View all →
                            </NavLink>
                          </div>
                        ))}
                      </div>

                      {/* Bottom CTA Section */}
                      <div className="navbar__dropdown-footer">
                        <span className="navbar__dropdown-cta-icon" aria-hidden>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L14.09 8.26L20.5 8.26L15.7 12.14L17.5 18.4L12 14.77L6.5 18.4L8.3 12.14L3.5 8.26L9.91 8.26L12 2Z" fill="currentColor" />
                          </svg>
                        </span>
                        <div className="navbar__dropdown-cta-content">
                          <p className="navbar__dropdown-cta-text">Need a customized solution?</p>
                          <p className="navbar__dropdown-cta-sub">We'll create a strategy tailored to your business goals.</p>
                        </div>
                        <Button
                          href="/contact"
                          variant="primary"
                          className="navbar__dropdown-cta-btn"
                          onClick={() => { setMenuOpen(false); setServicesOpen(false); }}
                        >
                          Let's Talk →
                        </Button>
                      </div>
                    </div>
                  </li>
                ) : (
                  <li key={item.label}>
                    <NavLink
                      href={item.href}
                      className={`navbar__link ${isNavActive(item, activeSection, pathname) ? 'navbar__link--active' : ''}`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </NavLink>
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
            <Button href={contactHref} variant="primary" className="navbar__cta">
              {cta.primary}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;