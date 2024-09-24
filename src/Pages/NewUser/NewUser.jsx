// import React, { useState } from 'react';
// import './NewUser.css';
// import Bottom from '../../components/BottomDetails/Bottom';
// import NavBar from '../../components/NavBar/NavBar';
// import BackButton from '../../components/BackButton/BackButton';

// const NewUser = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     firstName: '',
//     lastName: '',
//     email: '',
//     selectedCameras: [],
    
//   });

//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [errors, setErrors] = useState({});
//   const cameras = ['Camera 1', 'Camera 2', 'Camera 3']; 

//   // const validate = () => {
//   //   const newErrors = {};
//   //   if (!formData.username) newErrors.username = 'Username is required';
//   //   if (!formData.firstName) newErrors.firstName = 'First name is required';
//   //   if (!formData.lastName) newErrors.lastName = 'Last name is required';
//   //   if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
    
//   //   return Object.keys(newErrors).length === 0;
//   // };
//   const validate = () => {
//     const newErrors = {};
//     if (!formData.username) newErrors.username = 'Username is required';
//     if (!formData.firstName) newErrors.firstName = 'First name is required';
//     if (!formData.lastName) newErrors.lastName = 'Last name is required';
//     if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
    
//     setErrors(newErrors); // Set the errors state
  
//     return Object.keys(newErrors).length === 0;
//   };
  

  
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       console.log('User added:', formData);
//       setIsSubmitted(true); 
//       setTimeout(() => setIsSubmitted(false), 5000); 
//       const blog = {formData};
//       fetch('http://localhost:8000/blogs',{
//         method: 'POST',
//         headers:{"Content-Type":"application/json"},
//         body: JSON.stringify(blog)
//       }).then(()=>{
//         console.log('new blog added');
//       })
      
      
//       setFormData({
//         username: '',
//         firstName: '',
//         lastName: '',
//         email: '',
//         selectedCameras: [],
//       });
//     }
//   };
  

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };  

//   return (
//     <>
//     <NavBar/>
//     <BackButton/>
//     <div className='user-container'>
//     <div className="add-user-container">
//       <h2>Add User</h2>
//       {isSubmitted && (
//       <div className="success-message">Successfully added new user!</div>
//       )}
//       <form onSubmit={handleSubmit} className="add-user-form">
//         <div className="form-group">
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             name="username"
//             required
//             value={formData.username}
//             onChange={handleInputChange}
//           />
//           {errors.username && <span className="error">{errors.username}</span>}
//         </div>

//         <div className="form-group">
//           <label htmlFor="firstName">First Name:</label>
//           <input
//             type="text"
//             name="firstName"
//             value={formData.firstName}
//             onChange={handleInputChange}
//           />
//           {errors.firstName && <span className="error">{errors.firstName}</span>}
//         </div>

//         <div className="form-group">
//           <label htmlFor="lastName">Last Name:</label>
//           <input
//             type="text"
//             name="lastName"
//             value={formData.lastName}
//             onChange={handleInputChange}
//           />
//           {errors.lastName && <span className="error">{errors.lastName}</span>}
//         </div>

//         <div className="form-group">
//           <label htmlFor="email">Email Address:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//           />
//           {errors.email && <span className="error">{errors.email}</span>}
//         </div>

//         <div>
//             <h3>Select Cameras:</h3>
//             {cameras.map((camera) => (
              
//               <div key={camera} className='checkbox-container'>
//                 <label>{camera}</label>
//                 <input
//                   type="checkbox"
//                   name="selectedCameras"
//                   value={camera}
//                   onChange={(e) => {
//                     if (e.target.checked) {
//                       setFormData({
//                         ...formData,
//                         selectedCameras: [...formData.selectedCameras, camera],
//                       });
//                     } else {
//                       setFormData({
//                         ...formData,
//                         selectedCameras: formData.selectedCameras.filter(
//                           (c) => c !== camera
//                         ),
//                       });
//                     }
//                   }}
//                 />
                
//               </div>
//             ))}
//           </div>
//           <button type="submit" className="add-user-button">Add User</button>
//       </form>
      
//     </div>
//     </div>
//     <Bottom/>
//     </>
//   );
// };

// export default NewUser;


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
    selectedCameras: [],
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const cameras = ['Camera 1', 'Camera 2', 'Camera 3']; 

  const validate = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
    
    setErrors(newErrors); 
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('User added:', formData);
      setIsSubmitted(true); 
      setTimeout(() => setIsSubmitted(false), 5000); 
      
      const blog = { formData };
      fetch('http://localhost:8000/blogs', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog)
      }).then(() => {
        console.log('new blog added');
      });
      
      setFormData({
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        selectedCameras: [],
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <NavBar />
      <BackButton />
      <div className='user-container'>
        <div className="add-user-container">
          <h2>Add User</h2>
          {isSubmitted && (
            <div className="success-message">Successfully added new user!</div>
          )}
          <form onSubmit={handleSubmit} className="add-user-form">
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                id="username" // Added id attribute
                type="text"
                name="username"
                required
                value={formData.username}
                onChange={handleInputChange}
              />
              {errors.username && <span className="error">{errors.username}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="firstName">First Name:</label>
              <input
                id="firstName" // Added id attribute
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
              />
              {errors.firstName && <span className="error">{errors.firstName}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name:</label>
              <input
                id="lastName" // Added id attribute
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />
              {errors.lastName && <span className="error">{errors.lastName}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address:</label>
              <input
                id="email" // Added id attribute
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div>
              <h3>Select Cameras:</h3>
              {cameras.map((camera, index) => (
                <div key={camera} className='checkbox-container'>
                  <label htmlFor={`camera-${index}`}>{camera}</label> {/* Added htmlFor */}
                  <input
                    id={`camera-${index}`} // Added id attribute
                    type="checkbox"
                    name="selectedCameras"
                    value={camera}
                    checked={formData.selectedCameras.includes(camera)} // Set checked attribute
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
                </div>
              ))}
            </div>
            <button type="submit" className="add-user-button">Add User</button>
          </form>
        </div>
      </div>
      <Bottom />
    </>
  );
};

export default NewUser;

