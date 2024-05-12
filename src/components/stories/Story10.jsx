import React from "react";
import "../styles/Story.css";
import { Link } from "react-router-dom";

const Story10 = () => {
  return (
    <div className="page-container">
      <div className="story-container">
        <div className="box-story">
          <h1 className="title">Within a blink on an eye</h1>
          <div className="content-container">
            <p className="author-info">
              by Bhoomi Khanvilkar. <br />
              Written by Missyshears, February 13, 2018
            </p>
          </div>
          <div className="centered-content">
            <p className="story-text">
              As Jack was walking down the halls of his new office he was
              getting tons of mixed feelings. He was confident yet nervous maybe
              because of it his third transfer in the last two years. Everything
              he was transferred he regretted taking the job of being a
              detective. It caused him many difficulties like put his life in
              jeopardy. He was just weary of doing it. Until his seniors handed
              him a case that was almost impossible to solve, he was in a
              dilemma as he was going to his office to tell his office that he
              was going to quit his job but instead it backfired. He was
              perplexed about the decision, however, later a thought appeared in
              his mind that his boss must have handed him the case maybe because
              he thinks superior of him. He accepted the case but he wasn’t
              ready to face its consequences. <br />
              <br />
              The case was about a thief who became famous over a period of five
              days. He would steal extraordinary things like popular painting
              and valuable jewelry and replace them with artificial ones and
              while leaving the thief always left a note saying, “Thanks for the
              valuables, too bad you won’t see them again.” Considering his
              attitude and his way of stealing things people began to call him
              ‘The Jackal’. Police had tried for months to catch but all their
              attempts were a failure. So the case was handed over to Jack’s
              agency. <br />
              <br />
              Jack spent hours and hours on the case. His days were busy, his
              nights ruined and after a tremendous amount of diligence, he found
              a clue that would bring him one step closer to catching the
              Jackal. While he was researching through the case and going
              through the files and photos of the sites where the theft had
              taken place, he found out that the Jackal didn’t realize there was
              a hidden camera at one of the houses and it caught the tattoo the
              shape of a bird on his left wrist. “Jackpot!!” exclaimed Jack.{" "}
              <br />
              <br />
              Eventually, though one of his informers Jack discovered Jackal’s
              address and left straight for his home before he escaped.
              Fortunately, Jackal was still present before Jack and his team had
              arrived. They arrested him but Jack knew Jackal wasn’t the kind of
              guy or thief who would just live quietly in jail for the rest of
              their lives. After a few weeks, as Jack feared Jackal had escaped
              and he left a message for Jack written on the rusty walls of the
              prison cell. It said, “Good luck finding me Detective Jack.” It
              left everyone bewildered and everyone had finally established that
              Jackal was a dangerous guy and can’t be found easily. They were
              disheartened as they had to carry out a whole new investigation to
              find him again. Everything ended within a blink of an eye.
            </p>

            <div className="buttholder">
              <Link style={{ textDecoration: "none" }} to="/quiz10">
                <div className="button-container">
                  <button className="start-quiz-button">Start Quiz</button>
                </div>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/meaning10">
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

export default Story10;
