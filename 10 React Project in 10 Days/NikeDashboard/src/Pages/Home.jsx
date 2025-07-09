import React from "react";
import shoes from "../assets/shoe_image.png";
import amazon from "../assets/amazon.png";
import flipkart from "../assets/flipkart.png";
const Home = () => {
  return (
    <div className="flex max-w-7xl mx-auto items-center mt-20">
      <div className="grow bg-neutral-50 px-4 py-4 min-w-1/2 flex flex-col gap-10">
        <h1 className="text-8xl font-extrabold">YOUR FEET DESERVE THE BEST</h1>
        <p className="text-[18px] font-semibold w-4/6 text-neutral-600">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="flex gap-5">
          <button className="text-xl capitalize font-semibold bg-red-500 border border-red-500 text-white rounded-xs py-2 px-5">
            Shop now
          </button>
          <button className="text-xl capitalize font-semibold bg-transparents border rounded-xs py-2 px-5">
            Cotegory
          </button>
        </div>
        <div className="flex gap-3 flex-col">
          <p className="text-[18px] text-neutral-700 capitalize">
            also available on
          </p>
          <div className="flex gap-3">
            <img src={flipkart} alt="" />
            <img src={amazon} alt="" />
          </div>
        </div>
      </div>
      <div className="grow min-w-1/2 ">
        <img src={shoes} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default Home;
