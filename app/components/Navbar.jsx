"use client";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { AiFillCloseCircle } from "react-icons/ai";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="flex my-0 bg-white lg:my-10 p-4 shadow-md rounded-lg items-center justify-between max-w-5xl px-6 mx-auto container">
        <div>
          <h1 className="font-semibold text-xl md:text-2xl text-black">
            Zjox Softwarks
          </h1>
        </div>
        <div>
          <ul className="hidden md:flex text-sm items-center space-x-8  text-gray-600">
            <a className="hover:text-green-600 transition-all" href="#">
              Home
            </a>
            <a className="hover:text-green-600 transition-all" href="#about">
              About
            </a>
            <a className="hover:text-green-600 transition-all" href="#projects">
              Projects
            </a>
            <a className="hover:text-green-600 transition-all" href="#services">
              Services
            </a>
            <a className="hover:text-green-600 transition-all" href="#team">
              Team
            </a>
            <a className="hover:text-green-600 transition-all" href="#features">
              Features
            </a>
            <a className="hover:text-green-600 transition-all" href="#contact">
              Contact
            </a>
          </ul>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <CiMenuFries
            onClick={() => setShowNav(!showNav)}
            className="size-6 md:hidden"
          />
          <img className="w-6 h-6" src="/search.png" />
        </div>
      </nav>
      <ul
        className={`${
          showNav ? "flex" : "hidden"
        } flex items-center flex-col justify-center gap-6 bg-white fixed
      top-0 left-0 h-full w-full text-gray-600`}
      >
        <AiFillCloseCircle
          onClick={() => setShowNav(!showNav)}
          className="size-9 absolute top-5 right-5"
        />
        <a onClick={() => setShowNav(!showNav)} href="#">
          Home
        </a>
        <a onClick={() => setShowNav(!showNav)} href="#about">
          About
        </a>
        <a onClick={() => setShowNav(!showNav)} href="#projects">
          Projects
        </a>
        <a onClick={() => setShowNav(!showNav)} href="#services">
          Services
        </a>
        <a onClick={() => setShowNav(!showNav)} href="#team">
          Team
        </a>
        <a onClick={() => setShowNav(!showNav)} href="#features">
          Features
        </a>
        <a onClick={() => setShowNav(!showNav)} href="#contact">
          Contact
        </a>
      </ul>
    </header>
  );
};

export default Navbar;
