import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Get In Touch</h3>
            <p>
              I'm always interested in hearing about new opportunities and exciting projects.
              Feel free to reach out if you'd like to connect!
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <a href="mailto:adhiseptianngrh@gmail.com">adhiseptianngrh@gmail.com</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <a href="tel:+62085156441371">+62 0851-5644-1371</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>Semarang, Indonesia</span>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h3>Follow Me</h3>
            <div className="social-links">
              <a 
                href="https://github.com/fvcksptnngrh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <span>🐙</span> GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/adhiseptiannugroho" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <span>💼</span> LinkedIn
              </a>
              <a 
                href="https://twitter.com/your-twitter" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <span>🐦</span> Twitter
              </a>
              <a 
                href="https://www.instagram.com/adhisptian" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <span>📸</span> Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Adhi Septian Nugroho. All rights reserved.</p>
          <p>
            Built with ❤️ using React.js
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 