'use client';

import { type CSSProperties } from 'react';
import { siteConfig, serviceSlug } from '@/lib/config/siteConfig';
import Header from '@/shared/layout/Header/Header';
import HeroSection from '@/features/hero/components/HeroSection/HeroSection';
import ContentSection from '@/shared/ui/ContentSection/ContentSection';
import AboutBlock from '@/features/about/components/AboutBlock/AboutBlock';
import ContactSection from '@/features/contact/components/ContactSection/ContactSection';
import BlogPreview from '@/features/blog/components/BlogPreview/BlogPreview';
import Link from 'next/link';
import Footer from '@/shared/layout/Footer/Footer';
import FloatingWhatsApp from '@/shared/ui/FloatingWhatsApp/FloatingWhatsApp';
import RemoteImage from '@/shared/ui/RemoteImage/RemoteImage';
import { ServiceIcon } from '@/shared/ui/Icons/Icons';
import './home.css';

const categoryAccent: Record<string, string> = {
  Development: '#2563eb',
  'AI & Automation': '#7c3aed',
  Design: '#b45309',
  Marketing: '#059669',
  Advertising: '#4f46e5',
};

export default function HomePage() {
  const serviceCategories = siteConfig.serviceCategories || [];

  return (
    <div className="app">
      <Header />
      <main>
        <HeroSection />
        <ContentSection
          id="about"
          title="About BrandingLift"
          subtitle="Empowering businesses through technology, creativity, and digital growth."
          headingAlign="center"
        >
          <AboutBlock />
        </ContentSection>
        <ContentSection
          id="services"
          title="What we do"
          subtitle="Web, design, marketing, and growth—all under one roof."
        >
          <div className="services-section">
            {serviceCategories.map((category) => (
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
