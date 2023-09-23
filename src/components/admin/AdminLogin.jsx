// src/components/Login.js
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from '../../contexts/AuthContext.jsx';
import {  useNavigate } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { auth, db } from '../../firebase/firebase.js';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const { login } = useAuth(); // Use the login function from AuthContext

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
        console.log(email)
    const q = query(collection(db, "admins"), where("email", "==", email));
    const querySnapshot = await getDocs(q);
    if(querySnapshot["_snapshot"]["docChanges"].length==1) await login(email, password);
    else throw new Error("No admin access!") 
      toast.success('Logged in successfully!');
      navigate('/')
    } catch (error) {
      console.error(error.message);
      if(error.message.startsWith("No")) toast.error(error.message)
      else toast.error('Error logging in. Please check your email and password.');
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const user = await signInWithPopup(auth, provider);
    //   console.log(user._tokenResponse.email)
      const q = query(collection(db, "admins"), where("email", "==",user._tokenResponse.email ));
    const querySnapshot = await getDocs(q);
    if(querySnapshot["_snapshot"]["docChanges"].length==1) await login(email, password);
    else throw new Error("No admin access!") 
      toast.success('Logged in with Google successfully!');
      navigate('/admin')
    } catch (error) {
      console.error(error.message);
      toast.error('Error logging in with Google. Please try again.');
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-semibold mb-6 text-center">Admin Login</h2>
        <form onSubmit={handleEmailLogin}>
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
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Login
          </button>
          </form>
          <button
          onClick={handleGoogleLogin}
          className="w-full mt-4 bg-red-500 text-white py-3 rounded-md hover:bg-red-600 focus:outline-none"
        >
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;
