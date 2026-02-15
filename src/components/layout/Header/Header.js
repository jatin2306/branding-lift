import React from 'react';
import TopBar from '../TopBar/TopBar';
import NavBar from '../NavBar/NavBar';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <TopBar />
      <NavBar />
    </header>
  );
}

export default Header;
