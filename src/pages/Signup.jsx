import React, { useState } from "react";
import MainBG from "../utils/backgorund";
import { FiEye, FiEyeOff } from "react-icons/fi";

function Signup(){

    const [isPasswdVisible, setIsPasswdVisible] = useState([false, false]);
    const [inputs, setInputs] = useState({email: "", password: "", confirmPassword: ""});
    const [errors, setErrors] = useState({email: [false, ""], password: [false, ""], confirmPassword: [false, ""]});

    function validateEmail(e){
        const email = e.target.value;
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        setInputs({...inputs, email});

        if (email.length < 1) {
            setErrors({...errors, email: [true, "Email is required."]});
            return;
        }
        if (email.length < 5 || email.length > 40) {
            setErrors({...errors, email: [true, "Email must be 4 - 40 characters only."]});
            return;
        }
        if (!email.match(re)) {
            setErrors({...errors, email: [true, "Invalid email address."]});
            return;
        }
        setErrors({...errors, email: [false, ""]})

    }

    function validatePassword(e){
        const password = e.target.value;
        setInputs({...inputs, password});

        if (password.length < 1) {
            setErrors({...errors, password: [true, "Password is required."]});
            return;
        }
        if (password.length < 5 || password.length > 50) {
            setErrors({...errors, password: [true, "Password must be 4 - 50 characters only."]});
            return;
        }
        setErrors({...errors, password: [false, ""]})

    }
    function validateConfirmPassword(e){
        const confirmPassword = e.target.value;
        setInputs({...inputs, confirmPassword});

        if (confirmPassword.length < 1) {
            setErrors({...errors, confirmPassword: [true, "Please confirm your passsword."]});
            return;
        }
        if (confirmPassword !== inputs.password) {
            setErrors({...errors, confirmPassword: [true, "Password did not match."]});
            return;
        }
        setErrors({...errors, confirmPassword: [false, ""]})

    }

    return(
        <div className="h-screen w-screen flex justify-center overflow-hidden" style={MainBG}>
            <div className="max-w-[1200px] w-full h-full">
                <div className="flex h-full w-full justify-center">
                    <div className="w-[60%] hidden lg:block">HSGDGHSd</div>
                    <div className="flex w-full lg:w-[40%] h-full justify-center items-center">
                        <div className="relative backdrop-blur-sm flex justify-center mx-2 rounded-lg">
                            {/* shapes */}
                            <span className="absolute block h-[200px] w-[200px] rounded-full -top-20 -left-20 z-[-1]" style={{backgroundImage: "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)"}}></span>
                            <span className="absolute block h-[200px] w-[200px] rounded-full -bottom-20 -right-20 z-[-1]" style={{backgroundImage: "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)"}}></span>

                            <div className="h-auto max-w-[384px] min-w-[140px] w-auto p-2 py-6 z-10 rounded-lg backdrop-blur-sm sm:p-6" style={{background: "rgba(0, 0, 0, 0.13)"}}>
                                <h1 className="text-center text-2xl text-primary my-3">Sign Up</h1>
                                <div className="relative py-2 px-4 flex flex-col">
                                    <label className="text-primary" htmlFor="email">Email </label>
                                    <input onChange={(e) => validateEmail(e)} className="w-full p-3 bg-accent/30 outline-none rounded-sm text-primary" type="email" value={inputs.email} id="email" placeholder="Enter your email" />
                                    <span className="text-error text-sm">{errors.email[1]}</span>
                                </div>
                                <div className="relative py-2 px-4">
                                    <label className="text-primary" htmlFor="password">Password </label>
                                    <input onChange={(e) => validatePassword(e)} className="w-full p-3 bg-accent/30 outline-none rounded-sm text-primary" type={isPasswdVisible[0] ? "text":"password"} value={inputs.password} id="password" placeholder="Enter your password" />
                                    <FiEye onClick={() => setIsPasswdVisible([true, isPasswdVisible[1]])} className={`absolute right-7 top-11 text-secondary/70 ${isPasswdVisible[0] ? "hidden":"block" }`} size={23}/>
                                    <FiEyeOff onClick={() => setIsPasswdVisible([false, isPasswdVisible[1]])} className={`absolute right-7 top-11 text-secondary/70 ${isPasswdVisible[0] ? "block":"hidden" }`} size={23}/>
                                    <span className="text-error text-sm">{errors.password[1]}</span>
                                </div>
                                <div className="relative py-2 px-4">
                                    <label className="text-primary" htmlFor="confirm-password">Confirm Password </label>
                                    <input onChange={(e) => validateConfirmPassword(e)} className="w-full p-3 bg-accent/30 outline-none rounded-sm text-primary" type={isPasswdVisible[1] ? "text":"password"} value={inputs.confirmPassword} id="confirm-password" placeholder="Confirm your password" />
                                    <FiEye onClick={() => setIsPasswdVisible([isPasswdVisible[0], true])} className={`absolute right-7 top-11 text-secondary/70 ${isPasswdVisible[1] ? "hidden":"block" }`} size={23}/>
                                    <FiEyeOff onClick={() => setIsPasswdVisible([isPasswdVisible[0], false])} className={`absolute right-7 top-11 text-secondary/70 ${isPasswdVisible[1] ? "block":"hidden" }`} size={23}/>
                                    <span className="text-error text-sm">{errors.confirmPassword[1]}</span>
                                </div>
                                <div className="flex gap-2 px-4 my-8 w-full">
                                    <button className="p-2 bg-secondary w-1/2 text-accent rounded-sm">Sign Up</button>
                                    <span className="text-primary mt-3">OR</span>
                                    <button className="text-primary p-2 border-2 border-secondary w-1/2 rounded-sm">Log In</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;