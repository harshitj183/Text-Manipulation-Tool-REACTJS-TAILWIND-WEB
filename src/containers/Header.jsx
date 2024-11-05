import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        {/* Logo and title */}
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <div>
            <img
              className="w-20 h-20 rounded-full"
              src="/Favicon/logo.png"
              alt="Logo"
            />
          </div>
          <span className="ml-3 text-xl">{props.sitename}</span>
          <span className="ml-1 text-xs h-2">
            ({props.sitedesc} <b>{props.byname}</b>)
          </span>
        </a>

        {/* Navigation links */}
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="mr-5 hover:text-gray-900">
            Home
          </Link>
          <Link to="/about" className="mr-5 hover:text-gray-900">
            About
          </Link>
        </nav>

        {/* Toggle switch */}
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            defaultChecked
          />
          <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
        </label>
      </div>
    </header>
  );
}

Header.propTypes = {
  sitename: PropTypes.string,
  sitedesc: PropTypes.string,
  byname: PropTypes.string,
};
