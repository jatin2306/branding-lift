import React, { useState, useEffect, useCallback, useRef } from 'react';
import { siteConfig } from '../../../../config/siteConfig';
import './HeroSection.css';

const SLIDER_IMAGES = [
  '/slider/slide1.png',
  '/slider/slide3.png',
];

function HeroSection() {
  const { hero } = siteConfig;
  const images = hero.images && hero.images.length > 0 ? hero.images : SLIDER_IMAGES;
  const baseUrl = process.env.PUBLIC_URL || '';
  const imageUrl = (src) => {
    if (!src) return '';
    return src.startsWith('http') ? src : `${baseUrl}${src}`;
  };
  const intervalMs = hero.carouselIntervalMs || 3000;
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartRef = useRef(null);

  const goTo = useCallback((index) => {
    setCurrentIndex((prev) => (index + images.length) % images.length);
  }, [images.length]);

  const goNext = useCallback(() => goTo(currentIndex + 1), [currentIndex, goTo]);
  const goPrev = useCallback(() => goTo(currentIndex - 1), [currentIndex, goTo]);

  useEffect(() => {
    const id = setInterval(goNext, intervalMs);
    return () => clearInterval(id);
  }, [currentIndex, intervalMs, goNext]);

  const touchStart = useCallback((e) => {
    if (!e.touches || e.touches.length !== 1) return;
    touchStartRef.current = e.touches[0].clientX;
  }, []);
  const touchEnd = useCallback((e) => {
    if (!e.changedTouches || e.changedTouches.length !== 1) return;
    const diff = e.changedTouches[0].clientX - (touchStartRef.current ?? 0);
    if (Math.abs(diff) < 50) return;
    if (diff > 0) goPrev();
    else goNext();
  }, [goPrev, goNext]);

  return (
    <section
      id="home"
      className="hero"
      onTouchStart={touchStart}
      onTouchEnd={touchEnd}
    >
      <div className="hero__bg-wrap" aria-hidden>
        {images.map((src, i) => (
          <div
            key={i}
            className={`hero__bg-slide ${i === currentIndex ? 'hero__bg-slide--active' : ''}`}
            style={{ backgroundImage: `url(${imageUrl(src)})` }}
          />
        ))}
      </div>
      <div className="hero__overlay" aria-hidden />
      <button type="button" className="hero__arrow hero__arrow--left" aria-label="Previous slide" onClick={goPrev} />
      <button type="button" className="hero__arrow hero__arrow--right" aria-label="Next slide" onClick={goNext} />
      <div className="hero__dots" role="tablist" aria-label="Banner slides">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === currentIndex}
            aria-label={`Slide ${i + 1}`}
            className={`hero__dot ${i === currentIndex ? 'hero__dot--active' : ''}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroSection;
