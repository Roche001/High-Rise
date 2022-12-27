import React from "react";
import "./In.css";
import Checkbox from "@mui/material/Checkbox";

const In = () => {
  return (
    <div className="in-bg">
      <h4>Login Here</h4>
      <input
        className="in-small"
        type="text"
        placeholder="Your Mail"
        required
      />
      <input className="in-small" type="text" placeholder="Password" required />
      <button className="in-btn">Login</button>{" "}
      <h6>
        <Checkbox /> <span> Remember Me</span>
      </h6>
    </div>
  );
};

export default In;
