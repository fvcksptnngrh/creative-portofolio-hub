import React, { useState } from 'react';
import { useSpring, useTrail, animated, useInView } from 'react-spring';
import Techstack from './Techstack';
import Toolstack from './Toolstack';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [activeTab, setActiveTab] = useState('about');

  // Animasi untuk section title
  const titleSpring = useSpring({
    opacity: inView ? 1 : 0,
    y: inView ? 0 : 30,
    config: { tension: 120, friction: 18 },
  });

  // Trail animation untuk konten about
  const aboutItems = [
    {
      key: 'intro',
      content: (
        <div className="about-card">
          <h3>LET ME <span className="gradient-text">INTRODUCE</span> MYSELF</h3>
          <p>
            I fell in love with programming and I have at least learnt
            something, I think… 🤷‍♂️
          </p>
        </div>
      ),
    },
    {
      key: 'languages',
      content: (
        <div className="about-card">
          <h4>Programming Languages</h4>
          <p>
            I am fluent in classics like
            <i>
              <b className="highlight"> C++, Javascript and Python. </b>
            </i>
          </p>
        </div>
      ),
    },
    {
      key: 'interests',
      content: (
        <div className="about-card">
          <h4>Areas of Interest</h4>
          <p>
            My field of Interest's are building new &nbsp;
            <i>
              <b className="highlight">Web Technologies and Products </b> and
              also in areas related to{" "}
              <b className="highlight">
                Machine Learning.
              </b>
            </i>
          </p>
        </div>
      ),
    },
    {
      key: 'tech',
      content: (
        <div className="about-card">
          <h4>Modern Technologies</h4>
          <p>
            Whenever possible, I also apply my passion for developing products
            with <b className="highlight">Node.js</b> and
            <i>
              <b className="highlight">
                {" "}
                Modern Javascript Library and Frameworks
              </b>
            </i>
            &nbsp; like
            <i>
              <b className="highlight"> React.js and Next.js</b>
            </i>
          </p>
        </div>
      ),
    },
  ];

  const aboutTrail = useTrail(aboutItems.length, {
    opacity: inView ? 1 : 0,
    y: inView ? 0 : 40,
    config: { mass: 1, tension: 120, friction: 18 },
    delay: 200,
  });

  // Animasi untuk profile image
  const profileSpring = useSpring({
    opacity: inView ? 1 : 0,
    scale: inView ? 1 : 0.8,
    rotate: inView ? 0 : -10,
    config: { tension: 100, friction: 20 },
    delay: 400,
  });

  // Animasi untuk floating effect
  const floatSpring = useSpring({
    loop: { reverse: true },
    from: { y: 0 },
    to: { y: 15 },
    config: { duration: 3000 },
  });

  return (
    <section id="about" className="about-section modern-about">
      <div className="about-container" ref={ref}>
        <animated.h2
          className="section-title modern-title"
          style={{
            opacity: titleSpring.opacity,
            transform: titleSpring.y.to(y => `translateY(${y}px)`),
          }}
        >
          About <span className="gradient-text">Me</span>
        </animated.h2>
        
        <div className="about-hero">
          <div className="about-content-grid">
            <div className="about-text-section">
              {aboutTrail.map((style, idx) => (
                <animated.div
                  key={aboutItems[idx].key}
                  style={{
                    opacity: style.opacity,
                    transform: style.y.to(y => `translateY(${y}px)`),
                  }}
                >
                  {aboutItems[idx].content}
                </animated.div>
              ))}
            </div>
            
            <animated.div
              className="about-visual-section"
              style={{
                opacity: profileSpring.opacity,
                transform: profileSpring.scale.to(s => `scale(${s})`).to(scale => profileSpring.rotate.to(r => `${scale} rotate(${r}deg)`)),
              }}
            >
              <animated.div
                className="profile-container"
                style={{
                  transform: floatSpring.y.to(y => `translateY(${y}px)`),
                }}
              >
                <div className="profile-card">
                  <div className="profile-avatar">
                    <span role="img" aria-label="developer">👨‍💻</span>
                  </div>
                  <div className="profile-info">
                    <h4>Full Stack Developer</h4>
                    <p>Passionate about creating amazing digital experiences</p>
                  </div>
                </div>
              </animated.div>
            </animated.div>
          </div>
        </div>

        <div className="skills-container">
          <div className="skills-header">
            <h3>Professional <span className="gradient-text">Skillset</span></h3>
            <p>Technologies I work with on a daily basis</p>
          </div>
          <Techstack />
        </div>

        <div className="tools-container">
          <div className="tools-header">
            <h3>Tools I <span className="gradient-text">Use</span></h3>
            <p>Development tools and platforms that power my workflow</p>
          </div>
          <Toolstack />
        </div>
      </div>
    </section>
  );
};

export default About; 