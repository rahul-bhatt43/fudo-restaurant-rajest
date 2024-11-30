// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCSPsSL4bFw4G_smDmroYKqqKy6TRsk2kI",
  authDomain: "fudo-restaurant.firebaseapp.com",
  projectId: "fudo-restaurant",
  storageBucket: "fudo-restaurant.firebasestorage.app",
  messagingSenderId: "225718016319",
  appId: "1:225718016319:web:507c01009a5566087c9b8a",
//   databaseURL:"https://fudo-restaurant-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };