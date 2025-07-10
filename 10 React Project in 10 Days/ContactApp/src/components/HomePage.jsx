import React, { useState } from "react";
import ContactPage from "./ContactPage";
import ContactInput from "./ContactInput";

const HomePage = ({
  setshowcontact,
  showcontact,
  nameField,
  setNameField,
  passeorField,
  setPasseorField,
}) => {
  return (
    <div className="relative max-w-xl w-full min-h-screen rounded-md mx-auto border px-4 py-6 flex flex-col gap-6 items-center bg-neutral-800">
      {/* Header */}
      <span className="text-2xl md:text-3xl font-bold capitalize text-center border px-6 py-2 rounded-md bg-white w-full max-w-sm">
        firebase contact app
      </span>

      {/* Input + Add Button */}
      <div className="w-full flex flex-col sm:flex-row gap-3 text-white z-10">
        <input
          type="text"
          placeholder="Enter contact"
          className="flex-grow border text-base sm:text-lg outline-none px-3 py-2 rounded-md bg-neutral-700 placeholder:text-gray-400"
        />
        <button
          className="px-6 py-2 border rounded-md text-base sm:text-lg bg-white text-black hover:bg-gray-200 transition"
          onClick={() => setshowcontact((prev) => !prev)}
        >
          Add
        </button>
      </div>

      {showcontact && (
        <ContactInput
          nameField={nameField}
          setNameField={setNameField}
          passeorField={passeorField}
          setPasseorField={setPasseorField}
        />
      )}
    </div>
  );
};

export default HomePage;
