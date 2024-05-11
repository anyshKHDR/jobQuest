import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import { setLoginStatus } from "../../app/features/loginSlice";

const AppInitializer = ({children})=>{
    const dispatch = useDispatch();

    useEffect(()=>{
        const savedLoginStatus = sessionStorage.getItem("loginStatus");
        if(savedLoginStatus){
            const loginStatus = JSON.parse(savedLoginStatus);
            dispatch(setLoginStatus(loginStatus));
        }
    },[dispatch]);

    return <>{children}</>
}

export default AppInitializer;