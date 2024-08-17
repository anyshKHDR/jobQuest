import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoginStatus } from "../../app/features/loginSlice";
import { setUserLoginStatus } from "../../app/features/userSignInSlice";

const AppInitializer = ({children})=>{

    // const dispatch = useDispatch();
    // const currentUser = useSelector((state)=>state.userIdentify.value);
    // console.log(currentUser)
    // const userStatus = useSelector((state) => state.userSignIn.value);

    // useEffect(()=>{

    //     const savedLoginStatus = sessionStorage.getItem("loginStatus");

    //     if( currentUser =="recruiter" && savedLoginStatus){
    //         const loginStatus = JSON.parse(savedLoginStatus);
    //         dispatch(setLoginStatus(loginStatus));
    //     }
    //     if( currentUser == "user" && savedLoginStatus){
    //         const loginStatus = JSON.parse(savedLoginStatus);
    //         dispatch(setUserLoginStatus(loginStatus));
    //     }
    // },[dispatch]);

    return <>{children}</>
}

export default AppInitializer;