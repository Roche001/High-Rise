import React, { useState } from "react";
import "./Pass.css";

const Pass = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/password-reset", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      setMessage(error.message);
    }
  };
  return (
    <div className="pass-big">
      <div className="pass-container">
        <h4>Reset your password</h4>
        <form onSubmit={handleSubmit}>
          <input
            className="in-small"
            placeholder="Email"
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="reset">Send a passworld reset link</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default Pass;
