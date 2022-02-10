import React from "react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

function Register() {
  const Name = useRef({ value: "", error: false });
  const password = useRef({ value: "", error: false });
  const email = useRef({ value: "", error: false });
  const number = useRef({ value: "", error: false });
  const confirmPassword = useRef({ value: "", error: false });

  let navigate = useNavigate();
  const registerData = [Name, password, email, number, confirmPassword];

  const gotoSideBar = () => {
    console.log("goto home page");
    // let path = `/home`;
    // navigate(path);
  };
  const goToLogin = () => {
    let path = `/`;
    navigate(path);
  };
  return (
    <div>
          <div>
            <h1>User Registration</h1>
          </div>
          <form>
            {/* Labels and inputs for form data */}
            <label className="label">Name</label>
            <input className="input" type="text" />

            <label className="label">Email</label>
            <input className="input" type="email" />

            <label className="label">Password</label>
            <input className="input" type="password" />

            <button className="btn"
              onClick={() => {
                gotoSideBar();
              }}
            >
              Register
            </button>
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
  );
}

export default Register;
