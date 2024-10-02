import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src="/logo-sign.svg" alt="Logo" className="logo" />
        <h1>at-work</h1>
      </div>
      <div className="header-right">
        <img src="/photoProfile.png" alt="Profile" className="profile-avatar" />
        <span className="username">Ivan1234</span>
      </div>
    </header>
  );
};

export default Header;
