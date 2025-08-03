import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth()

  console.log('is Authenticated : ' + isAuthenticated)
  const location = useLocation()

  // Show loading while checking authentication
  if (isLoading) {
    return <div>Loading...</div>
  }

  // If not authenticated, redirect to welcome page with return URL
  if (!isAuthenticated) {
    return (
      <Navigate 
        to="/" 
        state={{ returnUrl: location.pathname + location.search }} 
        replace 
      />
    )
  }

  // If authenticated, render the protected component
  return children
}

export default ProtectedRoute
