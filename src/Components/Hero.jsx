import React from "react";
import "../App.css";
import FacebookIcon from "../assets/facebook.png";
import GitHubIcon from "../assets/github.png";
import EmailIcon from "../assets/gmail.png";
import InstagramIcon from "../assets/instagram.png";
import LinkedInIcon from "../assets/linkedin.png";
import MainImg from "../assets/web-developer-illustration-2005x2048-fal2biag.png";


const Hero = () => {
  // These would be replaced with your actual image imports
  const socialLinks = [
    {
      platform: "Facebook",
      icon: FacebookIcon,
      url: "https://www.facebook.com/talha.nadeem25",
    },
    {
      platform: "Instagram",
      icon: InstagramIcon,
      url: "https://www.instagram.com/talhanadeem.25/",
    },
    {
      platform: "LinkedIn",
      icon: LinkedInIcon,
      url: "https://www.linkedin.com/in/talha-nadeem-4021b8259/",
    },
    {
      platform: "GitHub",
      icon: GitHubIcon,
      url: "https://github.com/TalhaNadeem25/",
    },
    {
      platform: "Email",
      icon: EmailIcon,
      url: "https://mail.google.com/mail/u/0/#inbox",
    },
  ];

  return (
    <div className="hero-container" name="Home">
      <div className="hero-content">
        <div className="hero-text-section">
          <div className="intro-container">
            <div className="greeting-animation">
              <h3 className="greeting">HI!</h3>
              <div className="greeting-background"></div>
            </div>
            <p className="intro-text">
              I'm <span className="highlight">Talha Nadeem</span>, an undergrad
              software engineering student and intermediate front-end developer.
            </p>
          </div>
          
          <div className="resume-section">
            <a 
              href="../Resume.pdf"
              download="Talha Nadeem Resume.pdf"
              className="resume-button"
            >
              <span>Download Resume</span>
              <div className="download-icon">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M12 16l-5-5h3V4h4v7h3l-5 5zm5 4H7v-2h10v2z"/>
                </svg>
              </div>
            </a>
          </div>
        </div>

        <div className="hero-visual-section">
          <div className="main-image-container">
            <div className="image-background"></div>
            <img
              src={MainImg}
              alt="Web Developer Illustration"
              className="main-image"
            />
          </div>

          <div className="social-links">
            <ul>
              {socialLinks.map((link, index) => (
                <li key={link.platform} style={{ animationDelay: `${index * 0.1}s` }}>
                  <a 
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <img src={link.icon} alt={link.platform} />
                    <span className="social-hover-text">{link.platform}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;