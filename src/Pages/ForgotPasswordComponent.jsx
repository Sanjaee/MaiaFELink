import React, { useState } from "react";
import axios from "axios";

const ForgotPasswordComponent = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSendResetEmail = async () => {
    try {
      await axios.post(
        ` ${import.meta.env.VITE_BACKEND_URL}/auth/send-verification-email`,
        {
          email,
        }
      );
      setMessage(
        "Password reset email sent successfully. Please check your inbox."
      );
    } catch (error) {
      console.error("Error sending password reset email:", error);
      setMessage(
        "Failed to send password reset email. Please try again later."
      );
    }
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button onClick={handleSendResetEmail}>Send Password Reset Email</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ForgotPasswordComponent;
