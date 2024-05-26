import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecruiterApplicationAsync } from "../app/features/getRecruiterApplicationSlice";
import { useNavigate } from "react-router-dom";

const RecruiterApplicationViewButton = ()=>{


    const getApplications = useSelector((state) => state.getRecruiterApplications.value)
    console.log(getApplications);
    const recruiterLoginStatus = useSelector((state)=> state.login.value);
    console.log(recruiterLoginStatus)

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleClick = ()=>{
    //    console.log("handle click") 
       if(recruiterLoginStatus.exist){
        dispatch(getRecruiterApplicationAsync(recruiterLoginStatus.id))
        navigate(`/recruiter/${recruiterLoginStatus.name}/jobApplications`)
       }
    }
    
    return(
        <div className="ravbc">
            <div className="b1">
                <div className="ravb">
                    <div className="viewButton" onClick={handleClick}>View applications</div>
                </div>
            </div>
        </div>
    )
}

export default RecruiterApplicationViewButton;