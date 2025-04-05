import Link from "next/link";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "./ui/button";

export default function AllCourses() {
  const [allCourses, setAllCourses] = useState([
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
    {
      pic: "https://imgs.search.brave.com/BPk2cW2UTKK_kEy5S5QdtSi03x-WiuEQ0WznPEq3nVE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9kM2Yx/aXlmeHh6OGkxZS5j/bG91ZGZyb250Lm5l/dC9jb3Vyc2VzL2Nv/dXJzZV9pbWFnZS9i/M2ExMGYwODUyNmQu/anBn",
      name: "C",
      duration: "Duration : 3-4 Months",
      path: "c",
    },
    {
      pic: "https://imgs.search.brave.com/50NmxBme2CEJNVsiCNg_tISZowyLWlqb3uhT3VQgoZQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZWVrc2Zvcmdl/ZWtzLm9yZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMzA2Mjkx/NDQzNTYvQmVzdC1D/UFAtQ291cnNlcy13/aXRoLUNlcnRpZmlj/YXRlcy5wbmc",
      name: "C++",
      duration: "Duration : 3-4 Months",
      path: "cpp",
    },
    {
      pic: "https://imgs.search.brave.com/izHCKRA_CwNEyx3o3UKVRNjUhERUFitBribIMey7Afk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9kM25q/amNiaGJvamJvdC5j/bG91ZGZyb250Lm5l/dC9hcGkvdXRpbGl0/aWVzL3YxL2ltYWdl/cHJveHkvaHR0cHM6/Ly9zMy5hbWF6b25h/d3MuY29tL2NvdXJz/ZXJhLWNvdXJzZS1w/aG90b3MvZmMvYzFi/OGRmYmFjNzQwOTk5/YjYyNTZhY2E0OTBk/ZTQzL1B5dGhvbi1J/bWFnZS5qcGc_YXV0/bz1mb3JtYXQsY29t/cHJlc3MsJTIwZW5o/YW5jZSZkcHI9MSZ3/PTI2NSZoPTIxNiZm/aXQ9Y3JvcCZxPTUw",
      name: "Python",
      duration: "Duration : 3-4 Months",
      path: "python",
    },
    {
      pic: "https://imgs.search.brave.com/FxDhCdhSsAl6x6RW_YCjHjZp6x8CZTANqmfJa-hRmiI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vcHJhY3RpY2Fs/ZGV2L2ltYWdlL2Zl/dGNoL3MtLXgxekdq/ekVHLS0vY19saW1p/dCxmX2F1dG8sZmxf/cHJvZ3Jlc3NpdmUs/cV9hdXRvLHdfODgw/L2h0dHBzOi8vbGgz/Lmdvb2dsZXVzZXJj/b250ZW50LmNvbS8t/dV9oV1I0NlpoOUEv/WWJVNUtIRHAwM0kv/QUFBQUFBQUFBSDgv/ZHZQR3hIa002VElI/TXpFQ0ozT2pRRXlD/Y1llTklaaXlRQ05j/QkdBc1lIUS93NDAw/LWgyMjUvMTYzOTI2/NjU5ODM2NzU0Ni0w/LnBuZw",
      name: "Java",
      duration: "Duration : 3-4 Months",
      path: "java",
    },
    {
      pic: "https://imgs.search.brave.com/5UPoeHGX8_H5t6KS6wuW9_gq4CVP8bX69H7xxadqxQw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YWJtY29sbGVnZS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjQvMTAvd2ViLWRl/c2lnbi10ZWNobm9s/b2d5LWJyb3dzaW5n/LXByb2dyYW1taW5n/LWhlYWRlci03Njh4/NjI3LmpwZw",
      name: "Web Development",
      duration: "Duration : 6-8 Months",
      path: "web-development",
    },
  ]);
  return (
    <div>
      <div className="container mx-auto px-4 py-5 lg:px-5">
        <h2 className="text-3xl font-[MachinaR] font-medium mb-4 mt-4 text-orange-500">
          Our All Courses
        </h2>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-5  ">
          {allCourses.map((e, i) => {
            return (
              <Card className="pt-0 overflow-hidden" key={i}>
                <img className="h-[170px] w-full" src={e.pic} alt={e.name} />
                <CardHeader>
                  <CardTitle>{e.name}</CardTitle>
                  <CardDescription>{e.duration}</CardDescription>
                </CardHeader>
                <CardContent>
                <Link href={`/courses/${e.path}`}>
                 <Button variant="outline" className="bg-blue-500 text-white cursor-pointer">
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
