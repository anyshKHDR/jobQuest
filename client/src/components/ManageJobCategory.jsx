import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeJob, setCategory, setJobs, setTemp, jobCategoryAsync } from "../app/features/jobCategorySlice";
import SubmitAndCancelButtons from "./SubmitAndCancelButtons";

const ManageJobCategory = ()=>{

    const jobCategory = useSelector((state)=>state.jobCategory.value);
    // console.log(jobCategory);
    // console.log(jobCategory.jobsLength);

    const dispatch = useDispatch();
    
    const handleCategory = (event)=>{
        // console.log(event.target.value)
        const category = event.target.value;
        dispatch(setCategory(category))
    };
    
    const handleTemp = (event) =>{
        const jobs = event.target.value;
        console.log(jobs)
        dispatch(setTemp(jobs))
        // console.log(titles);
    };
    
    const handleJob = ()=>{
        if(jobCategory.temp != ""){
        dispatch(setJobs())
        }
    };

    const deleteItem = (index)=>{
        dispatch(removeJob(index))
    };
    
    const handleSubmit = (event)=>{
        event.preventDefault();
        if(jobCategory.jobsLength != ""){
            // console.log("submit")
            dispatch(jobCategoryAsync(jobCategory))
        }else{
            console.log("empty array")
        }
    };
    
    return(
        <div className="MJCContnr">
            <div className="b1">
                <div className="MJC">

                    <div className="title">
                        <h1>Mange Job Category</h1>
                    </div>

                    <form action="" onSubmit={handleSubmit}>
                        <div className="formDiv">
                            <div className="jobCat">
                                <input type="text" placeholder="Category" onChange={handleCategory} value={jobCategory.category}required />
                            </div>

                            {jobCategory.jobsLength != 0?
                            <div className="jobTitleDynamicDiv">
                                {jobCategory.jobs.map((item, index)=>

                                <div key={index} className="dynamicDiv">
                                    <div className="dynamicBox">
                                        <p className="dynamic"> {item} </p>
                                    </div>

                                    <div className="delItem" onClick={()=>deleteItem(index)}>
                                        <p className="delSymbol">X</p>
                                    </div>
                                </div>

                                )}
                            </div>
                            :""}

                            <div className="jobTitle">
                                <input type="text" placeholder="Job Title" value={jobCategory.temp} onChange={handleTemp} />
                            </div>
                        </div>

                        <div className="addBox" >
                            <div className="addJob" onClick={handleJob}>
                                <p>+</p>
                            </div>
                        </div>

                        <SubmitAndCancelButtons
                            top={"2rem"}
                            distance={"10rem"}
                            cancelRoute={"/admin/prime/schrodinger/"}
                        />
                    </form>

                </div>
            </div>
        </div>
    )
}

export default ManageJobCategory;