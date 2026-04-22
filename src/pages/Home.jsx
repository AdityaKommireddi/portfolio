import React from 'react';
import profilePic from '../assets/profile.jpeg';
import Skills from '../components/Skills'; 

function Home() {
  return (
    <div className="home-container">
      {/* Profile Header Section */}
      <div className="hero-header">
        <img src={profilePic} alt="Aditya" className="profile-img" />
        <h1>Aditya Kommireddi</h1>
      </div>
      
      {/* About Me Section*/}
      <section>
        <h2>About Me</h2>
        <p>
          I’m a Computer Science student with a strong interest in data science and NLP. 
          I enjoy working on projects that involve analyzing data, identifying patterns, and building practical solutions. 
          I have a problem-solving mindset and enjoy understanding the underlying patterns in data.
        </p>
      </section>

      {/* Research Interests */}
      <section>
        <h2>Research Interests</h2>
        <p>Natural Language Processing, Machine Learning, Data Science, Conversational AI, Large Language Models</p>
      </section>

      {/* Personal Details  */}
      <section>
        <h2>Personal Details</h2>
        <ul className="details-list">
          <li>
            <strong>Phone</strong> 
            9963911029
          </li>
          <li>
            <strong>Personal Email</strong> 
            adityakommireddi7@gmail.com
          </li>
          <li>
            <strong>College Email</strong> 
            se23umcs025@mahindrauniversity.edu.in
          </li>
          <li>
            <strong>Roll Number</strong> 
            SE23UMCS025
          </li>
        </ul>
      </section>

      {/* Skills Matrix Section */}
      <section>
        <Skills />
      </section>
      
    </div>
  );
}

export default Home;