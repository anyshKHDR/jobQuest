import React from 'react';
import { useSelector } from 'react-redux';

const ProfileName = () => {

  const recruiterSignInStatus = useSelector((state)=>state.login.value);
  const userSignInStatus = useSelector((state)=>state.userSignIn.value);
  
  return (
    <div className="usrPCntnr">
        <div className="b1">
            <div className="usrPrfl">
                {/* <div className="dpCntnr"></div> */}
                <div className="usrNmCntnr">
                    <h5 className="usrNm">{recruiterSignInStatus.businessName || userSignInStatus.name}</h5>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileName;