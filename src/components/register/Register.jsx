import React from "react";
import "./Register.css";
import Checkbox from "@mui/material/Checkbox";
import { register } from "../../apartment";

const Register = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <div className="register-container">
      <h4>Create your account</h4>
      {register.map((register, index) => {
        return (
          <div className="reg-acc" key={index}>
            <input
              className="reg-small"
              type="text"
              placeholder={register.place}
            />
          </div>
        );
      })}

      <div className="account-type">
        <h5>Account Type</h5>
        <div className="acc">
          <h6>
            <Checkbox {...label} /> <span> Individual [Tenant]</span>
          </h6>{" "}
          <h6>
            <Checkbox {...label} /> <span> Property Developer </span>
          </h6>{" "}
          <h6>
            <Checkbox {...label} /> <span> Property Owner </span>
          </h6>{" "}
          <h6>
            <Checkbox {...label} /> <span> Estate Agent </span>
          </h6>
        </div>
      </div>
      <button className="reg-btn">Create Account</button>
    </div>
  );
};

export default Register;
