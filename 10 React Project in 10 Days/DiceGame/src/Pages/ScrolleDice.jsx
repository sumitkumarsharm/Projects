import React, { useState } from "react";
import Dice1 from "../assets/Dices/dice_1.png";
import Dice2 from "../assets/Dices/dice_2.png";
import Dice3 from "../assets/Dices/dice_3.png";
import Dice4 from "../assets/Dices/dice_4.png";
import Dice5 from "../assets/Dices/dice_5.png";
import Dice6 from "../assets/Dices/dice_6.png";

const ScrolleDice = ({ currentDice, generateRandomNumber, setScore }) => {
  const [showRules, setShowRules] = useState(false);
  const DiceImage = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];

  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center flex-col gap-2 ">
      <div className="cursor-pointer" onClick={generateRandomNumber}>
        <img src={DiceImage[currentDice]} alt="" />
      </div>
      <p className="text-xl font-semibold">Click on Dice to roll</p>
      <div className="px-5 py-3 flex flex-col gap-2">
        <button
          className="bg-transparent border border-black text-black px-18 py-1 cursor-pointer text-2xl rounded-sm active:bg-black active:text-white transition-all duration-300 ease-in-out"
          onClick={() => setScore(0)}
        >
          Reset Score
        </button>
        <button
          className="bg-black border border-black text-white px-18 text-xl py-3 rounded-sm cursor-pointer active:bg-transparent active:text-black transition-all duration-300 ease-in-out  active:border-black"
          onClick={() => setShowRules((prev) => !prev)}
        >
          Show Rules
        </button>
      </div>
      {showRules && (
        <div className=" px-8 py-4 bg-red-100 flex flex-col gap-5 text-xl">
          <h1 className="text-3xl font-bold">How to play dice game</h1>
          <ul className="font-semibold list-decimal ml-5">
            <li>Select any number</li>
            <li>Click on dice image</li>
            <li>
              after click on dice if selected number is equal to dice number you
              will get same point as dice
            </li>
            <li>if you get wrong guess then 2 point will be dedcuted </li>
          </ul>
        </div>
      )}
      {/* <div className=" px-8 py-4 bg-red-100 flex flex-col gap-5 text-xl">
        <h1 className="text-3xl font-bold">How to play dice game</h1>
        <ul className="font-semibold list-decimal ml-5">
          <li>Select any number</li>
          <li>Click on dice image</li>
          <li>
            after click on dice if selected number is equal to dice number you
            will get same point as dice
          </li>
          <li>if you get wrong guess then 2 point will be dedcuted </li>
        </ul>
      </div> */}
    </div>
  );
};

export default ScrolleDice;
