import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Header2 from "./Header2";
import Footer from "./Footer";
import { useSelector } from "react-redux";

const Layout = ()=>{

    const onRecruiter = useSelector((state)=>state.onRecruiter.value);
    
    return(
        <div id="pageContainer">
            <div id="contentWrap">
                <div id="tHeader">
                    <Header />
                    {!onRecruiter?
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