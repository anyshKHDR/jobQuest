import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signInReset } from "../app/features/loginSlice";
import { notOnRercruiterPage } from "../app/features/onRecruiterSlice";


const SignOut = ()=>{

    const loginData = useSelector((state) => state.login.value);
    
    const dispatch = useDispatch();

    const handleLogout = ()=>{
        dispatch(notOnRercruiterPage());
        dispatch(signInReset());
        console.log(loginData);
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