import { useState } from "react";

export default function PopularCourses() {
  const [courseCard, setCourseCard] = useState([
    {
      pic: "",
      name: "DCA",
      duration: "3 Months",
    },
    {
      pic: "",
      name: "Tally",
      duration: "3 Months",
    },
    {
      pic: "",
      name: "DTP",
      duration: "4 Months",
    },
    {
      pic: "",
      name: "ADCA",
      duration: "12 Months",
    },
    {
      pic: "",
      name: "Web Development",
      duration: "6 Months",
    },
    {
      pic: "",
      name: "Graphic Designing",
      duration: "4 Months",
    },
    {
      pic: "",
      name: "Video Editing",
      duration: "3 Months",
    },
  ]);

  return (
    <div>
      <div className="container mx-auto px-5 py-5">
        <h2 className="lg:text-4xl md:text-2xl font-medium">Popular Courses</h2>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {courseCard.map((e, i) => {
            return (
              <div className=" border rounded mt-5">
                <img
                  className="min-w-[200px] h-[150px] border rounded  "
                  src={e.pic}
                  alt={e.name}
                />
                <h4 className="mt-3 text-xl ms-2 font-medium">{e.name}</h4>
                <h5 className="text-sm text-slate-500 ms-2 mb-2">{e.duration}</h5>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
