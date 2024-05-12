import React from "react";
import "../styles/Story.css";
import { Link } from "react-router-dom";

const Story2 = () => {
  return (
    <div className="page-container">
      <div className="story-container">
        <div className="box-story">
          <h1 className="title">To build a fire</h1>
          <div className="content-container">
            <p className="author-info">
              By Jack London <br />
              Written by Jack London May 28, 1902
            </p>
          </div>
          <div className="centered-content">
            <p className="story-text">
              The man walked down the trail on a cold, gray day in Alaska, his
              first winter there. Dressed in heavy clothes and fur boots, he
              trudged through the pure white snow and ice that covered the Earth
              as far as he could see. His destination was a camp near Henderson
              Creek, where his friends awaited him with a fire and hot food.
              Behind him, a big gray dog, part dog and part wolf, followed,
              uneasy with the extreme cold. As he journeyed, he encountered
              hazards, like a frozen stream where an underground spring
              threatened to weaken the ice. Despite his precautions, he suffered
              an accident, his feet sinking into icy water. Frustrated but
              determined, he built a fire to dry his clothes and boots, battling
              against the numbing cold and the challenges of starting a fire in
              such extreme conditions. Yet, as he sat by the flames, thawing his
              frozen limbs, he reflected on the wisdom of the old men who warned
              against traveling alone in the Yukon's brutal cold. Despite his
              survival, he acknowledged the importance of preparation and
              respect for the wilderness, recognizing both its beauty and its
              unforgiving nature.
            </p>
            <div className="buttholder">
              <Link style={{ textDecoration: "none" }} to="/quiz2">
                <div className="button-container">
                  <button className="start-quiz-button">Start Quiz</button>
                </div>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/meaning2">
                <div className="button-container">
                  <button className="start-quiz-button">Meanings</button>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="bot"></div>
      </div>
    </div>
  );
};

export default Story2;
