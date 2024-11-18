<<<<<<< HEAD
import React, { useState } from 'react';
import logo from './assets/images/logo.svg';
import ContactInfo from './ContactInfo'; // Import the ContactInfo component
=======
import { useState } from 'react';
import logo from './assets/images/logo.svg';

>>>>>>> 22da6df797c04a1d3db56cf7c296fb8d1845fdc1

const Header = () => {
  const [isNavbarActive, setIsNavbarActive] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarActive(prevState => !prevState);
  };

  return (
    <>
<<<<<<< HEAD
      <ContactInfo /> {/* Add the ContactInfo component here */}
=======
     

      {/* Original Header Component */}
>>>>>>> 22da6df797c04a1d3db56cf7c296fb8d1845fdc1
      <header className="header" data-header>
        <div className="container">
          <nav className={`navbar ${isNavbarActive ? 'active' : ''}`} data-navbar>
            <div className="wrapper">
              <a href="/" className="logo">
                <img src={logo} width="162" height="50" alt="EduWeb logo" />
              </a>
              <button 
                className="nav-close-btn" 
                aria-label="Close menu" 
                onClick={toggleNavbar} 
                aria-expanded={isNavbarActive}
                type="button"
              >
                <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
              </button>
            </div>
            <ul className="navbar-list">
<<<<<<< HEAD
              {['Home', 'About', 'Testimonials', 'Questions', 'Contact'].map((link, index) => (
=======
              {['Home', 'About', 'Testimonials', 'Blog', 'Contact'].map((link, index) => (
>>>>>>> 22da6df797c04a1d3db56cf7c296fb8d1845fdc1
                <li className="navbar-item" key={index}>
                  <a href={`#${link.toLowerCase()}`} className="navbar-link" data-nav-link>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="header-actions">
            <button type="button" className="header-action-btn" aria-label="Toggle search" title="Search">
              <ion-icon name="search-outline" aria-hidden="true"></ion-icon>
            </button>
            <button 
              type="button" 
              className="header-action-btn" 
              aria-label="Open menu" 
              onClick={toggleNavbar}
            >
              <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
            </button>
          </div>
          <div className={`overlay ${isNavbarActive ? 'active' : ''}`} data-nav-toggler data-overlay></div>
        </div>
      </header>
    </>
  );
};

export default Header;