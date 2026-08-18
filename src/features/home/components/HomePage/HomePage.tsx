'use client';

import { useState, type CSSProperties } from 'react';
import { siteConfig, serviceSlug } from '@/lib/config/siteConfig';
import Header from '@/shared/layout/Header/Header';
import HeroCarousel from '@/features/home/components/HeroCarousel/HeroCarousel';
import ContentSection from '@/shared/ui/ContentSection/ContentSection';
import AboutBlock from '@/features/about/components/AboutBlock/AboutBlock';
import ContactSection from '@/features/contact/components/ContactSection/ContactSection';
import BlogPreview from '@/features/blog/components/BlogPreview/BlogPreview';
import Link from 'next/link';
import Footer from '@/shared/layout/Footer/Footer';
import FloatingWhatsApp from '@/shared/ui/FloatingWhatsApp/FloatingWhatsApp';
import RemoteImage from '@/shared/ui/RemoteImage/RemoteImage';
import { ServiceIcon, IconArrowRight } from '@/shared/ui/Icons/Icons';
import './home.css';
import LiftBotHomeSection from '@/features/home/components/LiftBotHomeSection/LiftBotHomeSection';

const categoryAccent: Record<string, string> = {
  Development: '#2563eb',
  'AI & Automation': '#7c3aed',
  Design: '#b45309',
  Marketing: '#059669',
  Advertising: '#4f46e5',
};

const categoryDescriptions: Record<string, string> = {
  Development: 'Robust, scalable & high-performance solutions that bring your ideas to life.',
  'AI & Automation': 'Intelligent automation and AI-powered solutions to streamline operations.',
  Design: 'Creative designs that communicate clearly and leave a lasting impression.',
  Marketing: 'Data-driven marketing strategies that attract, engage, and convert.',
  Advertising: 'High-impact advertising campaigns that deliver real results.',
};

export default function HomePage() {
  const serviceCategories = siteConfig.serviceCategories || [];

  // Currently selected tab filter
  const [activeCategory, setActiveCategory] = useState<string>('All Services');

  // Pill filter options
  const filterCategories = ['All Services', ...serviceCategories.map((cat) => cat.label)];

  // Individual category view data
  const displayedCategories = serviceCategories.filter((cat) => cat.label === activeCategory);

  return (
    <div className="app">
      <Header />
      <main>
        <HeroCarousel />
        <LiftBotHomeSection />
        <ContentSection
          id="about"
          title="Strategy, design & digital that lifts your brand"
          subtitle="We help you stand out with a clear identity, strong presence, and campaigns that convert."
          headingAlign="center"
        >
          <AboutBlock />
        </ContentSection>
        <ContentSection
          id="services"
          title="What we do"
          subtitle="Web, design, marketing, and growth—all under one roof."
        >
          {/* Filter Bar */}
          <div className="services-filter">
            {filterCategories.map((categoryLabel) => {
              const isActive = activeCategory === categoryLabel;
              const accentColor =
                categoryLabel === 'All Services'
                  ? 'var(--color-primary, #2563eb)'
                  : categoryAccent[categoryLabel] || 'var(--color-primary, #2563eb)';

              return (
                <button
                  key={categoryLabel}
                  type="button"
                  onClick={() => setActiveCategory(categoryLabel)}
                  className={`services-filter__tab ${isActive ? 'services-filter__tab--active' : ''}`}
                  style={
                    {
                      '--tab-accent': accentColor,
                    } as CSSProperties
                  }
                >
                  {categoryLabel}
                </button>
              );
            })}
          </div>

          {/* Service Display Container */}
          {activeCategory === 'All Services' ? (
            /* VIEW 1: Overview Cards (2nd Image Layout) */
            <div className="all-services-overview">
              {serviceCategories.map((category, index) => {
                const accent = categoryAccent[category.label] || '#2563eb';
                const firstServiceImg = category.services?.[0]?.image || '/services/web-development.jpg';

                return (
                  <div key={category.label} className="overview-card">
                    {/* Left Banner Image */}
                    <div className="overview-card__visual">
                      <span className="overview-card__badge">{index + 1}</span>
                      <RemoteImage
                        src={firstServiceImg}
                        alt={category.label}
                        className="overview-card__image"
                      />
                      <span className="overview-card__icon-wrap" style={{ background: accent }}>
                        <ServiceIcon type={category.services?.[0]?.icon || 'web'} />
                      </span>
                    </div>

                    {/* Right Details Block */}
                    <div className="overview-card__content">
                      <div className="overview-card__header">
                        <div>
                          <h3 className="overview-card__title">{category.label}</h3>
                          <p className="overview-card__desc">
                            {categoryDescriptions[category.label] || 'Comprehensive digital services tailored for your business.'}
                          </p>
                        </div>
                        {/* Blue Redirect Arrow Button */}
                        <button
                          type="button"
                          onClick={() => setActiveCategory(category.label)}
                          className="overview-card__redirect-btn"
                          style={{ background: accent }}
                          title={`View ${category.label} Services`}
                        >
                          <IconArrowRight />
                        </button>
                      </div>

                      {/* Sub-services pills */}
                      <div className="overview-card__services-grid">
                        {(category.services || []).map((service) => {
                          const slug = serviceSlug(service.name);
                          return (
                            <Link
                              key={service.name}
                              href={`/services/${slug}`}
                              className="overview-card__service-chip"
                            >
                              <ServiceIcon type={service.icon || 'web'} className="overview-card__chip-icon" />
                              <span>{service.short || service.name}</span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* VIEW 2: Detailed Grid View (1st Image Layout) */
            <div className="services-section">
              {displayedCategories.map((category) => (
                <div key={category.label} className="services-category">
                  <div className="services-category__header">
                    <span
                      className="services-category__accent"
                      style={{ background: categoryAccent[category.label] || 'var(--color-primary)' }}
                      aria-hidden
                    />
                    <h3 className="services-category__title">{category.label}</h3>
                  </div>
                  <div className="services-grid">
                    {(category.services || []).map((service) => {
                      const slug = serviceSlug(service.name);
                      const accent = categoryAccent[category.label] || 'var(--color-primary)';
                      return (
                        <Link
                          key={service.name}
                          href={`/services/${slug}`}
                          className="services-grid__item"
                          style={{ '--card-accent': accent } as CSSProperties}
                        >
                          <div className="services-grid__visual">
                            <RemoteImage
                              src={service.image}
                              alt={service.name}
                              className="services-grid__image"
                            />
                            <div className="services-grid__visual-overlay" aria-hidden />
                            <span className="services-grid__icon-wrap">
                              <ServiceIcon type={service.icon || 'web'} className="services-grid__icon" />
                            </span>
                          </div>
                          <div className="services-grid__body">
                            <span className="services-grid__category">{category.label}</span>
                            <h4 className="services-grid__label">{service.name}</h4>
                            {service.description && (
                              <p className="services-grid__desc">{service.description}</p>
                            )}
                            <span className="services-grid__action">Learn more</span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </ContentSection>
        <ContentSection
          id="blogs"
          title="Latest from our blog"
          subtitle="Tips, trends, and insights on brand, design, and digital growth."
          headingAlign="center"
        >
          <BlogPreview />
        </ContentSection>
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}