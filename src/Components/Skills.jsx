import React from "react";

import reactIcon from "../assets/1174949_js_react js_logo_react_react native_icon.png";
import javaIcon from "../assets/4373217_java_logo_logos_icon.png";
import cssIcon from "../assets/css-3.png";
import htmlIcon from "../assets/html-5.png";
import androidIcon from "../assets/icons8-android-studio-240.png";
import jsIcon from "../assets/js.png";
import cIcon from "../assets/letter-c.png";

const Skills = () => {
  const skills = [
    { name: "HTML", image: htmlIcon, color: "#E44D26" },
    { name: "CSS", image: cssIcon, color: "#264DE4" },
    { name: "JavaScript", image: jsIcon, color: "#F7DF1E" },
    { name: "React", image: reactIcon, color: "#61DAFB" },
    { name: "C", image: cIcon, color: "#00599C" },
    { name: "Java", image: javaIcon, color: "#007396" },
    { name: "Android", image: androidIcon, color: "#3DDC84" },
  ];

  return (
    <div className="skills-container" name="Skills">
      <div className="skills-content">
        <div className="skills-header">
          <h2 className="skills-title">
            Skills
            <div className="title-underline"></div>
          </h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className="skill-card"
              style={{ 
                '--delay': `${index * 0.1}s`,
                '--hover-color': skill.color 
              }}
            >
              <div className="skill-icon-wrapper">
                <img 
                  src={skill.image} 
                  alt={`${skill.name} icon`} 
                  className="skill-icon"
                />
              </div>
              <span className="skill-name">{skill.name}</span>
              <div className="skill-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
