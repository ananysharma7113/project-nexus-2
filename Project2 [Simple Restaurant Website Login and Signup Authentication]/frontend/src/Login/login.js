import React, { useState } from 'react';
import '../Login/login.css'
import profile from '../images/profile.png'
import password from '../images/lock.png'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
const Login = () => {
  const nav = useNavigate()
  const [values,setValues] = useState({
    username:'',
    password:''
  });

  const [errors,setErrors] = useState({});

  const validation=(values)=>{
    let error={}
    const password_pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/

    if (values.username===""){
      error.username='Username field cannot be empty'
    }
    else{
      error.username=''
    }
    if(values.password ===''){
      error.password='Password field cannot be empty'
    }
    else if(!password_pattern.test(values.password)){
      error.password='The password must have a valid pattern'
    }
    else{
      error.password=''
    }
    return error;
  }

  const handleChange=(e)=>{
    const {name,value} = e.target;
    setValues({
      ...values,
      [name]:value
    });
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    setErrors(validation(values));
    if(errors.username === "" && errors.password === ""){
      axios.post('http://localhost:8000/login',values)
      .then(res => {
        if (res.data==="Success"){
          nav('/home');
        }
        else if(res.data==="Failed"){
          alert("Username or Password is wrong!!!")
        }
      })
      .catch(err =>console.log("error"))
    }
  };

  return (
    <div className='body'>
      <div className='background'></div>
        <div className='content'>
          <h1 className='dancing-script'> Tasty Tales</h1>
          <form className='form' onSubmit={handleSubmit}>
            <div className='form-title'>Login</div>
            <div class="mb-3 input-container">
              <img src={profile} alt='...' className='img'/>
              <input type="text" className="form-control" id="username" name='username' value={values.username} onChange={handleChange} placeholder='Username'/>
              {errors.username && <span className='error'>{errors.username}</span>}
            </div>
            <div class="mb-3 input-container">
              <img src={password} alt='...' className='img'/>
              <input type="password" class="form-control" id="Password" name='password' value={values.password} onChange={handleChange} placeholder='Password'/>
              {errors.password && <span className='error'>{errors.password}</span>}
            </div>            
            <button type='submit' className='login-button'>Log In</button>
            <a href='/signup' className='create-account'>Create Account</a>
          </form>
        </div>
      </div>
  )
}

export default Login;
