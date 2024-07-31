import React from 'react'

const page = () => {
  return (
    <section className='text-lg text-blue-950 font-semibold space-y-3'>
      <h1>We will provide you the <span className='text-2xl text-blue-950'>Recipe Suggestions</span> based on the items available in you  <span className='text-2xl text-blue-950'>Pantry</span></h1>
      <button className='hover:border hover:border-blue-950 hover:bg-white hover:text-blue-950 bg-blue-950 px-3 py-2 text-white rounded-xl font-medium'><i className='me-2 bi bi-magic'></i>Get Suggestions</button>
      <h1 className='text-sm font-light'>Click on the button the system will get the information of all the items available in your pantry and tell you all the available possible recipes  to you and make you life easier in deciding which one to cook...</h1>
    </section>
  )
}

export default page