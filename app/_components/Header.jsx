"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import { Button } from "../../components/ui/button.jsx";
import { Plus, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Header() {
  const pathname = usePathname(); // Get the current path
  const { user, isSignedIn } = useUser();

  return (
    <div className="flex justify-between items-center px-10 p-6 shadow-md fixed top-0 w-full bg-white z-50">
      <div className="flex justify-between items-center gap-12">
        <Link href={"/"}>
          <Image src={"/logo.svg"} width={120} height={150} alt="logo" />
        </Link>
        <ul className="hidden md:flex gap-10">
          <Link href={"/"}>
            <li
              className={`hover:text-primary font-medium text-sm cursor-pointer transition duration-200 ${
                pathname === "/" ? "text-primary" : ""
              }`}
            >
              For Sell
            </li>
          </Link>
          <Link href={"/for_rent"}>
            <li
              className={`hover:text-primary font-medium text-sm cursor-pointer transition duration-200 ${
                pathname === "/for_rent" ? "text-primary" : ""
              }`}
            >
              For Rent
            </li>
          </Link>
          <Link href={"/agent-finder"}>
            <li
              className={`hover:text-primary font-medium text-sm cursor-pointer transition duration-200 ${
                pathname === "/agent-finder" ? "text-primary" : ""
              }`}
            >
              Agent Finder
            </li>
          </Link>
        </ul>
      </div>
      <div className="flex gap-2">
        <Button>
          <Plus className="h-5 w-5" />
          Post Your Ad
        </Button>
        {isSignedIn ? (
          <UserButton />
        ) : (
          <Link href={"/sign-in"}>
            <Button variant="outline">
              <User />
              Login
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
