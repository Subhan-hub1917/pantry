"use client";
import { useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_api_Key,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_authDomain,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_projectId,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_storageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_messagingSenderId,
  appId: process.env.NEXT_PUBLIC_FIREBASE_appId,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_measurementId
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
// export const analytics =getAnalytics(app)
export const db=getFirestore(app);
export const storage=getStorage(app);