import React, { useEffect, useState } from 'react';

const UserProfile = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch the JSON data
    fetch('/data/db.json') // Replace with your actual path
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching user data:', error));
  }, []);

  if (users.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">User Profiles</h1>
      {users.map((user) => (
        <div key={user.id} className="p-4 mb-4 bg-white shadow-md rounded-lg">
          <h2 className="text-xl font-semibold">{user.formData.username}</h2>
          <p><strong>Name:</strong> {user.formData.firstName} {user.formData.lastName}</p>
          <p><strong>Email:</strong> {user.formData.email}</p>
          <p><strong>Role:</strong> {user.formData.role}</p>
          <p><strong>Selected Cameras:</strong> {user.formData.selectedCameras.length > 0 ? user.formData.selectedCameras.join(', ') : 'None'}</p>
        </div>
      ))}
    </div>
  );
};

export default UserProfile;
