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
        <h1 className="text-2xl font-bold">Update</h1>
        <input onChange={(e)=>setItemName(e.target.value)} value={itemName} className="text-2xl font-bold text-blue-950 py-4 rounded-lg px-3 w-full" placeholder="Name"/>
        <select onChange={(e)=>setItemCategory(e.target.value)}  className='text-2xl  py-1 rounded-lg px-3 w-full ring-2 ring-inset ring-slate-600 focus:inset-5 text-blue-950  focus:ring-slate-600 border-white'>
          <option value="" className=''>Select a category</option>
            {
              categories.map((category)=>(
                <option className='border border-none ' value={category.name}  key={category.name}>{category.name}</option>
              ))
            }
        </select>
        <div className="text-lg font-medium space-x-3 flex items-center">
          <h1 onClick={()=>setItemMeasure('KG')} className={`${ itemMeasure=='KG'? 'px-3 py-3 cursor-pointer bg-green-400 text-blue-950 rounded-lg':'px-3 py-3 cursor-pointer hover:bg-green-400 hover:text-blue-950 rounded-lg'} `}>KG</h1>
          <h1 onClick={()=>setItemMeasure('Litre')} className={`${ itemMeasure=='Litre'? 'px-3 py-3 cursor-pointer bg-green-400  text-blue-950 rounded-lg':'px-3 py-3 cursor-pointer hover:bg-green-400 hover:text-blue-950 rounded-lg'} `}>Litre</h1>
          <h1 onClick={()=>setItemMeasure('Unit')} className={`${ itemMeasure=='Unit'? 'px-3 py-3 cursor-pointer bg-green-400  text-blue-950 rounded-lg':'px-3 py-3 cursor-pointer hover:bg-green-400 hover:text-blue-950 rounded-lg'} `}>Unit</h1>
        </div>
        <div className="text-lg font-medium flex items-center text-center">
          <h1 className=''>Quantity : </h1>
          <button onClick={()=>setItemQuantity(prev=>prev-1)} className="ms-5 px-3 text-3xl font-black py-1 hover:bg-green-400 hover:text-blue-950 rounded-lg">-</button>
          <h1 className="px-2">{itemQuantity}</h1>
          <button onClick={()=>setItemQuantity(prev=>prev+1)} className="px-3 py-1 text-3xl font-black  hover:bg-green-400 hover:text-blue-950 rounded-lg">+</button>
        </div>
        <div className="text-lg font-bold px-3 text-left">
          Expire:
          <input
            type="date"
            onChange={(e) => setItemExpires(e.target.value)}
            value={itemExpires}
            className="w-full mt-2 px-3 py-2 rounded-lg text-blue-950"
          />
  
  
        </div>
        <button onClick={()=>handleAddItem()} className="py-3 px-5 rounded-md bg-green-700">Add</button>
      </section>
    )
}

export default page