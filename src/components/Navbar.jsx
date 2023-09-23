// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.jsx';

const Navbar = () => {
  const { currentUser, logout } = useAuth();


  return (
    <nav className="bg-primary text-background p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Wellify</Link>
        <ul className="flex justify-around space-x-8 items-center">
          {currentUser ? (
            <>
              <li><Link to="/">Feed</Link></li>
              <li className="cursor-pointer" onClick={logout}>Logout</li>
              <li>{currentUser.photoURL ? (
                <img
                src={currentUser.photoURL}
                alt="Profile"
                className="h-10 w-10 rounded-full object-cover"
                />
                ) : currentUser.displayName ? `Hello, ${currentUser.displayName}` : `Hello, ${currentUser.email.split('@')[0]}`}</li>   
            </>
          ) : (
            <>
              <li><Link to="/signup">Sign Up</Link></li>
               <li><Link to="/login">Login</Link></li>  
               <li><Link to="/">Home</Link></li>   
               <li><Link to="/admin">Admin</Link></li>   
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
