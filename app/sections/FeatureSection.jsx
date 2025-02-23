import React from "react";

const FeatureSection = () => {
  return (
    <div>
      <div className="max-w-5xl container mx-auto px-4 mt-10">
        <h1 className="text-green-600 my-4 font-bold outfit text-4xl">
          Featured Content
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <div className="relative py-8 px-8">
            <img
              src="/feat (2).png"
              className="h-full w-full absolute top-0 left-0 -z-10"
            />
            <h3 className="text-gray-600 outfit">Top News</h3>
            <h1 className="text-white text-xl my-2 outfit">
              VR training app for a <br /> manufacturing company
            </h1>
            <p className="text-white w-full md:w-[90%] my-5 outfit">
              Throughout 2021, the company’s specialists implemented important
              skill-sharing and community development initiatives as part
            </p>
            <a href="#" className="text-green-600 outfit">
              Read more
            </a>
          </div>
          <div className="relative bg-black py-8 px-8">
            <h3 className="text-gray-600 outfit">10 July, 2025</h3>
            <h1 className="text-white text-xl my-2 outfit">
              VR training app for a <br /> manufacturing company
            </h1>
            <p className="text-white w-full md:w-[90%] my-5 outfit">
              Throughout 2021, the company’s specialists implemented important
              skill-sharing and community development initiatives as part
            </p>
            <a href="#" className="text-white outfit">
              Read more
            </a>
          </div>
          <div className="relative bg-black py-8 px-8">
            <h3 className="text-gray-600 outfit">Top News</h3>
            <h1 className="text-white text-xl my-2 outfit">
              VR training app for a <br /> manufacturing company
            </h1>
            <p className="text-white w-full md:w-[90%] my-5 outfit">
              Throughout 2021, the company’s specialists implemented important
              skill-sharing and community development initiatives as part
            </p>
            <a href="#" className="text-green-600 outfit">
              Read more
            </a>
          </div>
          <div className="relative flex items-center justify-center py-8 px-8">
            <img
              src="/feat (1).png"
              className="h-full w-full absolute top-0 left-0 -z-10"
            />
            <img src="/feat (3).png" className="w-36" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
