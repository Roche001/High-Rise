import React from "react";
import "./In.css";

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
      <button className="in-btn">Login</button>
    </div>
  );
};

export default In;
