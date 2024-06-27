"use client";

import Link from "next/link";
import Logo from "../../public/Logo.png";
import Image from "next/image";
import { FaRegUserCircle, FaSearch, FaRegHeart, FaAngleUp, FaShoppingCart,} from "react-icons/fa";
import { usePathname } from "next/navigation";
import { FaBars, FaXmark } from "react-icons/fa6";
import { useState } from "react";


const navManu = [
  {
    id: 1,
    herf: "/home",
    name: "Home",
  },
  {
    id: 2,
    herf: "/shop",
    name: "Shop",
  },
  {
    id: 3,
    herf: "/Products",
    name: "Products",
  },

  {
    id: 4,
    herf: "/blog",
    name: "Blog",
  },
  {
    id: 6,
    herf: "/contact",
    name: "Contact",
  },
];
const navManuS = [
  {
    herf: "/Products",
    name: "Products",
  },
  {
    herf: "/Products/productsLeftSideBar",
    name: "Products Left Side Bar",
  },
  {
    herf: "/Products/productsRightSideBar",
    name: "Products Right Side Bar",
  },
];
const NavBar = () => {
  const [dropDoun, setDropDoun] = useState(false);
  const [nav, setNav] = useState(false);
  const pathname = usePathname();
  const pathname2 = usePathname();
  return (
    <>
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        <Link href="/"><Image src={Logo} alt="Logo" /></Link>
        <div className="md:flex hidden gap-6 items-center">
          {navManu.map((value) => {
            const isActive = pathname.startsWith(value.herf);

            if (value.name === "Products") {
              return (
                <div key={value.name} onMouseEnter={() => setDropDoun(true)} onMouseLeave={() => setDropDoun(false)} className="group flex gap-3">
                  <Link href={value.herf} className={isActive ? "text-primary" : ""}>{value.name}</Link>
                  <div className="pt-[2px]">
                    <FaAngleUp className={`${isActive ? "text-primary" : ""} duration-300 group-hover:rotate-180`} />
                  </div>
                  {dropDoun && (
                    <div className="absolute pt-10 z-30">
                      <div className="flex w-full flex-col gap-2 rounded-md border border-primary bg-white p-4">
                        {navManuS.map((itams) => {
                          const isActive = pathname2.startsWith(itams.herf);
                          return (
                            <span key={itams.name}>
                              <Link href={itams.herf} className={isActive ? "text-primary" : ""} >{itams.name}</Link>
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            }
            return (
              <Link key={value.id} href={value.herf} className={isActive ? "text-primary" : ""}>{value.name}</Link>
            );
          })}
        </div>
        <div className="flex md:gap-6 gap-4 items-center">
          <FaSearch />
          <Link href="/contact/singUp"> 
          <FaRegUserCircle />
          </Link>
          <FaRegHeart />
          <Link href="/addToCard"> 
          <FaShoppingCart />
          </Link>
        </div>
        <div onClick={() => setNav(!nav)} className="cursor-pointer md:hidden">
          {nav ? (
            <FaXmark className="h-7 w-8" />
          ) : (
            <FaBars className="h-7 w-8" />
          )}
        </div>
        {nav && (
          <div onClick={() => setNav(false)} className="h-full absolute left-0 right-0 top-20 text-center backdrop-blur z-30 bg-white/50" >
            <div className="flex flex-col gap-3 px-6 py-16 text-xl font-medium">
              {navManu.map((value) => {
                const isActive = pathname.startsWith(value.herf);
                return (
                  <Link href={value.herf} key={value.name} className={isActive ? "text-primary" : ""} >{value.name}</Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default NavBar;
