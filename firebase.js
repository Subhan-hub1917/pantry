"use client"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// import { getFirestore } from "firebase/firebase-firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAE9xvHOabnAUwzMkna_aO-V0zrgisLkS0",
  authDomain: "pantry-items-ba87a.firebaseapp.com",
  projectId: "pantry-items-ba87a",
  storageBucket: "pantry-items-ba87a.appspot.com",
  messagingSenderId: 352151066454,
  appId: "1:352151066454:web:750ff1db58ecade52d28f7",
  measurementId: " G-1J60GL96FR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db=getFirestore(app);