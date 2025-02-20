import React from "react";

const SignupForm = ({ email, setEmail, password, setPassword, handleSignup }) => {
  return (
    <div className="sinup-form-main">
      <h2>Signup</h2>
        <form onSubmit={handleSignup}>
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
        <button type="submit">Sign Up</button>
        </form>
    </div>
  );
};

export default SignupForm;
