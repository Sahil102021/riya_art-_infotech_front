import { motion } from "framer-motion";
import { programming_language_logo } from "../constants";
import styles from "../styles";

const Clients = () => (
  <section className="py-16 px-6 text-center bg-transparent">
    <motion.h2
      className="text-[32px] sm:text-5xl font-bold text-white mb-6 "
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Technologies We Work With
    </motion.h2>
    <motion.p
      className="text-lg  text-white max-w-2xl mx-auto mb-10 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      Design | Frameworks | Mobile | Development | Web Development | Database
      {" "}
    </motion.p>
    <motion.div
      className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-10 items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {programming_language_logo.map((el) => (
        <motion.div
          key={el.id}
          className="flex items-center justify-center p-2 bg-transparent shadow-lg  border-gray-300 dark:border-gray-600 grayscale-[100%] hover:grayscale-0"
          whileHover={{ scale: 1.2, rotate: 2 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.img
            src={el.logo}
            alt="client_logo"
            className="w-20 sm:w-20 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          />
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default Clients;
