// src/components/Signup.js
import React, { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { toast } from 'react-toastify';
import { useAuth } from '../contexts/AuthContext.jsx';
import { redirect, useNavigate } from 'react-router-dom';

const Signup = () => {
    const { signup, addUserToFirestore } = useAuth();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate(); 
  
    const handleEmailSignup = async (e) => {
      e.preventDefault();
      try {
        const userCredential=await signup(name, email, password, confirmPassword);

        const uid = userCredential.user.uid;
    const userData = {
      name,
      email,
    };

    await addUserToFirestore(uid, userData);
 
        toast.success('Signed up successfully!');
        navigate('/')
        
      } catch (error) {
        console.error(error.message);
        toast.error('Error signing up. Please try again.');
      }
    };

  const handleGoogleSignup = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const userCredential=await signInWithPopup(auth, provider);
      const uid = userCredential.user.uid;
    const userData = {
      name: userCredential.user.displayName,
      email: userCredential.user.email,
    };

    await addUserToFirestore(uid, userData);
 

      
      toast.success('Signed up with Google successfully!');
      navigate('/')
    } catch (error) {
      console.error(error.message);
      toast.error('Error signing up with Google. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-semibold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleEmailSignup}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Sign Up
          </button>
        </form>
        <button
          onClick={handleGoogleSignup}
          className="w-full mt-4 bg-red-500 text-white py-3 rounded-md hover:bg-red-600 focus:outline-none"
        >
          Sign Up with Google
        </button>
      </div>
    </div>
  );
};

export default Signup;
