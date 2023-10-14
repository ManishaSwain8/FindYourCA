import React from "react";
import RecommendData from "./RecommendData";
import { AiTwotoneStar } from "react-icons/ai";

export default function Recommend() {
  return (
    <div className="mt-10">
      <div className="h-full w-4/6 justify-center ml-80 p-10 max-xl:ml-32 max-sm:-ml-6 mt-10  ">
        <h1 className="text-3xl font-bold   ">Recommended for you </h1>
        <div className="flex flex-wrap  gap-4 mt-8 ">
          {RecommendData.map((card, index) => (
            <div
              className={`rounded-xl w-96  mx-auto shadow-[0_3px_10px_rgb(0,0,0,0.2)]  hover:scale-95`}
            >
              <img src={card.rimg} className="h-42 w-96 rounded-xl  " />
              <div className="p-3">
                <div className="flex justify-between">
                  <h3 className="mt-2 font-bold text-gray-800 text-xl ">
                    {card.rname}
                  </h3>
                  <p className="mt-2 font-bold text-lg">&#x20B9;{card.rs}</p>
                </div>
                <p className="mt-2 ">{card.rdes}</p>

                <div className="flex mt-4 ">
                  <AiTwotoneStar className="fill-sky-600 mt-1" />
                  <p className="text-sky-600 font-bold">{card.rate}</p>
                  <p className="ml-2">{card.rcount}</p>
                </div>

                <div className="h-10 w-80 ml-4 bg-sky-600 rounded-xl mt-6">
                  <button className="px-28 pt-2 font-semibold text-white text-sm">
                    View Services
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
