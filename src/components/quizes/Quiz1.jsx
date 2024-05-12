import React, { useState, useRef, useEffect } from "react";
import "../styles/Quiz.css";
import { data } from "../answers/ans1";

const Quiz1 = () => {
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(data[index]);
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);
  const [timer, setTimer] = useState(10); // Timer starts from 10 seconds
  const [selectedOption, setSelectedOption] = useState(null);

  const Option1 = useRef(null);
  const Option2 = useRef(null);
  const Option3 = useRef(null);
  const Option4 = useRef(null);

  const optionRefs = [Option1, Option2, Option3, Option4];

  useEffect(() => {
    // Reset timer and move to next question when index changes
    setTimer(10);
    if (index > 0 && index < data.length) {
      setQuestion(data[index]);
      setLock(false);
      optionRefs.forEach((option) => {
        option.current.classList.remove("incorrect");
        option.current.classList.remove("correct");
      });
    }
  }, [index]);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (timer > 0 && !lock) {
        setTimer((prevTimer) => prevTimer - 1);
      } else if (timer === 0 && !lock) {
        handleTimeout();
      }
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [timer, lock]);

  const checkAns = (e, ans) => {
    if (!lock) {
      if (question.ans === ans) {
        e.target.classList.add("correct");
        setLock(true);
        setScore((prev) => prev + 1);
        setSelectedOption("Correct!");
      } else {
        e.target.classList.add("incorrect");
        optionRefs[question.ans - 1].current.classList.add("correct");
        setLock(true);
        setSelectedOption("Incorrect!");
      }
    }
  };

  const handleTimeout = () => {
    setLock(true);
    optionRefs[question.ans - 1].current.classList.add("correct");
    setSelectedOption("Time's up! The correct answer is:");
  };

  const next = () => {
    if (lock) {
      if (index === data.length - 1) {
        setResult(true);
      } else {
        setIndex((prevIndex) => prevIndex + 1);
        setSelectedOption(null);
      }
    }
  };

  const reset = () => {
    setIndex(0);
    setQuestion(data[0]);
    setScore(0);
    setLock(false);
    setResult(false);
    setSelectedOption(null);
  };

  return (
    <div className="container">
      <h1>The Sea Raiders</h1>
      <hr />
      {result ? (
        <>
          <h2>
            You Scored {score} out of {data.length}
          </h2>
          <button onClick={reset}>Reset</button>
        </>
      ) : (
        <>
          <h2>
            {index + 1}. {question.question}
          </h2>
          <div className="anscover">
            <ul>
              <li ref={Option1} onClick={(e) => checkAns(e, 1)}>
                {question.option1}
              </li>
              <li ref={Option2} onClick={(e) => checkAns(e, 2)}>
                {question.option2}
              </li>
              <li ref={Option3} onClick={(e) => checkAns(e, 3)}>
                {question.option3}
              </li>
              <li ref={Option4} onClick={(e) => checkAns(e, 4)}>
                {question.option4}
              </li>
            </ul>
          </div>
          <div className="selected-option">{selectedOption}</div>
          <button onClick={next} disabled={!lock}>
            Next
          </button>
          <div className="index">
            {index + 1} of {data.length} questions
          </div>
          <div className="timer">Time Left: {timer}</div>
        </>
      )}
    </div>
  );
};

export default Quiz1;
