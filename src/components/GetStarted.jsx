import styles from "../styles";
import { arrowUp } from "../assets";
import { motion } from "framer-motion";
import { a } from "motion/react-client";

const GetStarted = () => (
  <a href="#let's talk">
    <motion.div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer relative overflow-hidden`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full relative shadow-lg`}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <div className={`${styles.flexStart} flex-row gap-1`}>
          <p className="font-poppins font-medium text-[18px] leading-[23.4px] text-gradient">
            Get
          </p>
          <motion.img
            src={arrowUp}
            alt="arrow-up"
            className="w-[23px] h-[23px] object-contain"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px] text-gradient">
          Started
        </p>
      </motion.div>
      <motion.div
        className="absolute w-[200%] h-[200%] bg-blue-400 opacity-10 rounded-full"
        animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
    </motion.div>
  </a>
);

export default GetStarted;
