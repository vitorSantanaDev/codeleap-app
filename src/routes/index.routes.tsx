import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import MainPage from 'pages/main'
import SignUpPage from 'pages/sign-up'
import ProtectedRoute from 'helpers/ProtectedRoute'
import { useStateSelector } from 'hooks/useStateSelector'

const AppRoutes = () => {
  const username = useStateSelector((state) => state.user)
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute username={username.username}>
              <MainPage />
            </ProtectedRoute>
          }
        />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
