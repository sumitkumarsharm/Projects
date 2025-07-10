import React from "react";
import { CgProfile } from "react-icons/cg";
import { MdDelete } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";

const ContactPage = () => {
  return (
    <div className="min-w-full min-h-screen">
      <div className="flex gap-2  px-3 py-2 rounded-md bg-neutral-500 text-white">
        <CgProfile className="text-5xl font-extralight" />

        <div className="grow">
          <h1>Sumit sharma</h1>
          <p>name@gmail.com</p>
        </div>
        <div className=" flex items-center gap-2">
          <FiEdit3 className="text-3xl  cursor-pointer font-extralight" />
          <MdDelete className="text-3xl cursor-pointer  font-extralight" />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
