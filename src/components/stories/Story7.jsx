import React from "react";
import "../styles/Story.css";
import { Link } from "react-router-dom";

const Story7 = () => {
  return (
    <div className="page-container">
      <div className="story-container">
        <div className="box-story">
          <h1 className="title">A Jury of Her Peers</h1>
          <div className="content-container">
            <p className="author-info">
              By Susan Glaspell <br />
            </p>
          </div>
          <div className="centered-content">
            <p className="story-text">
              This detective short story was adapted from Glaspell’s one-act
              play Trifles (1916). It is based on a murder story Susan Glaspell
              covered as a reporter. When Martha Hale opened the storm-door and
              got a cut of the north wind, she ran back for her big woolen
              scarf. As she hurriedly wound that round her head her eye made a
              scandalized sweep of her kitchen. It was no ordinary thing that
              called her away–it was probably further from ordinary than
              anything that had ever happened in Dickson County. But what her
              eye took in was that her kitchen was in no shape for leaving: her
              bread all ready for mixing, half the flour sifted and half
              unsifted.
              <br />
              <br />
              She hated to see things half done; but she had been at that when
              the team from town stopped to get Mr. Hale, and then the sheriff
              came running in to say his wife wished Mrs. Hale would come
              too–adding, with a grin, that he guessed she was getting scary and
              wanted another woman along. So she had dropped everything right
              where it was.
            </p>

            <div className="buttholder">
              <Link style={{ textDecoration: "none" }} to="/quiz7">
                <div className="button-container">
                  <button className="start-quiz-button">Start Quiz</button>
                </div>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/meaning7">
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

export default Story7;
