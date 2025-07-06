import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import ThankYou from '../components/ThankYou';
import AnswerModal from '../components/AnswerModal';

function SingleQuestionPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [answer, setAnswer] = useState('');
    const [isAnonymous, setIsAnonymous] = useState(false);
    const [showThankYou, setShowThankYou] = useState(false);

    const handleSubmit = () => {
        console.log({
            answer,
            mode: isAnonymous ? 'Anonymous' : 'Regular',
        });

        setIsModalOpen(false);
        setAnswer('');
        setIsAnonymous(false);

        setShowThankYou(true);
        setTimeout(() => setShowThankYou(false), 3000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-rose-100 via-white to-blue-100 text-black font-sans">
            <Header />
            <div className="py-9"></div>

            <div className="mt-6 px-6 md:px-16">
                <Link to="/all-questions">
                    <button className="flex items-center gap-2 text-base text-rose-600 hover:text-rose-800 transition duration-200 cursor-pointer">
                        <span>🔙</span>
                        <span>Back to All Questions</span>
                    </button>
                </Link>
            </div>

            <div className="flex justify-center px-6 md:px-0 py-1">
                <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl p-8 w-full md:w-1/2 space-y-8 border border-rose-100 transition hover:shadow-[0_0_20px_rgba(244,63,94,0.3)]">

                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-rose-500 text-white rounded-full flex items-center justify-center text-lg font-bold shadow-inner">
                            B
                        </div>
                        <h2 className="text-2xl font-semibold text-gray-800">
                            How to apply for lab sessions?
                        </h2>
                    </div>

                    <div className="space-y-4 text-gray-700">
                        <div>
                            <p className="font-medium text-gray-600">Description:</p>
                            <p className="italic text-base">"I want to know how to apply for lab slots..."</p>
                        </div>

                        <div>
                            <p className="font-medium text-gray-600">Category:</p>
                            <p className="text-rose-600 font-semibold text-base">#Timetable #Subjects</p>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-between text-base text-gray-700 items-center gap-2">
                            <p>📅 Posted: July 5, 2025</p>
                            <p className="font-semibold flex items-center">
                                Status:
                                <span className="ml-3 inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold shadow-md">
                                    ✅ Answered
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className="bg-white/60 rounded-xl p-4 shadow-inner border border-gray-200">
                        <h3 className="text-lg font-semibold text-rose-600 mb-3">📢 Answers</h3>
                        <div className="space-y-2">
                            <div className="border-l-4 border-rose-400 pl-4">
                                <p className="font-medium text-gray-800">Senior B</p>
                                <p className="italic text-gray-700 text-base">"Check with your subject coordinator."</p>
                                <p className="text-xs text-gray-500 mt-1">🕒 July 6</p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center pt-2">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="bg-gradient-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white py-3 px-6 rounded-full text-sm shadow-md transition-all duration-300 transform hover:scale-105"
                        >
                            💬 You want to answer
                        </button>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <AnswerModal
                    answer={answer}
                    setAnswer={setAnswer}
                    isAnonymous={isAnonymous}
                    setIsAnonymous={setIsAnonymous}
                    onClose={() => setIsModalOpen(false)}
                    onSubmit={handleSubmit}
                />
            )}

            {showThankYou && <ThankYou />}
        </div>
    );
}

export default SingleQuestionPage;