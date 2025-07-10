import React, { useState } from "react";
import HomePage from "./components/HomePage";

const App = () => {
  const [showcontact, setshowcontact] = useState(false);
  const [nameField, setNameField] = useState();
  const [passeorField, setPasseorField] = useState();
  console.log(nameField, passeorField);

  return (
    <div className="min-w-full min-h-screen bg-neutral-950 px-2 py-2">
      <HomePage
        showcontact={showcontact}
        setshowcontact={setshowcontact}
        setNameField={setNameField}
        setPasseorField={setPasseorField}
      />
    </div>
  );
};

export default App;
