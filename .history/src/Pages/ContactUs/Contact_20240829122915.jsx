import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Post the form data to the json-server
    try {
      const response = await fetch('http://localhost:5000/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Thank you for contacting us!');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        alert('There was an issue submitting your message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting the form', error);
      alert('There was an error submitting your message. Please try again.');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Contact Us</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="name" style={styles.label}>Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="message" style={styles.label}>Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={styles.textarea}
            required
          />
        </div>
        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '500px',
    margin: '50px auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
  },
  form: {
    width: '100%',
  },
  formGroup: {
    marginBottom: '15px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  label: {
    marginBottom: '5px',
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    minHeight: '100px',
    boxSizing: 'border-box',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    textAlign: 'center',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
};
