"use client"; // For Next.js App Router (if applicable)

import React, { useState, useRef } from "react";
import { useKeenSlider } from "keen-slider/react";
import { motion } from "framer-motion";
// import "keen-slider/keen-slider.min.css";

const TeamSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const keenSliderRef = useRef(null);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: false, // Infinite Scrolling
    // mode: "snap", // Ensures proper spacing
    rtl: false, // Prevents merging issues
    rubberband: true,
    breakpoints: {
      "(width <= 1024px)": {
        slides: { perView: 2, spacing: 0 },
      },
      "(width <= 372px)": {
        slides: { perView: 2, spacing: 0 },
      },
    },
    slides: { perView: 3, spacing: 2 }, // Adjust as needed
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  const nextSlide = () => {
    instanceRef.current?.next();
  };

  const prevSlide = () => {
    instanceRef.current?.prev();
  };

  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 1 }}
      id="team"
      className="relative"
    >
      <img
        src="/teamab.png"
        className="absolute pointer-events-none top-[50%] translate-y-[-50%] right-0 w-[15%]"
      />
      <div className="max-w-5xl mx-auto px-4 container mt-20">
        <div>
          <h1 className="text-4xl text-green-600 font-bold">Our Team</h1>
        </div>
        <div className="flex lg:flex-row overflow-x-hidden flex-col justify-start items-start gap-6 lg:gap-0 lg:justify-end lg:items-end">
          <div
            ref={sliderRef}
            className="keen-slider lg:overflow-hidden max-w-3xl flex gap-12 md:space-y-0 mt-16"
          >
            <div className="keen-slider__slide  bg-[#24A556] py-5 flex items-end rounded-lg sm:w-[70%] sm:mx-auto md:w-[23%] h-[25rem] relative">
              <img
                className="w-full border-b absolute top-[0px] left-[20px] h-[80%]"
                src="p1.png"
              />
              <img
                src="/team/frame1.png"
                className="absolute top-10 left-3 w-20"
              />
              <div className="px-4 w-full flex items-end justify-between">
                <div>
                  <h1 className="text-white text-[18px] font-semibold outfit">
                    Emily
                  </h1>
                  <h2 className="text-white text-[14px] font-semibold outfit">
                    Front-End Developer
                  </h2>
                </div>
                <div className="flex items-center space-x-1 justify-end">
                  <img className="w-4 h-4" src="/svg/svgs (2).svg" />
                  <img className="w-4 h-4" src="/svg/svgs (7).svg" />
                  <img className="w-4 h-4" src="/svg/svgs (8).svg" />
                </div>
              </div>
            </div>

            <div className="keen-slider__slide  bg-[#24A556] py-5 flex items-end rounded-lg sm:w-[70%] sm:mx-auto md:w-[23%] h-[25rem] relative">
              <img
                className="w-[80%] border-b absolute top-[0px] left-0 h-[80%]"
                src="p2.png"
              />
              <img
                src="/team/frame2.png"
                className="absolute top-4 right-3 w-12"
              />
              <div className="px-4 w-full flex items-end justify-between">
                <div>
                  <h1 className="text-white text-[18px] font-semibold outfit">
                    Jon Ashraf
                  </h1>
                  <h2 className="text-white text-[14px] font-semibold outfit">
                    Marketer
                  </h2>
                </div>
                <div className="flex items-center space-x-1 justify-end">
                  <img className="w-4 h-4" src="/svg/svgs (2).svg" />
                  <img className="w-4 h-4" src="/svg/svgs (7).svg" />
                  <img className="w-4 h-4" src="/svg/svgs (8).svg" />
                </div>
              </div>
            </div>

            <div className="keen-slider__slide  bg-[#24A556] py-5 flex items-end rounded-lg sm:w-[70%] sm:mx-auto md:w-[10%] h-[25rem] relative">
              <img
                className="w-[80%] border-b absolute top-[-45px] left-0 h-[90%]"
                src="p3.png"
              />
              <img
                src="/team/frame3.png"
                className="absolute top-3 right-3 w-12"
              />
              <div className="px-4 w-full flex items-end justify-between">
                <div>
                  <h1 className="text-white text-[18px] font-semibold outfit">
                    Kani Jon
                  </h1>
                  <h2 className="text-white text-[14px] font-semibold outfit">
                    Desinger
                  </h2>
                </div>
                <div className="flex items-center space-x-1 justify-end">
                  <img className="w-4 h-4" src="/svg/svgs (2).svg" />
                  <img className="w-4 h-4" src="/svg/svgs (7).svg" />
                  <img className="w-4 h-4" src="/svg/svgs (8).svg" />
                </div>
              </div>
            </div>

            <div className="keen-slider__slide  bg-[#24A556] py-5 flex items-end rounded-lg sm:w-[70%] sm:mx-auto md:w-[23%] h-[25rem] relative">
              <img
                className="w-[80%] border-b absolute top-[-45px] left-0 h-[90%]"
                src="p3.png"
              />
              <img
                src="/team/frame3.png"
                className="absolute top-3 right-3 w-12"
              />
              <div className="px-4 w-full flex items-end justify-between">
                <div>
                  <h1 className="text-white text-[18px] font-semibold outfit">
                    Kani Jon
                  </h1>
                  <h2 className="text-white text-[14px] font-semibold outfit">
                    Desinger
                  </h2>
                </div>
                <div className="flex items-center space-x-1 justify-end">
                  <img className="w-4 h-4" src="/svg/svgs (2).svg" />
                  <img className="w-4 h-4" src="/svg/svgs (7).svg" />
                  <img className="w-4 h-4" src="/svg/svgs (8).svg" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 w-[25%] lg:justify-center lg:items-end">
            <span
              onClick={prevSlide}
              className="rounded-full flex items-center justify-center rotate-0 p-2 bg-[#3F3F3F]"
            >
              <img
                src="/svg/arrow.svg"
                className="w-14 sm:w-10 md:w-8 md:h-8"
              />
            </span>
            <span
              onClick={nextSlide}
              className="rounded-full flex items-center justify-center rotate-180 p-2 bg-[#3F3F3F]"
            >
              <img
                src="/svg/arrow.svg"
                className="w-14 sm:w-10 md:w-8 md:h-8"
              />
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamSection;
