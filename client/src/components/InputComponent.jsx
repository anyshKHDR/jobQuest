import React from "react";

const InputComponent = ({id, type="text", label, rows, cols, input=1, required=0})=>{
    return(
        <div className={`${id}Box`}>
            <label htmlFor={id}>{label}</label>
            {input==1?
            <input type={type} name={id} id={id} cols={rows} rows={cols} required={required}/>
            :
            <textarea name={id} id={id} cols={cols} rows={rows} required={required}/>
            }
        </div>
    )
}

export default InputComponent;