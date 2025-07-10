import React, { useState } from "react";
import HomePage from "./components/HomePage";

const App = () => {
  const [showcontact, setshowcontact] = useState(false);
  const [nameField, setNameField] = useState();
  const [passeorField, setPasseorField] = useState();
  const [AllData, setAllData] = useState([]);
  const [search, setSearch] = useState("");
  const [NameError, setNameError] = useState("");
  const [PassError, setPasError] = useState("");

  const HandleCancel = (e) => {
    e.preventDefault();
    setshowcontact(false);
    setPasseorField("");
    setNameField("");
  };

  const submitText = (e) => {
    e.preventDefault();
    if (!nameField?.trim() || !passeorField?.trim()) {
      setNameError("Name is required!");
      setPasError("Number is required!");
      return;
    }
    setAllData((prev) => [...prev, { name: nameField, number: passeorField }]);
    setshowcontact(false);
    setPasseorField("");
    setNameField("");
    setSearch("");
  };

  const filteredContacts = AllData.filter((contact) =>
    `${contact.name} ${contact.number}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="min-w-full min-h-screen bg-neutral-950 px-2 py-2">
      <HomePage
        showcontact={showcontact}
        setshowcontact={setshowcontact}
        setNameField={setNameField}
        setPasseorField={setPasseorField}
        submitText={submitText}
        HandleCancel={HandleCancel}
        filteredContacts={filteredContacts}
        search={search}
        setSearch={setSearch}
        NameError={NameError}
        PassError={PassError}
      />
    </div>
  );
};

export default App;
