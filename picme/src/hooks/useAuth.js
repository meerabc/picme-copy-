import { useState, useEffect } from 'react'
import { getAccessToken, removeAccessToken } from '../utils/localStorage'

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    checkAuthStatus()
  }, [])

  async function checkAuthStatus() {
    try {
      const token = await getAccessToken()
      setIsAuthenticated(!!token) // Convert to boolean
    } catch (error) {
      setIsAuthenticated(false)
    } finally {
      setIsLoading(false)
    }
  }

  // Add logout function
  async function logout() {
    try {
      await removeAccessToken()
      setIsAuthenticated(false)
    } catch (error) {
      console.error('Error during logout:', error)
    }
  }

  return { isAuthenticated, isLoading, logout }
}