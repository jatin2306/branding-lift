import React, { useState, useEffect } from 'react';
import { siteConfig, getServiceBySlug, serviceSlug } from './config/siteConfig';
import Header from './shared/layout/Header';
import HeroSection from './features/hero/components/HeroSection';
import ContentSection from './features/services/components/ContentSection';
import AboutBlock from './features/about/components/AboutBlock';
import ServiceDetail from './features/services/components/ServiceDetail';
import ContactForm from './features/contact/components/ContactForm';
import Footer from './shared/layout/Footer';
import FloatingWhatsApp from './shared/ui/FloatingWhatsApp';
import { ServiceIcon } from './shared/ui/Icons';
import './App.css';

function App() {
  const [selectedSlug, setSelectedSlug] = useState('');

  useEffect(() => {
    const readHash = () => {
      const hash = window.location.hash.slice(1) || '';
      const match = hash.startsWith('service-') ? hash.slice(8) : '';
      setSelectedSlug(match);
    };
    readHash();
    window.addEventListener('hashchange', readHash);
    return () => window.removeEventListener('hashchange', readHash);
  }, []);

  const selectedService = selectedSlug ? getServiceBySlug(selectedSlug, siteConfig) : null;
  const serviceCategories = siteConfig.serviceCategories || [];
  const categoryAccent = {
    'Development': '#2563eb',
    'AI & Automation': '#7c3aed',
    'Design': '#b45309',
    'Marketing': '#059669',
    'Advertising': '#4f46e5',
  };

  return (
    <div className="app">
      <Header />
      <main>
        <HeroSection />
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
          {selectedService && (
            <div id={`service-${serviceSlug(selectedService.name)}`} className="service-detail-wrapper">
              <ServiceDetail service={selectedService} />
            </div>
          )}
          <div className="services-grid">
            {serviceCategories.flatMap((category) =>
              (category.services || []).map((service) => {
                const slug = serviceSlug(service.name);
                const href = `#service-${slug}`;
                const isSelected = selectedSlug === slug;
                const accent = categoryAccent[category.label] || 'var(--color-primary)';
                return (
                  <a
                    key={service.name}
                    href={href}
                    className={`services-grid__item ${isSelected ? 'services-grid__item--selected' : ''}`}
                    id={slug}
                    style={{ '--card-accent': accent }}
                  >
                    <div className="services-grid__head">
                      <span className="services-grid__icon-wrap">
                        <ServiceIcon type={service.icon || 'web'} className="services-grid__icon" />
                      </span>
                      <span className="services-grid__label">{service.name}</span>
                    </div>
                    {service.description && (
                      <p className="services-grid__desc">{service.description}</p>
                    )}
                    <span className="services-grid__action">LEARN MORE</span>
                  </a>
                );
              })
            )}
          </div>
        </ContentSection>
        <ContentSection id="contact" title="Get in touch" subtitle="Ready to lift your brand? Say hello.">
          <ContactForm />
        </ContentSection>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
