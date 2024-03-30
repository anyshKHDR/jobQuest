import React from "react";
import { Link } from "react-router-dom";
import ProfileName from "./ProfileName";

const Header = ()=>{
    return(
        <div className="hContainer">

            <div className="b1">
                <div className="title">
                    <h2>jobQuest</h2>
                </div>
            </div>

            <div className="b2">
                <div className="signInUP">
                    <button>Sign In</button>
                    <button>Sign Up</button>
                </div>

                <ProfileName />

                <div className="line"></div>

                <div className="employerSingInUP">
                    <Link to="/recruiter">
                        <p className="p1">
                            Post Jobs
                        </p>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Header;