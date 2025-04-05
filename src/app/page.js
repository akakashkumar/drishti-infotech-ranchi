"use client";


import HeroSection from "@/components/HeroSection";
import PopularCourses from "@/components/PopularCourses";
import Vision from "@/components/Vision";




export default function Home() {
  
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 lg:px-5 py-5">
        <HeroSection />
        <div className="lg:flex  lg:flex-row  items-center ">
          <div className="lg:w-1/2  ">
            <h2 className="text-center text-2xl lg:text-5xl font-[MachinaL] text-orange-600">Empower Your Future <br/> with  Tech Skills.</h2>
            <p className="text-xl my-3">Unlock your digital potential with our comprehensive  computer coaching programs.</p>
          </div>
          <div className="lg:w-1/2 w-full">
          <img className="w-full rounded" src="banner.webp" alt="banner" />
          </div>
        </div>
        
        <PopularCourses />
        <Vision/>
      </div>
    </div>
  );
}
