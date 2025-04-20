import axios from "axios";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import React from "react";

const Mainform = () => {
  const formik = useFormik({
    initialValues: {
      need: "",
      refered: "",
      stage: "",
      fullname: "",
      email: "",
      location: "",
      company: "",
      textarey: "",
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        let formData = await axios.post(
          "https://riya-art-infotech.onrender.com/mainform/create",
          values
        );
      } catch (error) {
        console.log(error);
      }
      resetForm();
    },
  });

  return (
    <>
      <section className="py-10 px-6 text-center bg-transparent" id="let's talk">
        <motion.h2
          className=" text-[28px] sm:text-[52px] font-bold text-white drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Fill the Form to Connect with Us and Get Started on Your
          Journey
        </motion.h2>
        <motion.p
          className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Provide us with your details by filling out the form below. Our team
          will review your submission and get back to you as soon as possible to
          assist you with your requirements.
        </motion.p>
      </section>
      <section
        className=" flex items-center justify-center bg-black text-white "
      >
        <motion.div
          className="w-full max-w-6xl bg-gray-900 sm:p-8 rounded-2xl shadow-lg flex flex-col md:flex-row lg:flex-row lg:gap-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full md:w-1/3 p-4">
            <h2 className="text-2xl font-bold mb-4 text-center md:text-left">
              Let's Talk
            </h2>
            <form onSubmit={formik.handleSubmit} className="space-y-4">
              {[
                {
                  id: "need",
                  label: "Need",
                  type: "select",
                  options: ["all", "brand", "website", "mobile"],
                },
                {
                  id: "refered",
                  label: "Referred",
                  type: "select",
                  options: ["yes", "no"],
                },
                {
                  id: "stage",
                  label: "Stage",
                  type: "select",
                  options: ["startup", "early stage", "established"],
                },
              ].map(({ id, label, type, options }) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <label
                    htmlFor={id}
                    className="block text-sm font-medium mb-1"
                  >
                    {label}
                  </label>
                  <select
                    id={id}
                    name={id}
                    onChange={formik.handleChange}
                    value={formik.values[id]}
                    className="w-full p-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    {options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </motion.div>
              ))}
            </form>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <form onSubmit={formik.handleSubmit} className="space-y-4">
              {[
                { id: "email", label: "Email Address", type: "email" },
                { id: "fullname", label: "Full Name", type: "text" },
                { id: "location", label: "Location", type: "text" },
              ].map(({ id, label, type }) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <label
                    htmlFor={id}
                    className="block text-sm font-medium mb-1"
                  >
                    {label}
                  </label>
                  <input
                    id={id}
                    name={id}
                    type={type}
                    onChange={formik.handleChange}
                    value={formik.values[id]}
                    className="w-full p-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </motion.div>
              ))}
            </form>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <form onSubmit={formik.handleSubmit} className="space-y-4">
              {[
                { id: "company", label: "Company", type: "text" },
                { id: "textarey", label: "Message", type: "textarea" },
              ].map(({ id, label, type }) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <label
                    htmlFor={id}
                    className="block text-sm font-medium mb-1"
                  >
                    {label}
                  </label>
                  {type === "textarea" ? (
                    <textarea
                      id={id}
                      name={id}
                      rows={4}
                      onChange={formik.handleChange}
                      value={formik.values[id]}
                      className="w-full p-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  ) : (
                    <input
                      id={id}
                      name={id}
                      type={type}
                      onChange={formik.handleChange}
                      value={formik.values[id]}
                      className="w-full p-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  )}
                </motion.div>
              ))}
              <motion.button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded-lg text-white font-semibold transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Submit
              </motion.button>
            </form>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Mainform;
