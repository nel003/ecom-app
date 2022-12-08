import React from "react";
import Side from "../assets/side.svg";
import MainBG from "../utils/backgorund";
import { FaTools, FaHeadphones } from "react-icons/fa";
import { GiRunningShoe } from "react-icons/gi";
import { BsFillPhoneFill } from "react-icons/bs";
import { SiInstacart } from "react-icons/si";
import { IoMdArrowDropright } from "react-icons/io";

function Landing() {
  return (
    <div className="flex w-screen h-[94vh] sm:h-screen justify-center">
      <div
        style={MainBG}
        className="w-full h-full"
      >
        <div className="w-full h-full flex flex-col bg-[rgba(0,0,0,0.3)]">
          <div className="flex h-full w-full justify-center px-8">
            <div className="flex justify-center max-w-[1200px] w-full h-full">
              <div className="flex w-full h-full flex-col text-primary justify-center gap-5">
                <h1 className="text-3xl sm:text-4xl font-semibold">
                  Shop 'till you drop!
                </h1>
                <p className="min-w-[250px] w-full md:w-[35vw]">
                  Optio ad explicabo ea consequuntur dolorum vero, itaque minima
                  ipsam aliquam quo, fugiat, totam dicta distinctio labore!
                  Animi, quo?
                </p>
                <div className="flex gap-3">
                  <button className="border-[2px] border-secondary w-48 p-3 text-secondary rounded-full flex justify-center duration-300 hover:bg-primary hover:text-accent">
                    Share
                    <IoMdArrowDropright size={25} />
                  </button>
                  <button className="bg-secondary w-48 p-3 text-accent rounded-full border-2 border-transparent duration-300 hover:bg-transparent hover:border-primary hover:text-primary">
                    Shop Now
                  </button>
                </div>
              </div>
              <div className="w-[50%] hidden md:flex h-full justify-center">
                <img src={Side}></img>
              </div>
            </div>
          </div>
          {/* bottom */}
          <div className="w-full flex justify-center">
            <div className="max-w-[1200px] grid bg-primary w-full h-[200px] rounded-md sm:-mb-4 -mb-[100px] shadow-sm mx-4 sm:mx-8 grid-cols-3 grid-rows-2 sm:h-[100px] sm:grid-rows-1 sm:grid-cols-6">
              <div className="w-full h-full flex flex-col items-center justify-center p-2">
                <GiRunningShoe className="duration-300 hover:scale-125" size={28} />
                <h2 className="font-semibold text-[12px] sm:text-[18px]">
                  Shoes
                </h2>
              </div>
              <div className="w-full h-full flex flex-col items-center justify-center p-2">
                <FaHeadphones className="duration-300 hover:scale-125" size={28} />
                <h2 className="font-semibold text-[12px] sm:text-[18px]">
                  Audio
                </h2>
              </div>
              <div className="w-full h-full flex flex-col items-center justify-center p-2">
                <BsFillPhoneFill className="duration-300 hover:scale-125" size={28} />
                <h2 className="font-semibold text-[12px] sm:text-[18px]">
                  Gadgets
                </h2>
              </div>
              <div className="w-full h-full flex flex-col items-center justify-center p-2">
                <SiInstacart className="duration-300 hover:scale-125" size={28} />
                <h2 className="font-semibold text-[12px] sm:text-[18px]">
                  Groceres
                </h2>
              </div>
              <div className="w-full h-full flex flex-col items-center justify-center p-2">
                <FaTools className="duration-300 hover:scale-125" size={28} />
                <h2 className="font-semibold text-[12px] sm:text-[18px]">
                  Tools
                </h2>
              </div>
              <div className="w-full h-full flex flex-col items-center justify-center p-2">
                <FaTools className="duration-300 hover:scale-125" size={28} />
                <h2 className="font-semibold text-[12px] sm:text-[18px]">
                  Tools
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
