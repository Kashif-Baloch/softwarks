"use client";
import { motion } from "framer-motion";
import React from "react";
import Marquee from "react-fast-marquee";

const FlowBar = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 1 }}
    >
      <div className="flex mt-[-4rem] relative z-10 border-b pb-8 bg-white p-4 items-center justify-around max-w-5xl rounded-tl-lg rounded-tr-lg mx-auto">
        <Marquee>
          <img className="w-28 mx-11" src="/flowimg (1).png" />
          <img className="w-28 mx-11" src="/flowimg (2).png" />
          <img className="w-28 mx-11" src="/flowimg (3).png" />
          <img className="w-28 mx-11" src="/flowimg (4).png" />
          <img className="w-28 mx-11" src="/flowimg (5).png" />
        </Marquee>
      </div>
    </motion.div>
  );
};

export default FlowBar;
