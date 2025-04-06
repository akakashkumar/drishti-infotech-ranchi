"use client";
import AllCourses from "@/components/AllCourses";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";

export default function Courses(){
      useEffect(() => {
        const locomotiveScroll = new LocomotiveScroll();
      
       
      }, [])
    return(
        <div>
            <div>
                <AllCourses />
            </div>
        </div>
    )
}