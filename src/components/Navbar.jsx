import React from 'react';
import { FcBusinessman, FcSettings, FcSearch } from 'react-icons/fc';

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <button className="explore-button">EXPLORE</button>
          <div className="search-container">
            <input type="text" className="search-input" placeholder="Search..." />
            <button className="search-button"><FcSearch /></button>
          </div>
          <div className="nav-links">
            <ul className="nav-list">
              <li className="nav-item"><a href="home">Home</a></li>
              <li className="nav-item"><a href="#online-degrees">Online degrees</a></li>
              <li className="nav-item"><a href="Find-career">Find Your new career</a></li>
              <li className="nav-item"><a href="login">Login</a></li>
              <li className="nav-item"><a href="user"><FcBusinessman /></a></li>
              <li className="nav-item"><a href="setting"><FcSettings /></a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
