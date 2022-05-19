import React, { useState, useEffect } from "react";
import Intro from "./Intro.jsx";
import Navbar from "./Navbar.jsx";
import About from "./About.jsx";
import Work from "./Work.jsx";
import Applications from "./Applications.jsx";
import Resume from "./Resume/Resume.jsx";
import Contact from "./Contact/Contact.jsx";
import Credits from "./Credits.jsx";

const App = () => {
  return (
    <div id="mainPage">
      <div id="top" className="intro nonParallax section">
        <Intro />
      </div>
      <div id="about" className="nonParallax section">
        <About />
      </div>
      <div className="parallax bg section">
        <div id="quote">
          <p>
            Perfection is achieved not when there is nothing more to add, but
            rather when there is nothing more to take away.
          </p>
          <br />
          <span id="author">--Antoine de Saint-Exupery</span>
        </div>
      </div>
      <div id="work" className="nonParallax section">
        <Work />
      </div>
      <div className="parallax transitionTop section2"></div>
      <div id="resume" className="nonParallax section">
        <Resume />
      </div>
      <div className="parallax transitionBottom section3"></div>
      <div id="contact" className="nonParallax section">
        <Contact />
      </div>
      <div className="parallax transitionTop section4"></div>
      <div id="allCredits">
        <Credits />
      </div>
    </div>
  );
};

export default App;
