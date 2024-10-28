"use client";
import { FaHeart } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import MAINLOGO from "@/public/logo/logo-amazon.png";
import ALOGO from "@/public/logo/logo-a.png";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import PROFILEIMG from "@/public/profile.png"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const searchParams = useSearchParams();
  const isLoggedIn = searchParams.get("isLoggedIn") === "true";

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <header className="w-full h-fit bg-black sticky top-0 z-50 shadow-lg">
      <div className="w-11/12 2xl:w-10/12 mx-auto">
        <section className="flex justify-between w-full py-6 bg-black sticky top-0">
          <div>
            <Link href={"/"}>
              <Image src={MAINLOGO} alt="AMAZON" width={150} />
            </Link>
          </div>
          <div className="flex items-center relative w-[50svw] rounded-md overflow-clip">
            <input
              type="search"
              className="bg-[#232C3A] rounded-l-md border-l border-y border-[#D9D9D9] h-full  w-full px-12 outline-none text-white text-lg"
            />
            <Image
              src={ALOGO}
              alt="A"
              width={25}
              className="absolute left-0 mx-3 "
            />
            <button className="bg-dark-yellow h-full aspect-video flex items-center justify-center">
              <CiSearch color="white" size={25} />
            </button>
          </div>
          <ul className="flex items-center gap-6">
            <li>
              <FaHeart color="#FFFFFF" size={30} />
            </li>
            <li>
              <FaShoppingCart color="#FFFFFF" size={30} />
            </li>
            <li>
              {isLoggedIn && (
                <div
                  ref={dropdownRef}
                  className="group relative"
                  onClick={() => setIsOpen((isOpen) => !isOpen)}
                >
                  <div className="rounded-full h-fit w-fit overflow-clip">
                    <Image src={PROFILEIMG} alt="" width={30} />
                  </div>

                  {isOpen && (
                    <div className="absolute right-0 mt-2 w-40 bg-dark-yellow rounded-lg shadow-lg z-10 text-sm overflow-clip">
                      <Link
                        href="/profile"
                        className="block px-4 py-2 text-white hover:bg-yellow-600"
                      >
                        Profile
                      </Link>
                      <Link
                        href="/"
                        className="block px-4 py-2 text-white hover:bg-yellow-600"
                      >
                        Logout
                      </Link>
                    </div>
                  )}
                </div>
              )}
              {!isLoggedIn && (
                <div
                  ref={dropdownRef}
                  className="group relative"
                  onClick={() => setIsOpen((isOpen) => !isOpen)}
                >
                  <IoPersonSharp color="#FFFFFF" size={30} />

                  {isOpen && (
                    <div className="absolute right-0 mt-2 w-40 bg-dark-yellow rounded-lg shadow-lg z-10 text-sm overflow-clip">
                      <Link
                        href="/login"
                        className="block px-4 py-2 text-white hover:bg-yellow-600"
                      >
                        Login
                      </Link>
                      <Link
                        href="/signup"
                        className="block px-4 py-2 text-white hover:bg-yellow-600"
                      >
                        Sign Up
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </li>
          </ul>
        </section>
      </div>
    </header>
  );
}
