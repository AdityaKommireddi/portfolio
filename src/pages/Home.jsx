import React from 'react';
import profilePic from '../assets/profile.jpeg';

function Home() {
  return (
    <div className="home-container">
      <h1>Aditya Kommireddi</h1>
      <img src={profilePic} alt="Aditya Kommireddi" className="profile-img" />
      
      <section>
        <h2>About Me</h2>
        <p>I'm a computer science student with a strong interest in data science and NLP. I enjoy workin on projects that involve analyzing data, identigying patterns and building practical solutions.
            I have a problem-mindset and enjoy understanding the patterns and small details in data. I keep focusing on inproving my skills and looking to start my career in data science.
        </p>
      </section>

      <section>
        <h2>Research Interests</h2>
        <p>Natural Language Processing, Machine Learning, Data Science and developing sophisticated knowledge bases.</p>
      </section>

      <section>
        <h2>Personal Details</h2>
        <ul>
          <li><strong>Phone:</strong> [9963911029]</li>
          <li><strong>Personal Email:</strong> [adityakommireddi7@gmail.com]</li>
          <li><strong>College Email:</strong> [se23umcs025@mahindrauniversity.edu.in]</li>
          <li><strong>Skills:</strong> Python, React, Java, MySQL, R</li>
        </ul>
      </section>
    </div>
  );
}

export default Home;