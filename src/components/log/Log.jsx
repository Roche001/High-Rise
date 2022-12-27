import React from "react";
import "./Log.css";
import { Link } from "react-router-dom";

const Log = () => {
  return (
    <div className="log-bg">
      <div className="log-container">
        <Link to="/Log/In" className="login-page">
          Login
        </Link>
        <Link to="/Log/Register" className="login-page">
          Register
        </Link>
        <Link to="/Log/Pass" className="login-page">
          Forgot Password
        </Link>
      </div>
      <outlet />
    </div>
  );
};

export default Log;
