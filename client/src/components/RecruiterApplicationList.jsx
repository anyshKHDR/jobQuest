import React from "react";
import { useSelector } from "react-redux";

const RecruiterApplicationList  = ()=>{

    const getApplications = useSelector((state) => state.getRecruiterApplications.value)
    console.log(getApplications);

    if(getApplications.length != 0)
    return(
        <div className="ralCntnr">
            <div className="b1">
                <div className="ral">
                    <div className="pageTtlCntnr">
                        <p className="pageTitle">
                            Job Applications
                        </p>
                    </div>
                    {getApplications.map((item)=>
                    <div className="candidateCntnr">
                        <div className="candidate">
                            <div className="postName">
                                <p>{item.postName}</p>
                            </div>

                            <div className="details">
                                <div className="name">
                                    <p>Name : </p>
                                    <p>{item.userDetails.fName}</p>
                                </div>
                                <div className="phone">
                                    <p>phone :</p>
                                    <p>{item.userDetails.phone}</p>
                                </div>
                                <div className="linkedIn">
                                    <p>linkedIn :</p>
                                    <p>{item.userDetails.linkedIn}</p>
                                </div>
                                <div className="github">
                                    <p>github :</p>
                                    <p>{item.userDetails.github}</p>
                                </div>
                                <div className="currentLocation">
                                    <p>current Location :</p>
                                    <p>{item.userDetails.currentLocation}</p>
                                </div>
                                <div className="qualification">
                                    <p>qualification :</p>
                                    <p>{item.userDetails.qualification}</p>
                                </div>
                                <div className="skills">
                                    <p>skills :</p>
                                    <p>{item.userDetails.skills}</p>
                                </div>
                                <div className="workExper">
                                    <p>work Experience :</p>
                                    <p>{item.userDetails.workExperience}</p>
                                </div>
                            </div>
                            
                            <div className="btns">
                                <div className="reject">Reject</div>
                                <div className="respond">Respond</div>
                            </div>                        

                        </div>

                    </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default RecruiterApplicationList;