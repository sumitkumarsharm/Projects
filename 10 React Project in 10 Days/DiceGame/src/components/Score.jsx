import React from "react";

const Score = ({ score }) => {
  return (
    <div className="flex flex-col items-center max-w-44 ">
      <p className="text-9xl font-semibold">{score}</p>
      <p className="text-2xl ">Total score</p>
    </div>
  );
};

export default Score;
