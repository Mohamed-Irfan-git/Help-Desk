import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Dialog } from '@headlessui/react';

function ResetPassword() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");

  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isUserNotFoundOpen, setIsUserNotFoundOpen] = useState(false);

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (newPassword.trim().length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
    if (!strongPasswordRegex.test(newPassword)) {
      setError("Password must include uppercase, lowercase, number, and special character.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/users/change-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, newPassword })
      });

      const data = await response.json();

      if (response.status === 200) {
        setError("");
        setIsSuccessOpen(true);
      } else if (response.status === 404) {
        setIsUserNotFoundOpen(true);
        setError("");
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("Network error. Please try again later.");
    }
  }

  useEffect(() => {
    if (isSuccessOpen) {
      const timer = setTimeout(() => {
        setIsSuccessOpen(false);
        navigate("/");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isSuccessOpen, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-rose-100 to-pink-200 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-8 sm:p-10 rounded-2xl shadow-2xl text-center">
        <h2 className="text-3xl font-bold text-rose-600 mb-4">🔒 Reset Password</h2>
        <p className="text-sm text-gray-600 mb-6">
          Enter your email and new password to reset access.
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-400"
          />

          <input
            type="password"
            placeholder="New password"
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-400"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-rose-500 hover:bg-rose-600 text-white font-semibold transition duration-200"
          >
            Change Password
          </button>

          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </form>

        <p className="mt-4 text-sm text-gray-600">
          Remember your password?{" "}
          <Link to="/" className="text-rose-500 font-medium hover:underline">
            Back to Login
          </Link>
        </p>
      </div>

      {/* Success Modal */}
      <Dialog
        open={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      >
        <Dialog.Panel className="w-full max-w-sm bg-white rounded-3xl p-8 shadow-2xl space-y-6 text-center">
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-500 flex items-center justify-center shadow-md">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <Dialog.Title className="text-2xl font-bold text-emerald-600">
            Password Changed!
          </Dialog.Title>
          <p className="text-gray-700">
            Your password has been updated successfully.<br />
            Redirecting you to login...
          </p>
        </Dialog.Panel>
      </Dialog>

      {/* User Not Found Modal */}
      <Dialog
        open={isUserNotFoundOpen}
        onClose={() => setIsUserNotFoundOpen(false)}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      >
        <Dialog.Panel className="w-full max-w-sm bg-white rounded-3xl p-8 shadow-2xl space-y-6 text-center">
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-full bg-rose-100 text-rose-500 flex items-center justify-center shadow-md">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <line x1="12" y1="8" x2="12" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="12" cy="16" r="1" fill="currentColor" />
              </svg>
            </div>
          </div>
          <Dialog.Title className="text-2xl font-bold text-rose-600">
            User Not Found
          </Dialog.Title>
          <p className="text-gray-700">
            We couldn't find an account with that email.<br />
            Please check and try again.
          </p>
          <button
            onClick={() => setIsUserNotFoundOpen(false)}
            className="mt-4 px-6 py-2 bg-rose-500 hover:bg-rose-600 text-white rounded-full font-semibold shadow-lg transition-all"
          >
            Try Again
          </button>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
}

export default ResetPassword;
