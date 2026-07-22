import { useState, useEffect, useCallback, useRef } from 'react';

export function useCarousel(images, intervalMs = 3000) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartRef = useRef(null);
  const intervalRef = useRef(null);

  const goTo = useCallback((index) => {
    setCurrentIndex((prev) => (index + images.length) % images.length);
  }, [images.length]);

  const goNext = useCallback(() => {
    goTo(currentIndex + 1);
  }, [currentIndex, goTo]);

  const goPrev = useCallback(() => {
    goTo(currentIndex - 1);
  }, [currentIndex, goTo]);

  useEffect(() => {
    intervalRef.current = setInterval(goNext, intervalMs);
    return () => clearInterval(intervalRef.current);
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

  return {
    currentIndex,
    goTo,
    goNext,
    goPrev,
    touchStart,
    touchEnd,
  };
}