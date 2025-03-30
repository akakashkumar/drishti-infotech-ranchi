"use client";
import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

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
          name: "Services",
          path: "/services",
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
    return(
        <div>
            <div className="container mx-auto px-4 lg:px-5 py-5 flex justify-between items-center">
                <Link href="/"><h2 className="text-sm lg:text-2xl ">Drishti Infotech</h2></Link>
                <ul className="flex gap-7 items-center">
                <RxHamburgerMenu className="text-2xl  lg:hidden"/>
                {navItem.map((e,i)=>{
                    return(
                        <li className="hidden lg:block"><Link href={e.path}>{e.name}</Link></li>
                    )
                })}
                </ul>
            </div>
        </div>
    )
}