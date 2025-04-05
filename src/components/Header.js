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
import { ModeToggle } from "./theme-btn";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "./ui/button";

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
  const [open, setOpen] = useState(false);
 
  return (
    <header className=" ">
     

      <nav className="max-w-7xl  sticky top-0  mx-auto px-4 lg:px-5 py-2 pt-5 flex justify-between items-center">
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
          <li className="hidden lg:block">
            <ModeToggle />
          </li>
        </ul>
        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
          <div className="flex gap-4 items-center">
          <div className="lg:hidden">
              <ModeToggle/>
            </div>
            <SheetTrigger>
           <RxHamburgerMenu className="text-3xl"/>

            </SheetTrigger>
          </div>
            <SheetContent className='p-4 w-[60vw]'>
             
              <ul className="mt-4 flex gap-3 flex-col">
                    {navItem.map((e, i) => {
                      return (
                        <li  key={i} onClick={()=>{
                          setOpen(false)
                        }}>
                          <Link href={e.path}>{e.name}</Link>
                        </li>
                      );
                    })}
                  </ul>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
