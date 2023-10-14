import React, { useState } from "react";
import logo from "../assets/logo.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  const [show, setShow, setIsShown] = useState(false);
  const handleClick = () => {
    if (show === true) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  return (
    <>
      <div className=" w-auto h-16 ">
        <div className="flex justify-around max-md:hidden ">
          <div className="flex gap-10 mt-2">
            <img src={logo}></img>
            <div className="flex gap-16 mt-2">
              <button className="flex font-bold ">
                Solutions{" "}
                <MdKeyboardArrowDown className="fill-sky-600 mt-1" size={20} />
              </button>
              <button className="flex font-bold">
                Features{" "}
                <MdKeyboardArrowDown className="fill-sky-600 mt-1" size={20} />
              </button>{" "}
              <button className="flex font-bold">
                About{" "}
                <MdKeyboardArrowDown className="fill-sky-600 mt-1" size={20} />
              </button>
            </div>
          </div>
          <div className="flex gap-4 mt-3 ">
            <div className="h-10 w-20 border-2 border-sky-600 rounded-xl">
              <button className="px-4 pt-1 font-semibold text-sky-600">
                Login
              </button>
            </div>
            <div className="h-10 w-20 bg-sky-600 rounded-xl">
              <button className="px-3 pt-2 font-semibold text-white">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>

      <nav className=" max-md:-mt-16 hidden  max-md:block">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center">
            <img src={logo} />
          </a>
          <button
            onClick={handleClick}
            type="button"
            className="inline-flex items-center justify-center p-2 w-10 h-10 ml-3 text-sm "
          >
            <GiHamburgerMenu className="fill-sky-600" size={30} />
          </button>
          {show && (
            <div
              className=" w-full bg-gray-100 rounded-xl"
              id="navbar-hamburger"
            >
              <ul className="flex flex-col font-medium mt-4 rounded-lg  ">
                <li>
                  <a
                    href="#"
                    className="flex  py-2 pl-3 pr-4   rounded hover:bg-blue-100 dark:text-black  hover:text-sky-600"
                  >
                    Solutions
                    <MdKeyboardArrowDown
                      className="fill-sky-600 mt-1"
                      size={20}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-blue-100 dark:text-black  hover:text-sky-600"
                  >
                    Features
                    <MdKeyboardArrowDown
                      className="fill-sky-600 mt-1"
                      size={20}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-blue-100 dark:text-black hover:text-sky-600"
                  >
                    About
                    <MdKeyboardArrowDown
                      className="fill-sky-600 mt-1"
                      size={20}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-blue-100 dark:text-black  hover:text-sky-600"
                  >
                    Blog
                  </a>
                </li>
              </ul>
              <div className="flex gap-4 mt-3 ml-2">
                <div className="h-10 w-20 border-2 border-sky-600 rounded-xl">
                  <button className="px-4 pt-1 font-semibold text-sky-600">
                    Login
                  </button>
                </div>
                <div className="h-10 w-20 bg-sky-600 rounded-xl">
                  <button className="px-3 pt-2 font-semibold text-white">
                    Register
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
