import React from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
      <div className="flex flex-col lg:flex-row gap-12 items-center w-full max-w-6xl">
        
        <div className="flex-1 text-center space-y-6">
          
          <div className="flex justify-center">
          <img src="/lzy_logo-Cl4gUC2f.png" alt="LzyCrazy Banner" className="h-48 object-contain" />
          </div>

          <input
            type="text"
            placeholder="🔍 Search here..."
            className="w-full max-w-md px-6 py-3 rounded-full shadow-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            {["About Us", "LzyCrazy Services", "LzyCrazy Marketplace", "We Are Hiring", "LzyCrazy News"].map((tag, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full bg-white shadow text-sm font-medium cursor-pointer hover:bg-gray-100"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        
        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
          <div className="space-y-4">
            <div className="relative">
              <FaEnvelope className="absolute left-4 top-3.5 text-gray-400" />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300"
              />
            </div>
            <div className="relative">
              <FaLock className="absolute left-4 top-3.5 text-gray-400" />
              <input
                type="password"
                placeholder="Password"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300"
              />
              <a href="#" className="text-sm text-blue-500 float-right mt-1 hover:underline">Forgot Password?</a>
            </div>
            <button className="w-full py-3 rounded-md bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:opacity-90">
              Login
            </button>
            <div className="flex items-center gap-2 text-sm text-gray-400 my-4">
              <hr className="flex-1" />
              or continue with
              <hr className="flex-1" />
            </div>
            <div className="flex gap-4">
              <button className="flex-1 flex items-center justify-center gap-2 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50">
                <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google" className="h-5 w-5" />
                <span className="text-sm font-medium text-gray-700">Google</span>
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="Facebook" className="h-5 w-5" />
                <span className="text-sm font-medium text-gray-700">Facebook</span>
              </button>
            </div>
            <button className="w-full mt-6 py-3 rounded-md bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:opacity-90">
              Create New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;