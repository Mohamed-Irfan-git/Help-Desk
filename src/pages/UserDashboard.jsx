import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';
import Header from '../components/Header';

function UserDashboard() {
  const [user, setUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [editQuestion, setEditQuestion] = useState(null);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedDescription, setEditedDescription] = useState('');
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  // eslint-disable-next-line no-unused-vars
  const [questions, setQuestions] = useState([]);
    // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(true);
    // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);

  // Load current user from sessionStorage
  useEffect(() => {
    const storedUser = sessionStorage.getItem('currentUser');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser({
        userId: parsedUser.userId,
        name: parsedUser.firstName + ' ' + parsedUser.lastName,
        email: parsedUser.email,
        badges: ['Helpful Hero', 'First Responder'],
        questionsAsked: 0,
        answersGiven: 0,
        myQuestions: [],
      });
    }
  }, []);

  // Fetch questions from backend
  const fetchQuestions = () => {
    setLoading(true);
    fetch("http://localhost:8080/api/questions", {
      method: "GET",
      credentials: "include",
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

        const storedUser = sessionStorage.getItem('currentUser');
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          const myQuestions = data.filter((q) => q.userId === parsedUser.userId);

          setUser((prevUser) => ({
            ...prevUser,
            myQuestions: myQuestions,
            questionsAsked: myQuestions.length,
          }));
        }
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const openEditModal = (question) => {
    setEditQuestion(question);
    setEditedTitle(question.title);
    setEditedDescription(question.description || '');
  };

  const handleSave = () => {
    if (!editQuestion) return;
    const updatedQuestion = {
      ...editQuestion,
      title: editedTitle,
      description: editedDescription,
    };

    fetch(`http://localhost:8080/api/questions/${editQuestion.questionId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedQuestion),
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to update: ${res.status}`);
        }
        return res.json();
      })
      .then(() => {
        alert('Question updated successfully!');
        setEditQuestion(null);
        setSearchTerm('');
        fetchQuestions();
      })
      .catch((err) => {
        alert('Error updating question: ' + err.message);
      });
  };

  const handleDelete = (question) => {
    if (!window.confirm(`Are you sure you want to delete the question:\n"${question.title}"?`)) return;

    fetch(`http://localhost:8080/api/questions/${question.questionId}`, {
      method: 'DELETE',
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to delete: ${res.status}`);
        }
        alert('Question deleted successfully!');
        setEditQuestion(null);
        setSelectedQuestion(null);
        setSearchTerm('');
        fetchQuestions();
      })
      .catch((err) => {
        alert('Error deleting question: ' + err.message);
      });
  };

  const handleCardClick = (question) => {
    setSelectedQuestion(question);
  };

  if (!user) return <p className="pt-24 text-center text-gray-500">Loading user data...</p>;

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 pt-24 px-4 pb-10">
        <div className="max-w-6xl mx-auto space-y-10">
          {/* Profile */}
          <div className="bg-white rounded-xl p-6 shadow-md space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="w-16 h-16 bg-yellow-400 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                👤
              </div>
              <div>
                <p className="text-xl font-semibold">{user.name}</p>
                <p className="text-sm text-gray-600">📧 {user.email}</p>
                <p className="mt-2 text-sm text-gray-700">
                  🏅 Badges:{' '}
                  {user.badges.map((badge, idx) => (
                    <span
                      key={idx}
                      className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs mr-2"
                    >
                      {badge}
                    </span>
                  ))}
                </p>
              </div>
            </div>

            <div className="pt-2">
              <h3 className="font-semibold text-gray-800 mb-1">📊 Stats</h3>
              <p className="text-sm">Questions Asked: {user.questionsAsked}</p>
              <p className="text-sm">Answers Given: {user.answersGiven}</p>
            </div>
          </div>

          {/* My Questions */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
              <h2 className="text-xl font-semibold text-gray-800">📝 My Questions</h2>
              <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                <input
                  type="text"
                  placeholder="🔍 Search my questions..."
                  className="w-full sm:w-64 px-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchTerm}
                  onChange={handleSearchInputChange}
                />
                <Link to="/ask-question">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm transition">
                    ➕ Ask New Question
                  </button>
                </Link>
              </div>
            </div>

            {/* Questions List or No Data */}
            {user.myQuestions.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {user.myQuestions
                  .filter((q) =>
                    q.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    (q.description && q.description.toLowerCase().includes(searchTerm.toLowerCase()))
                  )
                  .map((q, idx) => (
                    <div
                      key={idx}
                      onClick={() => handleCardClick(q)}
                      className={`cursor-pointer p-4 rounded-xl border-l-4 shadow-sm hover:scale-[1.02] transition ${
                        q.status === 'Answered' ? 'bg-green-50 border-green-500' : 'bg-yellow-50 border-yellow-500'
                      } relative`}
                    >
                      <p className="font-medium text-gray-800 truncate" title={q.title}>
                        ❓ {q.title}
                      </p>
                      <p className="text-sm text-gray-600 truncate" title={q.description}>
                        📄 {q.description || 'No description'}
                      </p>
                      <p className="text-sm text-gray-600">
                        Status:{' '}
                        <span className={`font-semibold ${q.status === 'Answered' ? 'text-green-600' : 'text-yellow-700'}`}>
                          {q.status}
                        </span>
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        📅 {new Date(q.createdDate).toDateString()}
                      </p>

                      {/* Edit button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          openEditModal(q);
                        }}
                        className="absolute top-2 right-8 text-blue-600 hover:text-blue-800 text-lg font-bold"
                        title="Edit Question"
                        aria-label="Edit Question"
                      >
                        ✏️
                      </button>

                      {/* Delete button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDelete(q);
                        }}
                        className="absolute top-2 right-2 text-red-600 hover:text-red-800 text-lg font-bold"
                        title="Delete Question"
                        aria-label="Delete Question"
                      >
                        &times;
                      </button>
                    </div>
                  ))}
              </div>
            ) : (
              <p className="text-center text-gray-500 py-6">🚫 No questions found.</p>
            )}
          </div>
        </div>

        {/* Edit Modal */}
        <Transition appear show={!!editQuestion} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-50 overflow-y-auto"
            onClose={() => setEditQuestion(null)}
          >
            <div className="min-h-screen px-4 text-center bg-black/30 backdrop-blur-sm">
              {/* Trick to center dialog */}
              <span
                className="inline-block h-screen align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>

              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="inline-block w-full max-w-lg p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white rounded-xl shadow-xl">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-semibold leading-6 text-gray-900 mb-4"
                  >
                    ✏️ Edit Question
                  </Dialog.Title>

                  <div className="mb-3">
                    <label className="text-sm block mb-1">Title</label>
                    <input
                      type="text"
                      className="w-full border rounded px-3 py-2"
                      value={editedTitle}
                      onChange={(e) => setEditedTitle(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="text-sm block mb-1">Description</label>
                    <textarea
                      className="w-full border rounded px-3 py-2"
                      rows={4}
                      value={editedDescription}
                      onChange={(e) => setEditedDescription(e.target.value)}
                    />
                  </div>

                  <p className="text-sm text-gray-700 mb-4">Status: {editQuestion?.status}</p>
                  <p className="text-xs text-gray-500 mb-6">
                    📅 {editQuestion && new Date(editQuestion.createdDate).toDateString()}
                  </p>

                  <div className="flex justify-between gap-2">
                    <button
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
                      onClick={() => handleDelete(editQuestion)}
                    >
                      Delete
                    </button>
                    <div className="flex gap-2">
                      <button
                        className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded"
                        onClick={() => setEditQuestion(null)}
                      >
                        Cancel
                      </button>
                      <button
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                        onClick={handleSave}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>

        {/* View Answer Modal */}
        <Transition appear show={!!selectedQuestion} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-50 overflow-y-auto"
            onClose={() => setSelectedQuestion(null)}
          >
            <div className="min-h-screen px-4 text-center bg-black/30 backdrop-blur-sm">
              <span
                className="inline-block h-screen align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>

              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="inline-block w-full max-w-lg p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white rounded-xl shadow-xl">
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-semibold leading-6 text-gray-900 mb-4"
                  >
                    📖 Question Details
                  </Dialog.Title>

                  <p className="mb-2"><strong>❓ Title:</strong> {selectedQuestion?.title}</p>
                  <p className="mb-2"><strong>📄 Description:</strong> {selectedQuestion?.description || 'No description'}</p>
                  <p className="mb-2">
                    <strong>📅 Date:</strong>{' '}
                    {selectedQuestion && new Date(selectedQuestion.createdDate).toDateString()}
                  </p>
                  <p className="mb-2">
                    <strong>📌 Status:</strong>{' '}
                    <span
                      className={`font-semibold ${
                        selectedQuestion?.status === 'Answered' ? 'text-green-600' : 'text-yellow-700'
                      }`}
                    >
                      {selectedQuestion?.status}
                    </span>
                  </p>

                  {selectedQuestion?.answers && selectedQuestion.answers.length > 0 ? (
                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-800 mb-2">✅ Answers:</h4>
                      <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
                        {selectedQuestion.answers.map((ans, i) => (
                          <li key={i}>{ans.answer}</li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <p className="text-sm text-red-500 mt-4">No answers provided yet.</p>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </div>
    </>
  );
}

export default UserDashboard;