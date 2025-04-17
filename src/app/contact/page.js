'use client'

import { useState } from "react";
import Sliders from "@/components/Sliders";

const page = () => {
     const [sliderPics, setSliderPics] = useState([
        "c1.jpg",
        "c2.jpg",
        "c3.jpg",
        "c4.jpg",
        "c5.jpg",
      ]);
  return (
    <div className='max-w-7xl mx-auto p-5'>
        <Sliders pics={sliderPics} />
    </div>
  )
}

export default page