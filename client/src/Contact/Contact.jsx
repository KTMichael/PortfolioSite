import React, { useState, useEffect } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";
import Cube from "./Cube.jsx";
import MobileContact from "./MobileContact.jsx";

const Contact = () => {
  return (
    <div className="pageLayout">
      <div className="desktopContact">
        <div className="navL">
          <a href="#top">
            <FaAngleDoubleUp
              className="topArrow icons"
              title="Return to top of page"
            />
          </a>
        </div>
        <div id="contactContainer">
          <Cube />
          <div id="banner">
            <div id="linkDirections">
              <span>
                | Click and drag a square to make them move! Or click on an icon
                to follow the link! |
              </span>
              <span>
                | Click and drag a square to make them move! Or click on an icon
                to follow the link! |
              </span>
              <span>
                | Click and drag a square to make them move! Or click on an icon
                to follow the link! |
              </span>
              <span>
                | Click and drag a square to make them move! Or click on an icon
                to follow the link! |
              </span>
              <span>
                | Click and drag a square to make them move! Or click on an icon
                to follow the link! |
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mobileContact">
        <div className="navL">
          <a href="#top">
            <FaAngleDoubleUp
              className="topArrow icons"
              title="Return to top of page"
            />
          </a>
        </div>
        <MobileContact />
      </div>
      <span className="pageTitles">Contact</span>
    </div>
  );
};

export default Contact;
