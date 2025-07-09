import React from "react";
import brandLogo from "../assets/NikeLogo.png";

const Navbar = () => {
  return (
    <header className="min-w-full">
      <nav className="max-w-[1500px] mx-auto flex justify-between items-center py-4">
        <img src={brandLogo} alt="brand logo" />
        <ul className="flex gap-10">
          <li className="text-xl font-semibold hover:text-neutral-700 hover:underline cursor-pointer transition-all duration-300">
            Menu
          </li>
          <li className="text-xl font-semibold hover:text-neutral-700 hover:underline cursor-pointer transition-all duration-300">
            location
          </li>
          <li className="text-xl font-semibold hover:text-neutral-700 hover:underline cursor-pointer transition-all duration-300">
            About
          </li>
          <li className="text-xl font-semibold hover:text-neutral-700 hover:underline cursor-pointer transition-all duration-300">
            Contact
          </li>
        </ul>
        <button className="rounded-md border border-red-500 px-5 py-2 bg-red-500 capitalize text-white text-xl hover:bg-transparent hover:text-black duration-300 transition-all cursor-pointer">
          Sign in
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
