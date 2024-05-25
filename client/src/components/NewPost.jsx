import React, { useEffect } from "react"
import SubmitAndCancelButtons from "./SubmitAndCancelButtons";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateNewPostState, newPostAsync, resetNewPostData } from "../app/features/newPostSlice.js";
import { getBusinessDetailAsync } from "../app/features/businessDetailsSlice.js";
import { postListAsync } from "../app/features/postListSlice.js";
import { fetchJobCategoryAsync } from "../app/features/fetchJobCategorySlice.js";

const NewPost = ()=>{

    const dispatch = useDispatch();

    const navigate = useNavigate();

    //*****************************************************************
    const newPostState = useSelector((state)=>state.newPost.value);
    console.log(newPostState);

    const loginData = useSelector((state)=>state.login.value);
    console.log(loginData);

    const businessDetail = useSelector((state)=>state.businessDetail.value);
    // console.log(businessDetail);
    const address = businessDetail.address;
    console.log(address)

    const jobCategories = useSelector((state)=> state.fetchJobCategory.value);

    const categories = jobCategories.map((item)=>Object.keys(item)[2])
    // console.log(categories);
    //*****************************************************************
    
    const cancelLink = `/recruiter/dashboard/${loginData.businessName}`

    useEffect(()=>{
        if(loginData.id)
        // console.log(loginData.id)
        dispatch(getBusinessDetailAsync(loginData.id))
    },[loginData,dispatch])

    useEffect(()=>{
        dispatch(fetchJobCategoryAsync());
    },[dispatch])
    
    const handleChange = (event)=>{
        const {name, value} = event.target;
        console.log(name, value)
        dispatch(updateNewPostState({name, value}));
    }

    // const  selecteChange = (event)=>{
    //     const data = event.target.value;
    //     console.log(data)

    // }

    const handleSubmit = (event)=>{
        event.preventDefault();
        dispatch(newPostAsync(newPostState));
        dispatch(resetNewPostData());
        dispatch(postListAsync())
        navigate(`/recruiter/dashboard/${loginData.businessName}`);
    };

    useEffect(()=>{
        dispatch(postListAsync())
    },[dispatch,handleSubmit])

    const theDate = ()=>{
        const date = new Date();
        const today = date.getDate() +"-" + (date.getMonth()+1) +"-" + date.getFullYear();
        // console.log(today);
        const splitDate = today.split("-");
        const day = splitDate[0].padStart(2, "0");
        const month = splitDate[1].padStart(2, "0");
        const year = splitDate[2]
        return `${day}-${month}-${year}`
    }
    
    useEffect(()=>{
            dispatch(updateNewPostState({name:"businessId", value:loginData.id}))
            dispatch(updateNewPostState({name:"businessName", value:loginData.businessName}))
            dispatch(updateNewPostState({name:"postDate", value:theDate()}))
            if(address != undefined){
                dispatch(updateNewPostState({name:"businessAddress", value:address}))
            }
    },[dispatch,address]) //"newPostState" changed to "dispatch"

    useEffect(()=>{
        if(categories != undefined ){
            dispatch(updateNewPostState({name:"jobCategory", value:categories[0]}))
        }
    },[])


    return(
        <div className="newPostCntnr">
            <div className="b1">
                <div className="newPost">
                    <div className="headline">
                        <h3>Job details</h3>
                    </div>

                    <form action="" onSubmit={handleSubmit}>
                        <div className="jTitle">
                            <label htmlFor="jobTitle" className="jtl">Job title</label>
                            <input type="text" name="jobTitle" id="jobTitle" onChange={handleChange} required/>
                        </div>

                        <div className="jCat">
                            <label htmlFor="jobCategory" className="jobCat">Job Category</label>
                            <select type="text" name="jobCategory" id="jobCategory" onChange={handleChange} required>
                                {categories.map((item, index)=>
                                <option key={index} value={item}>{item}</option>
                                )}
                            </select>
                        </div>

                        <div className="jDscrptn">
                            <label htmlFor="description">Job description</label>
                            <textarea name="description" id="description" cols="35" rows="4" onChange={handleChange} required/>
                        </div>
                        <div className="rQual">
                            <label htmlFor="qualification">Required Qualification</label>
                            <input type="text" name="qualification" id="qualification" onChange={handleChange} required/>
                        </div>
                        <div className="rSkills">
                            <label htmlFor="skills">Skills required</label>
                            <textarea type="text" name="skills" id="skills" cols="35" rows="2" onChange={handleChange} required/>
                        </div>
                        <div className="xprn">
                            <label htmlFor="experience">Experience description</label>
                            <textarea type="text" name="experience" id="experience" cols="35" rows="3" onChange={handleChange} required/>
                        </div>
                        <div className="loc">
                            <label htmlFor="location">Job location</label>
                            <input typ="text" name="location" id="location" onChange={handleChange} required/>
                        </div>
                        <div className="slry">
                            <label htmlFor="salary">Salary range</label>
                            <input type="text" name="salary" id="salary" onChange={handleChange} required/>
                        </div>
                        <div className="cType">
                            <label htmlFor="contractType">Contract type</label>
                            <select name="contractType" id="contractType" onChange={handleChange} required>
                                <option value="">--Select a type--</option>
                                <option value="full-time">full-time</option>
                                <option value="part-time">part-time</option>
                                <option value="contract">contract</option>
                                <option value="internship">internship</option>
                            </select>
                        </div>
                        <div className="expire">
                            <label htmlFor="deadline">Deadline to apply for the post</label>
                            <input type="date" name="deadline" id="deadline" onChange={handleChange} required/>
                        </div>
                        <div className="contact">
                            <label htmlFor="phone" >Phone</label>
                            <input type="text" name="phone" id="phone" placeholder="optional" onChange={handleChange} required/>
                        </div>
                        <div className="mail">
                            <label htmlFor="email" >Email</label>
                            <input type="text" name="email" id="email" placeholder="optional" onChange={handleChange} required/>
                        </div>
                        {/* <div className="id">
                            <input type="hidden" id="recruiterId" name="recruiterId" value={newPostState.id} />
                        </div>
                        <div className="pDate">
                            <input type="hidden" name="postDate" id="postDate" value={today} />
                        </div>
                        <div className="cmpny">
                            <input type="hidden" name="company" id="company" value={loginData.businessName} />
                        </div> */}
                        <SubmitAndCancelButtons 
                            top={"2rem"}
                            bottom={"0rem"}
                            distance={"10rem"}
                            cancelRoute={cancelLink}
                            submitRoute={cancelLink}
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewPost;