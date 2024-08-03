import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>Transforming Ideas into Mobile Reality</p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <h1>
            Building{" "}
            <motion.b whileHover={{ color: "#58D68D" }}>Seamless</motion.b>
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "#F05035" }}>iOS</motion.b> and{" "}
            <motion.b whileHover={{ color: "#BB1DE6" }}>Android</motion.b>{" "}
            Applications.
          </h1>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <div className="listTitleContainer">
            <h2>React Native</h2>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <img src="/react.png" alt="" />
              <img src="/expo.png" alt="" />
              <img src="/javascript.png" alt="" />
            </div>
          </div>

          <p>
            I excel in React Native development, JavaScript, Redux/Context APIs,
            native module integration, UI/UX knowledge, RESTful APIs, and
            testing frameworks like Jest and React Native Testing Library, with
            proficient Git version control.
          </p>
          {/* <button>Go</button> */}
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <div className="listTitleContainer">
            <h2>Native iOS</h2>
            <img src="/xcode.png" alt="" />
            <img src="/swift.png" alt="" />
          </div>
          <p>
            I excel in React.js development, JavaScript, Redux/Context APIs,
            React Router and Material-UI, RESTful APIs, and testing frameworks
            like Jest and React Testing Library, with proficient Git version
            control.
          </p>
          {/*  <button>Go</button> */}
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <div className="listTitleContainer">
            <h2>Native Android</h2>
            <img src="/android_studio.png" alt="" />
            <img src="/kotlin.png" alt="" />
          </div>
          <p>
            I excel in Next.js development, JavaScript, SSR snd SSG(CSR),
            Redux/Context APIs, Routing with Next.js and React Router,
            Material-UI and Tailwind CSS, RESTful APIs, MongoDB and Prisma ORM,
            and testing frameworks like Jest and React Testing Library, with
            proficient Git version control.
          </p>
          {/*  <button>Go</button> */}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
