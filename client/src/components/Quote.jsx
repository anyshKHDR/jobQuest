import React from "react";

const Quote = ({quote1,quote2})=>{
    return(
        <div className="quoteContainer">
            <div className="b1">
                <h3 className="quote">{quote1}</h3>
                <h3 className="quote">{quote2}</h3>
            </div>
        </div>
    )
}

export default Quote;