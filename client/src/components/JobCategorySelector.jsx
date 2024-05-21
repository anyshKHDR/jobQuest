import React, { useEffect } from "react";
import JobCatItem from "./JobCatItem";
import { useSelector, useDispatch } from "react-redux";
import { fetchJobCategoryAsync } from "../app/features/fetchJobCategorySlice";

const JobCategorySelectory = ()=>{

    const jobCategories = useSelector((state)=>state.fetchJobCategory.value);
    // console.log(jobCategories);
   
    const categories = jobCategories.map((item)=>Object.keys(item)[2])
    
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchJobCategoryAsync());
    },[dispatch])
    
    
    return(
        <div className="jobCatSelectCntnr">
            <div className="b1">
                {jobCategories.length > 0 ? 
                <div className="jobCatSelect">
                    <fieldset>
                        <legend>Select interested categories</legend>
                        {categories.map((item, index)=>
                        <JobCatItem key={index} value = {item}/>
                        )}
                    </fieldset>
                </div>
                :""}
            </div>
        </div>
    );
};

export default JobCategorySelectory;