import React from "react";
import vector from "../assets/Vector.png";
import phone from "../assets/phone.png";
import service from "../assets/survice.png";
import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [userData, setUserData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData([...userData, { Name: name, Email: email, Message: message }]);
  };
  // console.log(userData);

  return (
    <div className="w-full mt-7">
      <h1 className="text-6xl uppercase font-bold">Contact us</h1>
      <p className="max-w-[90%] font-semibold mt-8 text-xl">
        LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
        WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
        REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
        EMAIL, OR SOCIAL MEDIA.
      </p>
      <div className="flex gap-2">
        <div className="grow-1 min-1-1/2 p-4 flex flex-col">
          <div className="flex gap-5 mb-3">
            <button className="border uppercase font-semibold rounded-sm bg-black text-white gap-2 items-center text-xl px-10 py-2  flex ">
              <img src={vector} alt="" /> via support chat
            </button>
            <button className="border uppercase font-semibold rounded-sm bg-black flex gap-2 items-center justify-center text-white px-10 text-xl py-2 grow ">
              <img src={phone} alt="" />
              via call
            </button>
          </div>
          <button className="border  rounded-sm py-2 text-xl uppercase font-semibold mb-10">
            via email
          </button>
          <form
            className="flex flex-col gap-6 items-end"
            onSubmit={handleSubmit}
          >
            <div className="relative w-full">
              <label className="absolute -top-2 left-3 bg-white px-1 text-sm font-semibold uppercase">
                Name
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                className="w-full border border-gray-400 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="relative w-full">
              <label className="absolute -top-2 left-3 bg-white px-1 text-sm font-semibold uppercase">
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                className="w-full border border-gray-400 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="relative w-full">
              <label className="absolute -top-2 left-3 bg-white px-1 text-sm font-semibold uppercase">
                Text
              </label>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                rows="5"
                cols="50"
                type="text"
                className="w-full border border-gray-400 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="border px-10 py-2 rounded-md bg-black text-white ">
              Submit
            </button>
          </form>
        </div>
        <div className="grow-1 min-1-1/2 p-4">
          <img src={service} alt="" />
        </div>
      </div>

      <div className="">
        {userData.map((user) => (
          <div className="  rounded-md mb-10 px-6 py-4 flex flex-col gap-4 bg-neutral-600 text-white">
            <p className="text-xl font-semibold uppercase">
              UserName : <span className="capitalize">{user.Name}</span>
            </p>
            <p className="text-xl font-semibold uppercase">
              UserEmail : <span className="lowercase">{user.Email}</span>
            </p>
            <p className="text-xl font-semibold uppercase">
              UserMessage : <span className="lowercase">{user.Message}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
