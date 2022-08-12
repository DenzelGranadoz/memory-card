import React from 'react';
import logo from '../../src/images/valogo.png';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Valorant Logo" className="valorant-logo"></img>
      <h1>ValoMemory</h1>
    </header>
  );
};

export default Header;
