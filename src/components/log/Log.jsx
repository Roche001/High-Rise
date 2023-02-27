import React from "react";
import "./Log.css";
import { Link, Outlet } from "react-router-dom";
import { FaUserCheck } from "react-icons/fa";
import { GiArchiveRegister } from "react-icons/gi";
import { Si1Password } from "react-icons/si";

const Log = () => {
  return (
    <div className="log-bg">
      <Outlet />
    </div>
  );
};

export default Log;
