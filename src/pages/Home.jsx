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
          I am a Computer Science student at Mahindra University with a strong interest in data science and natural language processing.
I enjoy building data-driven systems that solve real-world problems and help users make better decisions.
My experience includes developing an NLP-based F1 chatbot that assists players through feedback-driven insights.
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