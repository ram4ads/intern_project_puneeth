import React, { useContext} from 'react';
import {FormDataContext } from '../../App';
import './FormReg.css'


const RegistrationForm = () => {
   const {formData,handleChange,handleClickTab} = useContext(FormDataContext);

  const isPasswordMatch = () => {
    const { password, confirmpassword } = formData;
    return password === confirmpassword && password !== '' && confirmpassword !== '';
  };

  return (
    <div className='form-contianer'>
        <h1>Passport Registration</h1>
    
    <form >
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder='Firstname '
          pattern="[A-Za-z ]+"
          required
        />
     
      <br />
      
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder='LastName '
          pattern="[A-Za-z ]+"
          required
        />
      
      <br />
      
        <input
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          min="1923-05-15"
          max='2023-05-15'
          onChange={handleChange}
          placeholder='Date of birth '
        />
      
      <br />
      
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          placeholder='Gender check the list'
        >
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      
      <br />
      <input
          type="number"
          name="PhoneNumber"
          value={formData.PhoneNumber}
          onChange={handleChange}
          placeholder='Mobile Number '
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        />
      <br/>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder='Email '
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
          required
        />
      
      <br />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder='Password '
          minLength="9"
          required
        />
      
      <br />
      <input
          type="password"
          name="confirmpassword"
          value={formData.confirmpassword}
          onChange={handleChange}
          placeholder='confirm Password '
          required
        />
        {!isPasswordMatch() && formData.confirmpassword !== '' && (
        <p className='errormsg'>Passwords do not match.</p>
      )}
        <br/>
        
         
         <button type="button" className='glow-on-hover' onClick={handleClickTab}>Next</button>
     
    </form>
  
    </div>
  );
};

export default RegistrationForm;
