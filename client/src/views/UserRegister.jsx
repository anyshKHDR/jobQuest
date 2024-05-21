import React from 'react';
import SignUp from '../components/SignUp';
import UserRegDetails from '../components/UserRegDetails';
import { useDispatch, useSelector } from 'react-redux';
import { userRegisterAsync } from '../app/features/userRegisterSlice';
import { useNavigate } from 'react-router-dom';

const UserRegister = () => {

  const userRegData = useSelector((state)=>state.userRegister.value)
  console.log(userRegData);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event)=>{
    event.preventDefault();
    dispatch(userRegisterAsync(userRegData))
    navigate("/user/signIn")
    
    // console.log("SUBMITTED")
  }
  
  return (
    <div className="uRegCntnr">
      <div className="b1">
        <div className="uReg">
          <form action="" onSubmit={handleSubmit}>
            <SignUp />
            <UserRegDetails />
          </form>
        </div>
      </div>
    </div>
  )
}

export default UserRegister;