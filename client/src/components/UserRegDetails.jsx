import React from 'react';
import InputComponent from './InputComponent';
import SubmitAndCancelButtons from './SubmitAndCancelButtons';
import JobCategorySelectory from './JobCategorySelector';

const UserRegDetails = () => {

  return (
    <div className="uRegDtlsCntnr">
        <div className="b1">
            <div className="uRegDtls">
                <div className="uRegDtlT">
                    <h4>User Details</h4>
                </div>
                <InputComponent id={"fName"} label={"fullName"} required={1}/>
                <InputComponent id={"currentLocation"} label={"Your location"} required={1}/>
                <JobCategorySelectory />
                {/* <InputComponent id={"jobTitle"} label={"Desired Position"} required={1}/> */}
                <InputComponent id={"linkedIn"} label={"LinkedIn Profile"} required={0}/>
                <InputComponent id={"github"} label={"GitHub Link"} required={0}/>
                <InputComponent id={"qualification"} label={"education"} required={1}/>
                <InputComponent input={2} id={"skills"} label={"Skills"} rows={"3"} required={1}/>
                <InputComponent input={2} id={"workExperience"} label={"Work Experience"} rows={"3"} required={1}/>
                <InputComponent id={"resume"} type='file' label={"resume"}/>
                <SubmitAndCancelButtons 
                    distance={"7rem"}
                />
            </div>
        </div>
    </div>
  )
}

export default UserRegDetails;