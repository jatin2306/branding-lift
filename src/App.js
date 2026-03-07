import React from 'react';
import Header from './components/layout/Header/Header';
import HeroSection from './components/hero/HeroSection/HeroSection';
import ContentSection from './components/sections/ContentSection/ContentSection';
import AboutBlock from './components/sections/AboutBlock/AboutBlock';
import Footer from './components/layout/Footer/Footer';
import FloatingWhatsApp from './components/ui/FloatingWhatsApp/FloatingWhatsApp';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <HeroSection />
        <ContentSection
          id="about"
          title="Boost your online presence with a leading brand agency worldwide"
          subtitle="We help businesses stand out with strategy, design, and digital that works."
          headingAlign="center"
        >
          <AboutBlock />
        </ContentSection>
        <ContentSection
          id="services"
          title="What we do"
          subtitle="Brand strategy, identity, web, and campaigns—all under one roof."
        >
          <div className="services-grid">
            <div className="services-grid__item">
              <h3>Brand strategy</h3>
              <p>Clarity on who you are, who you serve, and how you show up.</p>
            </div>
            <div className="services-grid__item">
              <h3>Design & identity</h3>
              <p>Logos, guidelines, and visual systems that last.</p>
            </div>
            <div className="services-grid__item">
              <h3>Web & digital</h3>
              <p>Sites and experiences that convert and grow with you.</p>
            </div>
          </div>
        </ContentSection>
        <ContentSection id="contact" title="Get in touch" subtitle="Ready to lift your brand? Say hello.">
          <div className="contact-block">
            <p>
              <a href="mailto:arham@brandinglift.com">arham@brandinglift.com</a>
            </p>
            <p>
              <a href="tel:+91 9717882400">+91 9717882400</a>
            </p>
          </div>
        </ContentSection>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
