import { Link } from "react-router-dom";
import {useRef,useEffect} from 'react'
import {store} from "../Store";
import app_Actions from '../Actions/Actions'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {
  const UserName = useRef<HTMLInputElement>(null)
  const UserPassword= useRef<HTMLInputElement>(null)
  const dispatch = useDispatch();
  let navigate = useNavigate(); 
  
  useEffect(() => {
    dispatch(app_Actions.setLoginStatus(false))  
  }, [])
  
  const setValues = () =>{
    if(UserName.current?.value && UserPassword.current?.value){
      console.log(UserName.current.value)
      dispatch(app_Actions.setResgistUser({UserName :UserName.current?.value , UserPassword:UserPassword.current?.value}))
      // store.dispatch(app_Actions.setResgistUser({UserName :UserName.current?.value , UserPassword:UserPassword.current?.value}))
      dispatch(app_Actions.setLoginStatus(true))
      let path = `/home`; 
      navigate(path);
    }
  }
  const result: any = useSelector((state: any) => state);
  const showData = () => {
    console.log('==========',result)
  }
  const goToRegister=()=>{
    let path = `/register`; 
    navigate(path);
  }
  return (
    <div className="login">
    <div className="login-form">
     <input type="text" placeholder="Enter Name" ref={UserName}/>
     <input type='password'placeholder="Enter Password"ref={UserPassword}/>
     <button onClick={()=>setValues()}>submit</button>
    <button onClick={()=>{showData()}}>see data</button>
    <button onClick={()=>{dispatch(app_Actions.setLogOut(null))}}>LogOut</button>
    </div>
   <div className="login_register">
    Not a registered User. 
    <div onClick={()=>{goToRegister()}} className="register_text">Register Here</div>
    </div>
    </div>
  );
}

export default Login;