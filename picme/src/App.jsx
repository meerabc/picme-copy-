import React from 'react'
import VerificationPage from './pages/VerificationPage'
import WelcomePage from './pages/WelcomePage'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<WelcomePage />} />

 
        </Routes>
    
    </BrowserRouter>
  )
}

export default App
