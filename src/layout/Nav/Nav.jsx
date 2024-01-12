import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { motion, useScroll } from "framer-motion";
import hamburger from "../../assets/svg/hamburger.svg";
import cross from "../../assets/svg/cross.svg";
import logo from "../../assets/jpg/hyflex-logo.jpg";

function Nav({ getForm }) {
  const [toggleMenu, setToggleMenu] = useState(false);

  const showTogglebar = () => {
    if (window.innerWidth < 576) {
      if (toggleMenu) {
        document.querySelector(".navLinkCont").style.display = "none";
        setToggleMenu(!toggleMenu);
      } else {
        document.querySelector(".navLinkCont").style.display = "flex";
        setToggleMenu(!toggleMenu);
      }
    }
  };
  return (
    <React.Fragment>
      <nav>
        <div className="container" id="navbar">
          <h1>
            <HashLink to="/">
              <img src={logo} alt="hyfleex logo" />
            </HashLink>
          </h1>
          <ul className="navLinkCont">
            <li>
              <HashLink to="#courseSec">Course</HashLink>
            </li>
            <li>
              <HashLink to="#aboutSec">About Us</HashLink>
            </li>
            <li>
              <HashLink to="#teamCont">Teachers</HashLink>
            </li>
            <li>
              <HashLink>Careers</HashLink>
            </li>
            <li>
              <HashLink to="#contactSec">Contact</HashLink>
            </li>
          </ul>
          <div className="toggleCont">
            <img
              src={toggleMenu ? cross : hamburger}
              onClick={showTogglebar}
              className="togglebar"
            />
            <button onClick={getForm} id="enrollBtn">
              Enroll now
            </button>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Nav;
