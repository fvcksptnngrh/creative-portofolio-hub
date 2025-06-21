import React, { useState } from 'react';
import './Resume.css';

const Resume = () => {
  const [showCV, setShowCV] = useState(false);

  const education = [
    {
      degree: "Informatics Engineering",
      institution: "Satya Wacana Christian University",
      year: "2022 - present",
      description: "Studied computer science with focus on software engineering and web development."
    },
    {
      degree: "High School Diploma",
      institution: "SMK NEGERI PRINGSURAT",
      year: "2018 - 2021",
      description: "Completed high school with excellent academic performance."
    }
  ];

  const experience = [
    {
      position: "Full Stack Developer",
      company: "Tech Company",
      year: "2023 - Present",
      description: "Developed and maintained web applications using React, Node.js, and MongoDB. Collaborated with cross-functional teams to deliver high-quality software solutions."
    },
    {
      position: "Frontline Staff",
      company: "Taman Bunga Celosia",
      year: "2022 Jan - 2022 Aug",
      description: "Manage the daily operations of the company, including customer service, sales, and marketing."
    }
  ];

  const skills = [
    { category: "Frontend", items: ["React", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Material-UI"] },
    { category: "Backend", items: ["Node.js", "Express.js", "Python", "MongoDB", "MySQL", "REST APIs"] },
    { category: "Tools", items: ["Git", "VS Code", "Postman", "Docker", "AWS", "Heroku"] },
    { category: "Other", items: ["Agile", "Scrum", "UI/UX Design", "Responsive Design", "Performance Optimization"] }
  ];

  return (
    <section id="resume" className="resume-section">
      <div className="container">
        <h2 className="section-title">
          My <span className="purple">Resume</span>
        </h2>
        
        <div className="resume-content">
          <div className="resume-section-group">
            <h3>Education</h3>
            <div className="timeline">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4>{edu.degree}</h4>
                    <h5>{edu.institution}</h5>
                    <span className="timeline-year">{edu.year}</span>
                    <p>{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="resume-section-group">
            <h3>Experience</h3>
            <div className="timeline">
              {experience.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4>{exp.position}</h4>
                    <h5>{exp.company}</h5>
                    <span className="timeline-year">{exp.year}</span>
                    <p>{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="resume-section-group">
            <h3>Skills</h3>
            <div className="skills-grid">
              {skills.map((skillGroup, index) => (
                <div key={index} className="skill-category">
                  <h4>{skillGroup.category}</h4>
                  <div className="skill-items">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-item">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="resume-actions">
          <button 
            onClick={() => setShowCV(true)}
            className="btn btn-primary"
          >
            View Full CV
          </button>
          <a 
            href="/CV_Adhi Septian Nugroho.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            Download CV
          </a>
        </div>

        {/* CV Modal */}
        {showCV && (
          <div className="cv-modal-overlay" onClick={() => setShowCV(false)}>
            <div className="cv-modal" onClick={(e) => e.stopPropagation()}>
              <div className="cv-modal-header">
                <h3>Adhi Septian Nugroho - CV</h3>
                <button 
                  className="cv-modal-close"
                  onClick={() => setShowCV(false)}
                >
                  ×
                </button>
              </div>
              <div className="cv-modal-content">
                <iframe
                  src="/CV_Adhi Septian Nugroho.pdf"
                  title="Adhi Septian Nugroho CV"
                  width="100%"
                  height="600px"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Resume; 