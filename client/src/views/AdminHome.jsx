import React from "react";
import ManageJobCategory from "../components/ManageJobCategory";
import { useNavigate } from "react-router-dom";

const AdminHome = ()=>{
    
    const navigate = useNavigate();
    
    const handleClick = ()=>{
        navigate("/admin/prime/schrodinger/manageJobCategory")
    }
    
    return(
        
        <div className="adminHomeCntnr">
            <div className="b1">
                <div className="adminHome">
                    <div className="manageCntnr">

                        <div className="manageJobCatCntnr">
                            <button onClick={handleClick}>Manage Job Category</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminHome;