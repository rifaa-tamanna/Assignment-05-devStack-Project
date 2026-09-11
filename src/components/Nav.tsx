import React from "react";
import logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    <nav className='sticky top-0 z-50 bg-[#fbf0f3]'>
      <div className="max-w-7xl mx-auto flex justify-between items-center py-5 backdrop-filter backdrop-blur">
        {/* Logo Section */}
        <img src={logo} alt="Website Logo" />

        {/* Nav Item */}
        <ul className="flex justify-between items-center gap-6 font-semibold">
          <li className="text-[#D91B7E]"><a href="#">Home</a></li>
          <li><a href="#">Technologies</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        {/* Button Section */}
        <div className="flex justify-between gap-4 items-center">
          <button className="font-semibold text-lg">Sign In</button>
          <button className="btn btn-active btn-success rounded-full font-semibold text-lg bg-[#D91B7E] border-none text-white">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
