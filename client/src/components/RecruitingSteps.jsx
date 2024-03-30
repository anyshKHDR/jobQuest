import React from "react";
import RecruitingStep from "./RecruitingStep.jsx";

const RecruitingSteps= ()=>{
    return(
        <div className="rSteps">
            <div className="b1">
                <RecruitingStep 
                    headline = {"1. Create your free account"}
                    description={"All you need is your email address to create an account and start building your job post."}
                />
                <RecruitingStep 
                    headline = {"2. Build your job post"}
                    description={"Then just add a title, description and location to your job post, and you're ready to go."}
                />
                <RecruitingStep 
                    headline = {"3. Post your job"}
                    description={"After you post your job, use our state-of-the-art tools to help you find dream talent."}
                />
            </div>
        </div>
    )
}

export default RecruitingSteps;