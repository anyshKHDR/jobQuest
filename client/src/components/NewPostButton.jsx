import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NewPostButton = ()=>{

    const signInData = useSelector((state)=>state.login.value);
    // console.log(signInData);
    const newPostLink = `/recruiter/dashboard/${signInData.businessName}/newpost`;
    
    return(
        <div className="newPostBtnCntnr">
            <div className="b1">
                <Link to={newPostLink}>
                    <div className="newPostBtn">
                        <p className="h5">Post a job</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default NewPostButton;