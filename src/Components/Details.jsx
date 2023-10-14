import React from "react";
import detailimg from "../assets/detailimg.png";
import { AiTwotoneStar } from "react-icons/ai";
import { AiOutlineCalendar } from "react-icons/ai";
import Recommend from "./Recommend";
export default function Details() {
  return (
    <>
      <div className="mt-20 max-lg:mt-10 ">
        <div className="flex flex-wrap justify-center gap-24">
          <div>
            <div className="p-6 ">
              <h1 className="font-bold text-3xl">Michael Jackson</h1>
              <p className="mt-4 w-96 text-base font-semibold text-gray-600">
                I am here to provide my expertise in accounting and finance,
                which includes financial statements, economics, and auditing,
                all to assist you effectively.
              </p>
              <div className="flex  fill-sky-600 text-sky-600 mt-4">
                <AiTwotoneStar className="mt-1" />
                <p className="font-bold">4.8</p>
                <p className="ml-3 text-black font-semibold">(89)</p>
              </div>
            </div>
            <div>
              <div
                className={`mt2 rounded-xl w-96  mx-auto shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-6 hover:scale-95`}
              >
                <div className="flex justify-between">
                  <h1>Basic to complex tasks</h1>
                  <p className="text-lg font-bold">&#x20B9; 4,370</p>
                </div>
                <div className="flex gap-2 mt-4 ">
                  <AiOutlineCalendar className="fill-sky-700 mt-1 " />
                  <p>Delivers the job within 2 days</p>
                </div>
                <div className="flex gap-4 mt-3 ">
                  <div className="h-10 w-40 bg-sky-600 rounded-xl">
                    <button className="px-6 pt-2 font-semibold text-white text-sm">
                      Request Proposal
                    </button>
                  </div>
                  <div className="h-10 w-40  border-2 border-sky-600 rounded-xl">
                    <button className="px-8 pt-2 font-semibold text-sky-600 text-sm">
                      Chat with me
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                className={`rounded-xl mt-8 w-96  mx-auto shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-6 hover:scale-95`}
              >
                <div>
                  <h1 className="text-2xl font-bold">What people say ?</h1>
                  <p className="mt-4">
                    I cannot express enough gratitude for the support Micheal
                    has provided in managing my personal finances. Their
                    attention to detail and deep understanding of financial
                    markets has ensured that my investments are in safe hands. I
                    highly recommend their services to anyone seeking financial
                    guidance.
                  </p>
                </div>
              </div>
            </div>
            <div className="h-10 w-40 bg-sky-600 rounded-xl mt-8 ml-6 hover:scale-105">
              <button className="px-12 pt-2 font-semibold text-white text-sm ">
                Go Back
              </button>
            </div>
          </div>
          <div className="mt-8 max-sm:-mt-10 max-sm:px-10">
            <img src={detailimg} className="max-sm:object-center" />
            <h1 className="mt-8 text-3xl font-bold max-sm:text-2xl max-sm:text-center">
              About Michael Jackson
            </h1>
            <div className="flex flex-wrap max-sm:gap-8 max-sm:p-6 gap-28 mt-8 ">
              <div>
                <h1 className=" mb-4 font-bold text-gray-400 text-sm max-sm:text-xs ">
                  FROM
                </h1>

                <p className=" text-base mb-4 font-semibold max-sm:text-xs">
                  INDIA
                </p>
              </div>
              <div>
                <h1 className=" mb-4 font-bold text-gray-400 text-sm max-sm:text-xs">
                  PARTNER SINCE
                </h1>

                <p className=" text-base mb-4 font-semibold max-sm:text-xs ">
                  2011
                </p>
              </div>
              <div>
                <h1 className=" mb-4 font-bold text-gray-400 text-sm max-sm:text-xs">
                  AVERAGE RESPONSE TIME
                </h1>

                <p className=" text-base mb-4 font-semibold max-sm:text-xs">
                  30 minutes
                </p>
              </div>
            </div>

            <h1 className=" mb-4 font-bold text-gray-400 text-sm max-sm:text-center">
              ABOUT
            </h1>

            <p className=" text-base mb-4 max-sm:text-center max-sm:p-2 ">
              I am a Professional Charted Accountant here to offer professional
              services of accounting and finance,
              <br /> financial statements, Bookkeeping in affordable price.
            </p>
            <div className="flex flex-wrap max-sm:gap-12 max-xl:gap-16 gap-72  mt-8">
              <div>
                <h1 className=" mb-4 font-bold text-gray-400 text-sm">
                  SERVICES I OFFER
                </h1>
                <ul className="max-w-md space-y-1  list-disc list-inside ">
                  <li>Financial accounting</li>
                  <li>Financial statements</li>
                  <li>Book keeping</li>
                  <li>Accounting and finance</li>
                  <li>Corporate Finance</li>
                  <li>Maintain Charts of Accounts</li>
                  <li>Profit and loss statements </li>
                  <li>Bank Reconciliation</li>
                  <li> Balance Sheets</li>
                </ul>
              </div>
              <div>
                <h1 className=" mb-4 font-bold text-gray-400 text-sm">
                  WHY ME?
                </h1>
                <ul className="max-w-md space-y-1  list-disc list-inside">
                  <li>Copy One-time delivery </li>
                  <li>24/7 customer support</li>
                  <li>Error-free documents</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Recommend />
      </div>
    </>
  );
}
