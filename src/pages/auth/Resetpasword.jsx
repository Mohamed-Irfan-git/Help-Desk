import React from 'react';

function ResetPassword() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-rose-100 to-pink-200 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-8 sm:p-10 rounded-2xl shadow-2xl text-center">
        <h2 className="text-3xl font-bold text-rose-600 mb-4">🔒 Reset Password</h2>
        <p className="text-sm text-gray-600 mb-6">
          Enter your email and your new password to reset access.
        </p>

        <form className="space-y-6">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-400"
          />

          <input
            type="password"
            placeholder="New password"
            className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-400"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-rose-500 hover:bg-rose-600 text-white font-semibold transition duration-200"
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
