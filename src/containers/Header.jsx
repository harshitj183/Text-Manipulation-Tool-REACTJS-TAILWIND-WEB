import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = ({ sitename, sitedesc, byname }) => {
  const [isDark, setIsDark] = useState(false);

  const styles = {
    header: {
      backgroundColor: isDark ? '#17202d' : '#d7e8f9',
      transition: 'background-color 0.3s ease',
    },
    navLink: {
      color: isDark ? '#c1c8e4' : '#1f305e',
      transition: 'color 0.3s ease',
    },
    title: {
      color: isDark ? '#4285f4' : '#002fa7',
      transition: 'color 0.3s ease',
    },
    description: {
      color: isDark ? '#8c98b7' : '#4d598c',
      transition: 'color 0.3s ease',
    },
    buttonToggle: {
      backgroundColor: isDark ? '#4285f4' : '#d1d5db',
    },
    toggleCircle: {
      transform: `translateX(${isDark ? '24px' : '2px'})`,
    },
  };

  return (
    <header style={styles.header} className="shadow-lg">
      <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center justify-between">
        {/* Logo and title section */}
        <div className="flex items-center space-x-3">
          <div className="relative">
            <img
              className="w-12 h-12 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
              src="/Favicon/logo.png"
              alt="Logo"
            />
            <div className="absolute inset-0 rounded-xl ring-2 ring-primary opacity-20"></div>
          </div>

          <div className="flex flex-col">
            <span style={styles.title} className="text-xl font-semibold tracking-tight">
              {sitename}
            </span>
            <span style={styles.description} className="text-xs">
              {sitedesc} <span className="font-medium">{byname}</span>
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['Home', 'About', 'Services', 'Contact'].map((item) => (
            <Link
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              style={styles.navLink}
              className="relative font-medium hover:opacity-80 transition-opacity duration-200 group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>

        {/* Theme toggle with enhanced styling */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsDark(!isDark)}
            className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none"
            style={styles.buttonToggle}
          >
            <span className="sr-only">Toggle theme</span>
            <span
              className="inline-block h-4 w-4 transform rounded-full bg-white shadow-lg transition-transform duration-300"
              style={styles.toggleCircle}
            />
            <span className="absolute right-1.5 top-1/2 -translate-y-1/2 text-xs">
              {isDark ? '🌙' : '☀️'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu button - shown only on small screens */}
      <button className="md:hidden fixed bottom-4 right-4 bg-primary text-white p-3 rounded-full shadow-lg">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </header>
  );
};

Header.propTypes = {
  sitename: PropTypes.string.isRequired,
  sitedesc: PropTypes.string.isRequired,
  byname: PropTypes.string.isRequired,
};

export default Header;
