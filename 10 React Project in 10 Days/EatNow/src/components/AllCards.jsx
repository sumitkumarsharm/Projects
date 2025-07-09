import React from "react";
import Card from "./Card";

const AllCards = ({ filteredItems, loading }) => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
      {loading && (
        <p className="text-2xl text-center md:text-start font-bold md:text-4xl text-gray-400">
          Recipes Loading...
        </p>
      )}
      {filteredItems.map((item, i) => (
        <div key={i}>
          <Card recipe={item} />
        </div>
      ))}
    </div>
  );
};

export default AllCards;
