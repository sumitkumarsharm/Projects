import React from "react";
import Home from "./Pages/Home";
import { useState } from "react";
import PlayGame from "./Pages/PlayGame";

const App = () => {
  const [isGameStart, setisGameStart] = useState(false);

  const HandleStartGame = () => {
    setisGameStart((prev) => !prev);
  };
  return (
    <div>
      {isGameStart ? <PlayGame /> : <Home HandleStartGame={HandleStartGame} />}
    </div>
  );
};

export default App;
