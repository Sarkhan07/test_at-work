import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">

    <Link to={`/`} className="no-underline"> 
        <div className="header-left">
          <img src="/logo-sign.svg" alt="Logo" className="logo" />
          <h1>at-<span>work</span></h1>
        </div>
   </Link>
     
      <div className="header-right">
      <img src="/heart.svg" alt="Profile" className="profile-heart" />
      <img src="/mi_notification.svg" alt="Profile" className="profile-notify" />
        <img src="/photoProfile.png" alt="Profile" className="profile-avatar" />
        <span className="username">Ivan1234</span>
      </div>
    </header>
  );
};

export default Header;
