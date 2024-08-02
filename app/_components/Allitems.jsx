"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import LoadingAnimation from './LoadingAnimation'

const Allitems = ({ items, filter }) => {
  const [pantry, setPantry] = useState([])
  const [del, setDel] = useState(false)
  const [loading, setLoading] = useState(true)
  const id = 134

  useEffect(() => {
    if (items) {
      setPantry(items.filter((item) => (filter === 'All' || item.category === filter)))
      setLoading(false)
    }
  }, [items, filter])

  return (
    <>
      {loading ? (
        <LoadingAnimation />
        // <h1>Not Found</h1>
      ) : pantry.length > 0 ? (
        pantry.map((item) => (
          <div key={item.name} className={`w-60 lg:w-80 hover:scale-105 hover:shadow-2xl overflow-hidden shadow-blue-950 transition-all ease-in-out text-blue-950 hover:bg-blue-950 hover:text-white select-none mx-3 my-2 flex flex-col justify-between text-center border-2 border-blue-950 rounded-lg`}>
            <img src='/download.webp' className='w-full h-40 object-cover' />
            <div className="flex text-md lg:text-lg justify-between px-4 py-2 font-medium">
              <div className='flex'>
                <h1 className=''>{item.unit}-</h1><h1>{item.measure}</h1>
              </div>
              <h1 className='text-sm'>{item.expires}</h1>
            </div>
            <h1 className="text-3xl lg:text-5xl font-semibold">{item.name}</h1>
            <div className="flex items-center justify-between text-xl font-medium text-right px-4 py-2">
              <i onClick={() => setDel(true)} className={`bi bi-trash3-fill text-red-600 cursor-pointer ${del === true ? 'hidden' : 'block'}`}></i>
              <div className={`text-sm space-x-2 ${del === true ? 'flex ' : 'hidden'}`}>
                <button onClick={() => setDel(false)} className='bg-white text-blue-950 px-1 lg:px-3 py-1 rounded-lg border border-blue-950'>No</button>
                <button className='bg-red-600 text-white px-1 lg:px-3 py-1 rounded-lg'>Yes</button>
              </div>
              <Link href={`/Update/${id}`}><i className='bi bi-pencil-square text-orange-400 cursor-pointer '></i></Link>
            </div>
          </div>
        ))
      ) : (
        <LoadingAnimation/>
        // <h1>Not Found</h1>
      )}
    </>
  )
}

export default Allitems
