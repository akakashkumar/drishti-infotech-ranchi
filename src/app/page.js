"use client";

import PopularCourses from "@/components/PopularCourses";




export default function Home() {

  return (
    <div>
      <div className="conatiner mx-auto px-4 lg:px-5 py-5">
        <img className="w-full" src="banner.webp" alt="banner" />
        <PopularCourses />
      </div>
    </div>
  );
}
