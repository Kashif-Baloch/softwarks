import React from "react";
import FlowBar from "../components/FlowBar";

const AboutSection = () => {
  return (
    <>
      <FlowBar />
      <div className="bg-white mt-[-2rem] rounded-tl-xl rounded-tr-xl">
        <div className="flex md:flex-row flex-col max-w-5xl pt-24 relative px-1 container mx-auto py-12 justify-between">
          <div className="md:w-1/2 w-full">
            <img src="/about.png" />
          </div>
          <div className="flex relative w-full md:w-1/2 flex-col py-8 px-6 justify-end">
            <h1 className="font-bold text-4xl text-green-600 outfit my-4">
              About US
            </h1>
            <p className="text-gray-800 text-sm md:text-base outfit font-[500]">
              Concept Softworks is a software company, we develop custom built
              software for clients - covering everything from financial
              institutions & medical companies all the way to tech companies and
              government organizations.
            </p>
            <img
              src="/abso (1).png"
              className="absolute pointer-events-none top-0 left-10 z-10 w-6 h-6"
            />
            <img
              src="/abso (2).png"
              className="absolute pointer-events-none top-0 right-0 md:right-32 z-10 w-[10rem]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
