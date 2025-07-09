import React from "react";

const Navbar = ({ setSearchQuerries, mealType, setMealType }) => {
  const buttons = ["All", "Breakfast", "Lunch", "Dinner"];
  return (
    <nav className="w-full max-w-7xl mx-auto bg-gray-800 border-b border-b-gray-500 px-4 py-4">
      {/* Top: Logo + Search */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <h1 className="text-3xl font-bold text-white">
          <span className="text-green-500">Eat</span>Now
        </h1>

        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchQuerries(e.target.value)}
          className="border border-gray-400 bg-gray-700 text-white placeholder:text-gray-400 px-3 py-1 rounded-md w-full md:w-1/3 outline-none"
        />
      </div>

      {/* Bottom: Category Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        {buttons.map((type) => (
          <button
            key={type}
            onClick={() => setMealType(type)}
            className={`px-4 py-1 rounded-md border text-white ${
              mealType === type
                ? "bg-green-500 border-green-400"
                : "bg-gray-600 border-gray-500"
            }`}
          >
            {type}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
