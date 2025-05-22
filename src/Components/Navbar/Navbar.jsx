import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Logo solda */}
        <div className="navbar-logo">
          <Link
            to="top"
            smooth={true}
            duration={800}
            onClick={handleLinkClick}
            className="nav-link"
          >
            My<span className="logo-accent">Portfolio</span>
          </Link>
        </div>

        {/* Menüyü ortalamak için bir wrapper */}
        <div className="navbar-center-wrapper">
          <div className="navbar-center">
            <ul className={`navbar-menu ${menuOpen ? "active" : ""}`}>
              <li>
                <Link
                  to="hero"
                  smooth={true}
                  duration={800}
                  spy={true}
                  onClick={handleLinkClick}
                  className="nav-link"
                  activeClass="nav-link active-box"
                >
                  Anasayfa
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  smooth={true}
                  duration={800}
                  spy={true}
                  onClick={handleLinkClick}
                  className="nav-link"
                  activeClass="nav-link active-box"
                >
                  Ben Kimim?
                </Link>
              </li>
              <li>
                <Link
                  to="skills"
                  smooth={true}
                  duration={800}
                  spy={true}
                  onClick={handleLinkClick}
                  className="nav-link"
                  activeClass="nav-link active-box"
                >
                  Neler Yapıyorum?
                </Link>
              </li>
              <li>
                <Link
                  to="portfolio"
                  smooth={true}
                  duration={800}
                  spy={true}
                  onClick={handleLinkClick}
                  className="nav-link"
                  activeClass="nav-link active-box"
                >
                  Portfolyo
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  duration={800}
                  spy={true}
                  onClick={handleLinkClick}
                  className="nav-link"
                  activeClass="nav-link active-box"
                >
                  İletişim
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Hamburger butonu sağda */}
        <button className="navbar-toggle" onClick={handleToggle}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;