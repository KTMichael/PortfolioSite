import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import move from "lodash-move";
import { FaAngleDoubleUp, FaHandPointDown } from "react-icons/fa";
import { MdSwipe } from "react-icons/md";
import AtelierVideo from "../dist/videos/Atelier.mp4";
import WAMVideo from "../dist/videos/WhackAMoleVid.mp4";

const Applications = () => {
  const CardName = ["ATL", "WAM"];
  const WalkThroughs = [
    {
      title: "ATELIER",
      description:
        "E-commerce site for apparel. For front-end I was responsible for ratings and reviews as well as almost all of the CSS. For back-end I was responsible for product overview.",
      media: AtelierVideo,
      link: "",
    },
    {
      title: "Whack A Mole!",
      description:
        "Whack A Mole is a fun game that keeps track of your highscore and can be played on a desktop or mobile device!",
      media: WAMVideo,
      link: "https://neonwhackamole.herokuapp.com/",
    },
  ];
  const [cards, setCards] = useState(CardName);
  const [walkThroughs, setWalkThroughs] = useState(WalkThroughs);

  const moveToEnd = (from) => {
    setCards(move(cards, from, cards.length - 1));
  };
  const moveToEndWT = (from) => {
    setWalkThroughs(move(walkThroughs, from, walkThroughs.length - 1));
  };
  return (
    <div id="cardContainer">
      <ul id="cardWrap">
        {cards.map((cards, index) => {
          const canDrag = index === 0;
          return (
            <div key={index}>
              <motion.li
                key={cards}
                id="cardStyle"
                style={{
                  backgroundColor: "black",
                  cursor: canDrag ? "grab" : "auto",
                }}
                animate={{
                  top: index * -10,
                  scale: 1 - index * 0.06,
                  zIndex: CardName.length - index,
                }}
                drag={canDrag ? "y" : false}
                dragConstraints={{
                  top: 0,
                  bottom: 0,
                }}
                onDragEnd={() => {
                  moveToEnd(index), moveToEndWT(index);
                }}
              >
                <div className={cards}>
                  {walkThroughs[index].title === "Whack A Mole!" ? (
                    <p id="wam">Application Walk Throughs</p>
                  ) : (
                    <p id="atl">Application Walk Throughs</p>
                  )}
                  <div id="card">
                    <div id="appInfo">
                      <br />
                      <h3>{walkThroughs[index].title}</h3>
                      <p> {walkThroughs[index].description}</p>
                      <br />
                      {walkThroughs[index].title === "Whack A Mole!" ? (
                        <div>
                          <a
                            href={walkThroughs[index].link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Click here to play!
                          </a>
                          <br />
                          <br />
                          <br />
                          <div id="techStackBannerW">
                            <div className="techStackW">
                              <span>
                                | Teck Stack | Vanilla JS | HTML5 | Vanilla CSS
                                | NPM | Express.js |
                              </span>
                              <span>
                                | Teck Stack | Vanilla JS | HTML5 | Vanilla CSS
                                | NPM | Express.js |
                              </span>
                              <span>
                                | Teck Stack | Vanilla JS | HTML5 | Vanilla CSS
                                | NPM | Express.js |
                              </span>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div id="techStackBannerA">
                          <div className="techStackA">
                            <span>
                              | FRONT END | JavaScript | React | HTML5 | Axios |
                              Vanilla CSS | Babel | Webpack | NPM | Nodemon |
                              Jest | ESLint | Lodash | BACK END | Fast-csv | NPM
                              | Express.js | Nodemon | CSV-Parser | Node.js |
                              PostgreSQL | AWS:EC2/AMI | k6 | loader.io |
                            </span>
                            <span>
                              | FRONT END | JavaScript | React | HTML5 | Axios |
                              Vanilla CSS | Babel | Webpack | NPM | Nodemon |
                              Jest | ESLint | Lodash | BACK END | Fast-csv | NPM
                              | Express.js | Nodemon | CSV-Parser | Node.js |
                              PostgreSQL | AWS:EC2/AMI | k6 | loader.io |
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                    {walkThroughs[index].title === "ATELIER" ? (
                      <div id="ATVideo">
                        <video preload="auto" controls autoPlay>
                          <source
                            src={walkThroughs[index].media}
                            type="video/mp4"
                          />
                        </video>
                      </div>
                    ) : (
                      <div id="WAMVideo">
                        <video preload="auto" controls autoPlay>
                          <source
                            src={walkThroughs[index].media}
                            type="video/mp4"
                          />
                        </video>
                      </div>
                    )}
                  </div>
                </div>
              </motion.li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Applications;
