import React from 'react';
import UserDashboard from '../components/UserDashboard';
import UserDashboardEditButton from '../components/UserDashboardEditButton';

const UserDashboardView = () => {
  return (
    <>
      <UserDashboardEditButton />
      <UserDashboard />
    </>
  )
}

export default UserDashboardView;