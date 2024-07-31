"use client"
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css'; 
import Allitems from "./_components/Allitems";
import { categories } from "./_constants/constants";

export default function Home() {
  
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

  return (
    <>
      <section className="absolute px-2 lg:px-0 md:h-5 top-1 lg:w-2/3 w-screen lg:left-68 bg-blue-50">
      <Carousel 
        responsive={responsive}
        arrows={true}
      >
        {
          categories.map((item)=>(
            <button className="select-none hover:bg-blue-950 hover:text-white py-1 px-1 rounded-lg text-sm lg:text-sm font-extrabold text-blue-950" key={item.name}>{item.name}</button>
          ))
        }
        </Carousel>
        </section>
    
    <Allitems/>
    </>
    
  );
}
