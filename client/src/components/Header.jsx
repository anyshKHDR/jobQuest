import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProfileName from "./ProfileName";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../app/features/userIdentifySlice.js";
import SignOut from "./SignOut.jsx";

const Header = ()=>{

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginStatus = useSelector((state)=>state.login.value.exist)
    // console.log(loginStatus)

    const loginData = useSelector((state)=>state.login.value)
    // console.log(loginData)
    
    //TO SHOW/HIDE HEADER2 DEPENDS ON THE USERIDENTIFY VALUE
    const userIdentify = useSelector((state)=>state.userIdentify.value);
    // console.log(userIdentify);

    const currentURL = window.location.href;
    
    const getCurrentUser = (url)=>{
        const splitURL = url.split("/");
        const currentUser = splitURL[3];
        // console.log(currentUser);
        return currentUser;
    }

    useEffect(()=>{
        dispatch(setCurrentUser(getCurrentUser(currentURL)))
    },[currentURL])
    
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
                            <Link to="/recruiter">
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