import React from 'react'
import { Route, Routes } from 'react-router-dom';



import Login from '../src/pages/auth/Login'
import Register from '../src/pages/auth/Register'
import Resetpasword from '../src/pages/auth/Resetpasword'


import AllQuestions from './pages/AllQuestions';
import SingleQuestion from './pages/SingleQuestion';
import AskQuestion from './pages/AskQuestion';
import UserDashboard from './pages/UserDashboard';
import Analytics from './pages/Analytics';
import LeaderBoard from './pages/LeaderBoard';
import AdminDashBord from './pages/AdminDashBord';
import Home from './pages/Home';
import Error from './pages/Error';
import Test from './pages/test';


function App() {
  return (
    <Routes>
      
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/reset-password' element={<Resetpasword />} />
      <Route path='/all-questions' element={<AllQuestions />} />
      <Route path='/single-question' element={<SingleQuestion />} />
      <Route path='/ask-question' element={<AskQuestion />} />
      <Route path='/user-dashboard' element={<UserDashboard />} />
      <Route path='/analytics' element={<Analytics />} />
      <Route path='/leader-board' element={<LeaderBoard />} />
      <Route path='/admin-dashBord' element={<AdminDashBord />} />
      <Route path='/' element={<Home />} />
      <Route path='/*' element={<Error />} />
      <Route path='/test' element={<Test />} />



    </Routes>
  )
}

export default App