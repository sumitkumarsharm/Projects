import React, { useEffect, useState } from "react";
import AllCards from "./components/AllCards";
import Navbar from "./components/Navbar";

const App = () => {
  const [allItems, setAllItems] = useState([]);
  const [searchQuerries, setSearchQuerries] = useState("");
  const [mealType, setMealType] = useState("All");
  const [loading, setLoading] = useState(false);

  const BASE_URL = "https://dummyjson.com/recipes";

  // fetching the data from API
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        setAllItems(data.recipes);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // filtering the recipes
  const filteredItems = allItems.filter((item) => {
    const matchSearch = item.name
      .toLowerCase()
      .includes(searchQuerries.toLowerCase());
    const matchMeal = mealType === "All" || item.mealType.includes(mealType);
    return matchSearch && matchMeal;
  });

  return (
    <div className="bg-gray-800 min-h-screen w-full px-4">
      <div className="max-w-7xl mx-auto">
        <Navbar
          setSearchQuerries={setSearchQuerries}
          mealType={mealType}
          setMealType={setMealType}
        />
        <main className="mt-10">
          <AllCards filteredItems={filteredItems} loading={loading} />
        </main>
      </div>
    </div>
  );
};

export default App;
