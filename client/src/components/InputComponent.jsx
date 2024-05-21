import React from "react";
import { useDispatch } from "react-redux";
import { setUserRegisterData } from "../app/features/userRegisterSlice";
import fileToBase64 from "../utils/fileToBase64";

const InputComponent = ({id, type="text", label, rows, cols, input=1, required=0})=>{

    const dispatch = useDispatch();
    
    const handleChange = (event)=>{
        // console.log(event.target.value);
        const { name, value } = event.target;
        dispatch(setUserRegisterData({name,value}));
    }

    const handleImage = async (event) =>{
        const name = event.target.name;
        const file = event.target.files[0]
        try{
            const value = await fileToBase64(file);
            dispatch(setUserRegisterData({name, value}));
        }catch(error){
            console.log(error);
        }
    }
    
    return(
        <div className={`${id}Box`}>
            <label htmlFor={id}>{label}</label>
            {input==1?
            <input type={type} name={id} id={id} required={required} onChange={ id != "resume" ? handleChange : handleImage}/>
            :
            <textarea name={id} id={id} cols={cols} rows={rows} required={required} onChange={handleChange}/>
            }
        </div>
    )
}

export default InputComponent;