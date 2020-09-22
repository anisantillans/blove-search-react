import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo.png';
import userIcon from '../assets/static/user-icon.png';

const Header = () => (
  <header className="header">
    <Link to="/">
      <div className="header__brand">
        <img className="header__img" src={logo} alt="logo Blove" />
        <h1 className="header__title--blove">Blove</h1>
        <h1 className="header__title--donation">Donation</h1>
      </div>
    </Link>
    <div className="header__menu">
      <div className="header__menu--profile">
        <img className="profile-icon" src={userIcon} alt="User" />
        <p className="profile-text">Profile</p>
      </div>
      <ul>
        <li>
          <a href="/">Account</a>
        </li>
        <li>
          <Link to="/login">Log out</Link>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
