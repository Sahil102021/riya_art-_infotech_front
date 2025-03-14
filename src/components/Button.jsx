import { motion } from "framer-motion";
import { link } from "motion/react-client";
import React from "react";

const Button = ({ styles, text = "Get Started", onClick }) => {
  return (
  
    <motion.a
      href="#let's talk"
      style={{borderRadius:'50%'}}
      whileHover={{ scale: 1.05, rotate: -3, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.4)" }}
      whileTap={{ scale: 0.9, rotate: 3 }}
      className="inline-block"
    >
      <motion.button
        type="button"
        onClick={onClick}
        className={`relative py-3 px-10 font-bold text-[18px] text-white bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full shadow-lg transition-all duration-300 ease-in-out 
        before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white before:opacity-10 before:rounded-full before:transition-opacity before:duration-300 hover:before:opacity-0 
        hover:from-red-500 hover:via-pink-500 hover:to-purple-500 focus:outline-none focus:ring-4 focus:ring-pink-300 ${styles}`}
      >
        {text}
      </motion.button>
    </motion.a>
  );
};

export default Button;