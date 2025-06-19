import React from 'react';
import ProjectCard from './ProjectCards';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration with Stripe.",
      image: "🛒",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/your-username/ecommerce-platform",
      demo: "https://ecommerce-demo.vercel.app",
      featured: true
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "📋",
      technologies: ["React", "Firebase", "Material-UI"],
      github: "https://github.com/your-username/task-manager",
      demo: "https://task-manager-demo.vercel.app",
      featured: true
    },
    {
      title: "Weather Dashboard",
      description: "A weather application that displays current weather conditions and forecasts using OpenWeatherMap API with beautiful UI design.",
      image: "🌤️",
      technologies: ["React", "OpenWeatherMap API", "CSS3"],
      github: "https://github.com/your-username/weather-app",
      demo: "https://weather-dashboard.vercel.app",
      featured: false
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website built with React and modern CSS, featuring smooth animations and interactive elements.",
      image: "💼",
      technologies: ["React", "CSS3", "JavaScript"],
      github: "https://github.com/your-username/portfolio",
      demo: "https://your-portfolio.vercel.app",
      featured: false
    },
    {
      title: "Blog Platform",
      description: "A content management system for blogs with markdown support, user authentication, and admin dashboard.",
      image: "📝",
      technologies: ["Next.js", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/your-username/blog-platform",
      demo: "https://blog-platform.vercel.app",
      featured: false
    },
    {
      title: "Chat Application",
      description: "Real-time chat application with user authentication, message history, and file sharing capabilities.",
      image: "💬",
      technologies: ["React", "Socket.io", "Express"],
      github: "https://github.com/your-username/chat-app",
      demo: "https://chat-app-demo.vercel.app",
      featured: false
    }
  ];

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