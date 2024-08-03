"use client";
import { useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
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
let analytics;
let db;
const initializeFirebase = () => {
  const app = initializeApp(firebaseConfig);
  if (typeof window !== "undefined") {
    analytics = getAnalytics(app);
  }
  db = getFirestore(app);
};

export const useFirebase = () => {
  useEffect(() => {
    initializeFirebase();
  }, []);

  return { db, analytics };
};
