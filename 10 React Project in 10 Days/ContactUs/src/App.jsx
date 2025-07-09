import React from "react";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";

const App = () => {
  return (
    <div className="max-w-[1280px] mx-auto">
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
