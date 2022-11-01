import React, { useState, useEffect }  from "react";
import Logo from "../assets/logo.png";
import {FiSearch} from "react-icons/fi";
import {MdOutlineShoppingCart} from "react-icons/md";

function Header() {
    const [navIsClicked, setNavIsClicked] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    function searchSubmit(e) {
        e.preventDefault();

        console.log("hahahahah");
    }

    return(
       <div className={`w-screen flex fixed z-[1000] ${scrollPosition >= 140 ? "bg-primary":"bg-transparent"}`}>
        <div className="flex w-full items-center flex-col">
            <div className="h-[70px] flex max-w-[1300px] w-full">
                {/* Left */}
                <div className="flex h-full items-center ml-4 sm:ml-8">
                    <div className="w-[40px] h-[40px] mr-2">
                        <img src={Logo} alt="nell" />
                    </div>
                    <h1 className={`font-bold text-lg tracking-[2px] ${scrollPosition >= 140 ? "text-accent":"text-secondary"}`}>NELL</h1>
                </div>
                {/* Mid */}
                <div className="grow flex h-full p-2 items-center justify-center">
                    <form className={`hidden sm:flex rounded-full px-2 w-[80%] md:w-[60%] ${scrollPosition >= 140 ? "bg-transparent":"bg-[rgba(0,0,0,0.5)]"}`} id="1" onSubmit={(e) => searchSubmit(e)}>
                        <FiSearch className={`mt-1 ${scrollPosition >= 140 ? "text-accent":"text-secondary"}`} size={28}/>
                        <input className={`p-2 outline-none bg-transparent w-full ${scrollPosition >= 140 ? "text-accent":"text-secondary"}`} type="text" placeholder="Search something..."/>
                    </form>
                </div>
                {/* Right */}
                <div className="flex gap-2 items-center mr-4 sm:mr-8">
                    <MdOutlineShoppingCart className={`${scrollPosition >= 140 ? "text-accent":"text-secondary"}`} size={28}/>
                    <div className={`p-1 border-[2px] w-20 text-[12px] rounded-full text-center font-semibold hidden sm:block duration-500 ${scrollPosition >= 140 ? "text-accent border-accent hover:bg-accent hover:text-secondary":"text-secondary border-secondary hover:bg-secondary hover:text-accent"}`}>
                        Sign Up
                    </div>
                    <div className={`p-1 border-[2px] w-20 text-[12px] rounded-full text-center font-semibold hidden sm:block duration-500 ${scrollPosition >= 140 ? "bg-accent text-primary hover:bg-transparent hover:text-accent":"text-accent bg-secondary border-transparent hover:bg-transparent hover:text-secondary hover:border-secondary"}`}>
                        Sign In
                    </div>
                    {/* mobile nav */}
                    <div className="h-[22px] w-[24px] relative mt-1 block sm:hidden overflow-hidden" onClick={() => setNavIsClicked(!navIsClicked)}>
                        <span className={`block h-[3px] w-full rounded-full absolute duration-300 ${navIsClicked ? "-rotate-45 top-[9px]":"rotate-0 top-0"} ${scrollPosition >= 140 ? "bg-accent":"bg-secondary"}`}></span>
                        <span className={`block h-[3px] w-[80%] rounded-full absolute top-2 duration-300 ${navIsClicked ? "-right-6 opacity-0":"right-0 opacity-100"} ${scrollPosition >= 140 ? "bg-accent":"bg-secondary"}`}></span>
                        <span className={`block h-[3px] w-[95%] rounded-full absolute right-0 duration-300 ${navIsClicked ? "rotate-45 top-[9px]":"rotate-0 top-4"} ${scrollPosition >= 140 ? "bg-accent":"bg-secondary"}`}></span>
                    </div>
                </div>
            </div>
            
            <div className={`w-full ${navIsClicked ? "block":"hidden"}`}>
                <div className={`flex-col items-center ${navIsClicked ? "flex":"hidden"}`}>
                    <form className={`flex sm:hidden w-[92%] px-2 rounded-full overflow-hidden ${scrollPosition >= 140 ? "bg-secondary":"bg-[rgba(0,0,0,0.5)]"}`} id="2" onSubmit={(e) => searchSubmit(e)}>
                        <FiSearch className={`mt-1 ${scrollPosition >= 140 ? "text-accent":"text-secondary"}`} size={28}/>
                        <input className={`p-2 outline-none bg-transparent w-full ${scrollPosition >= 140 ? "text-accent":"text-secondary"}`} type="text" placeholder="Search something..."/>
                    </form>
                </div>
                <div className="flex sm:hidden justify-center py-6">
                    <div className="flex w-[92%] justify-center gap-2">
                        <div className={`p-2 border-[2px] w-[100%] text-[12px] rounded-full text-center font-semibold duration-500 ${scrollPosition >= 140 ? "border-accent text-accent hover:bg-accent hover:text-primary":"border-secondary text-secondary hover:bg-secondary hover:text-accent"}`}>
                            Sign Up
                        </div>
                        <div className={`p-2 border-[2px] w-[100%] text-[12px] rounded-full text-center font-semibold text-primary duration-500 ${scrollPosition >= 140 ? "border-accent text-secondary bg-accent hover:bg-transparent hover:text-accent":"bg-secondary text-accent border-transparent hover:bg-transparent hover:text-secondary hover:border-secondary"}`}>
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