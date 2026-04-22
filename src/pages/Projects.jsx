import React from 'react';

function Projects() {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      
      <div className="project-card">
        <h2>PitStop AI</h2>
        <p>An NLP chatbot application developed to assist players with F1 game car setups. Features a manually curated dataset of over 1,100 examples and classifies 15 distinct intent categories.</p>
        <a href="[Insert GitHub Link]" target="_blank" rel="noreferrer">View on GitHub</a>
      </div>

      <div className="project-card">
        <h2>BidEval AI</h2>
        <p>An automated evaluation tool for government procurement bids, built using Streamlit and Gemini 1.5 Pro.</p>
        <a href="[Insert GitHub Link]" target="_blank" rel="noreferrer">View on GitHub</a>
      </div>
    </div>
  );
}

export default Projects;