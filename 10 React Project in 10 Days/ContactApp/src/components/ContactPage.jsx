import React from "react";
import { CgProfile } from "react-icons/cg";
import { MdDelete } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";
import { RiUserForbidFill } from "react-icons/ri";

const ContactPage = ({ filteredContacts = [], handleDelete, handleEdit }) => {
  return (
    <div className="w-full px-1">
      {filteredContacts.length > 0 ? (
        <div
          className=" w-full max-h-[80vh] overflow-y-auto flex flex-col gap-5 pr-2 "
          style={{ scrollbarWidth: "none" }}
        >
          {filteredContacts.map((contact, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border border-neutral-700 rounded-xl p-4 bg-neutral-800 shadow-md transition-all"
            >
              <div className="flex items-start sm:items-center gap-4 flex-1">
                <div className="bg-neutral-700 p-2 rounded-full">
                  <CgProfile className="text-3xl text-white" />
                </div>
                <div className="text-white">
                  <h2 className="text-lg font-semibold break-words">
                    {contact.name}
                  </h2>
                  <p className="text-sm text-gray-400 break-words">
                    {contact.number}
                  </p>
                </div>
              </div>

              <div className="flex gap-3 justify-end sm:justify-start">
                <button
                  className="p-2 rounded-md bg-blue-500 hover:bg-blue-600 transition text-white text-lg cursor-pointer"
                  onClick={() => handleEdit(i)}
                >
                  <FiEdit3 />
                </button>
                <button
                  className="p-2 rounded-md bg-red-500 hover:bg-red-600 transition text-white text-lg cursor-pointer"
                  onClick={() => handleDelete(i)}
                >
                  <MdDelete />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center gap-2 items-center h-[60vh]">
          <RiUserForbidFill className="text-4xl text-gray-400" /> 
          <h2 className="text-2xl font-semibold text-gray-400">
            No contacts added yet
          </h2>
        </div>
      )}
    </div>
  );
};

export default ContactPage;
