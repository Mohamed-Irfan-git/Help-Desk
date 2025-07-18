import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // You imported `data` by mistake; removed it
import Header from "../components/Header";
import QuestionCard from "../components/questionCard";

function AllQuestionsPage() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/questions", {
      method: "GET",
      credentials: "include", // 👈 include cookies/session tokens
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.status);
        }
        return response.json();
      })
      .then((data) => {
        setQuestions(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading questions...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-100 to-blue-100 text-gray-800 py-20">
      {/* Navbar */}
      <Header />

      {/* Upper section {search box and Filtering} */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-6 py-8">
        <input
          type="text"
          placeholder="🔍 Search questions..."
          className="px-4 py-3 w-full md:w-1/3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-400 shadow-sm"
        />

        <select className="w-full md:w-1/5 p-3 rounded-xl bg-white border border-gray-300 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
          <option>Filter questions</option>
          <option>All</option>
          <option>Answered</option>
          <option>Unanswered</option>
          <option>My Questions</option>
        </select>
      </div>

      {/* Questions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 pb-12">
        {questions.map((question,index) => (
          <QuestionCard key={index} question={question} />
        ))}
      </div>
    </div>
  );
}

export default AllQuestionsPage;
