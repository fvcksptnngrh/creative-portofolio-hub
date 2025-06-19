import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-text">Portfolio</span>
        </div>
        
        <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="nav-link">
            Home
          </a>
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="nav-link">
            About
          </a>
          <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }} className="nav-link">
            Projects
          </a>
          <a href="#resume" onClick={(e) => { e.preventDefault(); scrollToSection('resume'); }} className="nav-link">
            Resume
          </a>
        </div>

        <div 
          className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 