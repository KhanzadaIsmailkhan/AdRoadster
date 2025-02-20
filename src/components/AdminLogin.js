import React, { useState } from "react";
import { auth } from "../firebase"; // Importing the auth instance from firebase.js
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth"; // Import firebase authentication methods
import { Link, useNavigate } from "react-router-dom"; // For navigation and routing

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isForgotPassword, setIsForgotPassword] = useState(false); // For toggling between login and reset password form
  const [resetEmail, setResetEmail] = useState(""); // For storing email for password reset
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For toggling the menu on mobile view
  const navigate = useNavigate();

  // The admin email you want to allow access to the admin page
  const ADMIN_EMAIL = "admin@example.com";

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      if (auth.currentUser && auth.currentUser.email === ADMIN_EMAIL) {
        // If the logged-in user's email matches the admin email, redirect to the admin page
        alert(`Welcome Admin: ${email}`);
        navigate("/admin-dashboard"); // Redirect to admin dashboard
      } else {
        alert("Access denied: You are not authorized to access the admin page.");
        // Optionally, log out the user if they are not the admin
        await auth.signOut();
      }
    } catch (error) {
      console.error("Login error:", error);
      alert(error.message);
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, resetEmail);
      alert(`Password reset email sent to ${resetEmail}`);
      setIsForgotPassword(false); // Hide reset form after email is sent
    } catch (error) {
      console.error("Error sending reset email:", error);
      alert(error.message);
    }
  };

  return (
    <div className="sinup-form-main">
      {/* Mobile Menu Toggle Button */}
      {/* Admin Login Form */}
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
          <h2>Admin Login</h2>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Admin Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button type="submit">Login</button>
          <p className="forgot-btn">
            <button type="button" onClick={() => setIsForgotPassword(true)}>
              Forgot Password?
            </button>
          </p>
        </form>
      )}
    </div>
  );
};

export default AdminLogin;
