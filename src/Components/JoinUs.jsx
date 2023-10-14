import React from "react";
import JoinUsData from "./JoinUsData";
export default function JoinUs() {
  return (
    <div className="mt-36 ">
      <div className="text-center">
        <h1 className="text-6xl font-bold max-sm:text-4xl font-poppins">
          Want to{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Join
          </span>{" "}
          Us ?
        </h1>
        <p className="text-gray-500 mt-6 font-semibold text-lg">
          To remain with us ,it is essential that you diligently follow the
          steps provided
        </p>
      </div>

      <div className="h-full w-4/6  mt-20 ml-80 max-md:ml-32 max-sm:ml-14">
        <div className="flex flex-wrap gap-14  ">
          {JoinUsData.map((card, index) => (
            <div>
              <div className="relative bg-gradient-to-r z-20 from-blue-600 to-purple-600 h-12 w-12 rounded-xl -mb-8 -ml-4">
                <h1 className="text-white text-center font-medium text-2xl">
                  {card.jid}
                </h1>
              </div>
              <div
                className={`bg-white rounded-xl w-96  mx-auto shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-6 hover:scale-95 max-sm:w-80`}
              >
                <div>
                  <div className="text-center">
                    <h1 className="font-bold text-xl">{card.head}</h1>
                    <p className="px-6">{card.des}</p>
                  </div>
                </div>
                <div className="bg-gray-100 h-24 w-80 rounded-xl justify-center mt-6 ml-2 max-sm:w-72 max-sm:-ml-2 ">
                  <div className="flex gap-14 mt-4 ">
                    <div className="ml-2 mt-2">
                      <h1 className=" text-sky-600 font-bold"> Due date</h1>
                      <p className="text-sm w-14 mt-1">{card.due}</p>
                    </div>
                    <div className="mt-2">
                      <h1 className="font-bold text-orange-600">
                        Penalty fees
                      </h1>
                      <p className="text-sm mt-1">
                        <span className="font-bold">&#x20B9;50,000</span>
                        {card.fees}
                      </p>
                      <p className="text-sm">{card.fees1}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="text-center text-sm mt-10 ">
        * For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200{" "}
        <span className="font-bold">every day</span> until you file the form .
        There is no maximum penalty amount. So, if you don't file the form for a
        year, you will owe ₹73,000 per form
      </p>
    </div>
  );
}
