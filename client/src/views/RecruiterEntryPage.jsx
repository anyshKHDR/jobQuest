import React from "react";
import RecruitingSteps from "../components/RecruitingSteps";
import Quote from "../components/Quote";
import RecruiterRegisterSignin from "../components/RecruiterRegisterSignin";
import SignIn from "../components/SignIn";

const RecruiterEntryPage =()=>{
    return(
        <div className="recruiterEntryPage">
            <Quote 
                quote1={"Unlock the potential of your team with our lightning-fast hiring process."}
                quote2={"Welcome your next great candidate today!"}
            />
            <RecruitingSteps />
            <RecruiterRegisterSignin />
        </div>
    )
}

export default RecruiterEntryPage;