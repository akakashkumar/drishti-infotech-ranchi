import Link from "next/link";
import { useState } from "react";

export default function PopularCourses() {
  const [courseCard, setCourseCard] = useState([
    {
      pic: "dca.jpg",
      name: "DCA",
      duration: "3 Months",
      path:"dca"
    },
    {
      pic: "tally.jpg",
      name: "Tally",
      duration: "3 Months",
      path:"tally"
    },
    {
      pic: "dtp.jpg",
      name: "DTP",
      duration: "4 Months",
      path:"dtp"
    },
    
    {
      pic: "adca.jpg",
      name: "ADCA",
      duration: "12 Months",
      path:"adca"
    },
    {
      pic: "hi-en-typing.jpg",
      name: "Hindi & English Typing",
      duration: "3 Months",
      path:"hindi-english-typing"
    },
    {
      pic: "web-dev.jpg",
      name: "Web Development",
      duration: "6 Months",
      path:"web-development"
    },
    {
      pic: "graphic-designing.jpg",
      name: "Graphic Designing",
      duration: "4 Months",
      path:"graphic-designing"
    },
    {
      pic: "video-editing.jpg",
      name: "Video Editing",
      duration: "3 Months",
      path:"video-editing"
    },
  ]);

  return (
    <div>
      <div className="container mx-auto px-4 lg:px-5 py-5">
        <h2 className="lg:text-4xl md:text-2xl font-medium mb-5 mt-10">Popular Courses</h2>
        <Link href='/courses'><button className="text-2xl text-blue-500 cursor-pointer underline mb-5">See All Courses</button></Link>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-5  ">
          {courseCard.map((e, i) => {
            return (
              <div className=" border rounded" key={i}>
                <img
                  className="w-full h-[170px] border rounded  "
                  src={e.pic}
                  alt={e.name}
                />
                <h4 className="mt-3 text-xl ms-2 font-medium">{e.name}</h4>
                <h5 className="text-sm text-slate-500 ms-2 mb-2">{e.duration}</h5>
                <Link href={`/courses/${e.path}`}><button className="px-2 py-1  text-sm ms-2 mt-2 mb-4 cursor-pointer rounded-sm text-white bg-blue-700">View Details</button></Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
