"use client";
import { motion } from "framer-motion";
import React from "react";
import Marquee from "react-fast-marquee";

const ProjectsSection = () => {
  const list = [
    {
      img1: "/project (2).png",
      img: "/project (5).png",
    },
    {
      img1: "/project (7).png",
      img: "/proj.png",
    },
    {
      img1: "/project (6).png",
      img: "/proj.png",
    },
    {
      img1: "/project (6).png",
      img: "/proj.png",
    },
  ];

  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 1 }}
      id="projects"
    >
      <div className="flex container pt-10 mx-auto max-w-5xl px-4 items-center justify-between">
        <h1 className="font-bold text-3xl md:text-4xl text-green-600 outfit">
          Projects
        </h1>
        <img src="/svg/btn (2).svg" className="w-24" />
      </div>
      <div className=" container pt-10 mx-auto max-w-5xl px-4">
        <Marquee>
          <div className="flex ml-[-487px] gap-4 ">
            {list.map((_, i) => {
              return (
                <div
                  key={i}
                  className={`${
                    i === 0 ? "bg-[#3F3F3F]" : "bg-[#ffffff]"
                  } !max-w-[17%] relative rounded-lg`}
                >
                  <div className="absolute top-4 right-4 flex z-20 items-center justify-center space-x-2">
                    <span className="bg-white px-2 rounded-md ">3D</span>
                    <span className="bg-white px-2 rounded-md ">AR/VR/MR</span>
                    <span className="bg-white px-2 rounded-md ">2D</span>
                  </div>
                  <div className="relative z-10 rounded-lg">
                    <img className="rounded-lg" src={_.img1} />
                    <img
                      src="/project (3).png"
                      className="absolute bottom-0 left-0 w-full"
                    />
                  </div>
                  <div className="py-4 z-10 relative px-6 flex flex-col space-y-3">
                    <h2
                      className={`${
                        i === 0 ? "text-white " : "text-black"
                      } font-semibold outfit text-lg`}
                    >
                      VR training app for a manufacturing company
                    </h2>
                    <span
                      className={`p-2 w-fit ${
                        i === 0 ? "bg-[#24A556]" : "bg-[#000]"
                      } rounded-full`}
                    >
                      <img src="/project (4).png" />
                    </span>
                  </div>
                  <img
                    src={_.img}
                    className={`${
                      i === 0 ? "" : "w-32"
                    } absolute bottom-4 right-10`}
                  />
                </div>
              );
            })}
          </div>
        </Marquee>
      </div>
    </motion.div>
  );
};

export default ProjectsSection;
