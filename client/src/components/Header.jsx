import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ProfileName from "./ProfileName";
import { useDispatch, useSelector } from "react-redux";
import { notOnRercruiterPage, onRecruiterPage } from "../app/features/onRecruiterSlice.js";
import SignOut from "./SignOut.jsx";

const Header = ()=>{

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginStatus = useSelector((state)=>state.login.value.exist)
    // console.log(loginStatus)

    const loginData = useSelector((state)=>state.login.value)
    // console.log(loginData)
    
    const onRecruiter = useSelector((state)=>state.onRecruiter.value);
    
    const handleSignUP = ()=>{
        navigate("/user/register");
    };

    const handleSignIn = ()=>{
        console.log("handle click to sign in")
    }
    
    return(
        <div className="hContainer">

            <div className="b1">
                <div className="title">
                    {loginStatus ? 
                    <Link to={`/recruiter/dashboard/${loginData.businessName}`}>
                        <h2>jobQuest</h2>
                    </Link>
                    :
                    <Link to={"/"}>
                        <h2>jobQuest</h2>
                    </Link>
                    }
                </div>
            </div>

            <div className="b2">
                {!loginStatus && 
                    <div className="signInUP">
                        <button onClick={handleSignIn}>Sign In</button>
                        <button onClick={handleSignUP}>Sign Up</button>
                    </div>
                }

                {loginStatus ?
                <>
                    <ProfileName />
                    <SignOut />
                </>
                :""} 

                {!loginStatus && 
                    <>
                        <div className="line"></div>

                        <div className="employerSingInUP">
                            <Link to="/recruiter" onClick={()=>dispatch(onRecruiterPage(1))}>
                                <p className="p1">
                                    Post Jobs
                                </p>
                            </Link>
                        </div>
                    </>
                }
            </div>

        </div>
    )
}

export default Header;