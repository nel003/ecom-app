import React, { useState, useEffect }  from "react";
import Logo from "../assets/logo.png";
import {FiSearch} from "react-icons/fi";
import {CgShoppingCart} from "react-icons/cg";
import {RiLoginCircleLine} from "react-icons/ri";

function Header() {
    const [offset, setOffset] = useState(0);
    const [innerHeight, setInnerHeight] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            setOffset(window.pageYOffset);
            setInnerHeight(window.innerHeight);
        }
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);


    return(
        <div className={`flex h-16 sm:h-20 w-screen shadow-sm justify-center fixed transition duration-500 ease-in ${offset >= innerHeight ? "bg-white" : "bg-transparent"} z-[1000]`}>
            <div className="flex max-w-[1200px] w-[100%]">
                {/* Logo */}
                <div className="flex p-3 sm:p-4 min-w-[25%] grow">
                    <img src={Logo} alt="logo" className="w-10 h-10 sm:w-12 sm:h-12 ml-1 md:ml-4" />
                    <div className={`text-2xl sm:text-3xl mt-1 ml-1 font-bold transition duration-500 ease-in ${offset >= innerHeight ? "text-slate-800" : "text-slate-200"}`}>Nel</div>
                </div>
                {/* Search */}
                <div className="grow p-4 justify-start hidden md:flex">
                    <div className="border-slate-200 border-2 w-[90%] flex rounded-full overflow-hidden">
                        <FiSearch size={30} className={`ml-4 mt-2 mr-2 text-slate-600 transition duration-500 ease-in ${offset >= innerHeight ? "text-slate-600" : "text-slate-300"}`}/>
                        <input type="text" className="pl-4 pr-4 w-[100%] outline-none bg-transparent" placeholder="Search something..." />
                        <span className="h-[65%] w-[1px] bg-slate-200 mt-2"></span>
                        <button className={`p-2 font-bold pl-4 text-md pr-4 transition bg-slate-100 text-slate-600 hover:bg-slate-200 duration-500 ease-in ${offset >= innerHeight ? "opacity-100" : "opacity-50"}`}>Search</button>
                    </div>
                </div>
                {/* Btn or profile */}
                <div className="flex p-3 sm:p-4">
                    <FiSearch className={`ml-4 mt-2 mr-2 text-2xl sm:text-3xl text-slate-600 md:hidden transition duration-500 ease-in ${offset >= innerHeight ? "text-slate-600" : "text-slate-300"}`}/>
                    <CgShoppingCart className={`mt-2 mr-2 text-2xl sm:text-3xl text-slate-600 transition duration-500 ease-in ${offset >= innerHeight ? "text-slate-600" : "text-slate-300"}`}/>
                    <button className="p-1 mr-4 md:mr-6 font-bold pl-4 text-md pr-4 rounded-full w-32 transition bg-blue-600 text-slate-100 hover:bg-blue-700 hidden sm:block">Sign Up</button>
                    <RiLoginCircleLine className="bg-blue-600 p-2 text-4xl text-slate-100 transition rounded-full hover:bg-blue-700 mt-[3px] mr-4 sm:hidden"/>
                </div>
            </div>
        </div>
    )
}

export default Header;