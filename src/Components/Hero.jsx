import React from "react";
import Left from "../assets/Left.png";
import Search from "./Search";
import JoinUs from "./JoinUs";
import AllinOne from "./AllinOne";

export default function Hero() {
  return (
    <div>
      <div>
        <div className="flex justify-center gap-16 mt-20 max-xl:flex-wrap  max-sm:text-center max-sm:mt-10">
          <div className="mt-16">
            <h1 className=" font-bold text-6xl max-sm:text-5xl ">
              Find{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Partners
              </span>{" "}
              (CAs) <br /> available online
            </h1>
            <p className="mt-6 text-gray-400 font-semibold max-sm:text-center  ">
              CONNECT with us where your services are listed and visible to a
              myraid <br />
              of business seeeking CS's for compliance support.
            </p>
            <Search />
          </div>
          <div>
            <img src={Left}></img>
          </div>
        </div>
      </div>
      <JoinUs />
      <AllinOne />
    </div>
  );
}
