import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 && window.innerWidth > 768) {
        // adjust scroll distance
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
        className={`navbar navbar-expand-lg navbar-dark px-3 fixed-top ${
          scrolled ? "navbar-bg" : "navbar-transparent"
        }`}
      >
        <Link className="navbar-brand" to="/">
          Divyansh
        </Link>

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

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/projects">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white"
                href="https://github.com/divyansh896"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white"
                href="https://www.linkedin.com/in/divyansh-divyansh-318a2a33a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
  );
}

export default Navbar;
