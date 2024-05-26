import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const UserApplicationViewListButton = ()=>{

    const userLoginStatus = useSelector((state)=>state.userSignIn.value);

    const navigate = useNavigate();
    
    const handleViewList = ()=>{
        // if(userLoginStatus.exist){
        //    navigate(`/user/${userLoginStatus.name}/viewApplications`) 
           navigate(`/user/viewApplications`) 
        // }
    }
    
    return(
        <div className="userAppLstBtnCntnr">
            <div className="b1">
                <div className="userAppLstBtn">
                    <div className="viewListBtn" onClick={handleViewList}>Your applications</div>
                </div>
            </div>
        </div>
    )
}

export default UserApplicationViewListButton;