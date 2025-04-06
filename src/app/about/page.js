'use client'
import AboutSection from "@/components/AboutSection"
import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";
export default function About(){
      useEffect(() => {
        const locomotiveScroll = new LocomotiveScroll();
      
       
      }, [])
    return(
        <div>
            <div className="max-w-7xl mx-auto px-4 lg:px-5 py-5">
                <AboutSection />
            </div>
        </div>
    )
}