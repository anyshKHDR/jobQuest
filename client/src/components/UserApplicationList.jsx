import React from "react";
import PostList from "./PostList";

const UserApplicationList = ()=>{

    const post = "web dev";
    const company = "Gooogle";
    const status = "Pending";

    const handleViewList = ()=>{
        console.log("view application")
    }
    
    return(
        <div className="userAppLstCntnr">
            <div className="b1">
                <div className="userAppLst">
                    <div className="titleDiv">
                        <div className="title" onClick={handleViewList}> Job application status</div>
                    </div>
                    <div className="postListDiv">
                        <div className="applciationDetail">
                            <p className="details"> <span className="post">{post}</span> at <span className="company">{company}</span></p>
                        </div> 
                        <div className="statusDiv">
                            <p className="status"> {status} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserApplicationList;