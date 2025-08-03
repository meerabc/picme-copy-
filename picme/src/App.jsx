import React from 'react'
import VerificationPage from './pages/VerificationPage'
import WelcomePage from './pages/WelcomePage'
import SignUpPage from './pages/SignUpPage'
import SignInPage from './pages/SignInPage'
import ProtectedRoute from './components/ProtectedRoutes'
import DashBoardPage from './pages/DashBoardPage'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<WelcomePage />} />
          <Route path='/signin' element={<SignInPage/>} />
          <Route path='/signup' element={<SignUpPage/>} />
          <Route path='/dashboard' element={<ProtectedRoute> <DashBoardPage /> </ProtectedRoute>} />
        </Routes>
    </BrowserRouter>
    
  )
}

export default App
