import React from "react";
import "./Log.css";
import { Link, Outlet } from "react-router-dom";
import { FaUserCheck } from "react-icons/fa";
import { GiArchiveRegister } from "react-icons/gi";
import { Si1Password } from "react-icons/si";

const Log = () => {
  return (
    <div className="log-bg">
      <div className="log-container">
        <Link to="/Log/In" className="login-page">
          <h5>
            {" "}
            <FaUserCheck />
            Login
          </h5>
        </Link>
        <Link to="/Log/Register" className="login-page">
          <h5>
            <GiArchiveRegister />
            Register
          </h5>
        </Link>
        <Link to="/Log/Pass" className="login-page">
          <h5>
            <Si1Password /> Forgot Password?
          </h5>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Log;
