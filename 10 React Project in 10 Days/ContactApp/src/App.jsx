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

import { db } from "./config/firebase";

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

  // Cancle form button
  const HandleCancel = (e) => {
    e.preventDefault();
    setNameField("");
    setPasseorField("");
    setshowcontact(false);
    setEditIndex(null);
    setNameError("");
    setPasError("");
  };

  // Adding all data from form
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
        const contactToUpdate = AllData[editIndex];
        if (!contactToUpdate.id) {
          console.warn("Cannot update contact without a valid ID ");
          return;
        }

        const contactRef = doc(db, "contacts", contactToUpdate.id);

        await updateDoc(contactRef, {
          name: nameField,
          number: passeorField,
        });

        // localy updation
        const updatedContacts = [...AllData];
        updatedContacts[editIndex] = {
          ...contactToUpdate,
          name: nameField,
          number: passeorField,
        };
        setAllData(updatedContacts);
      } else {
        const docRef = await addDoc(collection(db, "contacts"), {
          name: nameField,
          number: passeorField,
        });

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

  // Delete the data from firebase
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

  // Editing Data from firebase
  const handleEdit = (index) => {
    const contact = AllData[index];
    setNameField(contact?.name || "");
    setPasseorField(contact?.number || "");
    setEditIndex(index);
    setshowcontact(true);
  };

  // Searching Based on refelacted data
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
