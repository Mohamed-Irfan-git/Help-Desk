import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-gradient-to-tr from-rose-100 to-pink-200">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-6xl flex flex-col md:flex-row items-center gap-10 p-6 md:p-12 lg:p-16">

        {/* Left section: Form */}
        <div className="w-full md:w-1/2 space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-rose-600 mb-2">Welcome Back!</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Login to your Help Desk account and continue learning, sharing, and helping.
            </p>
          </div>

          <div className="space-y-5">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-5 py-3 rounded-xl bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-400 transition"
            />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-5 py-3 rounded-xl bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-400 transition"
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm text-gray-700 gap-3">
            <Link to="/reset-pasword" className="hover:underline text-rose-500">Forgot password?</Link>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox text-rose-500" />
              Remember Me
            </label>
          </div>

          <button className="w-full bg-rose-500 hover:bg-rose-600 text-white py-3 rounded-xl text-lg font-semibold transition">
            Login
          </button>

          <p className="text-center text-sm pt-3 text-gray-600">
            Not a member?{' '}
            <Link to="/register" className="font-medium text-rose-600 hover:underline">
              Register Now
            </Link>
          </p>
        </div>

        {/* Right section: Image/Graphic */}
        <div className="w-full md:w-1/2 h-60 md:h-[24rem] lg:h-[28rem] rounded-xl overflow-hidden shadow-md">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80"
            alt="Help Desk"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
