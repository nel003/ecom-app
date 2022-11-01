import React from "react";
import LBG from "../assets/landing-bg.png";

function Landing(){

    return(
        <div className="flex w-screen h-screen justify-center">
            <div className={`w-full h-full bg-center bg-no-repeat bg-cover bg-[url('${LBG}')]`}>

            </div>
        </div>
    )
}

export default Landing;