import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ConfirmApply from "./ConfirmApply";
import { setConfirmApply } from "../app/features/confirmJobApplySlice";

const PostDetails = () => {

  const signInData = useSelector((state) => state.login.value);
  const selectedPost = useSelector((state) => state.selectedPost.value);
  const userIdentify = useSelector((state)=> state.userIdentify.value);
  const userSignIn = useSelector((state)=> state.userSignIn.value);
  const confirmApply = useSelector((state)=>state.confirmJobApply.value);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDate = (date)=>{
    const sliceDate = date.slice(0, 10)
    const splitDate = sliceDate.split("-");
    return splitDate[2] +"-"+ splitDate[1]+"-"+splitDate[0]
  }

  const handleApply = (event)=>{
    event.preventDefault();
    if(!userSignIn.exist){
      navigate("/user/signIn")
    }else{
      // console.log(selectedPost._id)
      dispatch(setConfirmApply());
    }
  }
  
  if(selectedPost._id){
  return (
    <div className="postDetailsCntnr">
      <div className="b1">
        <div className="postDetails">
          <div className="aboutBusiness">
            <div className="jTitle">
              <h4 className="title">{selectedPost.jobTitle}</h4>
            </div>
            <div className="businessName">
              <p>at {selectedPost.businessName}</p>
            </div>
            <div className="businessLoc">
              <p>{selectedPost.businessAddress}</p>
            </div>
          </div>

          <div className="line1"></div>

          {/* Apply and save button */}
          {!signInData.exist && (
            <>
              <div className="applyAndSave">
                { !confirmApply ?
                <button onClick={handleApply}>Apply now</button>
                // <div className="savePost">save</div>
                :
                <ConfirmApply />
                }
              </div>

              <div className="line1"></div>
            </>
          )}

          {/* Job details */}
          <div className="jobDtls">
            <div className="salary">
              <p className="st">Salary</p>
              <p className="sd">{selectedPost.salary}</p>
            </div>
            <div className="skillsReq">
              <p className="sklt">Skill</p>
              <p className="skld">{selectedPost.skills}</p>
            </div>
            <div className="qualification">
              <p className="qualt">qualification</p>
              <p className="quald">{selectedPost.qualification}</p>
            </div>
            <div className="jDscrp">
              <p className="jdt">Job description</p>
              <p className="jdd">{selectedPost.description} </p>
            </div>
            <div className="contratType">
              <p className="ctt">Contract type</p>
              <p className="ctd">{selectedPost.contractType} </p>
            </div>
            <div className="jobLoc">
              <p className="jlt">Job location</p>
              <p className="jld">{selectedPost.location} </p>
            </div>
            <div className="postOn">
              <p className="pot">Posted On</p>
              <p className="pod">{selectedPost.postDate} </p>
            </div>
            <div className="exp">
              <p className="dlt">Last date to apply</p>
              <p className="dld">{selectedPost.deadline && handleDate(selectedPost.deadline)} </p>
            </div>
          </div>

          <div className="line1"></div>

          {/* Contact */}
          <div className="contact">
            <div className="phone">
              <p className="pht">Phone</p>
              <p className="phd">{selectedPost.phone}</p>
            </div>
            <div className="mail">
              <p className="et">Email</p>
              <p className="ed">{selectedPost.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  }
};

export default PostDetails;
