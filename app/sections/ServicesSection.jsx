"use client";
import { motion } from "framer-motion";
import React from "react";

const ServicesSection = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 1 }}
      id="services"
    >
      <div className="max-w-5xl  mx-auto container px-4 my-20  rounded-lg">
        <div className="md:py-12 py-2 relative rounded-lg services-bg rommobg">
          <div className="flex relative z-10 flex-col md:flex-row  items-center">
            <div className="md:w-[50%] w-[95%] md:pl-32">
              <h1 className="font-bold text-5xl outfit text-[#D7D7D7] py-10">
                See what we can do for you
              </h1>
            </div>
            <div className="md:w-[35%] hidden md:block">
              <img className="w-52" src="/services (1).png" />
            </div>
            <div className="md:w-[70%] w-[95%]">
              <div className="flex md:pr-10 justify-between items-center">
                <h1 className="text-[24px] font-semibold cursor-pointer outfit text-[#FFFFFF]">
                  Product Design
                </h1>
                <img src="/project.png" />
              </div>
              <hr />
              <div className="flex mt-7 justify-between items-center">
                <h1 className="text-[24px] font-semibold hover:text-white transition-all cursor-pointer outfit text-white md:text-[#646464]">
                  Identity & Strategy
                </h1>
              </div>
              <hr />
              <div className="flex mt-7 justify-between items-center">
                <h1 className="text-[24px] font-semibold hover:text-white transition-all cursor-pointer outfit text-white md:text-[#646464]">
                  Web and Mobile
                </h1>
              </div>
              <hr />
              <div className="flex mt-7 justify-between items-center">
                <h1 className="text-[24px] font-semibold hover:text-white transition-all cursor-pointer outfit text-white md:text-[#646464]">
                  Embedded System
                </h1>
              </div>
            </div>
          </div>

          <img
            src="/services/services (1).png"
            className="absolute pointer-events-none top-0 opacity-35 left-[17%] h-[90%] sm:h-full"
          />
          <img
            src="/services/services (2).png"
            className="absolute pointer-events-none top-5 left-0"
          />
          <img
            src="/services/services (3).png"
            className="absolute hidden md:block pointer-events-none bottom-3 right-6"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesSection;
