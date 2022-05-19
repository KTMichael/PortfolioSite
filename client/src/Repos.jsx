import React, { useState, useEffect } from "react";
import {
  FaAngleDoubleUp,
  FaAngleUp,
  FaAngleDown,
  FaGithub,
  FaReact,
  FaHtml5,
  FaJsSquare,
  FaNode,
  FaFontAwesomeAlt,
  FaFileCsv,
} from "react-icons/fa";
import {
  SiWebpack,
  SiBabel,
  SiAmazonaws,
  SiCss3,
  SiNpm,
  SiLodash,
  SiJest,
  SiGrafana,
  SiExpress,
  SiNodemon,
  SiHeroku,
  SiFramer,
  SiEslint,
  SiPostgresql,
  SiGooglefonts,
} from "react-icons/si";
import { RiLoader2Line } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";
import { CgArrowsExchangeV } from "react-icons/cg";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";

const Repos = () => {
  const ReposList = [
    {
      title: "ATELIER FRONT END",
      description:
        "E-commerce site for apparel. For front-end I was responsible for ratings and reviews.",
      techStack: [
        <FaJsSquare title="JavaScript" alt="JavaScript"/>,
        <FaReact title="React" alt="React Icon"/>,
        <FaHtml5 title="Html5" alt="Html5 Icon"/>,
        <CgArrowsExchangeV title="Axios" alt="Axios Icon"/>,
        <SiCss3 title="CSS" alt="CSS Icon"/>,
        <SiBabel title="Babel" alt="Babel Icon"/>,
        <SiWebpack title="Webpack" alt="Webpack Icon" />,
        <SiNpm title="Npm" alt="Npm Icon" />,
        <SiJest title="Jest" alt="Jest Icon" />,
        <SiEslint title="Eslint" alt="Eslint Icon" />,
        <SiLodash title="Lodash-Move" alt="Lodash-Move Icon" />,
        <FaNode title="Node" alt="Node Icon"/>,
        <FaFontAwesomeAlt title="FontAwesome" alt="FontAwesome Icon"/>,
      ],
      link: "https://github.com/KTMichael/Atelier",
    },
    {
      title: "ATELIER BACK END",
      description:
        "E-commerce site for apparel. For back-end I was responsible for product overview.",
      techStack: [
        <FaJsSquare title="JavaScript" alt="JavaScript Icon"/>,
        <FaFileCsv title="CSV-File Parser" alt="CSV-File Parser Icon"/>,
        <CgArrowsExchangeV title="Axios" alt="Axios Icon"/>,
        <SiNpm title="Npm" alt="Npm Icon" />,
        <SiNodemon title="Nodemon" alt="Nodemon Icon"/>,
        <SiExpress title="Express" alt="Express Icon"/>,
        <FaNode title="Node" alt="Node Icon"/>,
        <SiPostgresql title="PostgreSQL" alt="PostgreSQL Icon"/>,
        <SiAmazonaws title="Amazon AWS" alt="Amazon AWS Icon"/>,
        <SiGrafana title="loader.io Motion" alt="loader.io Icon"/>,
        <RiLoader2Line title="k6" alt="k6 Icon"/>,
      ],
      link: "https://github.com/KTMichael/Atelier-Product-Overview-API",
    },
    {
      title: "PORTFOLIO SITE",
      description:
        "The site you are on right now! Which I made to house my professional portfolio!",
      techStack: [
        <FaJsSquare title="JavaScript" alt="JavaScript"/>,
        <FaReact title="React" alt="React Icon"/>,
        <FaHtml5 title="Html5" alt="Html5 Icon"/>,
        <SiCss3 title="CSS" alt="CSS Icon"/>,
        <SiBabel title="Babel" alt="Babel Icon"/>,
        <SiWebpack title="Webpack" alt="Webpack Icon" />,
        <SiNpm title="Npm" alt="Npm Icon" />,
        <SiExpress title="Express" alt="Express Icon"/>,
        <FaNode title="Node" alt="Node Icon"/>,
        <SiLodash title="Lodash" alt="Lodash Icon"/>,
        <SiHeroku title="Heroku" alt="Heroku Icon"/>,
        <FaFontAwesomeAlt title="FontAwesome" alt="FontAwesome Icon"/>,
        <SiFramer title="Framer Motion" alt="Framer Motion Icon"/>,
      ],
      link: "https://github.com/KTMichael/PortfolioSite",
    },
    {
      title: "GROCERY LIST",
      description:
        "A quick grocery list app I created in 2 hours which allows a user to add items and item quantity to a list.",
      techStack: [
        <FaJsSquare title="JavaScript" alt="JavaScript"/>,
        <FaReact title="React" alt="React Icon"/>,
        <CgArrowsExchangeV title="Axios" alt="Axios Icon"/>,
        <FaHtml5 title="Html5" alt="Html5 Icon"/>,
        <SiCss3 title="CSS" alt="CSS Icon"/>,
        <SiBabel title="Babel" alt="Babel Icon"/>,
        <SiWebpack title="Webpack" alt="Webpack Icon" />,
        <SiNpm title="Npm" alt="Npm Icon" />,
        <SiExpress title="Express" alt="Express Icon"/>,
        <FaNode title="Node" alt="Node Icon"/>,
        <GrMysql title="MYSQL" alt="MYSQL Icon"/>,
      ],
      link: "https://github.com/KTMichael/GroceryList",
    },
    {
      title: "WHACK A MOLE!",
      description:
        "Whack A Mole is a fun game that keeps track of your highscore and can be played on a desktop or mobile device!",
      techStack: [
        <FaJsSquare title="JavaScript" alt="JavaScript"/>,
        <FaHtml5 title="Html5" alt="Html5 Icon"/>,
        <SiCss3 title="CSS" alt="CSS Icon"/>,
        <SiNpm title="Npm" alt="Npm Icon" />,
        <SiExpress title="Express" alt="Express Icon"/>,
        <FaNode title="Node" alt="Node Icon"/>,
        <SiHeroku title="Heroku" alt="Heroku Icon"/>,
      ],
      link: "https://github.com/KTMichael/WhackAMole",
    },
  ];
  const items = [0, 1, 2, 3, 4];
  return (
    <LayoutGroup>
      <motion.ul id="repoCards" layout initial={{ borderRadius: 40 }}>
        {items.map((item) => (
          <Item key={item} repo={ReposList[item]} />
        ))}
      </motion.ul>
    </LayoutGroup>
  );

  function Item({ repo }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
      <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
        {isOpen ? (
          <div>
            <FaAngleUp /> {repo.title}
          </div>
        ) : (
          <div>
            <FaAngleDown /> {repo.title}
          </div>
        )}
        <AnimatePresence>
          {isOpen && (
            <Content
              description={repo.description}
              link={repo.link}
              techStack={repo.techStack}
            />
          )}
        </AnimatePresence>
      </motion.li>
    );
  }

  function Content({ description, link, techStack }) {
    return (
      <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="row">
          <p>{description}</p>
          <div>
            <a href={link}>
              <FaGithub className="ghub" /> Github Repo
            </a>
          </div>
          <span>{techStack}</span>
        </div>
      </motion.div>
    );
  }
};
export default Repos;
