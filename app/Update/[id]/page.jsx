"use client"
import React, { useState } from 'react'
import {categories} from '../../_constants/constants'
const page = ({params}) => {
    
    const [itemName,setItemName]=useState('')
    const [itemCategory,setItemCategory]=useState('')
    const [itemMeasure,setItemMeasure]=useState('')
    const [itemQuantity,setItemQuantity]=useState(1)
    const [itemExpires,setItemExpires]=useState('')
  
    const handleAddItem=()=>{
      alert(itemExpires)
    }
  
    return (
      <section className="w-80 my-10 lg:my-0 space-y-5 p-3 text-center rounded-lg bg-blue-950 text-white select-none">
        <img src='/download.webp' className='w-full h-40 object-cover'/>
        <h1 className="text-2xl font-bold text-center">Update</h1>
        <h1 className='text-xl font-medium text-start'>Milk</h1>
        <h1 className='text-xl font-medium text-start'>Category: Dairy </h1>
        <h1 className='text-xl font-medium text-start'>Measure: 1 Litre</h1>
        
        <div className="text-lg font-medium flex items-center text-center">
          <h1 className=''>Quantity : </h1>
          <button onClick={()=>setItemQuantity(prev=>prev-1)} className="ms-5 px-3 text-3xl font-black py-1 hover:bg-green-400 hover:text-blue-950 rounded-lg">-</button>
          <h1 className="px-2">{itemQuantity}</h1>
          <button onClick={()=>setItemQuantity(prev=>prev+1)} className="px-3 py-1 text-3xl font-black  hover:bg-green-400 hover:text-blue-950 rounded-lg">+</button>
        </div>
        
        <button onClick={()=>handleAddItem()} className="py-3 px-5 rounded-md bg-green-700">Update</button>
      </section>
    )
}

export default page