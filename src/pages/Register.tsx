import React from "react";

function Register() {
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

            <button className="btn" type="submit">
              Register
            </button>
            <div>
            Already registered?<a href="/login"> Login</a>
            </div>
          </form>
    </div>
  );
}

export default Register;
