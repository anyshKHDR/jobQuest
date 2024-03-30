import React from "react";

const RecruitingStep = ({headline, description})=>{
    return(
        <div className="steps">
            <h3 className="heading">{headline}</h3>
            <p className="p1">{description}</p>
        </div>
    )
}

export default RecruitingStep;