import React from 'react';
import ProjectCard from './ProjectCard';
import projectsData from '../data/projects'; 

function Portfolio() {
  return (
    <div className="portfolio-container">
      <h1>My Projects</h1>
      <div className="project-grid">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;