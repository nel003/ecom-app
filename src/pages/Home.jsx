import React from "react";
import OnlineShop from "../assets/online-shopping.svg";
import Header from "../components/Header";

function Home(){
    return(
        <>
        <Header/>
        <div className="h-screen w-screen rad-bg flex justify-center">
            <div className="max-w-[1200px] w-full flex">
                 {/* Text */}
                <div className="h-full w-1/2 flex justify-center flex-col pl-8">
                    <h1 className="text-slate-100 text-3xl font-semibold mb-1">Nel003 Shop</h1>
                    <span className="w-28 h-[1px] bg-slate-300 ml-1 mb-1"></span>
                    <p className="text-slate-300 w-[7   0%] min-w-[200px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    <button className="text-slate-100 p-2 w-32 border-2 rounded-full transition border-blue-500 hover:bg-blue-500 mt-7">Shop Now</button>
                </div>
                {/* Svg */}
                <div className="h-full w-1/2 flex justify-center align-center">
                    <img src={OnlineShop}/>
                </div>
            </div>
        </div>
        <div className="h-screen w-screen flex bg-black"></div>
        </>
    )
}

export default Home;