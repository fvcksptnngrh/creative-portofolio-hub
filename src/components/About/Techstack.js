import React from 'react';
import './Techstack.css';

const Techstack = () => {
  const techs = [
    {
      name: "HTML5",
      icon: "💻",
      color: "#E34F26"
    },
    {
      name: "CSS3",
      icon: "🎨",
      color: "#1572B6"
    },
    {
      name: "JavaScript",
      icon: "⚡",
      color: "#F7DF1E"
    },
    {
      name: "React",
      icon: "⚛️",
      color: "#61DAFB"
    },
    {
      name: "Node.js",
      icon: "🟢",
      color: "#339933"
    },
    {
      name: "Python",
      icon: "🐍",
      color: "#3776AB"
    },
    {
      name: "MongoDB",
      icon: "🍃",
      color: "#47A248"
    },
    {
      name: "Git",
      icon: "📚",
      color: "#F05032"
    },
    {
      name: "Bootstrap",
      icon: "🎯",
      color: "#7952B3"
    },
    {
      name: "Express.js",
      icon: "🚀",
      color: "#000000"
    },
    {
      name: "MySQL",
      icon: "🐬",
      color: "#4479A1"
    },
    {
      name: "AWS",
      icon: "☁️",
      color: "#FF9900"
    }
  ];

  return (
    <div className="techstack-container">
      <div className="techstack-grid">
        {techs.map((tech, index) => (
          <div 
            key={index} 
            className="tech-item"
            style={{ '--tech-color': tech.color }}
          >
            <div className="tech-icon">{tech.icon}</div>
            <div className="tech-name">{tech.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Techstack; 