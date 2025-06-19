import React from 'react';
import Techstack from './Techstack';
import Toolstack from './Toolstack';
import Github from './Github';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">
          About <span className="purple">Me</span>
        </h2>
        
        <div className="about-content">
          <div className="about-text">
            <h3>LET ME <span className="purple">INTRODUCE</span> MYSELF</h3>
            <p>
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
            </p>
            <p>
              I am fluent in classics like
              <i>
                <b className="purple"> C++, Javascript and Python. </b>
              </i>
            </p>
            <p>
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Machine Learning.
                </b>
              </i>
            </p>
            <p>
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </div>
          
          <div className="about-image">
            <div className="about-profile">
              <div className="about-image-placeholder">
                <span>👨‍💻</span>
              </div>
            </div>
          </div>
        </div>

        <div className="skills-section">
          <h3>Professional <span className="purple">Skillset</span></h3>
          <Techstack />
        </div>

        <div className="tools-section">
          <h3>Tools I <span className="purple">Use</span></h3>
          <Toolstack />
        </div>

        <div className="github-section">
          <h3>Days I <span className="purple">Code</span></h3>
          <Github />
        </div>
      </div>
    </section>
  );
};

export default About; 