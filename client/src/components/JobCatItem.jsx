import React from "react";
import { useDispatch } from "react-redux";
import { setUserRegisterData } from "../app/features/userRegisterSlice";

const JobCatItem = (props)=>{

    const dispatch = useDispatch();

    const handleChange = (event)=>{
        // console.log(event);
        const {name, value, checked} = event.target;
        console.log(name, value, checked);
        dispatch(setUserRegisterData({name, value, checked}))
    }
    
    return(

        <div className="cat">
            <input type="checkbox" className="" name="jobCategory" id="item" value={props.value} onChange={handleChange} />
            <label htmlFor="item1">{props.value}</label>
        </div>
    )
}

export default JobCatItem;