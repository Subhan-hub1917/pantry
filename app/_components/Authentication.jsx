"use client"
import React from 'react'
import AuthenticationAnimation from './AuthenticationAnimation'
import { SignInButton, SignUpButton } from '@clerk/nextjs'

const Authentication = () => {
  return (
    <section className='flex flex-col  text-center items-center  bg-slate-500 justify-center h-screen'>
        <div className='w-screen md:w-1/2 flex flex-col  bg-slate-500 text-center items-center justify-center h-screen'>
          <h1 className='text-3xl lg:text-4xl font-bold pb-5'>Authentication</h1>
          <div className='w-64'>
            <AuthenticationAnimation/>
          </div>
          <SignUpButton mode='modal' forceRedirectUrl='/'>
            <button className='hover:shadow-xl hover:scale-105 text-white w-1/2 flex items-center justify-center my-3  bg-blue-950 font-semibold text-xl py-1 px-3 rounded-lg'><i className='text-3xl bi bi-google me-2'></i>Signup</button>
          </SignUpButton>
        
          
          <p className='text-black font-black'>---------------OR---------------</p>
          <SignInButton  mode='modal' forceRedirectUrl='/'>
            <button className='hover:shadow-xl hover:scale-105 text-white w-1/2 flex items-center justify-center my-3 bg-blue-950 font-semibold text-xl py-1 px-3 rounded-lg'><i className='text-3xl bi bi-google me-2'></i>Login</button>
          </SignInButton>
        </div>  
    </section>
  )
}

export default Authentication