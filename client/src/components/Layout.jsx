import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Header2 from "./Header2";
import Footer from "./Footer";
import { useSelector } from "react-redux";

const Layout = ()=>{

    const userIdentify = useSelector((state)=>state.userIdentify.value);
    // console.log(userIdentify)

    return(
        <div id="pageContainer">
            <div id="contentWrap">
                <div id="tHeader">
                    <Header />
                    {userIdentify == "" || userIdentify == "user"?
                    <Header2 />
                    :""}
                </div>
                    <Outlet />
                <Footer />
            </div>
        </div>
    )
}

export default Layout;