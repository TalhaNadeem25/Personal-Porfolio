import React, { useState } from "react";
import { Link } from "react-scroll";
import "../App.css";
import TitleImg from "../assets/Logo.webp";
import HamImg from "../assets/bars-solid.svg";
import CloseImg from "../assets/x-solid.svg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav>
        <div className="Title--Text">
          <a href="#">
            <img src={TitleImg} alt="Logo" />
          </a>
          <p>Portfolio</p>
        </div>

        {/* Navbar links for larger screens */}
        <div className="Nav--list">
          <ul className="list">
            <li className="list--title">
              <Link to="Home" smooth={true} duration={700}>
                Home
              </Link>
            </li>
            <li className="list--title">
              <Link to="About" smooth={true} duration={700} offset={-100}>
                About
              </Link>
            </li>
            <li className="list--title">
              <Link to="Skills" smooth={true} offset={-80} duration={700}>
                Skills
              </Link>
            </li>
            <li className="list--title">
              <Link to="Projects" smooth={true} offset={-200} duration={800}>
                Projects
              </Link>
            </li>
            <li className="list--title">
              <Link to="Contacts" smooth={true} offset={0} duration={1000}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Hamburger Icon */}
        <img
          src={HamImg}
          className="Ham--Img"
          onClick={handleClick}
          alt="Open Menu"
          style={{ display: menuOpen ? "none" : "block" }}
        />

        {/* Sidebar for smaller screens */}
        <div
          className="Side--Bar"
          style={{ display: menuOpen ? "flex" : "none" }}
        >
          <img
            src={CloseImg}
            className="Close--btn"
            onClick={handleClick}
            alt="Close Menu"
          />
          <ul>
            <li className="list--title" onClick={handleClick}>
              <Link to="Home" smooth={true} duration={700}>
                Home
              </Link>
            </li>
            <li className="list--title" onClick={handleClick}>
              <Link to="About" smooth={true} duration={700} offset={-100}>
                About
              </Link>
            </li>
            <li className="list--title" onClick={handleClick}>
              <Link to="Skills" smooth={true} offset={-80} duration={700}>
                Skills
              </Link>
            </li>
            <li className="list--title" onClick={handleClick}>
              <Link to="Projects" smooth={true} offset={-200} duration={500}>
                Projects
              </Link>
            </li>
            <li className="list--title" onClick={handleClick}>
              <Link to="Contacts" smooth={true} offset={0} duration={800}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
