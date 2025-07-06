import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

function Home() {
    const topics = [
        { name: "Subjects", color: "blue" },
        { name: "Hostel", color: "green" },
        { name: "Exams", color: "purple" },
        { name: "Tech Help", color: "gray" },
        { name: "Clubs", color: "orange" },
        { name: "Canteen", color: "pink" },
    ];

    const helpers = [
        { name: "Senior A", points: 125, badges: ["Helpful Hero", "First Responder"] },
        { name: "Senior B", points: 110, badges: ["Tech Supporter"] },
        { name: "Senior C", points: 95, badges: [] },
    ];

    const questions = [
        "Where is the exam hall?",
        "How to connect hostel WiFi?",
        "How to apply for lab sessions?",
        "Can I change my elective subjects?",
        "What are the hostel rules?",
    ];

    const stats = {
        questionsAnswered: 450,
        activeUsers: 120,
        helpfulAnswers: 300,
    };

    const announcements = [
        "Midterm exams start next week — check the schedule!",
        "Hostel WiFi will be upgraded on July 15th.",
        "Join the Coding Club weekly meetup every Friday.",
    ];

    return (
        <>
            <Header />
            <div className="max-w-6xl mx-auto p-8 space-y-20 py-29">

                {/* Welcome Section */}
                <section className="text-center">
                    <h1 className="text-4xl font-extrabold mb-4 tracking-wide">
                        <span role="img" aria-label="wave">
                            👋
                        </span>{" "}
                        Welcome to Help Desk!
                    </h1>
                    <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
                        A friendly platform where juniors can ask questions and seniors provide guidance  all
                        to make your campus life easier and more connected.
                    </p>
                </section>

                {/* Main Actions */}
                <section className="flex flex-wrap justify-center gap-6">

                    <Link to="/ask-question">
                        <button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-md hover:scale-105 transform transition focus:outline-none focus:ring-4 focus:ring-blue-300">
                            <span role="img" aria-label="question">
                                ❓
                            </span>{" "}
                            Ask a Question
                        </button>
                    </Link>

                    <Link to="/all-questions">
                        <button className="flex items-center gap-2 bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-200 transition shadow-sm hover:shadow-md focus:outline-none focus:ring-4 focus:ring-gray-300">
                            <span role="img" aria-label="search">
                                🔍
                            </span>{" "}
                            Browse Questions
                        </button>
                    </Link>

                    <Link to="/leader-board">
                        <button className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-md hover:scale-105 transform transition focus:outline-none focus:ring-4 focus:ring-green-300">
                            <span role="img" aria-label="trophy">
                                🏆
                            </span>{" "}
                            View Leaderboard
                        </button>
                    </Link>

                </section>

                {/* Tip of the Day */}
                <section className="p-6 bg-yellow-50 border-l-8 border-yellow-400 rounded shadow-md max-w-4xl mx-auto transition hover:shadow-lg">
                    <h2 className="text-xl font-semibold mb-3 flex items-center gap-2 text-yellow-700">
                        <span role="img" aria-label="light bulb">
                            💡
                        </span>{" "}
                        Tip of the Day
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        Be specific when asking questions and tag relevant topics. Clear questions get faster and
                        better answers!
                    </p>
                </section>

                {/* Featured Topics */}
                <section>
                    <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                        <span role="img" aria-label="books">
                            📚
                        </span>{" "}
                        Featured Topics
                    </h2>
                    <div className="flex flex-wrap gap-4 justify-center">
                        {topics.map((topic) => (
                            <span
                                key={topic.name}
                                className={`
        cursor-pointer rounded-full px-5 py-2 font-semibold
        bg-${topic.color}-100 text-${topic.color}-700
        hover:bg-${topic.color}-200
        transition
        shadow-sm hover:shadow-md
        select-none
        `}
                                role="button"
                                tabIndex={0}
                                aria-label={`Topic: ${topic.name}`}
                            >
                                {topic.name}
                            </span>
                        ))}
                    </div>
                </section>

                {/* How It Works */}
                <section className="space-y-10">
                    <h2 className="text-3xl font-bold text-center">How It Works</h2>
                    <div className="grid gap-6 md:grid-cols-3">
                        {[
                            {
                                title: "Ask",
                                desc: "Choose a topic and post your question anonymously or by name.",
                                color: "bg-indigo-50",
                            },
                            {
                                title: "Get Help",
                                desc: "Peers and seniors answer and vote on helpful responses.",
                                color: "bg-green-50",
                            },
                            {
                                title: "Earn",
                                desc: "Earn karma points and badges for helping others.",
                                color: "bg-yellow-50",
                            },
                        ].map((step, idx) => (
                            <div
                                key={idx}
                                className={`${step.color} p-6 rounded-2xl shadow hover:shadow-md transition`}
                            >
                                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                                <p className="text-gray-600">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Top Helpers */}
                <section>
                    <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                        <span role="img" aria-label="trophy">
                            🏆
                        </span>{" "}
                        Top Helpers This Month
                    </h2>
                    <ul className="space-y-6 max-w-3xl mx-auto">
                        {helpers.map((helper, idx) => (
                            <li
                                key={helper.name}
                                className="flex items-center justify-between border rounded-xl p-5 shadow-md hover:shadow-xl transition"
                            >
                                <div>
                                    <p className="text-lg font-semibold flex items-center gap-2 select-none">
                                        {idx === 0 ? "🥇" : idx === 1 ? "🥈" : idx === 2 ? "🥉" : idx + 1}. {helper.name}
                                    </p>
                                    <p className="text-sm text-gray-600">Karma Points: {helper.points}</p>
                                    <div className="flex gap-2 mt-2 flex-wrap">
                                        {helper.badges.length > 0 ? (
                                            helper.badges.map((badge) => (
                                                <span
                                                    key={badge}
                                                    className="flex items-center gap-1 bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold shadow-sm select-none"
                                                    title={badge}
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        className="w-4 h-4"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    {badge}
                                                </span>
                                            ))
                                        ) : (
                                            <span className="text-gray-400 italic text-xs">No badges yet</span>
                                        )}
                                    </div>
                                </div>
                                <div
                                    className={`w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl select-none
        ${idx === 0 ? "bg-yellow-400" : idx === 1 ? "bg-gray-400" : "bg-pink-400"}`}
                                    aria-label={`Avatar for ${helper.name}`}
                                >
                                    {helper.name.charAt(0)}
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Quick Stats */}
                <section className="bg-gray-100 p-8 rounded-lg max-w-5xl mx-auto text-center shadow-md">
                    <h2 className="text-3xl font-semibold mb-8">📊 Quick Stats</h2>
                    <div className="flex flex-wrap justify-center gap-12 text-gray-700">
                        <div>
                            <p className="text-4xl font-bold text-blue-600">{stats.questionsAnswered}</p>
                            <p className="text-lg font-medium">Questions Answered</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold text-green-600">{stats.activeUsers}</p>
                            <p className="text-lg font-medium">Active Users</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold text-yellow-600">{stats.helpfulAnswers}</p>
                            <p className="text-lg font-medium">Helpful Answers</p>
                        </div>
                    </div>
                </section>

                {/* Announcements */}
                <section className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-red-600">
                        <span role="img" aria-label="announcement">
                            📢
                        </span>{" "}
                        Latest Announcements
                    </h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-800 text-lg">
                        {announcements.map((note, i) => (
                            <li key={i}>{note}</li>
                        ))}
                    </ul>
                </section>

                {/* Recently Asked Questions */}
                <section>
                    <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-blue-700">
                        <span role="img" aria-label="new">
                            🆕
                        </span>{" "}
                        Recently Asked Questions
                    </h2>
                    <ul className="space-y-3 max-w-3xl mx-auto">
                        {questions.map((question) => (
                            <li key={question}>
                                <a
                                    href="#"
                                    className="text-blue-600 underline hover:text-blue-800 transition focus:outline-none focus:ring-2 focus:ring-blue-300 rounded"
                                >
                                    {question}
                                </a>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Call to Action Banner */}
                <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg p-10 text-center shadow-lg max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4">Ready to help or need help?</h2>
                    <p className="text-lg mb-6 max-w-xl mx-auto">
                        Join the Peer Help Desk community and start asking or answering questions today!
                    </p>
                    <Link to="/">
                        <button className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition focus:outline-none focus:ring-4 focus:ring-white cursor-pointer">
                            Get Started
                        </button>
                    </Link>
                </section>

                {/* Footer */}
                <footer className="text-center text-gray-500 text-sm mt-20 border-t border-gray-300 pt-6 select-none">
                    © 2025 Help Desk — Helping juniors succeed!
                </footer>
            </div>

        </>
    );
}

export default Home;
