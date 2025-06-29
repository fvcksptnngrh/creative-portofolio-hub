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
    config: { tension: 300, friction: 30 },
  });

  // Animasi untuk logo
  const logoSpring = useSpring({
    scale: isScrolled ? 1.1 : 1,
    config: { tension: 300, friction: 20 },
  });

  // Trail animation untuk menu items
  const menuItems = ['Home', 'About', 'Projects', 'Resume'];
  const menuTrail = useTrail(menuItems.length, {
    opacity: isMobileMenuOpen ? 1 : 0,
    x: isMobileMenuOpen ? 0 : 20,
    config: { tension: 300, friction: 20 },
    delay: 100,
  });

  // Animasi untuk hamburger menu
  const hamburgerSpring = useSpring({
    rotate: isMobileMenuOpen ? 180 : 0,
    config: { tension: 300, friction: 20 },
  });

  return (
    <animated.nav className="navbar modern-navbar" style={{ backgroundColor: navbarSpring.backgroundColor }}>
      <div className="navbar-container">
        <animated.div className="navbar-logo" style={{
          transform: logoSpring.scale.to(s => `scale(${s})`)
        }}>
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
              style={{
                opacity: style.opacity,
                transform: style.x.to(x => `translateX(${x}px)`),
              }}
            >
              {menuItems[index]}
            </animated.a>
          ))}
        </div>

        <animated.div 
          className={`hamburger modern-hamburger ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            transform: hamburgerSpring.rotate.to(r => `rotate(${r}deg)`),
          }}
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