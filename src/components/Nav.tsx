import React from "react";
import logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    <nav className="sticky top-0 z-50 bg-[#fbf0f3]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative flex items-center justify-between py-4 md:py-5">
          {/* Hidden Checkbox */}
          <input type="checkbox" id="menu-toggle" className="peer hidden" />

          {/* Hamburger */}
          <label
            htmlFor="menu-toggle"
            className="text-2xl cursor-pointer lg:hidden"
          >
            ☰
          </label>

          {/* Logo */}
          <img
            src={logo}
            alt="Website Logo"
            className="
              absolute
              left-1/2
              -translate-x-1/2
              w-32
              md:w-36

              lg:static
              lg:translate-x-0
              lg:w-auto
            "
          />

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-6 font-semibold">
            <li className="text-[#D91B7E]">
              <a href="#">Home</a>
            </li>

            <li>
              <a href="#">Technologies</a>
            </li>

            <li>
              <a href="#">Projects</a>
            </li>

            <li>
              <a href="#">About</a>
            </li>

            <li>
              <a href="#">Contact</a>
            </li>
          </ul>

          {/* Buttons */}
          <div className="flex items-center gap-2 md:gap-4">
            <button className="font-semibold text-sm md:text-lg">
              Sign In
            </button>

            <button
              className="
                rounded-full
                font-semibold
                text-sm md:text-lg
                bg-[#D91B7E]
                border-none
                text-white
                px-3 md:px-5
                py-2
              "
            >
              Sign Up
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className="
              absolute
              top-full
              left-0
              w-full
              bg-[#fbf0f3]
              hidden
              peer-checked:block
              lg:hidden
              py-5
            "
          >
            <ul className="flex flex-col items-center gap-5 font-semibold">
              <li className="text-[#D91B7E]">
                <a href="#">Home</a>
              </li>

              <li>
                <a href="#">Technologies</a>
              </li>

              <li>
                <a href="#">Projects</a>
              </li>

              <li>
                <a href="#">About</a>
              </li>

              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
