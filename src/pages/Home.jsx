import React from 'react';
import profilePic from '../assets/profile.jpeg';
import Skills from '../components/Skills'; 

function Home() {
  return (
    <div className="home-container">
      <h1>Aditya Kommireddi</h1>
      <img src={profilePic} alt="Aditya Kommireddi" className="profile-img" />
      
      <section>
        <h2>About Me</h2>
        <p>I’m a Computer Science student with a strong interest in data science and NLP. I enjoy working on projects that involve analyzing data, identifying patterns, and building practical solutions.

I have a problem-solving mindset and enjoy understanding the underlying patterns and details in data. I’m continuously working on improving my technical skills and am looking to start my career in data science or data engineering.

        </p>
      </section>

      <section>
        <h2>Research Interests</h2>
        <p>Natural Language Processing, Machine Learning, Data Science, Conversational AI, Large Language Models</p>
      </section>

      <section>
        <h2>Personal Details</h2>
        <ul>
          <li><strong>Phone</strong> 9963911029</li>
          <li><strong>Personal Email</strong> adityakommireddi7@gmail.com</li>
          <li><strong>College Email</strong> se23umcs025@mahindrauniversity.edu.in</li>
        </ul>
      </section>

      <section>
        <Skills />
      </section>
      
    </div>
  );
}

export default Home;