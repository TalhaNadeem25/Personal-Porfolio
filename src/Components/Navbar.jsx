import React, { useState } from "react";
import "../App.css";
import TitleImg from "../assets/7074375.jpg";
import CloseImg from "../assets/x-solid.svg";
import HamImg from "../assets/bars-solid.svg";
import { Link } from "react-scroll";

function Navbar() {

  const [Menu, SetMenu] = useState(false);

  const Click = () => {
    SetMenu(!Menu);
    console.log(Menu);
  }

  return (
    <>
      <nav>
        <div className="Title--Text">
          <a href="#">
            <img src={TitleImg} />
          </a>
          <p>Portfolio</p>
        </div>
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
            <li className="list--title">
              
            </li>
          </ul>
          <img src={HamImg} className="Ham--Img"  onClick={Click}  style={{ display: Menu ? "none" : "block" }} />
          
        {/* Mobile Devices */}

          <div className="close--btn">
          <ul className="Side--Bar" onClick={Click} style={{display: !Menu ? "none" : "flex"}}>
            <img src={CloseImg} className="Close--btn" onClick={Click} style={{display: !Menu ? "none" : "flex"}} />
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
              <Link to="Projects" smooth={true} offset={-200} duration={500}>
                Projects
              </Link>
            </li>
            <li className="list--title">
              <Link to="Contacts" smooth={true} offset={0} duration={800}>
                Contact
              </Link>
            </li>
          </ul>
          </div>
        </div>
      </nav> 
    </>
  );
}

export default Navbar;
