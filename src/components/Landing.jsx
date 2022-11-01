import React from "react";
import LBG from "../assets/landing-bg.png";
import SBag from "../assets/sbag.svg";
import { FaTools, FaHeadphones } from "react-icons/fa";
import { GiRunningShoe } from "react-icons/gi";
import { BsFillPhoneFill } from "react-icons/bs";
import { SiInstacart } from "react-icons/si";
import { IoMdArrowDropright } from "react-icons/io";

function Landing(){

    return(
        <div className="flex w-screen h-screen justify-center">
            <div style={{"background": `url('${LBG}')`, "backgroundPosition": "center", "backgroundRepeat": "no-repeat", "backgroundSize": "cover"}} className="w-full h-full" >
                <div className="w-full h-full flex flex-col bg-[rgba(0,0,0,0.3)]">
                    <div className="flex h-full w-full justify-center px-8">
                        <div className="flex justify-center max-w-[1200px] w-full h-full">
                            <div className="flex w-full h-full flex-col text-primary justify-center gap-4">
                                <h1 className="text-3xl sm:text-4xl font-semibold">Shop 'till you drop!</h1>
                                <p className="min-w-[250px] w-[40vw]">Optio ad explicabo ea consequuntur dolorum vero, itaque minima ipsam aliquam quo, fugiat, totam dicta distinctio labore! Animi, quo?</p>
                                <button className="border-[2px] border-secondary w-48 p-3 text-secondary rounded-full flex justify-center">
                                    Share
                                    <IoMdArrowDropright size={25}/>
                                </button>
                                <button className="bg-secondary w-48 p-3 text-accent rounded-full">Shop Now</button>
                            </div>
                            <div className="w-[50%] hidden md:flex h-full justify-center">
                                <img src={SBag}></img>
                            </div>
                        </div>
                    </div>
                    {/* bottom */}
                    <div className="grid bg-primary w-full h-[100px] grid-cols-5">
                        <div className="w-full h-full flex flex-col items-center justify-center p-2">
                            <GiRunningShoe size={28}/>
                            <h2 className="font-semibold text-[12px] sm:text-[18px]">Shoes</h2>
                        </div>
                        <div className="w-full h-full flex flex-col items-center justify-center p-2">
                            <FaHeadphones size={28}/>
                            <h2 className="font-semibold text-[12px] sm:text-[18px]">Audio</h2>
                        </div>
                        <div className="w-full h-full flex flex-col items-center justify-center p-2">
                            <BsFillPhoneFill size={28}/>
                            <h2 className="font-semibold text-[12px] sm:text-[18px]">Gadgets</h2>
                        </div>
                        <div className="w-full h-full flex flex-col items-center justify-center p-2">
                            <SiInstacart size={28}/>
                            <h2 className="font-semibold text-[12px] sm:text-[18px]">Groceres</h2>
                        </div>
                        <div className="w-full h-full flex flex-col items-center justify-center p-2">
                            <FaTools size={28}/>
                            <h2 className="font-semibold text-[12px] sm:text-[18px]">Tools</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing;