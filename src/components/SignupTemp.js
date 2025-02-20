import React, { useState } from "react";
import { auth } from "../firebase"; // Importing the auth instance from firebase.js
import { createUserWithEmailAndPassword } from "firebase/auth";
import SignupForm from './sinup-form'

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Signup successful!");
    } catch (error) {
      console.error("Error signing up:", error);
      alert(error.message);
    }
  };

  return (
    <SignupForm 
      email={email} 
      setEmail={setEmail} 
      password={password} 
      setPassword={setPassword} 
      handleSignup={handleSignup}
    />
  );
};

export default Signup;
