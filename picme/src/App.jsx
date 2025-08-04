import React from 'react'
// import VerificationPage from './pages/VerificationPage'
import WelcomePage from './pages/WelcomePage'
import SignUpPage from './pages/SignUpPage'
import SignInPage from './pages/SignInPage'
import ProtectedRoute from './components/ProtectedRoutes'
import PublicRoute from './components/PublicRoute'
import WelcomeRoute from './components/WelcomeRoute'
import HomePage from './pages/HomePage'
import ChatPage from './pages/ChatPage'
import ProfilePage from './pages/ProfilePage'
import ChooseByDate from './pages/ChooseByDate'
import ChooseByName from './pages/ChooseByName'
import ChooseByCategory from './pages/ChooseByCategory'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<WelcomeRoute><WelcomePage /></WelcomeRoute>} />
          <Route path='/signin' element={<PublicRoute><SignInPage/></PublicRoute>} />
          <Route path='/signup' element={<PublicRoute><SignUpPage/></PublicRoute>} />
          <Route path='/choose-location' element={<ProtectedRoute> <HomePage /> </ProtectedRoute>} />
          <Route path='/choose-location-by-date' element={<ProtectedRoute> <ChooseByDate /> </ProtectedRoute>} />
          <Route path='/find-by-name' element={<ProtectedRoute> <ChooseByName/> </ProtectedRoute>} />
          <Route path='/find-by-category' element={<ProtectedRoute> <ChooseByCategory /> </ProtectedRoute>} />
          <Route path='/chat' element={<ProtectedRoute> <ChatPage /> </ProtectedRoute>} />
          <Route path='/profile' element={<ProtectedRoute> <ProfilePage /> </ProtectedRoute>} />
        </Routes>
    </BrowserRouter>
    
  )
}

export default App
