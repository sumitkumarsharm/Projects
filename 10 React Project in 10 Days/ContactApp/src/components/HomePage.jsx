import React, { useState } from "react";
import ContactPage from "./ContactPage";
import ContactInput from "./ContactInput";
import { SiFirebase } from "react-icons/si";

const HomePage = ({
  setshowcontact,
  showcontact,
  nameField,
  setNameField,
  passeorField,
  setPasseorField,
  submitText,
  HandleCancel,
  filteredContacts,
  search,
  setSearch,
  NameError,
  PassError,
  handleDelete,
  handleEdit,
  editIndex,
}) => {
  return (
    <div className="relative max-w-2xl w-full min-h-screen  overflow-y-auto rounded-md mx-auto border px-4 py-6 flex flex-col gap-6 items-center bg-neutral-800">
      {/* Header */}
      <span className="text-2xl md:text-3xl font-bold capitalize text-center border px-6 py-2 rounded-md bg-white w-full max-w-xl flex gap-2 items-center justify-center">
        <SiFirebase className="text-3xl font-bold" /> firebase contact app
      </span>

      <div className="w-full flex flex-col sm:flex-row gap-3 text-white z-10">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
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
          submitText={submitText}
          HandleCancel={HandleCancel}
          NameError={NameError}
          PassError={PassError}
        />
      )}
      <ContactPage
        filteredContacts={filteredContacts}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  );
};

export default HomePage;
