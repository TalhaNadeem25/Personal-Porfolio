import React, { useState } from 'react';

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  const projects = [
    { 
      title: "Stock Recording System Application",
      description: "Developed a Stock Recording System (SRS), an Android app using Kotlin that allows users to add stocks to their watchlist",
      type: "Andriod Mobile Application",
      codeLink: "https://github.com/TalhaNadeem25/My_Application"
    },
    {
      title:"Pakistan Student Association (PSA) Website",
      description: "Designed and developed a website for the Pakistan Student Association (PSA) at UTA using Node.js with TypeScript, MongoDB for database management, and deployed via Vercel for seamless hosting and performance.",
      type: "Full Stack Development",
    },
    { 
      title: "Shell Development Project ",
      description: "Built a custom Unix shell in C with interactive/batch modes, supporting built-in commands (cd, exit, quit), error handling, and process control with fork() and execvp() for I/O redirection.",
      type: "C Programming"
    },
    { 
      title: "Amazon Clone",
      description: "Created Amazon main page using HTML and CSS",
      type: "Frontend Development"
    },
    { 
      title: "Multiplayer Battleship Game",
      description: "Developed a multiplayer Battleship game in Java for 2-4 players with ship placement, firing, real-time updates, turn management, error handling, and visual feedback.",
      type: "Java Programming",
    }
  ];

  return (
    <div className="projects-container">
      <div className="projects-wrapper">
        <h2 className="projects-title">
          Projects
          <div className="Pro-title-underline"></div>
        </h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card ${hoveredIndex === index ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                transform: hoveredIndex === index 
                  ? 'scale(1.02) rotateX(5deg) rotateY(5deg)' 
                  : 'scale(1) rotateX(0) rotateY(0)'
              }}
            >
              <div className="card-content">
                <div>
                  <span className="project-type">{project.type}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .projects-container {
          min-height: 100vh;
          background: #1a1a1a;
          padding: 2rem;
          perspective: 1000px;
        }

        .projects-wrapper {
          max-width: 1200px;
          margin: 0 auto;
        }

        .projects-title {
          font-size: 2.5rem;
          font-weight: bold;
          color: #ffffff;
          margin-bottom: 0.5rem;
          position: relative;
        }

        .projects-subtitle {
          color: #a0a0a0;
          margin-bottom: 3rem;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .project-card {
          position: relative;
          height: 350px;
          background: linear-gradient(145deg, #2a2a2a, #333333);
          border-radius: 16px;
          padding: 1.5rem;
          transition: all 0.3s ease;
          cursor: pointer;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .project-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 16px;
          padding: 2px;
          background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
          -webkit-mask: 
            linear-gradient(#fff 0 0) content-box, 
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-card.hovered::before {
          opacity: 1;
        }

        .card-content {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .project-type {
          display: inline-block;
          padding: 0.5rem 1rem;
          background: rgba(78, 205, 196, 0.2);
          color: #4ecdc4;
          border-radius: 20px;
          font-size: 0.875rem;
          margin-bottom: 1rem;
        }

        .project-title {
          font-size: 1.5rem;
          font-weight: bold;
          color: #ffffff;
          margin-bottom: 0.5rem;
        }



        .project-description {
          color: #a0a0a0;
          line-height: 1.5;
        }

        .button-group {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }

        .demo-button, .code-button {
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          font-weight: 600;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
        }

        .demo-button {
          background: #ff6b6b;
          color: white;
        }

        .demo-button:hover {
          background: #ff5252;
          transform: translateY(-2px);
        }

        .code-button {
          background: transparent;
          color: #4ecdc4;
          border: 2px solid #4ecdc4;
        }

        .code-button:hover {
          background: rgba(78, 205, 196, 0.1);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
            height: 100vh;
          }

          .project-card {
            height: 330px;
          }
          .projects-container{
          min-height: 150vh;}
        }
      `}</style>
    </div>
  );
};

export default Projects;
