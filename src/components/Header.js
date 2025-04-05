"use client";
import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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
      name: "Gallery",
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
      <nav className="max-w-7xl bg-white sticky top-0 left-0 mx-auto px-4 lg:px-5 py-2 pt-5 flex justify-between lg:items-center">
        <Link href="/">
          <h2 className="text-sm lg:text-2xl font-[MachinaR] text-blue-800 ">
            Drishti Infotech
          </h2>
        </Link>
        <ul className="flex gap-7 items-center">
          {navItem.map((e, i) => {
            return (
              <li className="hidden lg:block text-lg" key={i}>
                <Link href={e.path}>{e.name}</Link>
              </li>
            );
          })}
          <div>
           
          </div>
        </ul>
     <div className="lg:hidden">
     <Sheet>
          <SheetTrigger><RxHamburgerMenu className="text-xl sm:text-2xl" /></SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Drishti Infotech</SheetTitle>
              <SheetDescription>
                <ul>
                {navItem.map((e, i) => {
                  return(
                    <li><Link href={e.path}>{e.name}</Link></li>
                  )
                })}
                </ul>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
     </div>
      </nav>
    </header>
  );
}
