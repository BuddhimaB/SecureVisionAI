import React, { useState } from 'react';
import './NewUser.css';
import Bottom from '../../components/BottomDetails/Bottom';
import NavBar from '../../components/NavBar/NavBar';
import BackButton from '../../components/BackButton/BackButton';


const NewUser = () => {
  const [formData, setFormData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    role: '',
    selectedCameras: [],
    
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const cameras = ['Camera 1', 'Camera 2', 'Camera 3']; // Example camera list

  const validate = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.role) newErrors.role = 'Role is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Add user logic here
      console.log('User added:', formData);
      setIsSubmitted(true); // Show success message
      setTimeout(() => setIsSubmitted(false), 3000); // Hide the message after 3 seconds
  
      // Optionally reset the form
      setFormData({
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        role: '',
        selectedCameras: [],
      });
    }
  };
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  

<<<<<<< Updated upstream:client/.history/src/Pages/Register/Register_20240713201158.jsx
export default function Register() {
=======
>>>>>>> Stashed changes:client/src/Pages/NewUser/NewUser.jsx
  return (
    <>
    <NavBar/>
    <BackButton/>
    <div className='user-container'>
    <div className="add-user-container">
      <h2>Add User</h2>
      {isSubmitted && (
      <div className="success-message">Successfully added new user!</div>
      )}
      <form onSubmit={handleSubmit} className="add-user-form">
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
          {errors.username && <span className="error">{errors.username}</span>}
        </div>

        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
          {errors.firstName && <span className="error">{errors.firstName}</span>}
        </div>

        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
        </div>

        <div className="form-group">
          <label>Email Address:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label>Role:</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleInputChange}
          >
            <option value="" disabled>Select Role</option>
            <option value="propertyOwner">Property Owner</option>
            <option value="generalUser">General User</option>
          </select>
          {errors.role && <span className="error">{errors.role}</span>}
        </div>

        {formData.role === 'generalUser' && (
          <div className="form-group">
            <label>Select Cameras:</label>
            {cameras.map((camera) => (
              <div key={camera}>
                <input
                  type="checkbox"
                  name="selectedCameras"
                  value={camera}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setFormData({
                        ...formData,
                        selectedCameras: [...formData.selectedCameras, camera],
                      });
                    } else {
                      setFormData({
                        ...formData,
                        selectedCameras: formData.selectedCameras.filter(
                          (c) => c !== camera
                        ),
                      });
                    }
                  }}
                />
                <label>{camera}</label>
              </div>
            ))}
          </div>
        )}       

        <button type="submit" className="add-user-button">Add User</button>
      </form>
    </div>
    </div>
    <Bottom/>
    </>
  );
};

export default NewUser;
