import React from "react";

const JobCatItem = (props)=>{
    return(

        <div className="cat">
            <input type="checkbox" className="" name="item" id="item" />
            <label htmlFor="item1">{props.value}</label>
        </div>
    )
}

export default JobCatItem;