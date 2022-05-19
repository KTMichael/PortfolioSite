import React, { useState, useEffect, useRef } from "react";

import Navbar from "./Navbar.jsx";

const Intro = () => {
  return (
    <div id="intro">
      <div id="navbar">
        <Navbar />
      </div>
      <hr />
      <p className="line1">Kaitlyn</p>
      <p className="line2"> Michael</p>
      <div id="welcomeText">
        <p className="line3">Designer & Developer</p>
      </div>
    </div>
  );
};

export default Intro;
