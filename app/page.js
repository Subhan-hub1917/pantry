"use client"
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css'; 
import Allitems from "./_components/Allitems";
import { categories } from "./_constants/constants";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useMyContext } from "./_components/Context";

export default function Home() {
  const { userEmail,setUserEmail ,items,setItems} = useMyContext();
  const {isLoaded,user}=useUser()
  const [filter,setFilter]=useState('All')
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3
  }
};
  
if (isLoaded) {
    const email = user?.primaryEmailAddress.emailAddress;
    setUserEmail(email);
  }

  return (
    <>
      <section className="absolute  rounded-b-2xl px-2 lg:px-0 md:h-5 top-0 lg:w-2/3 w-screen lg:left-68 text-white bg-blue-950">
      <Carousel 
        responsive={responsive}
        arrows={false}
        className="bg-blue-950 px-3 rounded-b-2xl"
      >
        {
          categories.map((item)=>(
            <button onClick={()=>setFilter(item.name)} className={` ${filter===item.name ? ' h-full select-none bg-white text-blue-950 py-1 px-1  text-sm lg:text-sm font-extrabold':'text-center select-none hover:bg-white hover:text-blue-950 py-1 px-1  text-sm lg:text-sm font-extrabold text-white h-full' } `} key={item.id}>{item.name}</button>
          ))
        }
        </Carousel>
        </section>
    <Allitems items={items} setItems={setItems} userEmail={userEmail} filter={filter}/>
    </>
    
  );
}
