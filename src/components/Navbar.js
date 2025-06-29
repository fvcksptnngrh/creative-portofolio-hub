import React, { useState, useEffect } from 'react';
import { useSpring, useTrail, animated } from 'react-spring';
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

  // Animasi untuk navbar background
  const navbarSpring = useSpring({
    backgroundColor: isScrolled 
      ? 'rgba(255, 255, 255, 0.95)' 
      : 'rgba(255, 255, 255, 0.1)',
    backdropFilter: isScrolled ? 'blur(20px)' : 'blur(10px)',
    boxShadow: isScrolled 
      ? '0 8px 32px rgba(31, 38, 135, 0.1)' 
      : 'none',
    config: { tension: 300, friction: 30 },
  });

  // Animasi untuk logo
  const logoSpring = useSpring({
    transform: isScrolled ? 'scale(1.1)' : 'scale(1)',
    config: { tension: 300, friction: 20 },
  });

  // Trail animation untuk menu items
  const menuItems = ['Home', 'About', 'Projects', 'Resume'];
  const menuTrail = useTrail(menuItems.length, {
    opacity: isMobileMenuOpen ? 1 : 0,
    transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(20px)',
    config: { tension: 300, friction: 20 },
    delay: 100,
  });

  // Animasi untuk hamburger menu
  const hamburgerSpring = useSpring({
    transform: isMobileMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)',
    config: { tension: 300, friction: 20 },
  });

  return (
    <animated.nav className="navbar modern-navbar" style={navbarSpring}>
      <div className="navbar-container">
        <animated.div className="navbar-logo" style={logoSpring}>
          <span className="logo-text gradient-text">Portfolio</span>
        </animated.div>
        
        <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          {menuTrail.map((style, index) => (
            <animated.a
              key={menuItems[index]}
              href={`#${menuItems[index].toLowerCase()}`}
              onClick={(e) => { 
                e.preventDefault(); 
                scrollToSection(menuItems[index].toLowerCase()); 
              }}
              className="nav-link modern-link"
              style={style}
            >
              {menuItems[index]}
            </animated.a>
          ))}
        </div>

        <animated.div 
          className={`hamburger modern-hamburger ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={hamburgerSpring}
        >
          <span></span>
          <span></span>
          <span></span>
        </animated.div>
      </div>
    </animated.nav>
  );
};

export default Navbar; 