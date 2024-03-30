import React from "react";
import SignUp from "../components/SignUp";
import RecruiterDocs from "../components/RecruiterDocs";
import { Link } from "react-router-dom";

const RecruiterRegister = ()=>{
    return(
        <div className="rReg">
            <form action="">
                <SignUp />
                <RecruiterDocs />
                <div className="btns">
                    <button type="button" className="cancel">
                        <Link to="/recruiter">Cancel</Link>
                    </button> 
                    <button type="button" className="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default RecruiterRegister;