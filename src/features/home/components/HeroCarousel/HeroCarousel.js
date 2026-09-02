'use client';

import { useState, useEffect } from 'react';
import HeroSection from '@/features/hero/components/HeroSection/HeroSection';
import './HeroCarousel.css';

function LiftBotSlide() {
  return (
    <section className="hc-slide hc-slide--liftbot">
      <span className="hc-glow hc-glow--1" aria-hidden />
      <span className="hc-glow hc-glow--2" aria-hidden />

      <div className="hc-liftbot__container">
        <div className="hc-liftbot__left">
          <span className="hc-liftbot__badge">INTRODUCING LIFTBOT</span>
          <h2 className="hc-liftbot__title">
            Meet Your <span className="hc-liftbot__title-highlight">AI Employee.</span>
          </h2>
          <p className="hc-liftbot__subtitle">
            An AI-powered employee designed to help your business handle customer
            conversations, capture leads, automate repetitive work, and stay responsive 24/7.
          </p>

          <div className="hc-liftbot__cta-row">
            <a href="/products" className="hc-liftbot__cta">
              Explore LiftBot
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a href="/products#liftbot-query" className="hc-liftbot__cta hc-liftbot__cta--secondary">
              Get Early Access
            </a>
          </div>

          <p className="hc-liftbot__supporting">Built by Brandinglift for modern businesses.</p>
          <div className="hc-liftbot__tags">
            <span>AI Employees</span>
            <span className="hc-liftbot__tag-sep">•</span>
            <span>Business Automation</span>
            <span className="hc-liftbot__tag-sep">•</span>
            <span>Customer Engagement</span>
          </div>
        </div>

        <div className="hc-liftbot__right">
          <div className="hc-chatcard">
            <div className="hc-chatcard__header">
              <span className="hc-chatcard__avatar">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="8" width="14" height="11" rx="3" />
                  <circle cx="9.5" cy="13.5" r="1.1" fill="currentColor" stroke="none" />
                  <circle cx="14.5" cy="13.5" r="1.1" fill="currentColor" stroke="none" />
                  <path d="M12 8V5" />
                  <circle cx="12" cy="3.5" r="1.1" />
                </svg>
              </span>
              <span className="hc-chatcard__name">LiftBot</span>
              <span className="hc-chatcard__online">
                <span className="hc-chatcard__online-dot" /> Online
              </span>
            </div>

            <div className="hc-chatcard__body">
              <div className="hc-chatcard__bubble hc-chatcard__bubble--bot">
                Hi! 👋 How can I help your business today?
              </div>
              <div className="hc-chatcard__bubble hc-chatcard__bubble--user">
                I need more leads from my website.
              </div>
              <div className="hc-chatcard__bubble hc-chatcard__bubble--bot hc-chatcard__bubble--typing">
                <span className="hc-typing-dot" />
                <span className="hc-typing-dot" />
                <span className="hc-typing-dot" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const SLIDE_COUNT = 2;
const INTERVAL_MS = 4000;

function HeroCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDE_COUNT);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="hero-carousel">
      <div
        className="hero-carousel__track"
        style={{
          width: `${SLIDE_COUNT * 100}%`,
          transform: `translateX(-${(100 / SLIDE_COUNT) * active}%)`,
        }}
      >
        <div className="hero-carousel__slide" style={{ width: `${100 / SLIDE_COUNT}%` }}>
          <HeroSection />
        </div>
        <div className="hero-carousel__slide" style={{ width: `${100 / SLIDE_COUNT}%` }}>
          <LiftBotSlide />
        </div>
      </div>

      <div className="hero-carousel__dots" role="tablist" aria-label="Homepage slides">
        {Array.from({ length: SLIDE_COUNT }).map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={active === i}
            aria-label={`Slide ${i + 1}`}
            className={`hero-carousel__dot ${active === i ? 'hero-carousel__dot--active' : ''}`}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroCarousel;