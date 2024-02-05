import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";
import { motion } from "framer-motion";

import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import threads from "../../assets/threads.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Maharaja Kumar
        </motion.span>
        <div className="social">
          <a href="#">
            <img src={facebook} alt="" />
          </a>
          <a href="#">
            <img src={instagram} alt="" />
          </a>
          <a href="#">
            <img src={threads} alt="threads" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
