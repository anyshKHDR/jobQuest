import React from "react"
import SubmitAndCancelButtons from "./SubmitAndCancelButtons";

const NewPost = ()=>{
    return(
        <div className="newPostCntnr">
            <div className="b1">
                <div className="newPost">
                    <div className="headline">
                        <h3>Job details</h3>
                    </div>

                    <form action="" onSubmit={console.log("sup")}>
                        <div className="jTitle">
                            <label htmlFor="jobTitle" className="jtl">Job title</label>
                            <input type="text" name="jobTitle" id="jobTitle" />
                        </div>
                        <div className="jDscrptn">
                            <label htmlFor="description">Job description</label>
                            <textarea name="description" id="description" cols="35" rows="4"></textarea>
                        </div>
                        <div className="rQual">
                            <label htmlFor="reqQual">Required Qualification</label>
                            <input type="text" name="reqQual" id="reqQual" />
                        </div>
                        <div className="rSkills">
                            <label htmlFor="skills">Skills required</label>
                            <textarea type="text" name="skills" id="skills" cols="35" rows="2"/>
                        </div>
                        <div className="xprn">
                            <label htmlFor="rExprnc">Experience description</label>
                            <textarea type="text" name="rExprnc" id="rExprnc" cols="35" rows="3"/>
                        </div>
                        <div classname="loc">
                            <label htmlfor="location">Job location</label>
                            <input typ="text" name="rexprnc" id="rexprnc" />
                        </div>
                        <div className="slry">
                            <label htmlFor="salary">Salary range</label>
                            <input type="text" name="salary" id="salary" />
                        </div>
                        <div className="cType">
                            <label htmlFor="cntrctType">Contract type</label>
                            <select name="cntrctType" id="cntrctType">
                                <option value="">--Select a type--</option>
                                <option value="full-time">full-time</option>
                                <option value="part-time">part-time</option>
                                <option value="contract">contract</option>
                                <option value="internship">internship</option>
                            </select>
                        </div>
                        <div className="expire">
                            <label htmlFor="deadline">Deadline to apply for the post</label>
                            <input type="date" name="deadline" id="deadline" />
                        </div>
                        <div className="contact">
                            <label htmlFor="phone" >Phone</label>
                            <input type="text" name="phone" id="phone" placeholder="optional"/>
                        </div>
                        <div className="mail">
                            <label htmlFor="email" >Email</label>
                            <input type="text" name="email" id="email" placeholder="optional"/>
                        </div>
                        <SubmitAndCancelButtons 
                            top={"2rem"}
                            bottom={"0rem"}
                            distance={"10rem"}
                            cancelRoute={"/recruiterHome"}
                        />
                    </form>

                </div>
            </div>
        </div>
    )
}

export default NewPost;