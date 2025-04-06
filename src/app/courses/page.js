"use client";
import AllCourses from "@/components/AllCourses";
import LocomotiveScroll from "locomotive-scroll";

export default function Courses(){
    const locomotiveScroll = new LocomotiveScroll();
    return(
        <div>
            <div>
                <AllCourses />
            </div>
        </div>
    )
}