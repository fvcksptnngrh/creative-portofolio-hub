import React from 'react';
import './Toolstack.css';

const Toolstack = () => {
  const tools = [
    {
      name: "VS Code",
      icon: "💻",
      color: "#007ACC"
    },
    {
      name: "GitHub",
      icon: "🐙",
      color: "#181717"
    },
    {
      name: "Postman",
      icon: "📮",
      color: "#FF6C37"
    },
    {
      name: "Figma",
      icon: "🎨",
      color: "#F24E1E"
    },
    {
      name: "Docker",
      icon: "🐳",
      color: "#2496ED"
    },
    {
      name: "Heroku",
      icon: "🚀",
      color: "#430098"
    },
    {
      name: "Vercel",
      icon: "▲",
      color: "#000000"
    },
    {
      name: "Netlify",
      icon: "🌐",
      color: "#00C7B7"
    }
  ];

  return (
    <div className="toolstack-container">
      <div className="toolstack-grid">
        {tools.map((tool, index) => (
          <div 
            key={index} 
            className="tool-item"
            style={{ '--tool-color': tool.color }}
          >
            <div className="tool-icon">{tool.icon}</div>
            <div className="tool-name">{tool.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toolstack; 