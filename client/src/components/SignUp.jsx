import React from "react";

const SignUp = ()=>{
    return(
        <div className="signUp">
            <div className="b1">
                <div className="title">
                    <h3>Create Account</h3>
                </div>
                <div className="auth">
                    <div className="authMail">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" />
                    </div>
                    <div className="Phone">
                        <label htmlFor="phone">Phone</label>
                        <input type="number" name="phone" id="phone" min="10" max="10" />
                    </div>
                    <div className="pass">
                        <label htmlFor="pass">Password</label>
                        <input type="password" name="pass" id="pass" minLength="8" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;