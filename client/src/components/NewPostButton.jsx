import React from "react";
import { Link } from "react-router-dom";

const NewPostButton = ()=>{
    return(
        <div className="newPostBtnCntnr">
            <div className="b1">
                <Link to="/newPost">
                    <div className="newPostBtn">
                        <p className="h5">Post a job</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default NewPostButton;