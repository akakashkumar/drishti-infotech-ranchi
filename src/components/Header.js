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
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

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
      <div className="max-w-7xl mx-auto p-7 relative">
      <nav className="w-full  fixed top-0 right-0 left-0 z-10 backdrop-blur-sm bg-white/30 dark:bg-black/30  px-4 lg:px-5 xl:px-7 2xl:px-96 py-2 pt-5 flex justify-between items-center">
        <Link href="/">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .2 }}
            className="text-sm lg:text-2xl font-[MachinaR] text-blue-600 "
          >
            Drishti Infotech
          </motion.h2>
        </Link>
        <ul className="flex gap-7 items-center">
          {navItem.map((e, i) => {
            return (
              <li className="hidden lg:block text-lg" key={i}>
                <Link href={e.path}>{e.name}</Link>
              </li>
            );
          })}
          <li className="hidden lg:block ">
            <ModeToggle/>
          </li>
        </ul>
        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <div className="flex gap-4 items-center">
              <div className="lg:hidden">
                <ModeToggle />
              </div>
              <SheetTrigger>
                <RxHamburgerMenu className="text-3xl" />
              </SheetTrigger>
            </div>
            <SheetContent className="p-4 w-[60vw]">
              <ul className="mt-4 flex gap-3 flex-col">
                {navItem.map((e, i) => {
                  return (
                    <li
                      key={i}
                      onClick={() => {
                        setOpen(false);
                      }}
                    >
                      <Link href={e.path}>{e.name}</Link>
                    </li>
                  );
                })}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
      </div>
    </header>
  );
}
