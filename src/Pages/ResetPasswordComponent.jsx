import React, { useState } from "react";
import axios from "axios";

const ResetPasswordComponent = () => {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleResetPassword = async () => {
    try {
      if (newPassword !== confirmPassword) {
        setMessage("Passwords do not match");
        return;
      }

      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/auth/reset-password`,
        {
          email,
          token,
          newPassword,
        }
      );

      if (response.status === 200) {
        setMessage("Password reset successfully");
      } else {
        setMessage("Failed to reset password");
      }
    } catch (error) {
      console.error("Error resetting password:", error);
      setMessage("Failed to reset password. Please try again later.");
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Reset Token:</label>
        <input
          type="text"
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />
      </div>
      <div>
        <label>New Password:</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>
      <div>
        <label>Confirm Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <button onClick={handleResetPassword}>Reset Password</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ResetPasswordComponent;
