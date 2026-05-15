import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">LUXURY</div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <Link to="/">HOME</Link>
        </li>

        <li>
          <a href="#villas">VILLAS</a>
        </li>

        <li>
          <a href="#experience">EXPERIENCES</a>
        </li>

        <li>
          <Link to="/gallery">GALLERY</Link>
        </li>

        <li>
          <a href="#contact">CONTACT</a>
        </li>
      </ul>

      <div className="nav-right">
        <Link to="/booking" className="book-btn-nav">
          Book Now
        </Link>

        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
