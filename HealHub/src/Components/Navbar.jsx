import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css"; // Import CSS file

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Toggle dropdown when clicking "Services"
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Close dropdown when a link is clicked
  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar p-3">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand custom-brand d-flex align-items-center" to="/Home">
          <img
            src="/src/assets/logo.jpg"
            alt="HealHub Logo"
            className="me-2"
            style={{ height: "60px" }}
          />
          HealHub
        </Link>

        {/* Navbar Toggler for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link custom-link" to="/Home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-link" to="/about">About</Link>
            </li>

            {/* Clickable Dropdown */}
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle custom-link"
                role="button"
                onClick={toggleDropdown}
                aria-expanded={dropdownOpen}
              >
                Services
              </span>

              {/* Dropdown Menu */}
              <div className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
                <Link
                  className="dropdown-item custom-dropdown-item"
                  to="/counselling"
                  onClick={closeDropdown}
                >
                  Counselling
                </Link>
                <Link
                  className="dropdown-item custom-dropdown-item"
                  to="/Therapy"
                  onClick={closeDropdown}
                >
                  Therapy Session
                </Link>
                <Link
                  className="dropdown-item custom-dropdown-item"
                  to="/Support"
                  onClick={closeDropdown}
                >
                  Support Groups
                </Link>
                <Link
                  className="dropdown-item custom-dropdown-item"
                  to="/Recommendations"
                  onClick={closeDropdown}
                >
                  Recommendations
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-link" to="/contact">Contact</Link>
            </li>
          </ul>

          {/* Login & Signup Buttons */}
          <div className="d-flex gap-2">
            <Link className="btn btn-white" to="/login">Login</Link>
            <Link className="btn btn-dark" to="/signup">Signup</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
