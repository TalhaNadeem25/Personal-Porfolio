import React from "react";
import "../App.css";
import MainImg from "../assets/web-developer-illustration-2005x2048-fal2biag.png";
import FaceImg from "../assets/facebook.svg";
import InstaImg from "../assets/instagram.svg";
import EmailImg from "../assets/envelope-solid.svg";
import LinkImg from "../assets/linkedin.svg";
import GitImg from "../assets/github.svg";
import DownImg from "../assets/download-solid.svg";
import Resume from "../Resume.pdf";

function Hero() {
  return (
    <div className="Container" name="Home">
      <div className="Introduction">
        <div className="Title--container">
          <h3>HI!</h3>
          <p>
            I'm Talha Nadeem, an undergrad software engineering student and
            intermediate front-end developer.
          </p>
        </div>
        <div className="Resume">
          <div className="Resume--button">
            <a href={Resume} download="Talha Nadeem Resume.pdf">
              <button>
                <span>Download Resume</span>
                <img src={DownImg} className="ResumeIcon" alt="Resume Icon" />
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="Social--Wrapper">
        <div className="Image--container">
          <img
            src={MainImg}
            className="Image"
            alt="Web Developer Illustration"
          />
        </div>
        <div className="Social--container">
          <ul>
            <li>
              <a href="https://www.facebook.com/talha.nadeem25">
                <img src={FaceImg} alt="Facebook" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/talhanadeem.25/">
                <img src={InstaImg} alt="Instagram" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/talha-nadeem-4021b8259/">
                <img src={LinkImg} alt="LinkedIn" />
              </a>
            </li>
            <li>
              <a href="https://github.com/TalhaNadeem25/">
                <img src={GitImg} alt="GitHub" />
              </a>
            </li>
            <li>
              <a href="https://mail.google.com/mail/u/0/#inbox">
                <img src={EmailImg} alt="Email" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Hero;
