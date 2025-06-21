import React from 'react';
import ProjectCard from './ProjectCards';
import projects from '../../data/projectsData';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">
          My Recent <span className="purple">Works</span>
        </h2>
        <p className="section-subtitle">
          Here are a few projects I've worked on recently.
        </p>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              github={project.github}
              demo={project.demo}
              featured={project.featured}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 