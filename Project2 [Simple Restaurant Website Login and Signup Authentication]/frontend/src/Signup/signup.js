import React,{ useState } from 'react';
import '../Signup/signup.css'
import profile from '../images/profile.png'
import password from '../images/lock.png'
import email from '../images/email.png'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


const Signup = () => {
  const nav =useNavigate()
  const [values,setValues] = useState({
    username:'',
    email:'',
    password:'',
    confirmPassword:'',
  });

  const [errors,setErrors] = useState({});

  const validation=(values)=>{
    let error={}
    const email_pattern= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    const password_pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/

    if (values.username===""){
      error.username='Username field cannot be empty'
    }
    else{
      error.username=''
    }

    if(values.email ===''){
      error.email='Email field cannot be empty'
    }
    else if(!email_pattern.test(values.email)){
      error.email='The Email must have a valid pattern'
    }
    else{
      error.email=''
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

    if(values.confirmPassword ===''){
      error.confirmPassword='Confirm Password field cannot be empty'
    }
    else if(!password_pattern.test(values.confirmPassword)){
      error.confirmPassword='The Confirm Password must have a valid pattern'
    }
    else{
      error.confirmPassword=''
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
    if(errors.username === "" && errors.email === "" && errors.password === "" && errors.confirmPassword === ""){
      axios.post('http://localhost:8000/signup',values)
      .then(res => {
        nav('/');
      })
      .catch(err =>console.log("error"))
    }
  };

  return (
    <div className='body'>
      <div className='background'></div>
      <div className='content'>
        <h1 className='dancing-script'> Tasty Tales</h1>
        <div>
          <form className='form' onSubmit={handleSubmit}>
            <div className='form-title'>Sign Up</div>
            <div class="mb-3 input-container">
              <img src={profile} alt='...' className='img'/>
              <input type="text" class="form-control" id="username" name='username' value={values.username} onChange={handleChange} placeholder='Username'/>
              {errors.username && <span className='error'>{errors.username}</span>}
            </div>
            <div class="mb-3 input-container">
              <img src={email} alt='...' className='img'/>
              <input type="email" class="form-control" id="email" name='email' value={values.email} onChange={handleChange} placeholder='Email'/>
              {errors.email && <span className='error'>{errors.email}</span>}
            </div>
            <div class="mb-3 input-container">
              <img src={password} alt='...' className='img'/>
              <input type="password" class="form-control" id="password" name='password' value={values.password} onChange={handleChange} placeholder='Password'/>
              {errors.password && <span className='error'>{errors.password}</span>}
            </div>
            <div class="mb-3 input-container">
              <img src={password} alt='...' className='img'/>
              <input type="password" class="form-control" id="confirmPassword" name='confirmPassword' value={values.confirmPassword} onChange={handleChange} placeholder='Confirm Password'/>
              {errors.confirmPassword && <span className='error'>{errors.confirmPassword}</span>}
            </div>
            
            <button to='/' type='submit' className='signup-button'>Sign Up</button>
            <a href='/' className='create'>Already have an account?</a>
          </form>
        </div>
      </div> 
    </div>
    
    
  )
}

export default Signup;
