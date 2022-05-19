import React from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";

const credits = [
  {
    title: "B&W Leaves Photo",
    name: "Christian Holzinger",
    link: "https://www.instagram.com/christianholzinger.photo/",
  },
  {
    title: "Neon Leaves Photo",
    name: "free4kwallpapers.com",
    link: "https://free4kwallpapers.com/category/3d-abstract-wallpapers",
  },
  {
    title: "Animations",
    name: "Framer Motion",
    link: "https://www.framer.com/motion/",
  },
];
const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const Credits = () => {
  const [open, setOpen] = useCycle(false, true);

  return (
    <div>
      <div className="btnContainer">
        <button id="creditButton" onClick={setOpen}>
          <a href="#bot"> {open ? "Close Credits" : "Open Credits"}</a>
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ width: 0 }}
            animate={{
              width: "100%",
            }}
            exit={{
              width: 0,
              transition: { delay: 0.7, duration: 0.3 },
            }}
          >
            <motion.div
              className="container"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              <div className="creditLayout">
                <span id="creditTitle">Credits</span>
                <div id="creditsContainer">
                  {credits.map((credit, index) => (
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      variants={itemVariants}
                      key={name + index}
                    >
                      <span> {credit.title} | </span>
                      <span className="accent"> {credit.name} | </span>
                      <span id="bot"> {credit.link}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Credits;
