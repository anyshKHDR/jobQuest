import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateRecruiterRegData } from "../app/features/postRecruiterRegisterSlice.js";
import { setUserRegisterData } from "../app/features/userRegisterSlice.js";

const SignUp = ()=>{

    const userIdentify = useSelector((state)=>state.userIdentify.value);
    // console.log(userIdentify);
    const userRegData = useSelector((state)=>state.userRegister.value)
    // console.log(userRegData)
    
    const dispatch = useDispatch();

    const handleChange = (event)=>{
        const { name, value } = event.target
        if(userIdentify == "recruiter"){
            // console.log("handling recruiter")
            dispatch(updateRecruiterRegData({name, value}))
        }
        if(userIdentify == "user"){
            // console.log("handling user")
            dispatch(setUserRegisterData({name, value}))
        }
    }

    return(
        <div className="signUp">
            <div className="b1">
                <div className="title">
                    <h3>Create Account</h3>
                </div>
                <div className="auth">
                    <div className="authMail">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" required onChange={handleChange}/>
                    </div>
                    <div className="Phone">
                        <label htmlFor="phone">Phone</label>
                        <input type="number" name="phone" id="phone" minLength="10" required onChange={handleChange}/>
                    </div>
                    <div className="pass">
                        <label htmlFor="pass">Password</label>
                        <input type="password" name="password" id="pass" minLength="8" required onChange={handleChange}/>
                    </div>
                    <div className="passCnfrm">
                        <label htmlFor="passCnfrm">Confirm password</label>
                        <input type="password" name="confirmPassword" id="passCnfrm" minLength="8" required onChange={handleChange}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;