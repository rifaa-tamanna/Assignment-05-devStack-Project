import React from "react";
import logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    <nav>
      <div className="max-w-7xl mx-auto flex justify-between items-center py-5">
        {/* Logo Section */}
        <img src={logo} alt="Website Logo" />

        {/* Nav Item */}
        <ul className="flex justify-between items-center gap-6 font-semibold">
          <li className="text-[#D91B7E]">Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
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
