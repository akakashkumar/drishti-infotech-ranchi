import Link from "next/link";
import { useState } from "react";

export default function AllCourses() {
    const [allCourses, setAllCourses] = useState([
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
        {
            pic: "c.jpg",
            name: "C",
            duration: "3-4 Months",
            path:"c"
          },
          {
            pic: "c++.jpg",
            name: "C++",
            duration: "3-4 Months",
            path:"cpp"
          },
          {
            pic: "python.jpg",
            name: "Python",
            duration: "3-4 Months",
            path:"python"
          },
          {
            pic: "java.jpg",
            name: "Java",
            duration: "3-4 Months",
            path:"java"
          },
          {
            pic: "web-dev.jpg",
            name: "Web Development",
            duration: "6-8 Months",
            path:"web-development"
          },
        
      ]);
  return (
    <div>
      <div className="container mx-auto px-4 py-5 lg:px-5">
        <h2 className="text-3xl font-[MachinaR] font-medium mb-4 mt-4 text-orange-500">Our All Courses</h2>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-5  ">
          {allCourses.map((e, i) => {
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
