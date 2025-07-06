import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-red-100 via-red-200 to-red-100 px-6 py-12">
      <div className="max-w-md text-center bg-white rounded-3xl shadow-xl p-10 relative overflow-hidden">
        {/* Floating decorative circles */}
        <div className="absolute top-[-60px] left-[-60px] w-40 h-40 bg-red-300 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-[-60px] right-[-60px] w-40 h-40 bg-red-300 rounded-full opacity-20 animate-pulse delay-1000"></div>

        <svg
          className="mx-auto mb-8 w-36 h-36 text-red-600 animate-bounce"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 64 64"
          stroke="currentColor"
          strokeWidth={2}
        >
          <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth={2} />
          <line
            x1="20"
            y1="20"
            x2="44"
            y2="44"
            stroke="currentColor"
            strokeWidth={3}
            strokeLinecap="round"
          />
          <line
            x1="44"
            y1="20"
            x2="20"
            y2="44"
            stroke="currentColor"
            strokeWidth={3}
            strokeLinecap="round"
          />
        </svg>

        <h1 className="text-6xl font-extrabold text-red-700 mb-4 drop-shadow-lg">
          Oops!
        </h1>
        <p className="text-lg text-red-600 mb-8">
          Sorry, we couldn’t find the page you’re looking for. It might have been removed or is temporarily unavailable.
        </p>
        <Link
          to="/home"
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg px-8 py-3 shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-300"
        >
          Take Me Home
        </Link>
      </div>
    </div>
  );
}

export default Error;
