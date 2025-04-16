import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";



export default function PopularCourses() {
  const [courseCard, setCourseCard] = useState([
    {
      pic: "https://imgs.search.brave.com/EeP2x-3fQkebbnqEkCMbhBkG2tUkkzqz7MFg4CD5H1Y/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9rcmlz/aG5hZ3VydWt1bC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjMvMDgvZGNhLWRp/cGxvbWEtaW4tY29t/cHV0ZXItYXBwbGlj/YXRpb24tY291cnNl/LmpwZw",
      name: "DCA",
      duration: "Duration : 3 Months",
      path: "dca",
    },
    {
      pic: "https://imgs.search.brave.com/gTsQWHYKv2vEHruPCTznBqFYU72McJierAjlHcGLqKo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9ibG9n/YXNzZXRzLmxldmVy/YWdlZWR1LmNvbS9t/ZWRpYS91cGxvYWRz/LzIwMjQvMTIvMDcx/MTI0MTAvVGFsbHkt/Q291cnNlLTEtODAw/eDUwMC5qcGc",
      name: "Tally",
      duration: "Duration : 3 Months",
      path: "tally",
    },
    {
      pic: "https://imgs.search.brave.com/51fGyicSBtBAUe01bUjp5pAlP93kBOZQ3zKY_-QHHbg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9ibG9n/YXNzZXRzLmxldmVy/YWdlZWR1LmNvbS9i/bG9nL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIwLzEyLzIxMjAw/MDI3L0RUUC1Db3Vy/c2VzLTEtODAweDUw/MC5wbmc",
      name: "DTP",
      duration: "Duration : 4 Months",
      path: "dtp",
    },

    {
      pic: "https://imgs.search.brave.com/6chDcEvigxjbeJJDlSLLXaXsaUjOlpOKRS456E_CZPo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzVhLzUx/LzNkLzVhNTEzZDMz/NjkxZjZhODUxMmEx/OTI0ZjczZjBhYjg1/LmpwZw",
      name: "ADCA",
      duration: "Duration : 12 Months",
      path: "adca",
    },
    {
      pic: "https://imgs.search.brave.com/gzGVReMlaYQ8VcEwAQ0LPqlQKAtZCf4oMF2N92z1XTw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tYWhl/c2h0eXBpbmd0dXRv/ci5jb20vaW1nL21h/bmdhbC10eXBpbmct/c2hvcnRjdXQta2V5/LnBuZw",
      name: "Hindi & English Typing",
      duration: "Duration : 3 Months",
      path: "hindi-english-typing",
    },

    {
      pic: "https://imgs.search.brave.com/Md0-zjqRZC5JFYqWQoxtWs-hlkVKGqNgzFKYBjrvFs0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jb3Vy/c2VzLmlpZC5vcmcu/aW4vcHVibGljLy91/cGxvYWRzL21lZGlh/X21hbmFnZXIvNjIx/LmpwZw",
      name: "Graphic Designing",
      duration: "Duration : 4 Months",
      path: "graphic-designing",
    },
    {
      pic: "https://imgs.search.brave.com/hT6WWYFsRF2mZw0BaKtonh1a2iIM_qc0_qmsRmDek_M/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y3JlYXRpdmVpdGlu/c3RpdHV0ZS5jb20v/aW1hZ2VzL2NvdXJz/ZS9jb3Vyc2VfMTY2/ODQ4ODA2Ni5qcGc",
      name: "Video Editing",
      duration: "Duration : 3 Months",
      path: "video-editing",
    },
  ]);

  return (
    <div>
      <div className="container mx-auto px-4 lg:px-5 py-5">
        <h2 className="lg:text-4xl md:text-2xl font-medium mb-5 mt-10">
          Popular Courses
        </h2>
        <Link href="/courses">
          <button className="text-2xl text-blue-600 cursor-pointer underline font-[MachinaR] mb-5">
            Explore your Courses
          </button>
        </Link>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-5  ">
          {courseCard.map((e, i) => {
            return (
              <Card className="pt-0 overflow-hidden hover:translate-y-[-8px] transition-all hover:shadow-slate-900 dark:hover:shadow-slate-200" key={i}>
                <img className="h-[170px] w-full" src={e.pic} alt={e.name} />
                <CardHeader>
                  <CardTitle>{e.name}</CardTitle>
                  <CardDescription>{e.duration}</CardDescription>
                </CardHeader>
                <CardContent>
                <Link href={`/courses/${e.path}`}>
                 <Button variant="default" className=" cursor-pointer">
                    View Details
                  </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
