// src/components/Signup.js
import React, { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { toast } from 'react-toastify';
import { useAuth } from '../contexts/AuthContext.jsx';
import { redirect, useNavigate } from 'react-router-dom';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import Map from './Map.jsx';

const Signup = () => {
  // User form states
  const { signup, addUserToFirestore, addProfessionalToFirestore } = useAuth();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const navigate = useNavigate(); 

  // Form states
  const [proForm, setProForm] = useState(false);

  // Professionals Form (Extra fields)
  const [licenseNumber, setLicenseNumber] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [selectedGender, setSelectedGender] = useState('');

  const handleFormSwitch = async () => {
    setProForm(prevState => !prevState);

  }
  const handleProSignup = async (e) => {
    e.preventDefault();
    // Validation
    if (!email || !name || !password || !confirmPassword || !profilePicture) {
      toast.error('Please fill in all fields');
      return;
    }
  
    // Check if email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Invalid email address');
      return;
    }
  
    // Check if password meets requirements
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (!passwordRegex.test(password)) {
      toast.error('Password must contain at least 8 characters, including at least 1 uppercase letter, 1 lowercase letter, and 1 number');
      return;
    }
  
    // Check if passwords match
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    try {
      // Upload profile picture to Firebase Storage
      const storage = getStorage();
      const storageRef = ref(storage, `profilePictures/${email}`);
      await uploadBytes(storageRef, profilePicture);
      const profilePictureUrl = await getDownloadURL(storageRef);
      const userCredential=await signup(name, email, password, confirmPassword, profilePictureUrl, licenseNumber, location, description, selectedGender);
      const uid = userCredential.user.uid;
      const userData = {
        name,
        email,
        profilePicture: profilePictureUrl,
        licenseNumber,
        location,
        description,
        gender: selectedGender,
        verified: false
      };
      await addProfessionalToFirestore(uid, userData);
      toast.success('Signed up successfully!');
      navigate('/')
    } catch (error) {
      console.error(error.message);
      toast.error('Error signing up. Please try again.');
    }
  };
   const handleProfilePictureChange = async (e) => {
    const file = e.target.files[0];
    setProfilePicture(file);
  };
  const handleEmailSignup = async (e) => {
    e.preventDefault();
    // Validation
    if (!email || !name || !password || !confirmPassword || !profilePicture) {
      toast.error('Please fill in all fields');
      return;
    }
  
    // Check if email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Invalid email address');
      return;
    }
  
    // Check if password meets requirements
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (!passwordRegex.test(password)) {
      toast.error('Password must contain at least 8 characters, including at least 1 uppercase letter, 1 lowercase letter, and 1 number');
      return;
    }
  
    // Check if passwords match
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    try {
      // Upload profile picture to Firebase Storage
      const storage = getStorage();
      const storageRef = ref(storage, `profilePictures/${email}`);
      await uploadBytes(storageRef, profilePicture);
      const profilePictureUrl = await getDownloadURL(storageRef);
      const userCredential=await signup(name, email, password, confirmPassword);
      const uid = userCredential.user.uid;
      const userData = {
        name,
        email,
        profilePicture: profilePictureUrl
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
        profilePicture: userCredential.user.photoURL,
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

  return proForm ? 
    (    
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-semibold mb-6 text-center">Sign Up</h2>
        <h3 className='text-l mb-6 font-light text-center'>Registered Mental Health Professional</h3>
        <form onSubmit={handleProSignup}>
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
            <select
              id="genderSelect"
              value={selectedGender}
              onChange={(e) => setSelectedGender(e.target.value)}
              className="w-full p-3 mt-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="" className='font-light'>Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Contact Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="License Number"
              value={licenseNumber}
              onChange={(e) => setLicenseNumber(e.target.value)}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
            {/* <Map className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
            address={location} setAddress={setLocation}/> */}
          </div>

          <div className="mb-4">
            <input
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="mb-4 flex items-center justify-center">
            <p className='w-1/3 text-l font-light text-left'>Profile Picture</p>
            <input
              type="file"
              id="profilePicture"
              onChange={handleProfilePictureChange}
              className="w-1/3 text-l p-1 pr-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          {profilePicture && (<img src={URL.createObjectURL(profilePicture)} alt="profile" className="w-1/3 h-1/3 mx-auto mb-6 rounded-full" />)}
          <button
            type="submit"
            className="w-full bg-primary text-background py-3 rounded-md focus:outline-none"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-12 text-sm text-center font-light hover:underline hover:cursor-pointer" onClick={handleFormSwitch}> Signup as a user</p>
      </div>
      </div>
    )
    :
    (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-3xl font-semibold mb-6 text-center">Sign Up</h2>
          <h3 className='text-l mb-6 font-light text-center'>New User</h3>
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
            <div className="mb-4 flex items-center justify-center">
              <p className='w-1/3 text-l font-light text-left'>Profile Picture</p>
              <input
                type="file"
                id="profilePicture"
                onChange={handleProfilePictureChange}
                className="w-1/3 text-l p-1 pr-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            {profilePicture && (<img src={URL.createObjectURL(profilePicture)} alt="profile" className="w-1/3 h-1/3 mx-auto mb-4 rounded-full" />)}
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
              className="w-full bg-primary text-background py-3 rounded-md focus:outline-none"
            >
              Sign Up
            </button>
          </form>
          <button
            onClick={handleGoogleSignup}
            className="w-full mt-4 bg-secondary text-primary py-3 rounded-md hover:bg-red-600 focus:outline-none"
          >
            Sign Up with Google
          </button>
          <p className="mt-12 text-sm text-center font-light hover:underline hover:cursor-pointer" onClick={handleFormSwitch}> Signup as a registered mental health professional</p>
        </div>
      </div>
  );
};

export default Signup;
