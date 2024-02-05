import "./hero.scss";
import { motion } from "framer-motion";

import hero1 from "../../assets/hero1.png";
import scroll from "../../assets/scroll.png";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-470%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>MAHARAJA KUMAR</motion.h2>
          <motion.h1 variants={textVariants}>App developer</motion.h1>
          <motion.div variants={textVariants}>
            <motion.button className="button" variants={textVariants}>
              See my Works
            </motion.button>
            <motion.button className="button" variants={textVariants}>
              Contact Me
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src={scroll}
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Mobile and Web applications
      </motion.div>
      <div className="imageContainer">
        <img src={hero1} alt="" />
      </div>
    </div>
  );
};

export default Hero;
