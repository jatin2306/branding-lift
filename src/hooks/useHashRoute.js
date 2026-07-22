import { useState, useEffect } from 'react';

export function useHashRoute(prefix = 'service-') {
  const [selectedSlug, setSelectedSlug] = useState('');

  useEffect(() => {
    const readHash = () => {
      const hash = window.location.hash.slice(1) || '';
      const match = hash.startsWith(prefix) ? hash.slice(prefix.length) : '';
      setSelectedSlug(match);
    };

    readHash();
    window.addEventListener('hashchange', readHash);
    return () => window.removeEventListener('hashchange', readHash);
  }, [prefix]);

  return selectedSlug;
}