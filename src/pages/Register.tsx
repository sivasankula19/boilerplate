import React from 'react';
import { useNavigate } from "react-router-dom";
import { useRef } from 'react';

function Register() {
  const Name = useRef({value:'',error:false})
  const password = useRef({value:'',error:false})
  const email = useRef({value:'',error:false})
  const number = useRef({value:'',error:false})
  const confirmPassword = useRef({value:'',error:false})

  let navigate = useNavigate(); 
  const registerData=[Name,password,email,number,confirmPassword]

  const gotoSideBar=()=>{
    console.log("goto home page");
    // let path = `/home`; 
    // navigate(path);
  }
  const goToLogin=()=>{
    let path = `/`; 
    navigate(path);
  }
  return (
    <div className="register">
      <div className="registration-form">
      <input type="text" placeholder="enter name"></input> 
      <input type="email" placeholder="enter email"></input> 
      <input type="number" placeholder="number" maxLength={10}></input> 
      <input type="password" placeholder="set password"></input>
      <input type="password" placeholder="confirm password"></input> 
      </div>
      <button onClick={()=>{gotoSideBar()}}>Register</button>
      <div className="login_register">
    Have an account! 
    <div onClick={()=>{goToLogin()}} className="register_text">Login Here</div>
    </div>
    </div>
  );
}

export default Register;
