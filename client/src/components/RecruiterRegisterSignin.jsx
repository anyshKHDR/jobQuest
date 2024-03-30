import React from "react";
import { Link } from "react-router-dom";

const RecruiterRegisterSignin = ()=>{
    return(
        <div className="rRegAndSigninCntnr">
            <div className="b1">
                <div className="reg">
                    <Link to="/recruiterReg">
                        <button type="button">Create Account</button>
                    </Link>
                </div>
                <div className="signin">
                    <Link to="/recruiterSignIn">
                        <button type="button">Sign In</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default RecruiterRegisterSignin;