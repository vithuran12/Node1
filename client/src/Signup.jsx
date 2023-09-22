import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom"; // Import Link component
import axios from 'axios';
import './styles/signup.css'
import 'bootstrap/dist/css/bootstrap.min.css';


import { useNavigate } from "react-router-dom"; //navigate or move to different pages


const Signup = () => {

const[name,setName]=useState();
const[email,setEmail]=useState();
const[password,setPassword]=useState();
const navigate=useNavigate()

const handleSubmit=(e)=>{
  e.preventDefault()
  axios.post('http://localhost:3001/register',{name,email,password})//pass the data
  .then(result=>{console.log(result) //result can be any name
    navigate('/login') //no (./login)
  })
  .catch(err=>console.log(err))
  
}

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="fullform">
          <h1>Register</h1>

          <div className="form-group column">
            <label htmlfor="email" className="col-sm-2 col-form-label">
              Name
            </label>
            <div className="col-sm-10">
              <input type="text" id="inputEmail3" placeholder="Enter name" autoComplete="off" onChange={(e)=>{
                return(
                  setName(e.target.value)
                )
              }}/>
            </div>
          </div>

          <div className="form-group column">
            <label htmlfor="email" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input type="email" id="inputEmail3" placeholder="Enter email" autoComplete="off" onChange={(e)=>setEmail(e.target.value)}/>
            </div>
          </div>

          <div className="form-group column">
            <label htmlfor="email" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                id="inputPassword3"
                placeholder="Enter password"
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="registerbtn">
            <button type="submit" className="btn">
              Register
            </button>
          </div>

          <div className="">
            <p>Already Have an Account</p>
          </div>

          <Link to="/login" className="loginbtn">
            <button type="submit" className="btn">
              Login
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
