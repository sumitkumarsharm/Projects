import React, { useEffect, useState } from "react";
import HomePage from "./components/HomePage";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";

import { db } from "./config/firebase"; // Firestore config

const App = () => {
  const [showcontact, setshowcontact] = useState(false);
  const [nameField, setNameField] = useState("");
  const [passeorField, setPasseorField] = useState("");
  const [AllData, setAllData] = useState([]);
  const [search, setSearch] = useState("");
  const [NameError, setNameError] = useState("");
  const [PassError, setPasError] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  // ✅ Load contacts from Firestore once
  useEffect(() => {
    const getContact = async () => {
      try {
        const contactCollection = collection(db, "contacts");
        const contactSnapshot = await getDocs(contactCollection);
        const contactList = contactSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAllData(contactList);
        console.log(AllData);
      } catch (error) {
        console.error("Failed to fetch contacts:", error);
      }
    };

    getContact();
  }, []);

  // ❌ Cancel form
  const HandleCancel = (e) => {
    e.preventDefault();
    setNameField("");
    setPasseorField("");
    setshowcontact(false);
    setEditIndex(null);
    setNameError("");
    setPasError("");
  };

  // ✅ Add new contact (Firestore + UI)
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

    try {
      if (editIndex !== null) {
        // For now, just update locally
        const updated = [...AllData];
        updated[editIndex] = {
          ...updated[editIndex],
          name: nameField,
          number: passeorField,
        };
        setAllData(updated);
      } else {
        // ✅ Save new contact to Firestore
        const docRef = await addDoc(collection(db, "contacts"), {
          name: nameField,
          number: passeorField,
        });

        // Update local list
        setAllData((prev) => [
          ...prev,
          { id: docRef.id, name: nameField, number: passeorField },
        ]);
      }

      // Reset form
      setNameField("");
      setPasseorField("");
      setshowcontact(false);
      setEditIndex(null);
      setNameError("");
      setPasError("");
    } catch (error) {
      console.error("Error saving to Firebase:", error);
    }
  };

  // ❌ Delete (only local for now)
  const handleDelete = async (index) => {
    try {
      const contact = AllData[index];
      if (!contact.id) {
        console.warn("Contact has no ID — cannot delete from Firestore.");
        return;
      }

      // Delete the data from firebase
      await deleteDoc(doc(db, "contacts", contact.id));

      const updated = AllData.filter((_, i) => i !== index);
      setAllData(updated);
    } catch (error) {
      console.error("Failed to delete contact:", error);
    }
  };

  // ✏️ Edit
  const handleEdit = (index) => {
    const contact = AllData[index];
    setNameField(contact?.name || "");
    setPasseorField(contact?.number || "");
    setEditIndex(index);
    setshowcontact(true);
  };

  // 🔍 Filter
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
