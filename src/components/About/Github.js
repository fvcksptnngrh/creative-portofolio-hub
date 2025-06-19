import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import './Github.css';

const Github = () => {
  return (
    <div className="github-container">
      <div className="github-calendar">
        <GitHubCalendar 
          username="fvcksptnngrh"
          colorScheme="light"
          fontSize={12}
          blockSize={12}
          blockMargin={4}
        />
      </div>
      <div className="github-stats">
        <div className="github-stat">
          <h4>GitHub Stats</h4>
          <div className="stat-placeholder">
            <p>Connect your GitHub account to see your stats</p>
            <a 
              href="https://github.com/fvcksptnngrh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="github-link"
            >
              View Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Github; 