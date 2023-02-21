import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import {
//   BrowserRouter as Router, 
//   Switch, 
//   Route,
//   Link,
// } from 'react-router-dom';

function Navbar(props) {

  return (
    <div>
      <header className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <svg
                className="bi me-2"
                width={40}
                height={32}
                role="img"
                aria-label="Bootstrap"
              >
                <use xlinkHref="#bootstrap" />
              </svg>
            </a>
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a href="#" className="nav-link px-2 text-secondary">
                  {props.home}
                </a>
              </li>
              <li>
                <Link to="/" className="nav-link px-2 text-white">
                  Text Utils
                </Link>
              </li>
              <li>
                <Link to="/about" className="nav-link px-2 text-white">
                  About Us
                </Link>
              </li>
              
            </ul>
            <form
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
              role="search"
            >
              <input
                type="search"
                className="form-control form-control-dark text-bg-dark"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>
            <div className="text-end">
              <button type="button" className="btn btn-outline-light me-2">
                Login
              </button>
              <button type="button" className="btn btn-warning">
                Sign-up
              </button>
            </div>
          </div>
        </div>
      </header>

   
    </div>
  );
}


Navbar.propTypes = {
  home: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  home: "Default Home",
};

export default Navbar;
