import React, { useState } from 'react';
import './Profile.css';
import { TextField, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import NavBar from '../../components/NavBar/NavBar';
import Bottom from '../../components/BottomDetails/Bottom';
import BackButton from '../../components/BackButton/BackButton';

const Profile = () => {
  // Sample user data
  const [user, setUser] = useState({
    name: 'John Doe',
    role: 'Administrator',
    phone: '+1-123-456-7890',
    email: 'johndoe@example.com',
    image: 'https://www.imagella.com/cdn/shop/products/fec5e9f79ee323f367b0fec5d7177663_89776d30-f406-46cf-8a1b-c58b59aa9d54.jpg?v=1708376164', // Placeholder image URL
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <>
    <NavBar/>
    <BackButton/>
    <div className="profile-container">
      <div className="profile-header">
        <h2>Profile</h2>
        <Button
          variant="contained"
          startIcon={isEditing ? <SaveIcon /> : <EditIcon />}
          onClick={handleEditClick}
        >
          {isEditing ? 'Save' : 'Edit'}
        </Button>
      </div>
      <div className="profile-content">
        <div className="profile-image">
          <img src={user.image} alt="User" />
        </div>
        <div className="profile-details">
          {isEditing ? (
            <>
              <TextField
                label="Name"
                name="name"
                value={user.name}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Role"
                name="role"
                value={user.role}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Phone"
                name="phone"
                value={user.phone}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Email"
                name="email"
                value={user.email}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
              />
            </>
          ) : (
            <>
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Role:</strong> {user.role}</p>
              <p><strong>Phone:</strong> {user.phone}</p>
              <p><strong>Email:</strong> {user.email}</p>
              
            </>
          )}
        </div>
      </div>
    </div>
    <Bottom/>
    </>
  );
};

export default Profile;

