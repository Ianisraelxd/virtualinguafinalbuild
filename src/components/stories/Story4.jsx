import React from "react";
import "../styles/Story.css";
import { Link } from "react-router-dom";

const Story4 = () => {
  return (
    <div className="page-container">
      <div className="story-container">
        <div className="box-story">
          <h1 className="title">Curious George Adventure Story</h1>
          <div className="content-container">
            <p className="author-info">
              by Mukesh Joshi <br />
              August 20, 2023 in Adventure Stories
            </p>
          </div>
          <div className="centered-content">
            <p className="story-text">
              Once upon a time in a bustling little town, lived a curious and
              lively monkey named George. George wasn’t your everyday monkey; he
              was brimming with curiosity and had an insatiable spirit of
              adventure. His sparkling eyes and mischievous grin were a clear
              indication that something exciting was always on his mind.
              <br />
              <br />
              One bright morning, George woke up to the cheerful chirping of
              birds and the gentle rustling of leaves outside his window. With a
              big stretch and a big yawn, he was ready to embark on another day
              filled with fun and exploration. He shared his home with the Man
              with the Yellow Hat, a good friend who always encouraged George’s
              inquisitive nature.
              <br />
              <br />
              As George hopped and bounded around the cozy house, his gaze
              landed upon a shiny red balloon resting by the window. Oh, what a
              sight to behold! The balloon seemed to call out to George, its
              vibrant color and buoyant form practically begging for attention.
              Without a moment’s hesitation, George snatched the balloon and
              dashed outside. The balloon tugged playfully at his little hand as
              a gentle breeze swept by. George’s heart raced with excitement as
              he watched the balloon ascend higher and higher into the endless
              sky. He couldn’t help but wonder where it might be off to.
              <br />
              <br />
              With determination burning in his heart, George decided to follow
              the whimsical balloon. He scurried through the lively town, his
              nimble feet carrying him with fervor. People smiled and waved at
              him, but George had his sights set solely on that red balloon.
              Through lively streets and vibrant markets, George pursued the
              balloon, his enthusiasm growing with each step. He found himself
              in unfamiliar places – a park brimming with giggling children, a
              fragrant bakery wafting the scent of freshly baked bread, and a
              bustling train station where commuters hurriedly hopped on and off
              trains.
              <br />
              <br />
              As the sun gradually set, casting a warm and golden hue over the
              town, George’s balloon became a mere dot in the expansive sky.
              Yet, it seemed to wink at George, urging him to press on. As
              darkness descended, George realized he had ventured far from home
              and felt a touch of loneliness. Just when a tinge of melancholy
              crept in, George heard a familiar voice in the distance. It was
              the Man with the Yellow Hat, calling out his name with concern.
              Relief and joy surged within George as he saw his friend rushing
              toward him. The Man lifted George into a warm embrace, relieved to
              have found his adventurous companion.
              <br />
              <br />
              Together, they made their way back home, the balloon having long
              drifted away. However, the memory of their incredible journey
              remained etched in George’s heart. Settling down for the night,
              George nestled beneath his cozy blanket, feeling thankful for his
              curiosity and the true friend who always watched over him. And so,
              as the stars adorned the night sky, George drifted into sleep,
              dreaming of the next wonderful escapade that awaited him – an
              adventure characterized by curiosity, camaraderie, and endless
              potential.
            </p>

            <div className="buttholder">
              <Link style={{ textDecoration: "none" }} to="/quiz4">
                <div className="button-container">
                  <button className="start-quiz-button">Start Quiz</button>
                </div>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/meaning4">
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

export default Story4;
