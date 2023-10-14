import React from "react";
import StudentT1 from "../assets/StudentT1.png";
import research from "../assets/research.png";
import searchh from "../assets/searchh.png";
import skill from "../assets/skill.png";
import connect from "../assets/connect.png";

export default function AllinOne() {
  return (
    <div className="bg-gray-50">
      <div className="flex justify-center gap-14 mt-20 max-xl:flex-wrap">
        <div className="mt-16 ">
          <h1 className=" font-bold text-6xl max-sm:text-center max-sm:text-5xl">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              All-in-One
            </span>{" "}
            platform
            <br /> that Makes Easier
          </h1>
          <p className="mt-10 text-gray-600 text-lg font-semibold max-sm:text-center">
            We are more than a platform ,We are your success partner.
            <br />
            Discover our services to achive your buisness and educational goals.
          </p>
          <div className="  mt-24  ">
            <div className="flex gap-12">
              <div className="flex gap-4">
                <img src={searchh} className="h-20" />
                <p className="w-32">
                  <span className="font-bold">SEARCH</span> for vital company
                  information
                </p>
              </div>
              <div className="flex gap-4">
                <img src={connect} className="h-20" />
                <p className="w-32">
                  <span className="font-bold">CONNECT</span> with the resources
                  to meet your buisness needs
                </p>
              </div>
            </div>
            <div className="flex gap-12 mt-20">
              <div className="flex gap-4 ">
                <img src={research} className="h-20" />
                <p className="w-32">
                  <span className="font-bold">RESEARCH</span> and generate
                  reports that drive growth
                </p>
              </div>
              <div className="flex gap-4 ">
                <img src={skill} className="h-20" />
                <p className="w-32">
                  <span className="font-bold">ACADEMY</span> to give you skills
                  for sucess in your carrer
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={StudentT1} className="max-sm:ml-4"></img>
        </div>
      </div>
    </div>
  );
}
