import React from "react";
import { useSelector } from "react-redux";

const Header2 = ()=>{

    const recruiterSignInStatus = useSelector((state)=> state.login.value.exist);
    
    return(
        <>
        {!recruiterSignInStatus  &&
            <div className="searchContainer">
                <div className="b1">
                    <p className="p1">Jobs for you to explore</p>
                </div>
                <div className="b2">
                    <div className="searchbox">
                        <div className="title">
                            <input type="text" className="job" placeholder="Search by job, company or skill" />
                        </div>
                        <div className="location">
                            <input type="text" className="jLocation" placeholder="Location" />
                        </div>
                        <div className="experience">
                            <input type="text" className="jExperience" placeholder="Experience" />
                        </div>
                    </div>
                </div>
            </div>
        }
        </>
    )
}

export default Header2;