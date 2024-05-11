import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { loginAsync, handleSignInData, signInReset, setLoginStatus } from '../app/features/loginSlice.js';
import { useEffect } from "react";

const SignIn = ()=>{

    const loginData = useSelector((state)=>state.login.value)
    // console.log(loginData.exist)
    console.log(loginData)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (event)=>{
        const {name, value } = event.target;
        dispatch( handleSignInData({name, value}));
    };
    
    const handleSubmit = (event)=>{
        event.preventDefault();
        dispatch(loginAsync(loginData));
    };

    useEffect(()=>{
        if(loginData.exist){
            navigate(`/recruiter/dashboard/${loginData.businessName}`)
        }

        //optional retun function - CLEAN UP FUNCTION
        // return ()=>{
        //     dispatch(signInReset());
        // }
    },[loginData.exist])

    // useEffect(()=>{
    //     const savedLoginStatus = sessionStorage.getItem("loginStatus");
    //     if(savedLoginStatus){
    //         const loginStatus = JSON.parse(savedLoginStatus)
    //         console.log(loginStatus);
    //         dispatch( setLoginStatus(loginStatus));
    //     }
    // },[dispatch])

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