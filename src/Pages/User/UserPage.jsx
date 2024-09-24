import React from 'react';
import './UserPage.css';
import usersData from '../../data/db.json'; // Adjust the path to the correct location
import NavBar from '../../components/NavBar/NavBar';
import Bottom from '../../components/BottomDetails/Bottom';
import BackButton from '../../components/BackButton/BackButton';

const UserPage = () => {
  const { blogs } = usersData;

  return (
    <>
    <NavBar/>
    <BackButton/>
    <div className="user-page-container">
    <h2 className="page-title">User Details</h2>
        {blogs.map((user) => (
        <div key={user.id} className="user-card">
          <h3>{user.formData.username}</h3>
          <p><strong>First Name:</strong> {user.formData.firstName}</p>
          <p><strong>Last Name:</strong> {user.formData.lastName}</p>
          <p><strong>Email:</strong> {user.formData.email}</p>
          {user.formData.selectedCameras.length > 0 && (
            <p><strong>Selected Cameras:</strong> {user.formData.selectedCameras.join(', ')}</p>
          )}
        </div>
      ))}
    </div>
    <Bottom/>
    </>
  );
};

export default UserPage;



