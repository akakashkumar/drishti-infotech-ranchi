"use client";
import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

export default function Header() {
  const [navItem, setNavItem] = useState([
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Courses",
      path: "/courses",
    },
    {
      name: "gallery",
      path: "/gallery",
    },
    
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ]);
  const [isClick, setIsClick] = useState(false);
  const toggle = () => {
    setIsClick(!isClick);
  };
  return (
    <header className=" bg-white">
      <nav className="container bg-white mx-auto px-4 lg:px-5 py-2 pt-5 flex justify-between lg:items-center">
        <Link href="/">
          <h2 className="text-sm lg:text-2xl text-blue-800 ">
            Drishti Infotech
          </h2>
        </Link>
        <ul className="flex gap-7 items-center">
          {navItem.map((e, i) => {
            return (
              <li className={`hidden lg:block`} key={i}>
                <Link href={e.path}>{e.name}</Link>
              </li>
            );
          })}
          <div>
             {!isClick && <RxHamburgerMenu className="text-2xl  lg:hidden" onClick={toggle} />}
          <ul className="w-full">
          {isClick &&
              navItem.map((e, i) => {
                return (
                  <li className=' w-[40vw] ps-2  bg-white ' key={i} onClick={()=>{
                    setIsClick(!isClick)
                  }}>
                    <Link href={e.path} >{e.name}</Link>
                  </li>
                );
              })}
          </ul>
          </div>
        </ul>
      </nav>
    </header>
  );
}
