"use client";
import Link from "next/link";
import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

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
        item: "C++",
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
  const [contactDetail, setContactDetail] = useState([{
    icon: <FaPhoneAlt />,
    item: '7488207829, 7979735081'
  },
  {
    icon: <MdEmail/>,
    item:'drishtiinfotech@gmail.com'
  } ,
  {
    icon: <FaLocationDot />,
    item: 'Tilta Chowk, Kamre Ranchi Jharkhand-835222'
  } ])
  const [socialLinks, setSocialLinks] = useState([
    {
      item: 'Instagram',
      icon: <FaInstagram/>,
      path: '#'
    },
    {
      item: 'Facebook',
      icon: <FaFacebook/>,
      path: '#'
    },
    {
      item: 'Youtube',
      icon: <FaYoutube/>,
      path: '#'
    },
  ])
  return (
    <div >
      <footer className="max-w-7xl mx-auto px-4 lg:px-5 py-5">
       <div className="grid md:grid-cols-2 gap-5 lg:grid-cols-4">
       <div>
          <h2 className="text-2xl font-medium text-orange-500 ">
            Quick Links
          </h2>
          <ul>
            {quickLinks.map((e, i) => {
              return (
                <li className="  text-gray-600 dark:text-slate-400" key={i}>
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
                            <li className=" text-slate-700 dark:text-slate-400" key={i}><Link href={`/courses/${e.path}`}>{e.item}</Link></li>
                        )
                    })
                }
            </ul>
        </div>
        <div>
            <h2 className="text-2xl text-orange-500 font-medium">Contact Us</h2>
            <ul className="">
                {contactDetail.map((e,i)=>{
                  return(<li className=" text-slate-700 dark:text-slate-400 flex items-center gap-1" key={i}>{e.icon}
                  <p>{e.item}</p>
                  </li>)
                })}
            </ul>
        </div>
        <div>
            <h2 className="text-2xl text-orange-500 font-medium">Social Media Links</h2>
            <ul className=" font-light  mt-3  ">
                {socialLinks.map((e,i)=>{
                  return(
                    <li className="flex items-center gap-1 text-slate-700 dark:text-slate-400 text-xl" key={i}>{e.icon}<Link href={e.path} target="_blank" >{e.item}</Link></li>
                  )
                })}
              
            </ul>
        </div>
       </div>
      </footer>
    </div>
  );
}
