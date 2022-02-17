
import { useEffect, useState } from "react";
import app_Actions from "../Actions/Actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ReactGa from "react-ga";
import HtmlInput from "../components/CommonInput";

function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const registeredUsers: any = useSelector((state: any) => state.User.registerUser);
  
  useEffect(() => {
    dispatch(app_Actions.setLoginStatus(false));
  }, []);

  const setValues = () => {
      registeredUsers.forEach((user:any,index:any) => {
        if(user.UserEmail===email && user.UserPassword===password){
          dispatch(app_Actions.setLoginUser(user))
          dispatch(app_Actions.setLoginStatus(true));
           let path = `/home`;
           navigate(path);         
        }
      })
    }

  const goToRegister = () => {
    ReactGa.event({
      category: "button",
      action: "register button is clicked",
    });
    let path = `/register`;
    navigate(path);
  };
  const gettingData = (data: any, type?: any) => {
    let value = data;
    switch (type) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
    }
  };
  return (
    <div className="App">
      <div className="design">
      <div className="heading">
        Login
      </div>
        <HtmlInput
          inputType="email"
          inputPlaceHolder="enter email-id"
          inputOnChange={(data: any) => {
            gettingData(data, "email");
          }}
          disabled={false}
        />
        <HtmlInput
          inputType="password"
          inputPlaceHolder="enter password"
          inputOnChange={(data: any) => {
            gettingData(data, "password");
          }}
          disabled={false}
        />
        <div>
          <a href="/forgotpassword">Forgot password?</a>
        </div>
        <button className="registerbtn" onClick={() => setValues()}>Login</button>
      
      <div className="login_register">
        Not a registered User.
        <div
          onClick={() => {
            goToRegister();
          }}
          className="register_text"
        >
          Register Here
        </div>
      </div>
      </div>
    </div>
  );
}

export default Login;
