"use client";
// context/MyContext.js
import { createContext, useContext, useState } from 'react';

// Create a context with a default value
const MyContext = createContext();

// Create a provider component
export const MyProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState('');
  const [items,setItems]=useState([])
  return (
    <MyContext.Provider value={{ userEmail, setUserEmail,items,setItems }}>
      {children}
    </MyContext.Provider>
  );
};

// Custom hook to use the context
export const useMyContext = () => useContext(MyContext);
