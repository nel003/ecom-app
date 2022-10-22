import React  from "react";
import Logo from "../assets/logo.png";
import {FiSearch} from "react-icons/fi";
import {CgShoppingCart} from "react-icons/cg";
import {RiLoginCircleLine} from "react-icons/ri";

function Header() {
    return(
        <div className="flex h-20 w-screen bg-white shadow-sm justify-center">
            <div className="flex max-w-[1200px] w-[100%]">
                {/* Logo */}
                <div className="flex p-4 min-w-[25%] grow">
                    <img src={Logo} alt="logo" className="w-12 h-12 ml-1 md:ml-4" />
                    <div className="text-3xl mt-1 ml-3 font-bold">Nel</div>
                </div>
                {/* Search */}
                <div className="grow p-4 justify-start hidden md:flex">
                    <div className="border-slate-200 border-2 w-[90%] flex rounded-full overflow-hidden">
                        <FiSearch size={30} className="ml-4 mt-2 mr-2 text-slate-600"/>
                        <input type="text" className="pl-4 pr-4 w-[100%] outline-none bg-transparent" placeholder="Search something..." />
                        <span className="h-[65%] w-[1px] bg-slate-200 mt-2"></span>
                        <button className="p-2 font-bold pl-4 text-md pr-4 transition bg-slate-100 text-slate-600 hover:bg-slate-200">Search</button>
                    </div>
                </div>
                {/* Btn or profile */}
                <div className="flex p-4">
                    <FiSearch size={30} className="ml-4 mt-2 mr-2 text-slate-600 md:hidden"/>
                    <CgShoppingCart size={30} className="mt-2 mr-2 text-slate-600"/>
                    <button className="p-1 mr-4 md:mr-6 font-bold pl-4 text-md pr-4 rounded-full w-32 transition bg-blue-600 text-slate-100 hover:bg-blue-700 hidden sm:block">Sign Up</button>
                    <RiLoginCircleLine size={50} className="bg-blue-600 p-3 text-slate-100 transition rounded-full hover:bg-blue-700 mr-4 sm:hidden"/>
                </div>
            </div>
        </div>
    )
}

export default Header;