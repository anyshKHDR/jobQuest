import React from 'react';
import { useSelector } from 'react-redux';

const ProfileName = () => {

  const signinStatus = useSelector((state)=>state.login.value);
  
  return (
    <div className="usrPCntnr">
        <div className="b1">
            <div className="usrPrfl">
                {/* <div className="dpCntnr"></div> */}
                <div className="usrNmCntnr">
                    <h5 className="usrNm">{signinStatus.businessName}</h5>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileName;