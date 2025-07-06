import React from 'react'

const medalIcons = ['🥇', '🥈', '🥉'];

function LeaderCard({ user,index }) {

  return (
     <div
            key={user.id}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition"
          >
            <div className="text-4xl mb-2">{medalIcons[index] || '🎖️'}</div>
            <div className="text-5xl mb-2">{user.avatar}</div>
            <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
            <p className="text-sm text-gray-500 mb-3">{user.email}</p>

            <div className="flex justify-between w-full text-sm text-gray-600 mb-4">
              <div>
                <span className="font-bold text-blue-700">{user.questions}</span> Questions
              </div>
              <div>
                <span className="font-bold text-green-700">{user.answers}</span> Answers
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {user.badges.map((badge, i) => (
                <span
                  key={i}
                  className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
  )
}

export default LeaderCard