import React from 'react'
import { AuthProvider } from './contexts/AuthContext'
import { FollowStatusProvider } from './contexts/FollowStatusContext'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'

function AuthWrapper() {
  return (
    <Router>
    <AuthProvider>
    <FollowStatusProvider>
        <App />
    </FollowStatusProvider>
    </AuthProvider>
    </Router>
  )
}

export default AuthWrapper