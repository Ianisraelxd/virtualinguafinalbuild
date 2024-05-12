import React, { useState } from "react";
import "./styles/Main.css";
import vrta from "../assets/vrta.png";
import { Link } from "react-router-dom";

const Main = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`main-container ${width < 600 ? "mobile" : ""}`}>
      <div className="main-content">
        <div className={`content-image ${width < 600 ? "mobile-content" : ""}`}>
          <img src={vrta} alt="" />

          <p>
            Virtualingua is an innovative online platform dedicated to enhancing
            language proficiency and refining English grammar skills. Through a
            curated collection of short stories and interactive quizzes,
            Virtualingua offers users an engaging environment to challenge
            themselves and elevate their linguistic capabilities.
          </p>
          <Link to="/menu">
            <button className="cta-button">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
