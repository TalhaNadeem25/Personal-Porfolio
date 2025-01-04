import React from "react";
import "../App.css";

const About = () => {
  return (
    <div className="about-container" name="About">
      <div className="about-content">
        <div className="title-container">
          <h2 className="about-title">
            About Me
            <div className="title-underline"></div>
          </h2>
        </div>
        
        <div className="about-text-container">
          <div className="about-text-wrapper">
            <p className="about-text">
              My name is <span className="highlight">Talha Nadeem</span>, and I am 
              currently pursuing a bachelor's degree in Software Engineering at the   
              <span className="highlight"> University of Texas at Arlington</span>. 
              Concurrently, I am proactively enhancing my skills in front-end 
              development.
            </p>
            <p className="about-text">
              I have a deep passion for coding and problem-solving. Front-end 
              development captivates me because it allows me to blend creativity 
              with technical proficiency, translating design concepts into 
              interactive and visually appealing web applications.
            </p>
          </div>
          
          <div className="background-accent"></div>
        </div>
      </div>
    </div>
  );
};

export default About;