import React from "react";
import { Link } from "react-router-dom";

const SignIn = ()=>{
    return(
        <div className="signInContainer">
            <div className="contentBox">
                <div className="itemBox">
                    <form action="">
                        <div className="headline">
                            <h3 className="title">Sign In</h3>
                        </div>
                        <div className="authMail">
                            <label htmlFor="mailId">Email</label>
                            <input type="email" name="mailID" id="mailID" />                  
                        </div>
                        <div className="authPass">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" />
                        </div>
                        <div className="btns">
                            <Link to="/recruiter">
                                <button type="button" className="cancel">Cancel</button> 
                            </Link>
                            <button type="button" className="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignIn;