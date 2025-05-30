// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";  // <-- import getDatabase

const firebaseConfig = {
  apiKey: "AIzaSyCWiZ3OlcovDq9TgPx0Z3LtvLPk-Zw8HhY",
  authDomain: "react-33e6e.firebaseapp.com",
  databaseURL: "https://react-33e6e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react-33e6e",
  storageBucket: "react-33e6e.firebasestorage.app",
  messagingSenderId: "628074147926",
  appId: "1:628074147926:web:452a69856a2b4f2102cbf7",
  measurementId: "G-WMR6ZGRPQG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Realtime Database and export it
const db = getDatabase(app);

export { db };
