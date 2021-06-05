import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteTitle } from "./Layout";

function Navbar() {
  return (
    <div className="flex py-4 justify-between shadow-sm">
      <div className="text-2xl items-center px-4 md:px-10">
        <Link href="/">
          <a className="items-center pt-6">
            <Image
              src="/images/Logo.png"
              height={20}
              width={100}
              alt={siteTitle}
            />
          </a>
        </Link>
      </div>
      <div className="space-x-10 items-center font-md hidden md:flex ">
        <Link href="/menu" passHref={true}>
          <a className="text-gray-400 hover:text-gray-700 transition duration-300">
            Menu
          </a>
        </Link>
        <Link href="#">
          <a className="text-gray-400 hover:text-gray-700 transition duration-300">
            Order
          </a>
        </Link>
        <Link href="">
          <a className="text-gray-400 hover:text-gray-700 transition duration-300">
            Story
          </a>
        </Link>
      </div>
      <div className="px-4 md:px-10">
        <button className="bg-yellow-500 py-1 px-3 rounded-sm text-white font-bold hover:bg-white hover:text-yellow-500 transition duration-400">
          Login
        </button>
      </div>
    </div>
  );
}

export default Navbar;
