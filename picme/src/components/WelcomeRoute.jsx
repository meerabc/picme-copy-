import React, { useEffect } from 'react'
import { useAuth } from '../hooks/useAuth'

const WelcomeRoute = ({ children }) => {
  const { isAuthenticated, isLoading, logout } = useAuth()

  useEffect(() => {
    // If user is authenticated and tries to access welcome page, auto-logout
    if (isAuthenticated && !isLoading) {
      console.log('User is authenticated but accessing welcome page, auto-logging out')
      logout()
    }
  }, [isAuthenticated, isLoading, logout])

  // Always render the welcome page (after logout if needed)
  return children
}

export default WelcomeRoute