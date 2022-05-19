import React, { useState, useEffect, useRef } from "react";
import logo from "../dist/assets/logo.png";

const Navbar = () => {
  return (
    <div>
      <nav id="nav">
        <img id="logo" src={logo}></img>
        <div id="pageLinks">
          <a href="#work">work</a>
          <a href="#contact">contact</a>
          <a href="#about">about</a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
