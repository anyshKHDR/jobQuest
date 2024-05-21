import React from "react";
import { useDispatch } from "react-redux";
import { updateRecruiterRegData, handleLogo} from "../app/features/postRecruiterRegisterSlice.js";
import fileToBase64 from "../utils/fileToBase64.js";

const RecruiterDocs = ()=>{

    const dispatch = useDispatch();
    
    const handleChange = (event)=>{
        const { name, value } = event.target;
        dispatch(updateRecruiterRegData({name, value}));
    };

    const handleImage = async (event)=>{
        const image = event.target.files[0];
        try{
            const imgString = await fileToBase64(image)
            dispatch(handleLogo(imgString))
        }catch(error){
            console.log(error);
        }
    };

    return(
        <div className="docsCntnr">
            <div className="b1">
                <div className="docs">
                    <div className="title">
                        <h4 className="title2">Details</h4>
                    </div>
                    <div className="businessName">
                        <input type="text" name="businessName" placeholder="Business Name" required onChange={handleChange}/>
                    </div>
                    <div className="industry">
                        <input type="text" name="industry" placeholder="Industry" required onChange={handleChange}/>
                    </div>
                    <div className="address">
                        <textarea type="text" name="address" placeholder="Address" rows="3" required onChange={handleChange}/>
                    </div>
                    <div className="website">
                        <input type="text" name="website" placeholder="Website" required onChange={handleChange}/>
                    </div>
                    <div className="businessLogo">
                        <label htmlFor="logo">Company Logo</label>
                        <input type="file" name="logo" id="logo" accept=".jpg, .jpeg, .png" onChange={handleImage}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecruiterDocs;