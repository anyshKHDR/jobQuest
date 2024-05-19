import React from "react";
import JobCatItem from "./JobCatItem";

const JobCategorySelectory = ()=>{

    const handleChange = ()=>{
        console.log("handle selected item")
    }

    const food = ['Chocolate', 'Strawberry', 'Vanilla', "aaaaaaaaaaaa", "bbb", "dd", "bbb", "bbb", "bbb", "bbb", "bbb", "bbb", "bbb", "bbb"];
    
    return(
        <div className="jobCatSelectCntnr">
            <div className="b1">
                <div className="jobCatSelect">
                    <fieldset>
                        <legend>Select desired titles</legend>
                        {food.map((item)=>
                        <JobCatItem 
                            value = {item}
                        />
                        )}
                    </fieldset>
                </div>
            </div>
        </div>
    );
};

export default JobCategorySelectory;