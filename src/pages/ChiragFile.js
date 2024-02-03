import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const ChiragFile = () => {
    const [error, setError] = useState(false);
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    number:''
  });

  



  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
  const isValidPhoneNumber = /^\d{10}$/.test(formData.number);
  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Basic email validation using a regular expression
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    const isValidPhoneNumber = /^\d{10}$/.test(formData.number);
  
    if (!isValidEmail) {
      // If email is not in a valid format, handle the error
      alert('Please enter a valid email address');
      // You can also set an error state or perform other actions here
    }
    if(!isValidPhoneNumber){
        alert('Please enter a valid phone number'); 
    }
     else {
      // If the email is valid, proceed with showing the alert
      const message = `Name: ${formData.name}\nEmail: ${formData.email}\nAge: ${formData.age}`;
      alert(message);
    }
  };
  return (
    <form onSubmit={handleSubmit}>


      <TextField
        label="Name"
        variant="outlined"
        fullWidth
        name="name"
        required
        value={formData.name}
        onChange={handleInputChange}
        margin="normal"
      />
     <TextField
    label="Email"
  variant="outlined"
  fullWidth
  required
  name="email"
  value={formData.email}
  onChange={handleInputChange}
  margin="normal"
  error={!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)}
  helperText={
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
      ? 'Please enter a valid email address'
      : ''
  }
/>
      <TextField
        label="Age"
        required
        variant="outlined"
        fullWidth
        name="age"
        value={formData.age}
        onChange={handleInputChange}
        margin="normal"
      />
     <TextField
        label="Phone Number"
        required
        variant="outlined"
        fullWidth
        name="number"
        value={formData.number}
        onChange={handleInputChange}
        margin="normal"
      />

      <Button disabled={!isEmailValid && !isValidPhoneNumber} variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default ChiragFile;



  