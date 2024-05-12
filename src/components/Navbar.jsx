import React, { useState, useEffect } from "react";
import vrta from "../assets/vrta.png";
import "./styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`navbar ${width < 600 ? "mobile" : ""}`}>
      <div className="navlogo">
        <Link style={{ textDecoration: "none", color: "white" }} to="/">
          <img src={vrta} alt="" style={{ width: 130, marginTop: 13 }} />
        </Link>
      </div>
      <ul className={`navmenu ${width < 600 ? "mobile-navmenu" : ""}`}>
        <li
          onClick={() => {
            setMenu("home");
          }}>
          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            Home
          </Link>
        </li>
        <li
          onClick={() => {
            setMenu("menu");
          }}>
          <Link style={{ textDecoration: "none", color: "white" }} to="/menu">
            Quiz
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none", color: "white" }} to="/about">
            Abouts
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
