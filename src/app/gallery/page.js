'use client'
import Pics from "@/components/Pics"
import LocomotiveScroll from "locomotive-scroll";

export default function Gallery(){
    const locomotiveScroll = new LocomotiveScroll();
    return(
        <div className="max-w-7xl mx-auto px-4 lg:px-5 py-5">
            <Pics />
        </div>
    )
}