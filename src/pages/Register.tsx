import React from "react";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import HtmlInput from "../components/CommonInput";
import { regex } from "../App_Constants";
import { useDispatch } from "react-redux";
import app_Actions from "../Actions";

function Register() {
  const [userName, setUserName] = useState({ value: "", error: false });
  const [password, setPassword] = useState({ value: "", error: false });
  const [email, setEmail] = useState({ value: "", error: false });
  const [number, setNumber] = useState({ value: "", error: false });

  const dispatch = useDispatch();

  let navigate = useNavigate();
  const registerData = [userName, email, number, password];

  const gotoSideBar = (e: any) => {
    e.preventDefault();
    let isValid = registerData.every((obj) => obj.error && !!obj.value);
    if (isValid) {
      let registeredUserData = {
        UserName: userName.value,
        UserEmail: email.value,
        userMobile: number.value,
        UserPassword: password.value,
      };
      dispatch(app_Actions.user_Actions.setRegisterUser(registeredUserData));
      let path = `/`;
      navigate(path);
    }
  };
  const goToLogin = () => {
    let path = `/`;
    navigate(path);
  };

  const gettingData = (data: any, type?: any) => {
    let value = data;
    switch (type) {
      case "username":
        value.match(regex.username)
          ? setUserName({ value: value, error: true })
          : setUserName({ value: value, error: false });
        break;
      case "email":
        value.match(regex.email)
          ? setEmail({ value: value, error: true })
          : setEmail({ value: value, error: false });
        break;
      case "password":
        value.match(regex.password)
          ? setPassword({ value: value, error: true })
          : setPassword({ value: value, error: false });
        break;
      case "number":
        value.length === 10
          ? setNumber({ value: value, error: true })
          : setNumber({ value: value, error: false });
        break;
    }
  };

  return (
    <div className="App">
      <div className="design">
      <div className="heading">
        User Registration
      </div>
      <form >
        {/* Labels and inputs for form data */}
        <HtmlInput
          inputType="text"
          inputPlaceHolder="enter name"
          inputOnChange={(data: any) => {
            gettingData(data, "username");
          }}
          disabled={false}
        />
        <HtmlInput
          inputPlaceHolder="enter email"
          inputOnChange={(data: any) => {
            gettingData(data, "email");
          }}
          disabled={false}
        />
        <HtmlInput
          inputType="number"
          inputPlaceHolder="enter phone number"
          inputOnChange={(data: any) => {
            gettingData(data, "number");
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
        
        <div><button
        className="registerbtn"
          onClick={(e) => {
            gotoSideBar(e);
          }}
        >
          Register
        </button>
        </div>
        <div className="login_register">
          Have an account!
          <div
            onClick={() => {
              goToLogin();
            }}
            className="register_text"
          >
            Login Here
          </div>
        </div>
      </form>
      </div>
    </div>
  );
}

export default Register;
