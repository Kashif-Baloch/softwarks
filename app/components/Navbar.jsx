"use client";
import { useState } from "react";
import { AiOutlineSlack } from "react-icons/ai";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="flex my-0 bg-white md:my-10 p-4 shadow-md rounded-lg items-center justify-between max-w-5xl px-6 mx-auto container">
        <div>
          <h1 className="font-semibold text-xl md:text-2xl text-black">
            Zjox Softwarks
          </h1>
        </div>
        <div>
          <ul className="hidden md:flex text-sm items-center space-x-8  text-gray-600">
            <a href="#">About</a>
            <a href="#">Projects</a>
            <a href="#">Services</a>
            <a href="#">Client</a>
            <a href="#">Team</a>
            <a href="#">Blogs</a>
            <a href="#">Contact</a>
          </ul>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <AiOutlineSlack
            onClick={() => setShowNav(!showNav)}
            className="size-9"
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
        <AiOutlineSlack
          onClick={() => setShowNav(!showNav)}
          className="size-9 absolute top-5 right-5"
        />
        <a href="#">About</a>
        <a href="#">Projects</a>
        <a href="#">Services</a>
        <a href="#">Client</a>
        <a href="#">Team</a>
        <a href="#">Blogs</a>
        <a href="#">Contact</a>
      </ul>
    </header>
  );
};

export default Navbar;
