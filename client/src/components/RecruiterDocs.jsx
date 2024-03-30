import React from "react";

const RecruiterDocs = ()=>{
    return(
        <div className="docsCntnr">
            <div className="b1">
                <div className="docs">
                    <div className="title">
                        <h4 className="title2">Documents</h4>
                    </div>
                    <div className="businessName">
                        <input type="text" placeholder="Business Name" />
                    </div>
                    <div className="industry">
                        <input type="text" placeholder="Industry" />
                    </div>
                    <div className="address">
                        <input type="text" placeholder="Address" />
                    </div>
                    <div className="website">
                        <input type="text" placeholder="Website" />
                    </div>
                    <div className="businessLogo">
                        <input type="file" name="logo" id="logo" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecruiterDocs;