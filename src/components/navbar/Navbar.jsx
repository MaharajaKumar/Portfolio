import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";
import { motion } from "framer-motion";

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
          Crafting Code, Creating Experiences
        </motion.span>
        <div className="social">
          <a
            href="https://www.facebook.com/profile.php?id=61554911109643&mibextid=LQQJ4d"
            rel="noreferrer"
            target="_blank"
          >
            <img src="/facebook.png" alt="" />
          </a>
          <a
            href="https://www.instagram.com/maharaja_vasugiri?igsh=ZnViczU4c28wcnNy&utm_source=qr"
            rel="noreferrer"
            target="_blank"
          >
            <img src="/instagram.png" alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/maharaja-dev"
            rel="noreferrer"
            target="_blank"
          >
            <img src="/linkedin.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
