//import React from 'react'
import logo from '../../assets/logos/Vector.svg';
import profile from '../../assets/icons/profile.svg';
import home from '../../assets/icons/house.svg';
import communities from '../../assets/icons/groups.svg';
import coffeeChat from '../../assets/icons/group.svg';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="communiti logo" />
      <nav className="header__nav">
        <p className="header__nav-link">
          <img className="header__nav-img" src={home} alt="home" />
          Home
        </p>
        <p className="header__nav-link">
          <img
            className="header__nav-img"
            src={communities}
            alt="communities"
          />
          Communities
        </p>
        <p className="header__nav-link">
          <img className="header__nav-img" src={coffeeChat} alt="coffee chat" />
          Coffee Chat
        </p>
        <a className="header__nav-link" href="/">
          <img
            className="header__nav-img"
            src={profile}
            alt="profile picture"
          />
          Profile
        </a>
      </nav>
    </div>
  );
}

export default Header;
