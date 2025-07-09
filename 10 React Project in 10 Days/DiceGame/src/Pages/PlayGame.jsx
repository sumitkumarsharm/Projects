import React, { useState } from "react";
import Score from "../components/Score";
import SelectNumber from "../components/SelectNumber";
import ScrolleDice from "./ScrolleDice";

const PlayGame = () => {
  // const [count, setCount] = useState(1); // limites lagani hai
  const [score, setScore] = useState(0);
  const [currentDice, setCurrentDice] = useState(0);
  const [SelectedNumber, setSelectedNumber] = useState();
  const [error, setError] = useState();

  const generateRandomNumber = () => {
    if (!SelectedNumber) {
      setError("Please select a number");
      return;
    } else {
      setError("");
    }

    const rand = Math.floor(Math.random() * 6); // 0 to 5
    setCurrentDice(rand);

    if (rand + 1 === SelectedNumber) {
      setScore((prev) => prev + 1);
    } else {
      setScore((prev) => prev - 1);
      // console.log(score);
    }
    setSelectedNumber(undefined);
  };

  return (
    <main className="w-full max-w-7xl mx-auto pt-16">
      <div className="flex justify-between items-center">
        <Score score={score} />
        <SelectNumber
          SelectedNumber={SelectedNumber}
          setSelectedNumber={setSelectedNumber}
          error={error}
        />
      </div>
      <ScrolleDice
        currentDice={currentDice}
        generateRandomNumber={generateRandomNumber}
        setScore={setScore}
      />
    </main>
  );
};

export default PlayGame;
