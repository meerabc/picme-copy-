import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
// import { getAccessToken} from '../utils/localStorage'

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth()

  // Show loading while checking authentication
  if (isLoading) {
    return <div>Loading...</div>
  }

  // If not authenticated, redirect to welcome page with return URL
  if (!isAuthenticated) {
  return <Navigate to="/" replace />
  }

  // If authenticated, render the protected component
  return children
}

export default ProtectedRoute
