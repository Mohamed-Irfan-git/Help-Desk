import React from 'react';

// eslint-disable-next-line no-unused-vars
function AnswerModal({ answer, setAnswer, isAnonymous, setIsAnonymous, onClose, onSubmit }) {
  const isAnswerEmpty = answer.trim() === '';

  return (
    <div className="fixed inset-0 z-50 backdrop-blur-sm bg-white/30 flex justify-center items-center">
      <div className="bg-white rounded-2xl p-6 w-[90%] md:w-1/3 shadow-xl space-y-4 relative">
        {/* Close Button */}
        <button
          className="absolute top-3 right-4 text-gray-400 hover:text-gray-600 text-xl"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>

        {/* Modal Heading */}
        <h3 className="text-xl font-semibold text-rose-600">💡 Submit Your Answer</h3>

        {/* Textarea */}
        <textarea
          className={`w-full border ${isAnswerEmpty ? 'border-red-400' : 'border-rose-300'} rounded-lg p-3 text-base focus:outline-none focus:ring-2 ${
            isAnswerEmpty ? 'focus:ring-red-400' : 'focus:ring-rose-400'
          }`}
          rows={5}
          placeholder="Type your answer here..."
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />

        {isAnswerEmpty && <p className="text-sm text-red-500 -mt-2">Answer is required.</p>}

        {/* Toggle Mode */}
        {/* <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-gray-600">
            Mode: {isAnonymous ? 'Anonymous' : 'Regular'}
          </label>
          <button
            onClick={() => setIsAnonymous(!isAnonymous)}
            className="bg-rose-100 text-rose-700 py-1 px-3 rounded-full text-sm hover:bg-rose-200 transition"
          >
            Toggle to {isAnonymous ? 'Regular' : 'Anonymous'}
          </button>
        </div> */}

        {/* Submit Button */}
        <div className="text-center pt-2">
          <button
            onClick={onSubmit}
            disabled={isAnswerEmpty}
            className={`py-2 px-6 rounded-full shadow-md transition transform ${
              isAnswerEmpty
                ? 'bg-gray-300 text-white cursor-not-allowed'
                : 'bg-gradient-to-r from-rose-500 to-pink-600 text-white hover:scale-105'
            }`}
          >
            ✅ Submit Answer
          </button>
        </div>
      </div>
    </div>
  );
}

export default AnswerModal;
