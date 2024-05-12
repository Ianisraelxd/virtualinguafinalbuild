import React from "react";
import "../styles/Story.css";
import { Link } from "react-router-dom";

const Story1 = () => {
  return (
    <div className="page-container">
      <div className="story-container">
        <div className="box-story">
          <h1 className="title">The Sea Raiders</h1>
          <div className="content-container">
            <p className="author-info">
              By H. G. Wells <br />
              Written by Missyshears, February 13, 2018
            </p>
          </div>
          <div className="centered-content">
            <p className="story-text">
              Until the extraordinary affair at Sidmouth, the peculiar species
              Haploteuthis ferox was known to science only generically, on the
              strength of a half-digested tentacle obtained near the Azores, and
              a decaying body pecked by birds and nibbled by fish, found early
              in 1896 by Mr. Jennings, near Land’s End. In no department of
              zoological science, indeed, are we quite so in the dark as with
              regard to the deep-sea cephalopods. A mere accident, for instance,
              it was that led to the Prince of Monaco’s discovery of nearly a
              dozen new forms in the summer of 1895, a discovery in which the
              before-mentioned tentacle was included. It chanced that a cachalot
              was killed off Terceira by some sperm whalers, and in its last
              struggles charged almost to the Prince’s yacht, missed it, rolled
              under, and died within twenty yards of his rudder.
            </p>
            <div className="buttholder">
              <Link style={{ textDecoration: "none" }} to="/quiz1">
                <div className="button-container">
                  <button className="start-quiz-button">Start Quiz</button>
                </div>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/meaning1">
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

export default Story1;
