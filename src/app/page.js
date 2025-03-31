"use client";
// import LocomotiveScroll from 'locomotive-scroll';

import PopularCourses from "@/components/PopularCourses";




export default function Home() {
  // const scroll = new LocomotiveScroll();
  return (
    <div>
      <div className="conatiner mx-auto px-4 lg:px-5 py-5">
        <img className="w-full rounded" src="banner.webp" alt="banner" />
        <PopularCourses />
      </div>
    </div>
  );
}
