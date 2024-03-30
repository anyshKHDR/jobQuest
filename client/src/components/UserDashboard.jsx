import React from 'react';
import SubmitAndCancelButtons from './SubmitAndCancelButtons';

const UserDashboard = () => {
  return (
    <div className="usrDashbrdCntnr">
        <div className="b1">
            <div className="userDashbrd">
                <div className="usrNm">
                    <p>Name</p>
                    <p className='uName' contentEditable>name</p>
                </div>
                <div className="userLoc">
                    <p>Location</p>
                    <p contentEditable>location</p>
                </div>
                <div className="linkedIn">
                    <p>Location</p>
                    <p contentEditable>LinkedIn</p>
                </div>
                <div className="gitHub">
                    <p>LinkedIn Link</p>
                    <p contentEditable>GitHub</p>
                </div>
                <div className="qual">
                    <p>GitHub Link</p>
                    <p contentEditable>Education</p>
                </div>
                <div className="skills">
                    <p>Skills</p>
                    <p contentEditable>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa mollitia dolores sit veritatis quos autem nobis voluptate et vitae.</p>
                </div>
                <div className="wExprnc">
                    <p>Work Experience</p>
                    <p contentEditable>Work Experience</p>
                </div>

                <div className="resumeEdit">
                    <p>Upload Resume</p>
                    <p>
                        <input type="file" name="resume" id="resume" />
                    </p>
                </div>
                <SubmitAndCancelButtons 
                    distance={"9.5rem"}
                    top={".5rem"}
                />
            </div>
        </div>
    </div>
  )
}

export default UserDashboard;