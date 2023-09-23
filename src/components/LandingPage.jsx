// src/components/LandingPage.js
import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-blue-100 min-h-screen flex flex-col justify-center items-center">
      <header className="bg-blue-500 text-white py-4 px-8 w-full">
        <h1 className="text-3xl font-semibold">Wellify</h1>
        <p className="text-sm">Connect with Mental Health Professionals</p>
      </header>
      <section className="container mx-auto mt-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Why Mental Health Matters</h2>
        <p className="text-gray-700">
          Mental health is crucial for overall well-being. Wellify is here to help you connect with
          mental health professionals, find support, and access valuable resources.
        </p>
      </section>
      <section className="bg-white py-8">
        <div className="container mx-auto flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="bg-blue-200 p-4 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-2">Connect with Professionals</h3>
              <p className="text-gray-700">
                Easily find and connect with mental health professionals remotely for support.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-blue-200 p-4 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-2">Like and Comment on Posts</h3>
              <p className="text-gray-700">
                Engage with mental health professionals' posts, share your thoughts, and provide
                support.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-blue-200 p-4 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-2">Blogs Section</h3>
              <p className="text-gray-700">
                Explore informative blogs and articles on mental health to stay informed and
                empowered.
              </p>
            </div>
            {/* Feature 4 */}
            <div className="bg-blue-200 p-4 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-2">Find Professionals Nearby</h3>
              <p className="text-gray-700">
                Discover mental health professionals in your area to connect with in person.
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-blue-500 text-white py-4 px-8 w-full mt-auto">
        <p className="text-center text-sm">&copy; 2023 Wellify. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
