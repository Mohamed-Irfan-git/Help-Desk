import React from 'react'

function ThankYou() {
    return (
        <div className="fixed inset-0 z-50 flex justify-center items-center backdrop-blur-sm bg-white/30">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center w-[80%] md:w-1/3 animate-bounce-in">
                <h2 className="text-xl font-bold text-rose-600 mb-2">🎉 Your answer has been added!</h2>
                <p className="text-gray-600 text-sm">Thank you for helping your peers!</p>
            </div>
        </div>
    )
}

export default ThankYou