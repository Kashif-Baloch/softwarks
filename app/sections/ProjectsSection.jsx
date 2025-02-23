import React from "react";
import Marquee from "react-fast-marquee";

const ProjectsSection = () => {
  return (
    <div className="">
      <div className="flex container pt-10 mx-auto max-5xl px-4 items-center justify-between">
        <h1 className="font-bold text-3xl md:text-4xl text-green-600 outfit">
          Projects
        </h1>
        <img src="/projects.png" className="w-24" />
      </div>
      <div className="my-10 container pt-10 mx-auto max-5xl px-4">
        <Marquee>
          <div className="flex ml-[-487px] gap-4 mt-10">
            {Array(4)
              .fill()
              .map((_, i) => {
                return (
                  <div
                    key={i}
                    className="bg-[#3F3F3F] !max-w-[17%] relative rounded-lg"
                  >
                    <div className="absolute top-4 right-4 flex z-20 items-center justify-center space-x-2">
                      <span className="bg-white px-2 rounded-md ">3D</span>
                      <span className="bg-white px-2 rounded-md ">
                        AR/VR/MR
                      </span>
                      <span className="bg-white px-2 rounded-md ">2D</span>
                    </div>
                    <div className="relative z-10 rounded-lg">
                      <img className="rounded-lg" src="/project (2).png" />
                      <img
                        src="/project (3).png"
                        className="absolute bottom-0 left-0 w-full"
                      />
                    </div>
                    <div className="py-4 z-10 relative px-6 flex flex-col space-y-3">
                      <h2 className="text-white font-semibold outfit text-lg">
                        VR training app for a manufacturing company
                      </h2>
                      <span className="p-2 w-fit bg-[#24A556] rounded-full">
                        <img src="/project (4).png" />
                      </span>
                    </div>
                    <img
                      src="/project (5).png"
                      className="absolute bottom-4 right-10"
                    />
                  </div>
                );
              })}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default ProjectsSection;
