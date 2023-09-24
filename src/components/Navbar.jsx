// src/components/Navbar.js
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.jsx';

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-primary text-background p-4 md:p-4">
      <div className="container mx-auto max-w-10xl flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex flex-col">
            <Link to="/" className="text-2xl font-bold">
              Wellify
            </Link>
            <button
              type="button"
              className="block mt-2 text-gray-500 hover:text-white focus:text-white focus:outline-none sm:hidden"
              onClick={toggleMenu}
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {/* Hamburger menu SVG */}
              </svg>
            </button>
          </div>
        </div>
        <ul
          className={`${
            isOpen ? 'block' : 'hidden'
          } sm:flex sm:items-center sm:ml-6 space-x-4`}
        >
          {currentUser ? (
            <>
              <li>
                <NavLink to="/">Feed</NavLink>
              </li>
              <li>
                <NavLink to="/aroundme">Around Me</NavLink>
              </li>
              <li>
                <NavLink to="/search/therapists">Search</NavLink>
              </li>
              <li>
                <NavLink to="/gratitudejournal">Gratitude Journal</NavLink>
              </li>
              <li className="cursor-pointer" onClick={logout}>
                Logout
              </li>
              <li className="flex items-center">
                {currentUser.photoURL ? (
                  <img
                    src={currentUser.photoURL}
                    alt="Profile"
                    className="h-8 w-8 md:h-10 md:w-10 rounded-full object-cover"
                  />
                ) : (
                  currentUser.displayName
                    ? `Hello, ${currentUser.displayName}`
                    : `Hello, ${currentUser.email.split('@')[0]}`
                )}
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/signup">Sign Up</NavLink>
              </li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/admin">Admin</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
