"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { items } from '../_constants/constants'

const Allitems = () => {
  const [del,setDel]=useState(true)
  const id=134
  return (
    <>
  
    {
      items.map((item)=>(
        <div key={item.name} className="hover:scale-105 hover:shadow-2xl shadow-blue-950 transition-all ease-in-out text-blue-950 hover:bg-blue-950 hover:text-white h-40 select-none w-40 lg:h-60 lg:w-60 mx-3 my-3 flex flex-col justify-between text-center border border-blue-950 rounded-lg">
            <div className="flex text-md lg:text-lg justify-between px-4 py-2 font-medium">
              <div className='flex'>
                <h1 className=''>{item.unit}-</h1><h1>{item.measure}</h1>
              </div>
                <h1 className='text-sm'>{item.expires}</h1>
            </div>

            <h1 className="text-3xl lg:text-5xl font-semibold">{item.name}</h1>
            <div className="flex items-center justify-between text-xl font-medium text-right px-4 py-2">
              <i onClick={()=>setDel(true)} className={`bi bi-trash3-fill text-red-600 cursor-pointer ${del==true?'hidden':'block'}`}></i>
            <div className={`text-sm space-x-2 ${del==true ?'flex ':'hidden'}`}>
              <button onClick={()=>setDel(false)} className='bg-white text-blue-950 px-1 lg:px-3 py-1 rounded-lg border border-blue-950'>No</button>
              <button  className='bg-red-600 text-white px-1 lg:px-3 py-1 rounded-lg'>Yes</button>   
            </div>
              <Link href={`/Update/${id}`}><i className='bi bi-pencil-square text-orange-400 cursor-pointer '></i></Link>
            </div>
            
            
        
        </div>

      ))
    }
    </>
  )
}

export default Allitems