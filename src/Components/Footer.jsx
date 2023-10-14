import React from "react";
import logo1 from "../assets/logo1.png";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoWhatsapp } from "react-icons/bi";

export default function Footer() {
  return (
    <>
      <div>
        <footer className="bg-gradient-to-br from-blue-800 via-blue-800 to-purple-600">
          <div className="mx-auto w-full max-w-screen-xl">
            <div className="text-gray-300 grid grid-cols-2 gap-2 px-4 py-6 lg:py-8 md:grid-cols-6">
              <div>
                <img src={logo1}></img>
                <p className="mt-2">
                  India's first platform dedicated to simplifying partner search
                </p>
              </div>
              <div className="ml-2">
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Company
                </h2>
                <ul className="text-gray-300  font-normal">
                  <li className="mb-4">
                    <a href="#" className=" hover:underline">
                      About
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Pricing
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  SOLUTION
                </h2>
                <ul className="text-gray-300 font-normal">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Search
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Connect
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Research
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Academy
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  RESOURCES
                </h2>
                <ul className="text-gray-300 font-normal">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Blog
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Forms
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  SUPPORT
                </h2>
                <ul className="text-gray-300 font-normal ">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Help
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  LEGAL
                </h2>
                <ul className="text-gray-300 font-normal">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Privacy
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Terms
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Accessibility
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <hr className="h-px my-8 bg-gray-100 border-0 "></hr>
            <div className="px-4 md:flex md:items-center md:justify-between">
              <span className="text-sm text-gray-300 sm:text-center">
                Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071,
                Maharashtra
              </span>
              <div className="flex mt-4 space-x-5 sm:justify-center md:mt-0">
                <BiLogoFacebookCircle size={20} className="fill-white" />
                <BiLogoInstagram size={20} className="fill-white" />
                <BiLogoLinkedin size={20} className="fill-white" />
                <BiLogoWhatsapp size={20} className="fill-white" />
              </div>
            </div>
          </div>
          <div className="h-14 bg-black mt-6 text-gray-400 text-sm text-center p-4">
            <p>
              Registered trademark of India Private Limited © 2023 loerumipsum
              Inc. All Rights Reserved
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
