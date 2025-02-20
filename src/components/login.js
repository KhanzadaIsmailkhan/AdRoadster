import React, { useState } from "react";
import { auth } from "../firebase"; // Importing the auth instance from firebase.js
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom"; // For navigation (optional, if you're using React Router)

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resetEmail, setResetEmail] = useState("");  // To store the email for password reset
  const [isForgotPassword, setIsForgotPassword] = useState(false); // State to toggle between login and reset

  const navigate = useNavigate(); // To navigate (if using React Router)

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert(`Congrats ${email}, you have logged in successfully!`);
      // Optionally, redirect user to another page after successful login
      // navigate("/dashboard");
    } catch (error) {
      console.error("Error logging in:", error);
      alert(error.message);
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, resetEmail);
      alert(`Password reset email sent to ${resetEmail}`);
      // Optionally, navigate to another page or reset the state
      setIsForgotPassword(false); // Hide the reset form after successful email sent
    } catch (error) {
      console.error("Error sending password reset email:", error);
      alert(error.message);
    }
  };

  return (
    <div className="sinup-form-main">
      {isForgotPassword ? (
        <form onSubmit={handleForgotPassword}>
          <h2>Forgot Password</h2>
          <input
            type="email"
            value={resetEmail}
            onChange={(e) => setResetEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <button type="submit">Send Reset Link</button>
          <button type="button" onClick={() => setIsForgotPassword(false)}>
            Back to Login
          </button>
        </form>
      ) : (
        <form onSubmit={handleLogin}>
        <h2>Login</h2>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button type="submit">Log In</button>
          <p className="forgot-btn">
            <button
              type="button"
              onClick={() => setIsForgotPassword(true)}
            >
              Forgot Password?
            </button>
          </p>
        </form>
      )}
    </div>
  );
};

export default Login;
