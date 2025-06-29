import React from 'react';
import { useSpring, useTrail, animated } from 'react-spring';
import Type from './Type';
import './Home.css';

const items = [
  {
    key: 'title',
    content: (
      <h1 className="home-title">
        Hi, I am <span className="gradient-text">ADHI SEPTIAN NUGROHO</span>
      </h1>
    ),
  },
  {
    key: 'subtitle',
    content: (
      <h2 className="home-subtitle">
        <Type />
      </h2>
    ),
  },
  {
    key: 'desc',
    content: (
      <p className="home-description">
        Passionate about creating innovative solutions and turning ideas into reality.<br />
        I love building applications that solve real-world problems.
      </p>
    ),
  },
  {
    key: 'actions',
    content: (
      <div className="home-buttons">
        <a href="#projects" className="btn btn-primary modern-btn">
          View My Work
        </a>
        <a href="#about" className="btn btn-secondary modern-btn">
          Learn More
        </a>
      </div>
    ),
  },
];

const Home = () => {
  // Trail animasi untuk elemen teks
  const trail = useTrail(items.length, {
    from: { opacity: 0, y: 40 },
    to: { opacity: 1, y: 0 },
    config: { mass: 1, tension: 120, friction: 18 },
    delay: 200,
  });

  // Animasi melayang untuk avatar (hanya y)
  const avatarSpring = useSpring({
    loop: { reverse: true },
    from: { y: 0 },
    to: { y: 18 },
    config: { duration: 2200 },
  });

  return (
    <section id="home" className="home-section modern-bg">
      <div className="home-hero-container">
        <div className="home-hero-left">
          {trail.map((style, idx) => (
            <animated.div
              key={items[idx].key}
              style={{
                opacity: style.opacity,
                transform: style.y.to(y => `translateY(${y}px)`),
              }}
            >
              {items[idx].content}
            </animated.div>
          ))}
        </div>
        <div className="home-hero-right">
          <animated.div
            className="profile-glass"
            style={{
              transform: avatarSpring.y.to(y => `translateY(${y}px)`),
            }}
          >
            <div className="profile-avatar">
              <span role="img" aria-label="avatar" className="avatar-emoji">👨‍💻</span>
            </div>
          </animated.div>
        </div>
      </div>
      {/* Optional: Tambahkan partikel/gradient di background dengan CSS */}
      <div className="home-gradient-bg" />
    </section>
  );
};

export default Home; 