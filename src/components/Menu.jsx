import React from "react";
import { Link } from "react-router-dom";
import "../components/styles/Menu.css";

const Menu = () => {
  const adventureStories = [1, 2, 3, 4, 5];
  const thrillerStories = [6, 7, 8, 9, 10];

  return (
    <div className="menu">
      <div className="menu-container">
        <div className="genre-title">
          <h1>Adventure Stories</h1>
        </div>
        <div className="buttons-container">
          {adventureStories.map((storyId) => (
            <div key={storyId} className="button">
              <Link to={`/story${storyId}`} className="button-link">
                <h1>Story {storyId}</h1>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="menu-container">
        <div className="genre-title">
          <h1>Thriller Stories</h1>
        </div>
        <div className="buttons-container">
          {thrillerStories.map((storyId) => (
            <div key={storyId} className="button">
              <Link to={`/story${storyId}`} className="button-link">
                <h1>Story {storyId}</h1>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
