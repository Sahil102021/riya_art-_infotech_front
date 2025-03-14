import { motion } from "framer-motion";
import { stats } from "../constants";
import styles from "../styles";

const Stats = () => (
  <section className="py-12 px-4 flex flex-wrap justify-center gap-8 bg-transparent">
    {stats.map((stat, index) => (
      <motion.div
        key={stat.id}
        className="relative p-8 rounded-xl bg-black bg-opacity-20 backdrop-blur-md shadow-2xl w-4/5 h-24 sm:w-60 sm:h-40 flex flex-col items-center justify-center border border-gray-600 hover:shadow-blue-500/50 hover:scale-110 transition-all duration-300"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ rotate: index % 2 === 0 ? 5 : -5 }}
      >
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-600 opacity-25 rounded-xl blur-2xl"
        ></motion.div>
        <motion.h4
          className=" text-[28px] sm:text-[38px] font-extrabold text-white relative z-10 drop-shadow-lg"
          initial={{ scale: 0.7 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {stat.value}
        </motion.h4>
        <motion.p
          className=" text-sm sm:text-lg text-gray-300 uppercase tracking-wide mt-2 relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {stat.title}
        </motion.p>
      </motion.div>
    ))}
  </section>
);

export default Stats;
