import React from "react";

const ContactInput = ({
  nameField,
  setNameField,
  passeorField,
  setPasseorField,
  submitText,
  HandleCancel,
  NameError,
  PassError,
  editIndex,
}) => {
  return (
    <form className="absolute inset-0 z-50  flex items-center justify-center backdrop-blur-xs bg-black/5     contact-form">
      <div className="w-full max-w-md flex flex-col gap-4 bg-gray-800 px-6 py-6 rounded-lg text-white shadow-lg">
        <h2 className="text-xl font-semibold text-center">
          {editIndex !== null ? "Edit Contact" : "Add New Contact"}
        </h2>

        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            value={nameField}
            onChange={(e) => setNameField(e.target.value)}
            type="text"
            placeholder="Enter name"
            className="w-full border text-base outline-none px-3 py-2 rounded-md bg-neutral-700 placeholder:text-gray-400 focus:border-green-500 focus:ring-green-500 "
          />
          {NameError && <span className="text-red-500">{NameError}</span>}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="number" className="text-sm font-medium">
            Contact Number
          </label>
          <input
            value={passeorField}
            onChange={(e) => setPasseorField(e.target.value)}
            id="number"
            type="text"
            placeholder="Enter number"
            className="w-full border text-base outline-none px-3 py-2 rounded-md bg-neutral-700 placeholder:text-gray-400 focus:border-green-500 focus:ring-green-500"
          />
          {PassError && <span className="text-red-500">{PassError}</span>}
        </div>

        <div className="flex justify-end gap-3 mt-4">
          <button
            className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 cursor-pointer"
            onClick={HandleCancel}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 cursor-pointer"
            onClick={submitText}
          >
            {editIndex !== null ? "Update" : "Save"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactInput;
