import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Users, HelpCircle, Settings, FileQuestion, FileCheck2, AlertTriangle } from 'lucide-react';

function AdminDashBord() {
  const stats = {
    totalUsers: 154,
    totalQuestions: 412,
    pendingQuestions: 23,
    answeredQuestions: 389,
    totalAnswers: 986,
  };

  const cards = [
    {
      title: 'Total Users',
      value: stats.totalUsers,
      color: 'blue',
      icon: <Users className="w-6 h-6 text-blue-600" />,
    },
    {
      title: 'Total Questions',
      value: stats.totalQuestions,
      color: 'yellow',
      icon: <FileQuestion className="w-6 h-6 text-yellow-500" />,
    },
    {
      title: 'Answers Provided',
      value: stats.totalAnswers,
      color: 'green',
      icon: <FileCheck2 className="w-6 h-6 text-green-600" />,
    },
    {
      title: 'Answered Questions',
      value: stats.answeredQuestions,
      color: 'purple',
      icon: <ShieldCheck className="w-6 h-6 text-purple-600" />,
    },
    {
      title: 'Pending Questions',
      value: stats.pendingQuestions,
      color: 'red',
      icon: <AlertTriangle className="w-6 h-6 text-red-600" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 px-6 py-8">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-10">🛠️ Admin Dashboard</h1>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
        {cards.map((card, i) => (
          <div
            key={i}
            className={`bg-white border-l-4 border-${card.color}-500 p-6 rounded-xl shadow hover:shadow-xl transition`}
          >
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-semibold text-gray-700">{card.title}</h2>
              {card.icon}
            </div>
            <p className={`text-3xl font-bold text-${card.color}-700`}>{card.value}</p>
          </div>
        ))}
      </div>

      {/* Admin Controls */}
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">🔧 Admin Controls</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          <Link to="/admin/users">
            <div className="bg-white p-6 rounded-xl border hover:border-blue-500 shadow hover:shadow-lg transition cursor-pointer">
              <h4 className="text-blue-700 font-semibold text-lg">Manage Users</h4>
              <p className="text-sm text-gray-600 mt-2">View, edit, or block user accounts.</p>
            </div>
          </Link>

          <Link to="/admin/questions">
            <div className="bg-white p-6 rounded-xl border hover:border-yellow-500 shadow hover:shadow-lg transition cursor-pointer">
              <h4 className="text-yellow-700 font-semibold text-lg">Manage Questions</h4>
              <p className="text-sm text-gray-600 mt-2">Moderate or delete reported questions.</p>
            </div>
          </Link>

          <Link to="/admin/answers">
            <div className="bg-white p-6 rounded-xl border hover:border-green-500 shadow hover:shadow-lg transition cursor-pointer">
              <h4 className="text-green-700 font-semibold text-lg">Manage Answers</h4>
              <p className="text-sm text-gray-600 mt-2">Edit or remove inappropriate answers.</p>
            </div>
          </Link>

          <Link to="/admin/reports">
            <div className="bg-white p-6 rounded-xl border hover:border-red-500 shadow hover:shadow-lg transition cursor-pointer">
              <h4 className="text-red-600 font-semibold text-lg">Review Reports</h4>
              <p className="text-sm text-gray-600 mt-2">Review flagged content by users.</p>
            </div>
          </Link>

          <Link to="/admin/settings">
            <div className="bg-white p-6 rounded-xl border hover:border-gray-500 shadow hover:shadow-lg transition cursor-pointer">
              <h4 className="text-gray-700 font-semibold text-lg">Site Settings</h4>
              <p className="text-sm text-gray-600 mt-2">Configure global settings and roles.</p>
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
}

export default AdminDashBord;
