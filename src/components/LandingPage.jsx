// src/components/LandingPage.js
import React from 'react';
import NotificationButton from '../NotificationButton';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="bg-background text-text flex flex-col">
      <main className="flex-grow">
        <section className="container mt-0 mx-auto p-10 md:p-20 lg:p-40 pt-10 md:pt-20 text-center text-white">
          <img src="/Wellify-logos_transparent.png" alt="Wellify" className="w-1/4 md:w-1/5 mx-auto mb-8 mt-0" />
          <h1 className="text-2xl md:text-4xl lg:text-5xl text-text font-extrabold mb-4">Connect with Mental Health Professionals</h1>
          <p className="text-base md:text-lg lg:text-xl text-primary mb-8">
            Discover a supportive community of mental health professionals and resources for your well-being.
            <NotificationButton />
          </p>
          <a href="#features" className="bg-primary hover:bg-text text-white py-2 px-6 rounded-full text-lg md:text-xl transition duration-300">
            Explore Features
          </a>
        </section>
        <section id="features" className="bg-white py-12">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-extrabold mb-5">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-y-20 lg:p-16 lg:gap-x-40">
              <div className="p-4 rounded-lg shadow-lg">
                <h3 className="text-6xl font-semibold mb-2">👩‍⚕️</h3>
                <h3 className="text-xl font-semibold mb-2">Find Professionals</h3>
                <p className="text-gray-700">
                  Easily connect with mental health professionals based on your preferences.
                </p>
              </div>
              <div className="p-4 rounded-lg shadow-lg">
                <h3 className="text-6xl font-semibold mb-2">✨</h3>
                <h3 className="text-xl font-semibold mb-2">Engage with Posts</h3>
                <p className="text-gray-700">
                  Like, comment, and engage with posts from professionals in the community.
                </p>
              </div>
              <div className="p-4 rounded-lg shadow-lg">
                <h3 className="text-6xl font-semibold mb-2">📝</h3>
                <h3 className="text-xl font-semibold mb-2">Gratitude Journal</h3>
                <p className="text-gray-700">
                Practice gratitude and improve your mental health and well-being.
                </p>
              </div>
              <div className="p-4 rounded-lg shadow-lg">
                <h3 className="text-6xl font-semibold mb-2">🔍</h3>
                <h3 className="text-xl font-semibold mb-2">Locate Nearby</h3>
                <p className="text-gray-700">
                  Discover mental health professionals nearby for in-person support.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="blogs" className="bg-background  py-12 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl text-text font-extrabold mb-8">Sign up now!</h2>
            <p className="text-lg text-primary mb-8">
              Join an exclusive commnity of people having unrestricted access to mental health info and positivity :)
            </p>
            <Link to="/signup" className="bg-white hover:bg-gray-200 text-blue-500 py-2 px-6 rounded-full text-lg transition duration-300">
              Sign Up
            </Link>
          </div>
        </section>
      </main>
      <footer className="bg-white py-4 text-center">
        <p className="text-gray-800 text-sm">&copy; 2023 Wellify. All rights not reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
