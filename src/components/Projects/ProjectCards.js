import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './ProjectCards.css';

const ProjectCard = ({ title, description, image, technologies, github, demo, featured, category }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Animasi hover untuk card
  const cardSpring = useSpring({
    y: isHovered ? -10 : 0,
    scale: isHovered ? 1.02 : 1,
    config: { tension: 300, friction: 20 },
  });

  // Animasi untuk image
  const imageSpring = useSpring({
    scale: isHovered ? 1.1 : 1,
    config: { tension: 300, friction: 20 },
  });

  // Animasi untuk content
  const contentSpring = useSpring({
    opacity: isHovered ? 1 : 0.9,
    y: isHovered ? -5 : 0,
    config: { tension: 300, friction: 20 },
  });

  return (
    <animated.div 
      className={`project-card modern-card ${featured ? 'featured' : ''}`}
      style={{
        transform: cardSpring.y.to((y) => `translateY(${y}px)`).to((t) => cardSpring.scale.to((s) => `${t} scale(${s})`)),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Featured Badge */}
      {featured && (
        <div className="featured-badge">
          <span>⭐ Featured</span>
        </div>
      )}

      {/* Category Badge */}
      <div className="category-badge">
        <span>{category || 'Web'}</span>
      </div>

      {/* Project Image */}
      <div className="project-image-container">
        <animated.div className="project-image" style={{
          transform: imageSpring.scale.to(s => `scale(${s})`)
        }}>
          <div className="project-icon">
            {typeof image === 'string' && image.startsWith('/') ? (
              <img src={image} alt={title} />
            ) : (
              <span role="img" aria-label="project-emoji">{image}</span>
            )}
          </div>
        </animated.div>
        
        {/* Overlay with links */}
        <div className="project-overlay">
          <div className="overlay-links">
            {github && (
              <a 
                href={github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="overlay-link github-link"
                onClick={(e) => e.stopPropagation()}
              >
                <span>📁</span>
                <span>Code</span>
              </a>
            )}
            {demo && (
              <a 
                href={demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="overlay-link demo-link"
                onClick={(e) => e.stopPropagation()}
              >
                <span>🌐</span>
                <span>Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
      
      {/* Project Content */}
      <animated.div className="project-content" style={{
        opacity: contentSpring.opacity,
        transform: contentSpring.y.to(y => `translateY(${y}px)`)
      }}>
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        
        {/* Technologies */}
        <div className="project-technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </animated.div>
    </animated.div>
  );
};

export default ProjectCard; 