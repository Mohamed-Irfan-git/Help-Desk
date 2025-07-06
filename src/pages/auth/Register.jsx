import React from 'react';

function Register() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-pink-100 to-rose-200 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-6xl bg-white text-black rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden">

        {/* Left Form Section */}
        <div className="flex-1 p-6 sm:p-10 lg:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-rose-600">Create an Account</h2>
          <p className="text-sm text-gray-600">
            Join our Peer Help Desk and start asking, answering, and helping your peers today!
          </p>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-xl bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-400"
            />

            <select className="w-full px-4 py-3 rounded-xl bg-gray-100 text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-400">
              <option disabled selected>Choose Department</option>
              <option>ICT</option>
              <option>ET</option>
              <option>BST</option>
            </select>

            <select className="w-full px-4 py-3 rounded-xl bg-gray-100 text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-400">
              <option disabled selected>Choose Year</option>
              <option>First Year</option>
              <option>Second Year</option>
              <option>Third Year</option>
              <option>Fourth Year</option>
            </select>

            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-xl bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-400"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-xl bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-400"
            />

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-semibold transition"
            >
              Sign Up
            </button>
          </form>
        </div>

        {/* Right Image/Illustration Section */}
        <div className="flex-1 bg-cover bg-center hidden md:block" style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581091870620-6cdbbadd3d8c?auto=format&fit=crop&w=800&q=80')"
        }}
        >
        </div>
      </div>
    </div>
  );
}

export default Register;
