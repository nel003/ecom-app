import React, { useRef } from "react";
import OnlineShop from "../assets/online-shopping.svg";
import Header from "../components/Header";
import Products from "../components/Products";

function Home(){
    const scrTo = useRef(null);

    return(
        <>
        <Header/>
        <div className="h-screen w-screen rad-bg flex justify-center">
            <div className="max-w-[1200px] w-full flex">
                 {/* Text */}
                <div className="h-full sm:w-1/2 w-[100%] flex justify-center flex-col pl-8">
                    <h1 className="text-slate-100 text-4xl font-semibold mb-1">Online Shoping</h1>
                    <span className="w-28 h-[1px] bg-slate-300 ml-1 mb-1"></span>
                    <p className="text-slate-300 text-lg w-[70%] min-w-[240px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    <button onClick={() => scrTo.current?.scrollIntoView({behavior: 'smooth'})} className="text-slate-100 p-2 w-32 border-2 rounded-full transition border-blue-500 hover:bg-blue-500 mt-7">Shop Now</button>
                </div>
                {/* Svg */}
                <div className="h-full sm:w-1/2 w-0 flex justify-center align-center">
                    <img className="hidden sm:block" src={OnlineShop}/>
                </div>
            </div>
        </div>
        <div ref={scrTo} className="h-auto w-screen flex justify-center">
            <div className="max-w-[1200px] w-full flex items-center mt-12 pl-6 pr-6 mb-12">
                <Products/>
            </div>
        </div>
        <div className="w-full h-screen"></div>
        </>
    )
}

export default Home;