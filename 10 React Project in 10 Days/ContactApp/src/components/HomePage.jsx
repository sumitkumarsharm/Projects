import React from "react";
import ContactPage from "./ContactPage";

const HomePage = () => {
  return (
    <div className="relative max-w-xl w-full min-h-screen rounded-md mx-auto border px-4 py-6 flex flex-col gap-6 items-center bg-neutral-800">
      {/* Header */}
      <span className="text-2xl md:text-3xl font-bold capitalize text-center border px-6 py-2 rounded-md bg-white w-full max-w-sm">
        firebase contact app
      </span>

      {/* Input + Add Button */}
      <div className="w-full flex flex-col sm:flex-row gap-3 text-white">
        <input
          type="text"
          placeholder="Enter contact"
          className="flex-grow border text-base sm:text-lg outline-none px-3 py-2 rounded-md bg-neutral-700 placeholder:text-gray-400"
        />
        <button className="px-6 py-2 border rounded-md text-base sm:text-lg bg-white text-black hover:bg-gray-200 transition">
          Add
        </button>
      </div>

      {/* Contact Form (Hidden by default, show via class toggle or React later) */}
      <div className="contact-form w-full max-w-md flex flex-col gap-4 bg-gray-700 px-4 py-5 rounded-md text-white shadow-md ">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm font-semibold">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter name"
            className="w-full border text-base outline-none px-3 py-2 rounded-md bg-neutral-800 placeholder:text-gray-400"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="number" className="text-sm font-semibold">
            Contact Number
          </label>
          <input
            id="number"
            type="text"
            placeholder="Enter number"
            className="w-full border text-base outline-none px-3 py-2 rounded-md bg-neutral-800 placeholder:text-gray-400"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
