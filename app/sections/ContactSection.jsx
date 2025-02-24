"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";

const ContactSection = () => {
  const [btn, setBtn] = useState("1");
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 1 }}
    >
      <div id="contact" className="bg-[#F3F3F3] relative py-10 mt-14 ">
        <img src="/contact.png" className="absolute top-6 right-0 w-[45%]" />
        <img
          src="/contact (2).png"
          className="absolute hidden lg:block pointer-events-none top-[40%] right-[10%] w-[10rem]"
        />
        <img
          src="/contact (1).png"
          className="absolute pointer-events-none top-[-20px] left-0 w-[10rem]"
        />
        <div className="max-w-5xl mx-auto px-4  container">
          <div>
            <h1 className="text-green-600 orbitron font-bold text-4xl outfit">
              Contact us!
            </h1>
            <p className="orbitron text-sm">What we can do for you</p>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-4 md:space-x-4">
            <span
              onClick={() => {
                setBtn("1");
              }}
              className={`${
                btn == "1"
                  ? "text-white bg-[#3F3F3F]"
                  : "text-black  border-gray-300"
              } orbitron cursor-pointer text-sm border px-4 py-3 rounded-full`}
            >
              Product design
            </span>
            <span
              onClick={() => {
                setBtn("2");
              }}
              className={`${
                btn == "2"
                  ? "text-white bg-[#3F3F3F]"
                  : "text-black border-gray-300"
              } border cursor-pointer text-sm orbitron px-4 py-3 rounded-full`}
            >
              Website Development
            </span>
            <span
              onClick={() => {
                setBtn("3");
              }}
              className={`${
                btn == "3"
                  ? "text-white bg-[#3F3F3F]"
                  : "text-black border-gray-300"
              } border cursor-pointer text-sm orbitron px-4 py-3 rounded-full`}
            >
              Mobile App Development
            </span>
          </div>
          <div className="flex flex-wrap md:flex-nowrap gap-14 mt-5 ">
            <form className="flex relative flex-col w-full md:w-[70%] ">
              <img
                src="/contact (3).png"
                className="absolute hidden md:block pointer-events-none bottom-[-20px] w-24 right-[-60px]"
              />
              <input
                className="bg-transparent border-b border-gray-400 outline-none py-4 my-4"
                type="text"
                placeholder="Name"
              />
              <input
                className="bg-transparent border-b border-gray-400 outline-none py-4 my-4"
                type="email"
                placeholder="Email"
              />
              <input
                className="bg-transparent border-b border-gray-400 outline-none py-4 my-4"
                type="text"
                placeholder="Project Details"
              />
              <img src="/svg/btn (1).svg" className="w-24 my-4" />
            </form>
            <div className="flex justify-end pb-14 space-y-6 flex-col">
              <div className="orbitron">
                <h1 className="text-gray-500">Phone</h1>
                <h3>+1 (833) 520-412</h3>
              </div>
              <div className="orbitron">
                <h1 className="text-gray-500">Email</h1>
                <h3>Hello@Conceptsoftworks.com</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactSection;
