// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCP4o-7euL0CArtTQZZomuu7SBURnQoh6A",
  authDomain: "mateohacks-practice.firebaseapp.com",
  projectId: "mateohacks-practice",
  storageBucket: "mateohacks-practice.appspot.com",
  messagingSenderId: "22822135145",
  appId: "1:22822135145:web:934872e9570445e404c9f8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
