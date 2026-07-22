import { useState, useEffect } from 'react';

export function useScrollSpy(sectionIds = ['home', 'about', 'services', 'contact'], offset = 120) {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const getActive = () => {
      const y = window.scrollY + offset;
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
  }, [sectionIds, offset]);

  return activeSection;
}