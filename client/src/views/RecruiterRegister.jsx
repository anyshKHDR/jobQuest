import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SignUp from "../components/SignUp";
import RecruiterDocs from "../components/RecruiterDocs";
import { postRecruiterRegisterAsync } from "../app/features/postRecruiterRegisterSlice.js";
import { same, notSame } from "../app/features/confirmPasswordSlice.js";

const RecruiterRegister = ()=>{

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const recruiterRegData = useSelector((state)=>state.recruiterRegData.value);
    const confirmPassword = useSelector((state) => state.confirmPassword.value);

    // console.log(recruiterRegData);
    // console.log("password same ? " + confirmPassword);

    if(recruiterRegData.password == recruiterRegData.confirmPassword){
        dispatch(same());
    }else{
        dispatch(notSame())
    };

    
    const handleSubmit = (event)=>{
        event.preventDefault();
        if(confirmPassword){
            dispatch(postRecruiterRegisterAsync(recruiterRegData));
            navigate("/recruiter/signIn")
        }else{
            alert("Password do not match. Try again")
        }
    }

    return(
        <div className="rReg">
            <form onSubmit={handleSubmit}>
                <SignUp />
                <RecruiterDocs />
                <div className="btns">
                    <button type="button" className="cancel" onClick={()=>navigate("/recruiter")}>Cancel</button> 
                    <button type="submit" className="submit">Create</button>
                </div>
            </form>
        </div>
    )
}

export default RecruiterRegister;