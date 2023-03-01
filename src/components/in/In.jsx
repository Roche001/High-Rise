import React from "react";
import "./In.css";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";

const In = () => {
  return (
    <div className="in-home">
      <div className="in-bg">
        <h4>Login Here</h4>
        <input
          className="in-small"
          type="text"
          placeholder="Your Mail"
          required
        />
        <input
          className="in-small"
          type="text"
          placeholder="Password"
          required
        />{" "}
        <h6>
          <Checkbox /> <span> Remember Me</span>
        </h6>
        <div className="unique">
          <Link to="/Pass" id="unique">
            <h6>Forgot Password?</h6>
          </Link>
        </div>
        <button className="in-btn">Login</button>
        <div className="account-one">
          <h6>
            Don't have an account?
            <Link to="/Register">
              {" "}
              <span>Register Here</span>
            </Link>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default In;
