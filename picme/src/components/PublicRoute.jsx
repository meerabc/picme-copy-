import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const PublicRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth()

  console.log('PublicRoute - isAuthenticated:', isAuthenticated, 'isLoading:', isLoading)

  // Show loading while checking authentication
  if (isLoading) {
    return <div>Loading...</div>
  }

  // If authenticated, redirect to dashboard (prevent access to login/signup)
  if (isAuthenticated) {
    console.log('User is authenticated, redirecting to dashboard')
    return <Navigate to="/choose-location" replace />
  }

  // If not authenticated, allow access to login/signup pages
  console.log('User not authenticated, allowing access to public page')
  return children
}

export default PublicRoute