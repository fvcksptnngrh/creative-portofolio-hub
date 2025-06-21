import React from 'react';
import ProjectCard from '../Projects/ProjectCards';
import projects from '../../data/projectsData';
import './FeaturedProjects.css';

const FeaturedProjects = () => {
  const featured = projects.filter(project => project.featured);

  return (
    <div className="featured-projects-section">
      <h3 className="section-subtitle">
        My Featured <span className="purple">Projects</span>
      </h3>
      <p>Here are a few projects I'm particularly proud of.</p>
      <div className="projects-grid">
        {featured.map((project, index) => (
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
  );
};

export default FeaturedProjects; 