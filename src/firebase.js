// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBI0YEA4LLLR9rr50OgaCLGrGRkwJ-t15A",
  authDomain: "adroadster-cd5e8.firebaseapp.com",
  projectId: "adroadster-cd5e8",
  storageBucket: "adroadster-cd5e8.firebasestorage.app",
  messagingSenderId: "760128118311",
  appId: "1:760128118311:web:955f1c5d61133850517802",
  measurementId: "G-QG8S74QD8W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the auth service
const auth = getAuth(app);

// Initialize Firestore (db)
const db = getFirestore(app);

// Initialize Analytics (optional)
const analytics = getAnalytics(app);

// Export the necessary services and functions for use in your components
export { auth, db, collection, addDoc, getDocs, deleteDoc, doc, updateDoc };
