import React, { useEffect, useState } from "react";
import HomePage from "./components/HomePage";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
import { db, ref, push, set } from "./firebase";

const App = () => {
  const [showcontact, setshowcontact] = useState(false);
  const [nameField, setNameField] = useState("");
  const [passeorField, setPasseorField] = useState("");
  const [AllData, setAllData] = useState([]);
  const [search, setSearch] = useState("");
  const [NameError, setNameError] = useState("");
  const [PassError, setPasError] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const getContact = async () => {
      try {
        const contactCollection = collection(db, "contacts");
        const contactSnapshot = await getDocs(contactCollection);
        const contactList = contactSnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setAllData(contactList);
        console.log(contactList);
      } catch (error) {}
    };
    getContact();
  }, []);

  // -------------------------- Cancel --------------------------
  const HandleCancel = (e) => {
    e.preventDefault();
    setNameField("");
    setPasseorField("");
    setshowcontact(false);
    setEditIndex(null);
    setNameError("");
    setPasError("");
  };

  // -------------------------- Submit --------------------------
  const submitText = async (e) => {
    e.preventDefault();

    let hasError = false;

    if (!nameField.trim()) {
      setNameError("Name is required!");
      hasError = true;
    } else {
      setNameError("");
    }

    if (!passeorField.trim()) {
      setPasError("Number is required!");
      hasError = true;
    } else {
      setPasError("");
    }

    if (hasError) return;

    if (editIndex !== null) {
      const updatedContacts = [...AllData];
      updatedContacts[editIndex] = {
        name: nameField,
        number: passeorField,
      };
      setAllData(updatedContacts);
    } else {
      setAllData((prev) => [
        ...prev,
        { name: nameField, number: passeorField },
      ]);
    }

    //  -------------------------- Reset --------------------------
    setNameField("");
    setPasseorField("");
    setshowcontact(false);
    setEditIndex(null);
    setNameError("");
    setPasError("");
  };

  // -------------------------- Delete --------------------------
  const handleDelete = (index) => {
    const updatedContacts = AllData.filter((_, i) => i !== index);
    setAllData(updatedContacts);
  };

  // -------------------------- Edit --------------------------

  const handleEdit = (index) => {
    const contact = AllData[index];
    setNameField(contact?.name || "");
    setPasseorField(contact?.number || "");
    setEditIndex(index);
    setshowcontact(true);
  };

  // ------------------------- Search -------------------------
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
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  );
};

export default App;
