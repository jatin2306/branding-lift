'use client';

import { useState, useEffect } from 'react';
import TopBar from '../TopBar/TopBar';
import NavBar from '../NavBar/NavBar';
import './Header.css';

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <TopBar />
      <NavBar scrolled={scrolled} />
    </header>
  );
}

export default Header;
