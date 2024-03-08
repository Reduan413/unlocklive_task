"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai";
import { FaRegHeart, FaUserCircle } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { PiShoppingCartLight } from "react-icons/pi";
import LogoImg from "../assets/image/logo.svg";
// import Button from "./Button";
const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });
  //nav items array
  const navItems = [
    { link: "Home", path: "/#home", children: [] },
    { link: "Pages", path: "/#pages", children: [1, 2, 3] },
    { link: "Menu", path: "/#menu", children: [1, 2, 3] },
    { link: "Contact Us", path: "/#products", children: [] },
  ];
  const [menu, setMenu] = useState(false);
  const handleChange = () => {
    setMenu(!menu);
  };
  const closeMenu = () => {
    setMenu(false);
  };
  return (
    <div className=" w-full z-10">
      <div className="bg-gradient-to-r from-backgroundColor to-brightColor shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div className=" main-container mx-auto flex flex-row justify-between pt-3 pb-5 lg:pt-6 lg:pb-10  px-5 ">
          <div className="md:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={25} onClick={handleChange} />
            ) : (
              <AiOutlineMenuUnfold size={25} onClick={handleChange} />
            )}
          </div>
          <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
            {navItems?.map((singleNav, index) =>
              singleNav?.children?.length === 0 ? (
                <Link
                  href={singleNav?.path}
                  key={index}
                  smooth={true}
                  duration={500}
                  className="group relative inline-block cursor-pointer hover:text-brightColor font-ValueSansPro font-medium text-base text-primaryColor"
                >
                  {singleNav?.link}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
                </Link>
              ) : (
                <div
                  className="group dropdown inline-block relative"
                  key={index}
                >
                  <Link
                    href="#"
                    className="inline-flex items-center cursor-pointer hover:text-brightColor font-ValueSansPro font-medium text-base text-primaryColor"
                  >
                    <span className="mr-1">{singleNav?.link}</span>
                    <svg
                      class="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                    </svg>
                  </Link>
                  <ul className="dropdown-menu w-48 absolute hidden group-hover:block hover:block text-primaryColor pt-1 z-20 rounded ">
                    <li className="">
                      <a
                        className=" bg-[#ebe8e8] hover:text-[#fff] hover:bg-primaryColor py-2 px-4 block [#fff]space-no-wrap"
                        href="#"
                      >
                        Tab One
                      </a>
                    </li>
                    <li className="">
                      <a
                        className=" bg-[#ebe8e8] hover:text-[#fff] hover:bg-primaryColor py-2 px-4 block [#fff]space-no-wrap"
                        href="#"
                      >
                        Tab Two
                      </a>
                    </li>
                    <li className="">
                      <a
                        className=" bg-[#ebe8e8] hover:text-[#fff] hover:bg-primaryColor py-2 px-4 block [#fff]space-no-wrap"
                        href="#"
                      >
                        Tab Three
                      </a>
                    </li>
                  </ul>
                </div>
              )
            )}
          </nav>
          <div className="flex flex-row items-center cursor-pointer gap-2">
            <Image src={LogoImg} alt="" />
          </div>
          <div className="flex flex-row justify-between items-center  gap-12 lg:gap-24">
            <div className="flex flex-row justify-between items-center gap-4 lg:gap-8 text-xl lg:text-2xl ">
              <IoSearchOutline className="hidden md:flex" />
              <div className="relative text-xl lg:text-2xl hidden md:flex">
                <FaRegHeart />
                <p className="absolute top-[-12px] right-[-10px] lg:right-[-12px] text-xs bg-primaryColor text-[#fff] py-[2px] px-[6px] lg:py-1 lg:px-[8px] rounded-full">
                  0
                </p>
              </div>
              <div className="relative text-xl lg:text-2xl ">
                <PiShoppingCartLight />
                <p className="absolute top-[-12px] right-[-10px] lg:right-[-12px] text-xs bg-primaryColor text-[#fff] py-[2px] px-[6px] lg:py-1 lg:px-[8px] rounded-full">
                  0
                </p>
              </div>
            </div>
            <div className="flex-row gap-4 justify-center items-center hidden md:flex">
              <FaUserCircle size={30} />
              <p className="text-base font-ValueSansPro font-medium">Sign in</p>
            </div>
          </div>
        </div>
        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-primaryColor text-[#fff] left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit translate-transform duration-300 z-20`}
        >
          {navItems?.map((singleNav, index) =>
            singleNav?.children?.length === 0 ? (
              <Link
                href={singleNav?.path}
                key={index}
                smooth={true}
                duration={500}
                className="group relative inline-block cursor-pointer hover:text-brightColor font-ValueSansPro font-medium text-base text-[#fff]"
              >
                {singleNav?.link}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#fff] transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
              </Link>
            ) : (
              <div className="group dropdown inline-block relative" key={index}>
                <Link
                  href="#"
                  className="inline-flex items-center cursor-pointer hover:text-brightColor font-ValueSansPro font-medium text-base text-[#fff]"
                >
                  <span className="mr-1">{singleNav?.link}</span>
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill=" rgb(229 231 235)"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                  </svg>
                </Link>
                <ul className="dropdown-menu w-full absolute hidden group-hover:block  text-primaryColor bg-primaryColor pt-1 z-30 rounded ">
                  <li className="">
                    <a
                      className=" bg-primaryColor text-[#fff] hover:text-primaryColor hover:bg-[#fff] py-2 px-4 block [#fff]space-no-wrap font-ValueSansPro font-medium text-base"
                      href="#"
                    >
                      Tab One
                    </a>
                  </li>
                  <li className="">
                    <a
                      className=" bg-primaryColor text-[#fff] hover:text-primaryColor hover:bg-[#fff] py-2 px-4 block [#fff]space-no-wrap font-ValueSansPro font-medium text-base"
                      href="#"
                    >
                      Tab Two
                    </a>
                  </li>
                  <li className="">
                    <a
                      className=" bg-primaryColor text-[#fff] hover:text-primaryColor hover:bg-[#fff] py-2 px-4 block [#fff]space-no-wrap font-ValueSansPro font-medium text-base"
                      href="#"
                    >
                      Tab Three
                    </a>
                  </li>
                </ul>
              </div>
            )
          )}
          {/* <Button title="Login" /> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
