import { Link } from "react-router-dom";
import {useRef} from 'react'
import store from "../Store";
import app_Actions from '../Actions/Actions'
import { useSelector } from "react-redux";

function Login() {
  const UserName = useRef<HTMLInputElement>(null)
  const UserPassword= useRef<HTMLInputElement>(null)
  const setValues = () =>{
    if(UserName.current?.value && UserPassword.current?.value){
      console.log(UserName.current.value)
      store.dispatch(app_Actions.setResgistUser({UserName :UserName.current?.value , UserPassword:UserPassword.current?.value}))
    }
  }
  const result: any = useSelector((state: any) => state);
  const showData = () => {
    console.log('==========',result)
  }
  return (
    <div className="login">
    <div className="login-form">
     <input type="text" placeholder="Enter Name" ref={UserName}/>
     <input type='password'placeholder="Enter Password"ref={UserPassword}/>
     <button onClick={()=>setValues()}>submit</button>
    </div>
    <button onClick={()=>{showData()}}>see data</button>
    </div>
  );
}

export default Login;