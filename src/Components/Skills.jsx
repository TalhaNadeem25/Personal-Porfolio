import React from "react";
import REACTIMG from "../assets/1174949_js_react js_logo_react_react native_icon.png";
import JAVAIMG from "../assets/4373217_java_logo_logos_icon.png";
import CSSIMG from "../assets/css-3.png";
import HTMLIMG from "../assets/html-5.png";
import JSIMG from "../assets/js.png";
import CIMG from "../assets/letter-c.png";

function Skills() {
  return (
    <>
      <div className="Skills_Container" name='Skills'>
        <div className="Skills--Title">
        <span>Skills</span>
        </div>
        <div className="Skills_Img">
          <img src={HTMLIMG} alt="HTML Image" />
          <img src={CSSIMG} alt="CSS Image" />
          <img src={JSIMG} alt="JS Image" />
          <img src={REACTIMG} alt="React Image" />
          <img src={CIMG} alt="C Image" />
          <img src={JAVAIMG} alt="C Image" />
        </div>
      </div>
    </>
  );
}

export default Skills;
