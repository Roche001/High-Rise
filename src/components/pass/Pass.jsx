import React from "react";
import "./Pass.css";

const Pass = () => {
  return (
    <div className="pass-container">
      <h4>Reset your password</h4>
      <input className="in-small" type="text" placeholder="Email" required />
      <button className="reset">Send a passworld reset link</button>
    </div>
  );
};

export default Pass;
