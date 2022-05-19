import React, { useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  MotionValue,
} from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";

const Cube = () => {
  const grid = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];
  const size = 150;
  const gap = 10;
  const pushFactor = 0.4;
  const contactInfo = [
    {
      title: "",
      link: "",
      pic: <div className="meBunWink"></div>,
      icon: null,
    },
    {
      title: "GitHub",
      link: "https://github.com/KTMichael",
      icon: <FaGithub title="GitHub" alt="GitHub" />,
      pic: null,
    },
    {
      title: "",
      link: "",
      pic: <div className="meLipstickSmile"></div>,
      icon: null,
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/kaitlynmichaelgill/",
      icon: <FaLinkedin title="LinkedIn" alt="LinkedIn" />,
      pic: null,
    },
    {
      title: "",
      link: "",
      pic: <div className="meComputer"></div>,
      icon: null,
    },
    {
      title: "Email",
      link: "mailto:kaitlyngill31@gmail.com",
      icon: <FaEnvelope title="Email Me" alt="Email Me" />,
      pic: null,
    },
    {
      title: "",
      link: "",
      pic: <div className="meLipstickThumpsUp"></div>,
      icon: null,
    },

    {
      title: "CV",
      link: "./Gill_Kaitlyn_Resume.pdf",
      icon: (
        <FaDownload title="Download/Print Resume" alt="Download/Print Resume" />
      ),
      pic: null,
    },
    {
      title: "",
      link: "",
      pic: <div className="meHatWink"></div>,
      icon: null,
    },
  ];

  function useDerivedValue(motionValue, i, active) {
    const distance = Math.abs(active - i);
    const factor = distance * pushFactor;
    const input = [-1, 0, 1];
    let output = input;

    if (i > active) {
      output = [-1 + factor, 0, 1 + factor];
    } else if (i < active) {
      output = [-1 - factor, 0, 1 - factor];
    }

    return useTransform(motionValue, input, output, {
      clamp: false,
    });
  }

  const Square = ({
    active,
    setActive,
    colIndex,
    rowIndex,
    itemIndex,
    x,
    y,
  }) => {
    const isDragging = colIndex === active.col && rowIndex === active.row;
    const diagonalIndex = itemIndex * (colIndex + rowIndex);
    const dx = useDerivedValue(x, colIndex, active.col);
    const dy = useDerivedValue(y, rowIndex, active.row);
    const rotateY = useTransform(dx, [0, 1], [0, 0.25], { clamp: false });
    const rotateX = useTransform(dy, [0, 1], [0, 0.25], { clamp: false });
    return (
      <motion.div
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
        dragElastic={1}
        onDragStart={() => setActive({ row: rowIndex, col: colIndex })}
        style={{
          background: "black",
          border: "solid white 2px",
          width: size,
          height: size,
          rotateX,
          rotateY,
          top: rowIndex * (size + gap),
          left: colIndex * (size + gap),
          position: "absolute",
          borderRadius: 10,
          x: isDragging ? x : dx,
          y: isDragging ? y : dy,
          color: "white",
          fontSize: "1.75rem",
        }}
      >
        <div className="contactSquare">
          <span>{contactInfo[itemIndex].title}</span>
          <a
            style={{
              color: `hsla(calc(var(--base-hue) + ${diagonalIndex}), 70%, 50%)`,
              fontSize: "4rem",
            }}
            target="_blank"
            rel="noopener noreferrer"
            href={contactInfo[itemIndex].link}
          >
            <div className="memoji">{contactInfo[itemIndex].pic}</div>
            <div>{contactInfo[itemIndex].icon}</div>
          </a>
        </div>
      </motion.div>
    );
  };

  function Block() {
    const [active, setActive] = useState({ row: 0, col: 0 });
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    return (
      <div className="block">
        <motion.div
          animate={{ "--base-hue": 360 }}
          initial={{ "--base-hue": 0 }}
          transition={{ duration: 10, loop: Infinity, ease: "linear" }}
          style={{ width: "100%", height: "100%" }}
        >
          <motion.div
            style={{
              display: "flex",
              width: (size + gap) * 4.5 - gap,
              height: (size + gap) * 3 - gap,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              position: "relative",
              perspective: 400,
            }}
          >
            {grid.map((row, rowIndex) =>
              row.map((item, colIndex) => (
                <Square
                  x={x}
                  y={y}
                  itemIndex={item}
                  active={active}
                  setActive={setActive}
                  rowIndex={rowIndex}
                  colIndex={colIndex}
                  key={rowIndex + colIndex}
                ></Square>
              ))
            )}
          </motion.div>
        </motion.div>
      </div>
    );
  }
  return <Block />;
};

export default Cube;
