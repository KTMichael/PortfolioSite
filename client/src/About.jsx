import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PaintCan from "../dist/assets/PaintCan.png";
import {
  FaAngleDoubleUp,
  FaHtml5,
  FaArrowUp,
  FaReact,
  FaDocker,
  FaJsSquare,
  FaNode
} from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { DiGoogleCloudPlatform } from "react-icons/di";
import { CgArrowsExchangeV } from "react-icons/cg";
import {
  SiWebpack,
  SiBabel,
  SiMongodb,
  SiAmazonaws,
  SiCss3,
  SiNpm,
  SiPostman,
  SiPostgresql,
} from "react-icons/si";

const About = () => {
  return (
    <div className="pageLayout">
      <span className="pageTitles">About</span>
      <div id="aboutMeContainer">
        <div id="aboutMe">
          <p>
            Hello! My name is Kaitlyn, but you can call me Katie! I am a
            full-stack software engineer currently looking for new
            opportunities! My main focus is web development, with my
            foundational knowledge built upon technologies such as JavaScript,
            SQL Databases, React.js, Node.js/Express.js, Docker, and more!
          </p>
          <br />
          <p>
            With a passion for modern web design and a curiosity for new
            technologies, I am always looking for something new to add to my
            repertoire!
          </p>
          <br />
        </div>
        <div id="aboutMeIcons">
          <div id="js" className="iconContainer">
            <div>
              <FaJsSquare className="iconWiggle" alt="JavaScript" />
            </div>
            <p>JavaScript</p>
          </div>
          <div id="pg" className="iconContainer">
            <div>
              <SiPostgresql className="iconWiggle" alt="postgreSQL" />
            </div>
            <p> PostgreSQL </p>
          </div>
          <div className="iconContainer" id="ms">
            <div>
              <GrMysql className="iconWiggle" alt="mySQL" />
            </div>
            <p> MYSQL </p>
          </div>
          <div id="nd" className="iconContainer">
            <div>
              <FaNode className="iconWiggle" alt="Node" />
            </div>
            <p> Node </p>
          </div>
          <div id="dk" className="iconContainer">
            <div>
              <FaDocker className="iconWiggle" alt="Docker" />
            </div>
            <p> Docker </p>
          </div>
          <div id="rt" className="iconContainer">
            <div>
              <FaReact className="iconWiggle" alt="React" />
            </div>
            <p> React </p>
          </div>
          <div id="pm" className="iconContainer">
            <div>
              <SiPostman className="iconWiggle" alt="Postman" />
            </div>
            <p>Postman</p>
          </div>
          <div id="gcp" className="iconContainer">
            <div>
              <DiGoogleCloudPlatform
                className="iconWiggle"
                alt="Google Cloud Platform"
              />
            </div>
            <p>Google Cloud Platform</p>
          </div>
          <div id="aws" className="iconContainer">
            <div>
              <SiAmazonaws className="iconWiggle" alt="AWS" />
            </div>
            <p>AWS</p>
          </div>
          <div id="ax" className="iconContainer">
            <div>
              <CgArrowsExchangeV className="iconWiggle" alt="Axios" />
            </div>
            <p>Axios</p>
          </div>
          <div id="wp" className="iconContainer">
            <div>
              <SiWebpack className="iconWiggle" alt="Webpack" />
            </div>
            <p>Webpack</p>
          </div>
          <div id="bb" className="iconContainer">
            <div>
              <SiBabel className="iconWiggle" alt="Babel" />
            </div>
            <p>Babel</p>
          </div>
          <div id="db" className="iconContainer">
            <div>
              <SiMongodb className="iconWiggle" alt="Mongodb" />
            </div>
            <p>Mongodb</p>
          </div>
          <div id="cs" className="iconContainer">
            <div>
              <SiCss3 className="iconWiggle" alt="CSS" />
            </div>
            <p>CSS</p>
          </div>
          <div id="hl" className="iconContainer">
            <div>
              <FaHtml5 className="iconWiggle" alt="Html5" />
            </div>
            <p>Html5</p>
          </div>
          <div id="npm" className="iconContainer">
            <div>
              <SiNpm className="iconWiggle" alt="npm" />
            </div>
            <p>npm</p>
          </div>
        </div>
        <span>
          <FaArrowUp /> Try hovering over an icon!{" "}
        </span>
      </div>

      <div className="navR">
        <a href="#top">
          <FaAngleDoubleUp
            className="topArrow icons"
            alt="Return to top of page"
            title="Return to top of page"
          />
        </a>
      </div>
    </div>
  );
};

export default About;
