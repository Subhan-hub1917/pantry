import React from 'react'
import Link from 'next/link'
import { navItems } from '../_constants/constants'

const Lowbar = () => {
  return (
    <section className='rounded-t-3xl  select-none lg:hidden fixed bottom-0 px-5 w-screen  bg-blue-950 text-white flex justify-between '>
        {
          navItems.map((item)=>(
            <Link href={item.link}>
              <div className='text-sm font-semibold py-3  px-3 md:px-28 my-1 text-center  hover:bg-white hover:text-blue-950 rounded-xl' key={item.name}>
                <i className={`bi bi-${item.icon}`}></i>
                <h1>{item.name}</h1>
              </div>
            </Link>
          ))
        }
    </section>
 )
}

export default Lowbar