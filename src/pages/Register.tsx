import { Card, CardContent } from "@material-ui/core";
import React from "react";

function Register() {
  return (
    <div className="background">
      <Card className="card">
        <CardContent>
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
              Submit
            </button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Register;
