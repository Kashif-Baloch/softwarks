import React from "react";

const HeroSection = () => {
  return (
    <div className="hero-bg">
      <div className="h-[60vh] md:h-[70vh] lg:h-[115vh] max-w-5xl px-4 container mx-auto flex justify-start items-center">
        <div className="md:w-1/2">
          <h1 className="font-bold outfit text-2xl md:text-3xl lg:text-5xl text-white my-3">
            Lets make{" "}
            <span className="text-green-700 outfit">&#123; &#125; </span>
            <br className="hidden md:block" />
            software together!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
