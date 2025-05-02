"use client";

import HeroSection from "@/components/HeroSection";
import PopularCourses from "@/components/PopularCourses";


import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";
import {motion} from 'framer-motion'

export default function Home() {
  
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  
   
  }, [])
  
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 lg:px-5 py-5">
        <HeroSection />
        <div className="lg:flex  lg:flex-row  items-center "
        data-scroll data-scroll-speed= '-0.1'
        >
          <motion.div 
           initial={{opacity:0, scale:0}}
           whileInView={{opacity:1, scale:1}}
           viewport={{once:true, amount:0.8}}
           transition={{duration:0.8, ease:"easeIn"}}
          className="lg:w-1/2  ">
            <h2 className="text-center text-2xl lg:text-5xl font-sans text-orange-600">
              Empower Your Future <br /> with Tech Skills.
            </h2>
            <p className="text-xl my-3">
              Unlock your digital potential with our comprehensive computer
              coaching programs.
            </p>
          </motion.div>
          <div className="lg:w-1/2 w-full">
            <motion.img
             initial={{opacity:0, scale:0}}
             whileInView={{opacity:1, scale:1}}
             viewport={{once:true, amount:0.8}}
             transition={{duration:0.8}}
            className="w-full rounded" src="banner.webp" alt="banner" />
          </div>
        </div>

        <PopularCourses />
       
      </div>
    </div>
  );
}
