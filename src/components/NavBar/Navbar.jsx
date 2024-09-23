import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (

<nav className="navbar">
  <div className="navbar-left">
    <a href="/" className="logo">
      betteranimelist
    </a>
  </div>
  <div className="navbar-center">
    <ul className="nav-links">
      <li>
        <a href="/login">login</a>
      </li>
      <li>
        <a href="/main">main</a>
      </li>
      <li>
        <a href="/about">about</a>
      </li>
    </ul>
  </div>
</nav>
);
};

export default Navbar;