"use client"
import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import LoadingAnimation from './LoadingAnimation'
import {  collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore'
import { db  } from '../../firebase'
import { useUser } from '@clerk/nextjs'
import { useMyContext } from './Context'

const Allitems = ({ items,setItems, filter}) => {
  const [pantry, setPantry] = useState([])
  const [del, setDel] = useState(false)
  const [loading, setLoading] = useState(true)
  // const {isLoaded,user}=useUser()
  const id = 134
  const {userEmail,setUserEmail}=useMyContext();
  
  useEffect(() => {
    if (userEmail) {
      getAllDocs(userEmail, setItems)
    }
    if(items) {
      setPantry(items.filter((item) => (filter === 'All' || item.category === filter)))
      setLoading(false)
    }
  }, [items, filter,userEmail])

  
  const getAllDocs = (userEmail, setItems) => {
    if (!userEmail) {
      console.logO("user Email is undefined") 
      return
    }
    const collectionRef=collection(db,userEmail)
        onSnapshot(collectionRef, (snapshot) => {
            setItems(snapshot.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                })));  
        });
  };
  const deleteDocument = async (userEmail, id) => {
    if (!userEmail || !id) {
      console.error("User email or document ID is not defined");
      return;
    }
  
    try {
      const docRef = doc(db, userEmail, id);
      await deleteDoc(docRef);
      console.log("Document deleted with ID: ", id);
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  return (
    <>
      {loading ? (
        <LoadingAnimation />
      ) : pantry.length > 0 ? (
        pantry.map((item) => (
          <div key={item.id} className={`w-60 lg:w-80 hover:scale-105 hover:shadow-2xl overflow-hidden shadow-blue-950 transition-all ease-in-out text-blue-950 hover:bg-blue-950 hover:text-white select-none mx-3 my-2 flex flex-col justify-between text-center border-2 border-blue-950 rounded-lg`}>
            <img src={item.imageURL} className='w-full h-40 object-cover' />
            <div className="flex text-md lg:text-lg justify-between px-4 py-2 font-medium">
              <div className='flex'>
                <h1 className=''>{item.quantity}-</h1><h1>{item.measure}</h1>
              </div>
              <h1 className='text-sm'>{item.expires}</h1>
            </div>
            <h1 className="text-3xl lg:text-5xl font-semibold">{item.name}</h1>
            <div className="flex items-center justify-between text-xl font-medium text-right px-4 py-2">
              <i onClick={() => setDel(true)} className={`bi bi-trash3-fill text-red-600 cursor-pointer ${del === true ? 'hidden' : 'block'}`}></i>
              <div className={`text-sm space-x-2 ${del === true ? 'flex ' : 'hidden'}`}>
                <button onClick={() => setDel(false)} className='bg-white text-blue-950 px-1 lg:px-3 py-1 rounded-lg border border-blue-950'>No</button>
                <button onClick={()=>deleteDocument(userEmail,item.id)} className='bg-red-600 text-white px-1 lg:px-3 py-1 rounded-lg' >Yes</button>
              </div>
              <Link href={`/Update/${item.id}`}><i className='bi bi-pencil-square text-orange-400 cursor-pointer '></i></Link>
            </div>
          </div>
        ))
      ) : 
      (
        <LoadingAnimation/>
      )
      }
    </>
  )
}

export default Allitems
