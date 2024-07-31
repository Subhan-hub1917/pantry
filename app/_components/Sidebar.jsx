import React from 'react'
import Link from 'next/link'
import { navItems } from '../_constants/constants'

const Sidebar = () => {
  return (
    <section className='hidden h-screen w-2/12 bg-blue-950 text-white lg:flex flex-col text-start justify-between relative'>
        <div className=' text-xl font-extrabold py-10 px-3 mb-10 select-none'>RUSH Developers</div>
        {
          navItems.map((item)=>(
            <Link href={`${item.link}`}><div className='text-lg font-semibold py-3 px-3 cursor-pointer  hover:bg-white hover:text-blue-950 rounded-xl mx-1' key={item.name}><i className={`bi bi-${item.icon}`}></i> {item.name}</div></Link>
          ))
        }
        <div className=' text-lg font-semibold flex items-center justify-between mt-24 mb-4 py-3 px-4 cursor-pointer  hover:bg-white hover:text-blue-950 rounded-xl mx-1 '>Profile <i className='text-2xl bi bi-person-circle'></i></div>
    </section>
  )
}

export default Sidebar