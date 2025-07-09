import React, { useState } from "react";

const SelectNumber = ({ SelectedNumber, setSelectedNumber, error }) => {
  const Number = [1, 2, 3, 4, 5, 6];

  return (
    <div className=" relative flex flex-col items-end gap-5 ">
      <p className="absolute -top-8 right-0 text-red-600 text-xl font-semibold">{error}</p>
      <div className="flex gap-3">
        {Number.map((item, index) => (
          <div
            key={index}
            className="border border-black text-black cursor-pointer w-16 h-20 flex items-center justify-center font-semibold text-2xl "
            onClick={() => setSelectedNumber(item)}
            style={{
              backgroundColor: SelectedNumber === item ? "black" : "white",
              color: SelectedNumber === item ? "white" : "black",
            }}
          >
            {item}
          </div>
        ))}
      </div>
      <h2 className="text-2xl font-semibold">Select Number</h2>
    </div>
  );
};

export default SelectNumber;
