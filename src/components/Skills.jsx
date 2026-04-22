import React from 'react';
import './Skills.css'; // We will create this file next

const skillData = [
  { category: "Languages", skills: ["C", "Python", "Java", "JavaScript", "R", "TypeScript"] },
  { category: "AI / ML & Data", skills: ["PyTorch", "Scikit-Learn", "LLM Models", "Pandas", "NumPy", "FAISS", "Weka", "PowerBI"] },
  { category: "Backend & Web", skills: ["Flask", "React", "Node.js"] },
  { category: "Tools", skills: ["API Development", "Docker", "Jira"] }
];

const Skills = () => {
  return (
    <div className="skills-section">
      <h2 className="section-title">Skills</h2>
      {skillData.map((group) => (
        <div key={group.category} className="skill-group">
          <h3 className="skill-category">● {group.category}</h3>
          <div className="skills-grid">
            {group.skills.map((skill) => (
              <span key={skill} className="skill-pill">{skill}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;