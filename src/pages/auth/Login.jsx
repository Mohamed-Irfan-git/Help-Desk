import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Dialog } from '@headlessui/react';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [userNotFound, setUserNotFound] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null); 

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const usersArray = JSON.parse(localStorage.getItem('usersArray')) || [];
    const LoggeduserArray = JSON.parse(localStorage.getItem('LoggedUserArray')) || [];

    const currentUser = usersArray.find(
      (user) => user.email === email && user.password === password
    );

    if (currentUser) {
      LoggeduserArray.push(currentUser);
      localStorage.setItem('LoggedUserArray', JSON.stringify(LoggeduserArray));
      setLoggedInUser(currentUser);
      clearInputs();
      setLoginSuccess(true);
    } else {
      setUserNotFound(true);
    }
  }

  function clearInputs() {
    setEmail("");
    setPassword("");
    setShowPassword(false);
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-gradient-to-tr from-rose-100 to-pink-200">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-6xl flex flex-col md:flex-row items-center gap-10 p-6 md:p-12 lg:p-16">

        {/* Form */}
        <div className="w-full md:w-1/2 space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-rose-600 mb-2">Welcome Back!</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Login to your Help Desk account and continue learning, sharing, and helping.
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-5 py-3 rounded-xl bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-400"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full px-4 py-3 rounded-xl bg-gray-100 border border-gray-300 pr-12"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-600 hover:text-rose-600"
                tabIndex={-1}
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10 0-1.045.172-2.049.488-3.002M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm text-gray-700 gap-3">
              <Link to="/reset-password" className="hover:underline text-rose-500">Forgot password?</Link>
            </div>

            <button type='submit' className="w-full bg-rose-500 hover:bg-rose-600 text-white py-3 rounded-xl text-lg font-semibold transition">
              Login
            </button>

            <p className="text-center text-sm pt-3 text-gray-600">
              Not a member?{' '}
              <Link to="/register" className="font-medium text-rose-600 hover:underline">
                Register Now
              </Link>
            </p>
          </form>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 h-60 md:h-[24rem] lg:h-[28rem] rounded-xl overflow-hidden shadow-md">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80"
            alt="Help Desk"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* User Not Found Modal */}
      <Dialog
        open={userNotFound}
        onClose={() => setUserNotFound(false)}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      >
        <Dialog.Panel className="w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl space-y-5 text-center">
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-full bg-rose-100 text-rose-500 flex items-center justify-center shadow-md">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-.01-8a4 4 0 110 8 4 4 0 010-8z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a9 9 0 100 18 9 9 0 000-18z" />
              </svg>
            </div>
          </div>
          <Dialog.Title className="text-2xl font-bold text-rose-600">User Not Found</Dialog.Title>
          <p className="text-gray-700">We couldn’t find an account with that email and password.</p>
          <button
            onClick={() => setUserNotFound(false)}
            className="mt-4 px-6 py-2 bg-rose-500 hover:bg-rose-600 text-white rounded-full font-semibold shadow-lg transition-all"
          >
            Try Again
          </button>
        </Dialog.Panel>
      </Dialog>

      {/* Login Success Modal */}
      <Dialog
        open={loginSuccess}
        onClose={() => setLoginSuccess(false)}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      >
        <Dialog.Panel className="w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl space-y-5 text-center">
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-500 flex items-center justify-center shadow-md">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <Dialog.Title className="text-2xl font-bold text-emerald-600">Login Successful</Dialog.Title>
          <p className="text-gray-700">
            Welcome back{loggedInUser?.name ? `, ${loggedInUser.name}` : ""}!
          </p>
          <button
            onClick={() => {
              setLoginSuccess(false);
              navigate("/home");
            }}
            className="mt-4 px-6 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full font-semibold shadow-lg transition-all"
          >
            Continue
          </button>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
}

export default Login;
