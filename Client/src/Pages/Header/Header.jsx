/* eslint-disable no-unused-vars */
import { React, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/20/solid";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/20/solid";

function Header() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <>
      <div className="w-full h-auto p-5 border-b-2 lg:px-14 md:px-7 sm:px-4 px-3   flex justify-between   border-black/20">
        <div className="flex  items-center space-x-4">
          {/* the nav for the humberger menu */}
          <div onClick={handleClick} className="md:hidden z-10">
            {!nav ? (
              <Bars3Icon className="h-7 w-7 text-black " />
            ) : (
              <XMarkIcon className="h-7 w-7 text-black" />
            )}
          </div>
          <ul
            className={
              !nav
                ? "hidden"
                : "absolute right-0 bottom-0  w-full h-screen text-primary bg-slate-50 flex flex-col justify-center items-center  "
            }
          >
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
          <h1 className="font-bold text-3xl ">LOGO</h1>
          <ul className="hidden  md:flex pt-1 gap-x-4 font-bold">
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
        </div>
        <div className="items-center flex ">
          <ul className="flex space-x-6 text-black font-semibold ">
            <li className="flex">
              <MagnifyingGlassIcon className="h-6 w-6 text-black" />
            </li>
            <li className="hidden">
              <h1 className="">SIGN UP</h1>
            </li>
            <li className="hidden">
              <h1>SIGN UP</h1>
            </li>

            <li className="flex">
              <ShoppingBagIcon className="h-6 w-6 text-black" />
            </li>
            <li>
              <UserCircleIcon className="h-6 w-6 text-bl" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
