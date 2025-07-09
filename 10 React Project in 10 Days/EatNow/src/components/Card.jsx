import React from "react";

const Card = ({ recipe }) => {
  return (
    <div className="w-full max-w-sm bg-white rounded-xl shadow-md border overflow-hidden hover:shadow-lg transition-all h-[550px] flex flex-col">
      {/* Image */}
      <img
        src={recipe.image}
        alt={recipe.name}
        className="w-full h-40 object-cover"
      />

      {/* Content (scrollable if overflow) */}
      <div className="p-4 flex-1 overflow-y-auto">
        {/* Title + Difficulty */}
        <div className="flex justify-between items-center mb-1">
          <h2 className="text-lg font-bold text-gray-800">{recipe.name}</h2>
          <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
            {recipe.difficulty}
          </span>
        </div>

        {/* Rating + Cuisine */}
        <div className="text-sm text-gray-500 flex justify-between mb-2">
          <span>
            ⭐ {recipe.rating} ({recipe.reviewCount})
          </span>
          <span>{recipe.cuisine}</span>
        </div>

        {/* Time Info */}
        <div className="text-xs text-gray-600 flex flex-wrap gap-2 mb-2">
          <span>🕒 {recipe.prepTimeMinutes}m prep</span>
          <span>🔥 {recipe.cookTimeMinutes}m cook</span>
          <span>🍽️ {recipe.servings} servings</span>
        </div>

        {/* Ingredients */}
        <div className="mb-2">
          <h4 className="text-sm font-semibold text-gray-700">Ingredients:</h4>
          <ul className="list-disc list-inside text-xs text-gray-700">
            {recipe.ingredients.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Instructions */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700">Instructions:</h4>
          <ol className="list-decimal list-inside text-xs text-gray-700 space-y-1">
            {recipe.instructions.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ol>
        </div>
      </div>

      {/* Tags (fixed bottom spacing) */}
      <div className="px-4 pb-4 pt-2 flex flex-wrap gap-2 mt-auto">
        {recipe.tags.map((tag, i) => (
          <span
            key={i}
            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
