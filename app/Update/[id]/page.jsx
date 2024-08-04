"use client"
import { useMyContext } from '@/app/_components/Context';
import LoadingAnimation from '@/app/_components/LoadingAnimation';
import { db } from '../../../firebase';
import { doc, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';

const Page = ({ params }) => {
  const { id } = params;
  const [loading, setLoading] = useState(true);
  const [itemQuantity, setItemQuantity] = useState(1);
  const [itemToUpdate, setItemToUpdate] = useState(null);
  const { userEmail, items } = useMyContext();

  useEffect(() => {
    const item = items.find((item) => item.id === id);
    setItemToUpdate(item);
    if (item) {
      setLoading(false);
    }
  }, [id, items]);

  const updateDocument = async (id, newQuantity) => {
    if (!id || !userEmail) {
      console.error("User email or document ID is not defined");
      alert('Can\'t be updated');
      return;
    }
    try {
      const docRef = doc(db, userEmail, id);
      await updateDoc(docRef, { quantity: newQuantity });
      console.log("Document updated with ID: ", id);
      alert('Updated Successfully');
    } catch (error) {
      alert('Error to Update Document');
      console.error("Error updating document: ", error);
    }
  };

  return (
    <>
      {loading ? (
        <LoadingAnimation />
      ) : (
        <section className="w-80 my-10 lg:my-0 space-y-5 p-3 text-center rounded-lg bg-blue-950 text-white select-none">
          <img src={itemToUpdate.imageURL} className='w-full h-40 object-cover' alt="Item" />
          <h1 className="text-2xl font-bold text-center">Update</h1>
          <h1 className='text-xl font-medium text-start'>{itemToUpdate.name}</h1>
          <h1 className='text-xl font-medium text-start'>Category: {itemToUpdate.category}</h1>
          <h1 className='text-xl font-medium text-start'>Measure: {itemToUpdate.quantity} {itemToUpdate.measure}</h1>

          <div className="text-lg font-medium flex items-center text-center">
            <h1 className=''>Quantity : </h1>
            <button onClick={() => setItemQuantity(prev => Math.max(prev - 1, 1))} className="ms-5 px-3 text-3xl font-black py-1 hover:bg-green-400 hover:text-blue-950 rounded-lg">-</button>
            <h1 className="px-2">{itemQuantity}</h1>
            <button onClick={() => setItemQuantity(prev => prev + 1)} className="px-3 py-1 text-3xl font-black hover:bg-green-400 hover:text-blue-950 rounded-lg">+</button>
          </div>

          <button onClick={() => updateDocument(id, itemQuantity)} className="py-3 px-5 rounded-md bg-green-700">Update</button>
        </section>
      )}
    </>
  );
};

export default Page;
