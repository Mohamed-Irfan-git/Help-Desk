import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from 'recharts';
import Header from '../components/Header';

function Analytics() {
  const user = {
    questionsAsked: 6,
    answersGiven: 18,
    badges: ['Helpful Hero', 'First Responder', 'Top Contributor'],
    activity: [
      { date: 'June 25', questions: 1, answers: 2 },
      { date: 'June 28', questions: 1, answers: 3 },
      { date: 'July 1', questions: 1, answers: 4 },
      { date: 'July 2', questions: 1, answers: 3 },
      { date: 'July 3', questions: 1, answers: 2 },
      { date: 'July 5', questions: 1, answers: 4 },
    ],
  };

  const COLORS = ['#00C49F', '#FFBB28'];

  const pieData = [
    { name: 'Questions', value: user.questionsAsked },
    { name: 'Answers', value: user.answersGiven },
  ];

  const answerRate = Math.round((user.answersGiven / user.questionsAsked) * 100);

  return (
    <>
      <Header />
      <div className="min-h-screen px-4 py-26 bg-gray-50 ">

        <h1 className="text-2xl font-bold mb-6 text-center text-blue-700">📊 Analytics Dashboard</h1>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Pie Chart: Questions vs Answers */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">Questions vs Answers</h2>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Line Chart: Activity Over Time */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">Weekly Activity</h2>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={user.activity}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="questions" stroke="#FF8042" name="Questions" />
                <Line type="monotone" dataKey="answers" stroke="#00C49F" name="Answers" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Stats */}
          <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">📈 Summary Stats</h2>
            <div className="grid sm:grid-cols-2 gap-4">

              <div className="bg-blue-100 p-4 rounded-lg text-blue-800">
                <h3 className="text-sm">Total Questions Asked</h3>
                <p className="text-xl font-bold">{user.questionsAsked}</p>
              </div>

              <div className="bg-green-100 p-4 rounded-lg text-green-800">
                <h3 className="text-sm">Total Answers Given</h3>
                <p className="text-xl font-bold">{user.answersGiven}</p>
              </div>

              <div className="bg-yellow-100 p-4 rounded-lg text-yellow-800">
                <h3 className="text-sm">Answer Rate</h3>
                <p className="text-xl font-bold">{answerRate}%</p>
              </div>

              <div className="bg-purple-100 p-4 rounded-lg text-purple-800">
                <h3 className="text-sm">Badges Earned</h3>
                <p className="text-xl font-bold">{user.badges.length}</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics;
