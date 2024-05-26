import React from "react";
import { resetConfirmApply } from "../app/features/confirmJobApplySlice";
import { useDispatch, useSelector } from "react-redux";
import { jobApplyAsync } from "../app/features/jobApplySlice";
import getDate from "../utils/getDate";

const ConfirmApply = ()=>{

    const selectedPost = useSelector((state) => state.selectedPost.value);
    const businessId = selectedPost.businessId;
    const postId = selectedPost._id;
    const userSignIn = useSelector((state)=> state.userSignIn.value);
    const userId = userSignIn.id

    const date = getDate();

    const dispatch = useDispatch();

    const handleCancel = ()=>{
        dispatch(resetConfirmApply());
    }

    const handleConfirm = ()=>{
        dispatch(jobApplyAsync({userId:userId, postId:postId, date:date, businessId:businessId}))
        dispatch(resetConfirmApply());
    }
    
   return(
    <div className="cnfrmACntnr" style={{marginBottom:"0"}}>
        <div className="b1">
            <div className="confrmApply">
                <div className="cnfrmMessage">Apply for this job</div>
                <div className="confirm" onClick={handleConfirm }>Confirm</div>
                <div className="cancel" onClick={handleCancel}>Cancel</div>
            </div>
        </div>
    </div>
   ) 
}

export default ConfirmApply;