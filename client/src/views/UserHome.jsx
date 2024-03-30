import React from 'react';
import Post from './Post';
import UserHomeTitle from '../components/UserHomeTitle';

const UserHome = () => {
  return (
    <div className="userHomeCntnr">
        <div className="b1">
            <div className="userHome">
                <UserHomeTitle />
                <Post />
            </div>
        </div>
    </div>
  )
}

export default UserHome;