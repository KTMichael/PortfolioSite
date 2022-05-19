import React, { useState, useEffect } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { MdSwipe } from "react-icons/md";
import Repos from "./Repos.jsx";
import Applications from "./Applications.jsx";

const Work = () => {
  const [showRepos, setShowRepos] = useState(false);
  const [buttonText, setButtonText] = useState("View Repo Links");

  const onClick = () => {
    if (!showRepos) {
      setShowRepos(true);
      setButtonText("View Select Application Walk-Throughs");
    } else {
      setShowRepos(false);
      setButtonText("View Repo Links");
    }
  };

  return (
    <div className="pageLayout work">
      <div className="navL">
        <a href="#top">
          <FaAngleDoubleUp
            className="topArrow icons"
            title="Return to top of page"
          />
        </a>
      </div>
      <div id="workContainer">
        <button onClick={onClick}>{buttonText}</button>
        {showRepos ? (
          <div id="repoContainer">
            <div id="workRepos">
              <div id="workRepoTitle">
                <span>Repos</span>
                <span>Repos</span>
                <span>Repos</span>
              </div>
              <Repos />
            </div>
          </div>
        ) : (
          <div>
            <Applications />
            <br /> <br />
            <div id="swipeText">
              Swipe to view next card
              <MdSwipe />
            </div>
          </div>
        )}
        <br />
      </div>
      <span className="pageTitles">Work</span>
    </div>
  );
};

export default Work;
