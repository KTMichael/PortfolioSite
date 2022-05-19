import React, { useState, useEffect } from "react";
// import ResumeElements from "./ResumeElements.jsx";
// import { FaDownload } from "react-icons/fa";
import { FaAngleDoubleUp } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ResumeElements from "./ResumeElements.jsx";
const Resume = () => {
  return (
    <div className="resume pageLayout">
      <span className="pageTitles">Resume</span>
      <ResumeElements />
      <div className="navR">
        <a href="#top">
          <FaAngleDoubleUp
            className="topArrow icons"
            title="Return to top of page"
          />
        </a>
      </div>
    </div>
  );
};

export default Resume;
