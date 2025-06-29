import React, { useState } from 'react';
import { useSpring, useTrail, animated, useInView } from 'react-spring';
import ProjectCard from './ProjectCards';
import projects from '../../data/projectsData';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [filter, setFilter] = useState('all');

  // Animasi untuk section title
  const titleSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(30px)',
    config: { tension: 120, friction: 18 },
  });

  // Trail animation untuk project cards
  const projectTrail = useTrail(projects.length, {
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.9)',
    config: { mass: 1, tension: 120, friction: 18 },
    delay: 300,
  });

  // Filter projects based on category
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const categories = ['all', 'web', 'mobile', 'fullstack'];

  return (
    <section id="projects" className="projects-section modern-projects">
      <div className="projects-container" ref={ref}>
        <animated.div className="projects-header" style={titleSpring}>
          <h2 className="section-title modern-title">
            My Recent <span className="gradient-text">Works</span>
          </h2>
          <p className="section-subtitle">
            Here are some of the projects I've built with passion and creativity
          </p>
        </animated.div>

        {/* Filter Tabs */}
        <div className="filter-tabs">
          {categories.map((category, index) => (
            <button
              key={category}
              className={`filter-tab ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <animated.div
              key={project.id || index}
              style={projectTrail[index]}
              className="project-wrapper"
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                github={project.github}
                demo={project.demo}
                featured={project.featured}
                category={project.category}
              />
            </animated.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <p>No projects found for this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects; 