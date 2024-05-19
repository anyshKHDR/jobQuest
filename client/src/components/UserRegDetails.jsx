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
                <form action="">
                    <InputComponent id={"fName"} label={"fullName"} required={1}/>
                    <InputComponent id={"cLoc"} label={"Your location"} required={1}/>
                    <JobCategorySelectory></JobCategorySelectory>
                    <InputComponent id={"jTitle"} label={"Desired Position"} required={1}/>
                    <InputComponent id={"linLink"} label={"LinkedIn Profile"} required={0}/>
                    <InputComponent id={"gHLink"} label={"GitHub Link"} required={0}/>
                    <InputComponent id={"qual"} label={"education"} required={1}/>
                    <InputComponent input={2} id={"skills"} label={"Skills"} rows={"3"} required={1}/>
                    <InputComponent input={2} id={"Wexprnc"} label={"Work Experience"} rows={"3"} required={1}/>
                    <InputComponent type='file' label={"resume"}/>
                    <SubmitAndCancelButtons 
                        distance={"7rem"}
                    />
                </form>
            </div>
        </div>
    </div>
  )
}

export default UserRegDetails;