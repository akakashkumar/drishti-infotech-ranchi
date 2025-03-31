"use client";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [quickLinks, setQuickLinks] = useState([
    {
        item: "Home",
        path: "/",
      },
    {
      item: "Courses",
      path: "/courses",
    },
    {
      item: "About",
      path: "/about",
    },
    {
      item: "Contact",
      path: "/contact",
    },
    {
      item: "Gallery",
      path: "/gallery",
    },
  ]);
  const [courses, setCourses] = useState([
    {
        item: "DCA",
        path: "/dca",
    },
    {
        item: "Tally",
        path: "/tally",
    },
    {
        item: "DTP",
        path: "/dtp",
    },
    {
        item: "ADCA",
        path: "/adca",
    },
    {
      item: "Hindi & English Typing",
      path: "/hindi-english-typing",
  },
    {
        item: "Graphic Designing",
        path: "/graphic-designing",
    },
    {
        item: "C",
        path: "/c",
    },
    {
        item: "c++",
        path: "/c++",
    },
    {
        item: "Python",
        path: "/python",
    },
    {
        item: "Java",
        path: "/java",
    },
    {
        item: "Web Development",
        path: "/web-development",
    },
   

  ])
  return (
    <div className="bg-[#1c2331]">
      <footer className="container mx-auto px-4 lg:px-5 py-5">
       <div className="grid md:grid-cols-2 gap-5 lg:grid-cols-4">
       <div>
          <h2 className="text-2xl font-medium text-orange-500 ">
            Quick Links
          </h2>
          <ul>
            {quickLinks.map((e, i) => {
              return (
                <li className="text-gray-300 font-light" key={i}>
                  <Link href={e.path}>{e.item}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
            <h2 className="text-2xl font-medium text-orange-500 ">Tranding Courses</h2>
            <ul>
                {
                    courses.map((e,i)=>{
                        return(
                            <li className="text-gray-300 font-light" key={i}><Link href={`/courses/${e.path}`}>{e.item}</Link></li>
                        )
                    })
                }
            </ul>
        </div>
        <div>
            <h2 className="text-2xl text-orange-500 font-medium">Contact Us</h2>
            <ul className="text-gray-300 font-light">
                <li>Phone no</li>
                <li>Email</li>
                <li>Add</li>
            </ul>
        </div>
        <div>
            <h2 className="text-2xl text-orange-500 font-medium">Social Media Links</h2>
            <ul className="text-gray-300 font-light">
                <li>Instagram</li>
                <li>Facebook</li>
                <li>youtube</li>
            </ul>
        </div>
       </div>
      </footer>
    </div>
  );
}
