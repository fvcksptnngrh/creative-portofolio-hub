import React from 'react';
import Type from './Type';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <div className="home-text">
          <h1 className="home-title">
            Hi There, <span className="wave">👋</span>
          </h1>
          <h1 className="home-subtitle">
            I'M <span className="purple">ADHI SEPTIAN NUGROHO</span>
          </h1>
          <div className="home-type">
            <Type />
          </div>
          <p className="home-description">
            Passionate about creating innovative solutions and turning ideas into reality.
            I love building applications that solve real-world problems.
          </p>
          <div className="home-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#about" className="btn btn-secondary">
              Learn More
            </a>
          </div>
        </div>
        <div className="home-image">
          <div className="profile-image">
            <div className="image-placeholder">
              <span>👨‍💻</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home; 