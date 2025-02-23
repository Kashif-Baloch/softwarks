import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="bg-[#24A556] relative">
        <img
          src="/footer/footer (3).png"
          className="absolute top-0 log-wide w-[50%] left-[45%] translate-x-[-50%] "
        />
        <div className="container flex-wrap lg:flex-nowrap max-w-5xl flex mx-auto px-4 lg:space-x-6 space-y-5 py-16">
          <div>
            <img src="/footer/logo.png" className="w-56" />
            <p className="orbitron leading-8 md:w-[90%] text-white text-sm mt-4">
              Concept Softworks is a software company, we develop custom built
              software for clients - covering everything from financial
              institutions & medical companies all the way to tech companies and
              government organizations.
            </p>
          </div>
          <div className="flex justify-end flex-col">
            <ul className="flex orbitron text-[12px] flex-wrap lg:flex-nowrap gap-4 lg:gap-0 items-center lg:space-x-8 text-white">
              <a href="#">About</a>
              <a href="#">Projects</a>
              <a href="#">Services</a>
              <a href="#">Client</a>
              <a href="#">Team</a>
              <a href="#">Blogs</a>
              <a href="#">Contact</a>
            </ul>
            <div className="my-4 flex items-center space-x-6">
              <h1 className="text-white font-semibold orbitron">Flow</h1>
              <div className="flex space-x-3">
                <img src="/footer/footer (1).png" className="w-8 h-8" />
                <img src="/footer/footer (4).png" className="w-8 h-8" />
                <img src="/footer/footer (5).png" className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
