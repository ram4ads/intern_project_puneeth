import React, { useState } from 'react';
import axios from 'axios';
import {MdOutlineMailLock} from 'react-icons/md'
import {RiLockPasswordLine} from 'react-icons/ri'
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import './Login.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    
       axios.post('http://localhost:0969/login', {
        email,
        password,
      }).then(res => {
        console.log(res)
        Cookies.set("jwt_token", res.data.message)
        navigate("/")
      }).catch(err => {
        console.log(err)
      })
     
  };

  const handleCreateAccount=()=>{
    navigate("/signup")
  }

  return (
    <div className='login-container'>
        <div className='mid-contianer'>
        <img src="https://static.vecteezy.com/system/resources/previews/008/214/517/original/abstract-geometric-logo-or-infinity-line-logo-for-your-company-free-vector.jpg" alt='logo' className='image-logo'/>
      <h1>Passport Login</h1>
      <form onSubmit={handleSubmit} className='login-form'>
        <div className='input-element'> 
        <MdOutlineMailLock size={22}/><input type="email" value={email} onChange={handleEmailChange} placeholder='Email' className='input-login'/>
        </div>
        <div className='input-element'>
        <RiLockPasswordLine size={22}/><input type="password" value={password} onChange={handlePasswordChange} placeholder='Password' className='input-login'/>
        </div>
        <button type="submit" className='glow-on-hover' onClick={handleSubmit}>Login</button>
        <div>
          Create new Acoount<button onClick={handleCreateAccount} className='signup-button'> Signup</button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Login;
