import React from 'react';
import './ProjectCards.css';

const ProjectCard = ({ title, description, image, technologies, github, demo, featured }) => {
  return (
    <div className={`project-card ${featured ? 'featured' : ''}`}>
      <div className="project-image">
        <div className="project-icon">{image}</div>
      </div>
      
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        
        <div className="project-technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="project-links">
          <a 
            href={github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-link github-link"
          >
            <span>📁</span> Code
          </a>
          <a 
            href={demo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-link demo-link"
          >
            <span>🌐</span> Live Demo
          </a>
        </div>
      </div>
      
      {featured && <div className="featured-badge">Featured</div>}
    </div>
  );
};

export default ProjectCard; 