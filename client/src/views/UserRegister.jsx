import React from 'react';
import SignUp from '../components/SignUp';
import UserRegDetails from '../components/UserRegDetails';

const UserRegister = () => {
  return (
    <div className="uRegCntnr">
      <div className="b1">
        <div className="uReg">
          <SignUp />
          <UserRegDetails />
        </div>
      </div>
    </div>
  )
}

export default UserRegister;