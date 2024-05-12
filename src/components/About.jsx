import React from "react";
import "./styles/About.css";
import person1 from "../assets/ah (1).jpg";
import person2 from "../assets/ah (2).jpg";
import person3 from "../assets/ah (3).jpg";
import person4 from "../assets/ah (4).jpg";
import person5 from "../assets/ah (5).jpg";

const About = () => {
  return (
    <div className="main">
      <div className="abut">
        <h1>About us</h1>
        <p>
          VirtuaLingua is a premier online platform dedicated to language
          learning. Our website offers stories and quizzes to help individuals
          enhance their comprehension in English and broaden their
          perspectives.VirtuaLingua strives to make language learning
          accessible, enjoyable, and effective for learners. Join us on a
          journey of linguistic discovery and cultural enrichment at
          VirtuaLingua!
        </p>
      </div>

      <h1>Members:</h1>
      <div className="arc">
        <div className="hld">
          <img src={person2} alt="" />
          <p>Barte, Hazel Ann</p>
        </div>
        <div className="hld">
          {" "}
          <img src={person1} alt="" />
          <p>Celiz, Mark John Paul</p>
        </div>
        <div className="hld">
          <img src={person5} alt="" />
          <p>Herrera, Yvanni Josh</p>
        </div>
        <div className="hld">
          <img src={person4} alt="" />
          <p>Lazaro, Jayson</p>
        </div>
        <div className="hld">
          <img src={person3} alt="" />
          <p>Medina, Valerie June</p>
        </div>
      </div>
    </div>
  );
};

export default About;
