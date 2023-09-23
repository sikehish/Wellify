// src/components/LandingPage.js
import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-b from-blue-500 to-blue-300 flex flex-col">
      <main className="flex-grow">
        <section className="container mx-auto p-16 text-center text-white">
          <h1 className="text-4xl font-extrabold mb-4">Connect with Mental Health Professionals</h1>
          <p className="text-lg mb-8">
            Discover a supportive community of mental health professionals and resources for your well-being.
          </p>
          <a href="#features" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full text-lg transition duration-300">
            Explore Features
          </a>
        </section>
        <section id="features" className="bg-white py-12">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-extrabold mb-8">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Feature 1 */}
              <div className="p-4 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">Find Professionals</h3>
                <p className="text-gray-700">
                  Easily connect with mental health professionals based on your preferences.
                </p>
              </div>
              {/* Feature 2 */}
              <div className="p-4 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">Engage with Posts</h3>
                <p className="text-gray-700">
                  Like, comment, and engage with posts from professionals in the community.
                </p>
              </div>
              {/* Feature 3 */}
              <div className="p-4 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">Blogs & Resources</h3>
                <p className="text-gray-700">
                  Explore informative blogs and resources on mental health and well-being.
                </p>
              </div>
              {/* Feature 4 */}
              <div className="p-4 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">Locate Nearby</h3>
                <p className="text-gray-700">
                  Discover mental health professionals nearby for in-person support.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="blogs" className="bg-gradient-to-t from-blue-500 to-blue-300 py-12 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-extrabold mb-8">Explore Our Blogs</h2>
            <p className="text-lg mb-8">
              Stay informed with our latest articles and resources on mental health and well-being.
            </p>
            <a href="#" className="bg-white hover:bg-gray-200 text-blue-500 py-2 px-6 rounded-full text-lg transition duration-300">
              Read Blogs
            </a>
          </div>
        </section>
      </main>
      <footer className="bg-white py-4 text-center">
        <p className="text-gray-800 text-sm">&copy; 2023 Wellify. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
