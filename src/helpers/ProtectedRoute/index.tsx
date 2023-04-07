import React from 'react'
import { Navigate } from 'react-router-dom'
import { ProtectedRouteProps } from './types'

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  username,
  children,
  pathToRedirect = '/sign-up'
}) => {
  if (!username) {
    return <Navigate to={pathToRedirect} replace />
  }

  return <>{children}</>
}

export default ProtectedRoute
