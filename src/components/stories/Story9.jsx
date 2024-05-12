import React from "react";
import "../styles/Story.css";
import { Link } from "react-router-dom";

const Story9 = () => {
  return (
    <div className="page-container">
      <div className="story-container">
        <div className="box-story">
          <h1 className="title">The Tell-Tale Heart</h1>
          <div className="content-container">
            <p className="author-info">
              By Edgar Allan Poe <br />
              Written by Edgar Allan Poe January,1843
            </p>
          </div>
          <div className="centered-content">
            <p className="story-text">
              It is a psychological thriller that delves into themes of guilt,
              paranoia, and the complexities of the human mind. <br />
              <br />
              TRUE! --nervous --very, very dreadfully nervous I had been and am;
              but why will you say that I am mad? The disease had sharpened my
              senses --not destroyed --not dulled them. Above all was the sense
              of hearing acute. I heard all things in the heaven and in the
              earth. I heard many things in hell. How, then, am I mad? Hearken!
              and observe how healthily --how calmly I can tell you the whole
              story. Object there was none. Passion there was none. I loved the
              old man. He had never wronged me. He had never given me insult. It
              was his eye! yes, it was this! I made up my mind to take his life
              to rid myself of the eye forever. Every night, about midnight, I
              opened his door, slowly. I moved my head in, shining a lantern on
              his eye. For seven nights, I did this. On the eighth, he heard me.
              His fears grew. I opened the lantern, the light fell upon his eye.
              I heard the beating of his heart, louder and louder. I killed him
              and hid the body beneath the floorboards. The police came, I
              welcomed them. They chatted, but the beating of the heart grew
              louder. I confessed, revealing the corpse's location. They tore up
              the planks, revealing the beating of the hideous heart.
            </p>

            <div className="buttholder">
              <Link style={{ textDecoration: "none" }} to="/quiz9">
                <div className="button-container">
                  <button className="start-quiz-button">Start Quiz</button>
                </div>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/meaning9">
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

export default Story9;
