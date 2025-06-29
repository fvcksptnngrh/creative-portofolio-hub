import React, { useState } from 'react';
import { useSpring, useTrail, animated } from 'react-spring';
import './Footer.css';

const Footer = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  // Animasi untuk social links
  const socialLinks = [
    { icon: '🐙', name: 'GitHub', url: 'https://github.com/fvcksptnngrh' },
    { icon: '💼', name: 'LinkedIn', url: 'https://www.linkedin.com/in/adhiseptiannugroho' },
    { icon: '🐦', name: 'Twitter', url: 'https://twitter.com/your-twitter' },
    { icon: '📸', name: 'Instagram', url: 'https://www.instagram.com/adhisptian' },
  ];

  const socialTrail = useTrail(socialLinks.length, {
    opacity: 1,
    transform: 'translateY(0)',
    config: { tension: 300, friction: 20 },
    delay: 200,
  });

  // Animasi untuk contact items
  const contactItems = [
    { icon: '📧', text: 'adhiseptianngrh@gmail.com', type: 'email' },
    { icon: '📱', text: '+62 0851-5644-1371', type: 'phone' },
    { icon: '📍', text: 'Semarang, Indonesia', type: 'location' },
  ];

  const contactTrail = useTrail(contactItems.length, {
    opacity: 1,
    transform: 'translateX(0)',
    config: { tension: 300, friction: 20 },
    delay: 100,
  });

  // Animasi untuk hover effect
  const linkSpring = useSpring({
    transform: hoveredLink ? 'scale(1.1)' : 'scale(1)',
    boxShadow: hoveredLink 
      ? '0 10px 30px rgba(102, 126, 234, 0.3)' 
      : '0 4px 15px rgba(102, 126, 234, 0.1)',
    config: { tension: 300, friction: 20 },
  });

  return (
    <footer className="footer modern-footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Get In Touch</h3>
            <p className="footer-description">
              I'm always interested in hearing about new opportunities and exciting projects.
              Feel free to reach out if you'd like to connect!
            </p>
            <div className="contact-info">
              {contactTrail.map((style, index) => (
                <animated.div 
                  key={contactItems[index].type}
                  className="contact-item"
                  style={style}
                >
                  <span className="contact-icon">{contactItems[index].icon}</span>
                  {contactItems[index].type === 'email' ? (
                    <a href={`mailto:${contactItems[index].text}`}>
                      {contactItems[index].text}
                    </a>
                  ) : contactItems[index].type === 'phone' ? (
                    <a href={`tel:${contactItems[index].text}`}>
                      {contactItems[index].text}
                    </a>
                  ) : (
                    <span>{contactItems[index].text}</span>
                  )}
                </animated.div>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Follow Me</h3>
            <div className="social-links">
              {socialTrail.map((style, index) => (
                <animated.a
                  key={socialLinks[index].name}
                  href={socialLinks[index].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link modern-social-link"
                  style={{
                    ...style,
                    ...(hoveredLink === index ? linkSpring : {}),
                  }}
                  onMouseEnter={() => setHoveredLink(index)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <span className="social-icon">{socialLinks[index].icon}</span>
                  <span className="social-name">{socialLinks[index].name}</span>
                </animated.a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; 2024 Adhi Septian Nugroho. All rights reserved.
          </p>
          <p className="built-with">
            Built with <span className="heart">❤️</span> using React.js
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 