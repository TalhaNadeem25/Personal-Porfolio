import React, { useState } from "react";
import AmzImg from "../assets/Screenshot 2024-01-14 004856.png";
import YouImg from "../assets/Screenshot 2024-01-14 004839.png";
import SpoImg from "../assets/Screenshot 2024-01-14 004819.png";
import SpoLImg from "../assets/Screenshot 2024-01-14 004807.png";
import ReactCardFlip from "react-card-flip";

// ... (other imports)

function Projects() {
  const Data = [
    { src: AmzImg, text: "Created YouTube main page using HTML and CSS" },
    { src: YouImg, text: "Created Amazon main page using HTML and CSS" },
    { src: SpoImg, text: "Created Spotify sign up page using HTML and CSS" },
    { src: SpoLImg, text: "Created Spotify login page using HTML and CSS" },
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleCardFlip = (index) => {
    if (selectedIndex === index) {
      // If the same card is clicked again, reset selectedIndex
      setSelectedIndex(null);
    } else {
      // Otherwise, set the selectedIndex to the clicked index
      setSelectedIndex(index);
    }
  };

  return (
    <>
      <div className="Projects--Container" name="Projects">
        <div className="Project--title">
            <div className="Project--heading">
                <span>Projects:</span>
            </div>
            <div className="Project--info">
                <p>Click on the image below to view more details</p>
            </div>
         
        </div>
        <div className="img--title">
          {Data.map((images, index) => (
            <div
              key={index}
              className={`img ${selectedIndex === index ? "rotate" : ""}`}
            >
              <ReactCardFlip
                isFlipped={selectedIndex === index}
                flipDirection="horizontal"
              >
                {/* Front of the card */}
                <div
                  key="front"
                  className="image-container"
                  onClick={() => handleCardFlip(index)}
                >
                  <div className="overlay">
                    <img src={images.src} alt="" className="image" />
                  </div>
                </div>

                {/* Back of the card */}
                <div
                  key="back"
                  className="image-container"
                  onClick={() => handleCardFlip(index)}
                >
                  <div className="overlay">
                    <div className="text">
                      <span>{images.text}</span>
                      <a href="" target="blank">
                        <button className="button">Open</button>
                      </a>
                      <a>
                        <button className="button">Code</button>
                      </a>
                    </div>
                  </div>
                </div>
              </ReactCardFlip>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
