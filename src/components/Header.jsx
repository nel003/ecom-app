import React, { useState, useEffect }  from "react";
import Logo from "../assets/logo.png";
import {FiSearch} from "react-icons/fi";
import {MdOutlineShoppingCart} from "react-icons/md";

function Header() {
    const [navIsClicked, setNavIsClicked] = useState(false);

    function searchSubmit(e) {
        e.preventDefault();

        console.log("hahahahah");
    }

    return(
       <div className="bg-primary w-screen flex">
        <div className="flex w-full items-center flex-col">
            <div className="h-[70px] flex max-w-[1300px] w-full">
                {/* Left */}
                <div className="flex h-full items-center ml-4 sm:ml-8">
                    <div className="w-[40px] h-[40px] mr-2">
                        <img src={Logo} alt="nell" />
                    </div>
                    <h1 className="font-bold text-lg tracking-[2px]">NELL</h1>
                </div>
                {/* Mid */}
                <div className="grow flex h-full p-2 items-center justify-center">
                    <form className="hidden sm:flex" id="1" onSubmit={(e) => searchSubmit(e)}>
                        <FiSearch className="mt-1" size={28}/>
                        <input className="p-2 outline-none" type="text" placeholder="Search something..."/>
                    </form>
                </div>
                {/* Right */}
                <div className="flex gap-2 items-center mr-4 sm:mr-8">
                    <MdOutlineShoppingCart size={28}/>
                    <div className="p-1 border-[2px] border-accent w-20 text-[12px] rounded-full text-center font-semibold hidden sm:block duration-500 hover:bg-accent hover:text-primary">
                        Sign Up
                    </div>
                    <div className="p-1 border-[2px] border-accent w-20 text-[12px] rounded-full text-center font-semibold bg-accent text-primary hidden sm:block duration-500 hover:bg-transparent hover:text-accent">
                        Sign In
                    </div>
                    {/* mobile nav */}
                    <div className="h-[22px] w-[24px] relative mt-1 block sm:hidden" onClick={() => setNavIsClicked(!navIsClicked)}>
                        <span className={`block bg-accent h-[3px] w-full rounded-full absolute duration-300 ${navIsClicked ? "-rotate-45 top-[9px]":"rotate-0 top-0"}`}></span>
                        <span className={`block bg-accent h-[3px] w-[80%] rounded-full absolute top-2 duration-300 ${navIsClicked ? "-right-6 opacity-0":"right-0 opacity-100"}`}></span>
                        <span className={`block bg-accent h-[3px] w-[95%] rounded-full absolute right-0 duration-300 ${navIsClicked ? "rotate-45 top-[9px]":"rotate-0 top-4"}`}></span>
                    </div>
                </div>
            </div>

            <div className={`w-full ${navIsClicked ? "block":"hidden"}`}>
                <div className={`flex-col items-center ${navIsClicked ? "flex":"hidden"}`}>
                    <form className="flex sm:hidden w-[92%] bg-secondary px-2 rounded-full overflow-hidden" id="2" onSubmit={(e) => searchSubmit(e)}>
                        <FiSearch className="mt-1" size={28}/>
                        <input className="p-2 outline-none bg-transparent" type="text" placeholder="Search something..."/>
                    </form>
                </div>
                <div className="flex sm:hidden justify-center py-6">
                    <div className="flex w-[92%] justify-center gap-2">
                        <div className="p-2 border-[2px] border-accent w-[100%] text-[12px] rounded-full text-center font-semibold duration-500 hover:bg-accent hover:text-primary">
                            Sign Up
                        </div>
                        <div className="p-2 border-[2px] border-accent w-[100%] text-[12px] rounded-full text-center font-semibold bg-accent text-primary duration-500 hover:bg-transparent hover:text-accent">
                            Sign In
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </div>
    )
}

export default Header;