import React from 'react';
import './Projects.css';

const projectData = [
  {
    title: "PitStop AI",
    description: "An NLP chatbot application developed to assist players with F1 game car setups. Features a manually curated dataset of over 1,100 examples and classifies 15 distinct intent categories.",
    tech: ["NLP", "Python", "F1 Sim", "Intent Classification"],
    link: "https://github.com/AdityaKommireddi/PitStop-AI"
  },
  {
    title: "BidEval AI",
    description: "An automated evaluation tool for government procurement bids, built using Streamlit and Gemini 1.5 Pro to automate complex document reasoning.",
    tech: ["Streamlit", "Gemini 1.5 Pro", "LLMs", "Automation"],
    link: "https://github.com/AdityaKommireddi/BidEval-AI"
  }
];

function Projects() {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div key={index} className="project-box">
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <div className="tech-stack">
                {project.tech.map((item, i) => (
                  <span key={i} className="tech-tag">{item}</span>
                ))}
              </div>
            </div>
            
            <a href={project.link} target="_blank" rel="noreferrer" className="github-btn">
              VIEW ON GITHUB
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;