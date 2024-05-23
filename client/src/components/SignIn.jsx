import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { loginAsync, handleSignInData, signInReset, setLoginStatus } from '../app/features/loginSlice.js';
import { setUserSignInData, userSignInAsync } from "../app/features/userSignInSlice.js";
import { useEffect } from "react";

const SignIn = ()=>{

    const recruiteSignInData = useSelector((state)=>state.login.value);
    // console.log(recruiteSignInData);

    const userSignInData = useSelector((state)=> state.userSignIn.value);
    // console.log(userSignInData);

    const currentUser = useSelector((state)=>state.userIdentify.value);
    // console.log(currentUser);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (event)=>{
        const {name, value } = event.target;
        if(currentUser == "recruiter"){
            dispatch( handleSignInData({name, value}));
        }
        if(currentUser == "user"){
            dispatch(setUserSignInData({name, value}));
        };
    };
    
    const handleSubmit = (event)=>{
        event.preventDefault();
        if(currentUser == "recruiter"){
            dispatch(loginAsync(recruiteSignInData));
        }
        if(currentUser == "user"){
            dispatch(userSignInAsync(userSignInData));
        }
    };

    useEffect(()=>{
        if(recruiteSignInData.exist){
            navigate(`/recruiter/dashboard/${recruiteSignInData.businessName}`)
        }
        if(userSignInData.exist){
            navigate(`/user/${userSignInData.name}/home`)
        }
    },[recruiteSignInData.exist, userSignInData.exist])

    return(
        <div className="signInContainer">
            <div className="contentBox">
                <div className="itemBox">
                    <form action="" onSubmit={handleSubmit}>
                        <div className="headline">
                            <h3 className="title">Sign In</h3>
                        </div>
                        <div className="authMail">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" onChange={handleChange}/>                  
                        </div>
                        <div className="authPass">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" onChange={handleChange} />
                        </div>
                        <div className="btns">
                            <Link to="/recruiter">
                                <button type="button" className="cancel">Cancel</button> 
                            </Link>
                            <button type="submit" className="submit">Sign In</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignIn;