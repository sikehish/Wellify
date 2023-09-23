// src/components/Login.js
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { useAuth } from '../contexts/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const { login, currentUser } = useAuth(); // Use the login function from AuthContext
  
  useEffect(() => {
    if (currentUser) {
      navigate('/') 
    }
  }, [currentUser]);

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password); // Use the login function
      toast.success('Logged in successfully!');
      navigate('/') 
    } catch (error) {
      console.error(error.message);
      toast.error('Error logging in. Please check your email and password.');
    }
  };
  
    const handleGoogleLogin = async () => {
      const provider = new GoogleAuthProvider();
      try {
        await signInWithPopup(auth, provider);
        toast.success('Logged in with Google successfully!');
        navigate('/')
      } catch (error) {
        console.error(error.message);
        toast.error('Error logging in with Google. Please try again.');
      }
    };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-semibold mb-6 text-center">Login</h2>
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
            className="w-full bg-primary text-background py-3 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Login
          </button>
        </form>
        <button
          onClick={handleGoogleLogin}
          className="w-full mt-4 bg-secondary text-primary py-3 rounded-md hover:bg-red-600 focus:outline-none"
        >
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
