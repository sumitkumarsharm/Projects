import React from "react";
import Dice from "../assets/dices.png";

const Home = ({ HandleStartGame }) => {
  return (
    <div className=" w-full h-screen flex gap-2 items-center justify-center">
      <div>
        <img className="min-w-[600px]" src={Dice} alt="" />
      </div>
      <div className="flex items-end flex-col">
        <h1 className="text-8xl uppercase font-bold whitespace-nowrap ">
   
          Dice Game
        </h1>
        <button
          className="border px-16 rounded-md text-xl capitalize cursor-pointer hover:bg-transparent hover:text-black font-semibold transition-all duration-300 py-2 bg-black text-white"
          onClick={HandleStartGame}
        >
          Play now
        </button>
      </div>
    </div>
  );
};

export default Home;
