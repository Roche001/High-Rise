import React from "react";
import "./Pass.css";

const Pass = () => {
  return (
    <div className="pass-big">
      <div className="pass-container">
        <h4>Reset your password</h4>

        <input className="in-small" placeholder="Email" required type="email" />
        <button className="reset">Send a passworld reset link</button>
      </div>
    </div>
  );
};

export default Pass;
