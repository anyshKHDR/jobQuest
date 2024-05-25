import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signInReset } from "../app/features/loginSlice";
import { userSignOut } from "../app/features/userSignInSlice";
import { resetUserFeed } from "../app/features/userFeedSlice";

const SignOut = ()=>{

    const loginData = useSelector((state) => state.login.value);
    const userIdentify = useSelector((state)=>state.userIdentify.value);
    
    const dispatch = useDispatch();

    const handleLogout = ()=>{
        if(userIdentify == "recruiter"){
            dispatch(signInReset());
            console.log(loginData);
        }
        if(userIdentify == "user"){
            dispatch(userSignOut());
            dispatch(resetUserFeed());
        }
    }
    
    return(
        <div className="logoutCntnr">
            <div className="b1">
                <div className="logout">
                    <Link to="/" onClick={handleLogout}>Logout</Link>
                </div>
            </div>
        </div>
    )
}


export default SignOut;