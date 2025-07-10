// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmS4o7M2sn0vCPM0ucyFB5zoS5XrlZDCw",
  authDomain: "contactapp-35da7.firebaseapp.com",
  projectId: "contactapp-35da7",
  storageBucket: "contactapp-35da7.firebasestorage.app",
  messagingSenderId: "179923431604",
  appId: "1:179923431604:web:06f553933c46fedef267e1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
