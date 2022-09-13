import React, { lazy } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/themes'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GlobalStyle } from './styles/GlobalStyles'
import ProtectedRoute from './components/ProtectedRoute'
import ProtectedAuthRoute from './components/ProtectedAuthRoute'

//code splitting
const Home = lazy(() => import('./pages/HomePage'))
const SignUp = lazy(() => import('./pages/SignUpPage'))
const LogIn = lazy(() => import('./pages/LoginPage'))
const Movies = lazy(() => import('./pages/MoviesPage'))
const Bookmarks = lazy(() => import('./pages/BookmarksPage'))
const Search = lazy(() => import('./pages/SearchPage'))
const TV = lazy(() => import('./pages/TVPage'))

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/login"
              element={
                <ProtectedAuthRoute>
                  <LogIn />
                </ProtectedAuthRoute>
              }
            />
            <Route
              path="/movies"
              element={
                <ProtectedRoute>
                  <Movies />
                </ProtectedRoute>
              }
            />
            <Route
              path="/television"
              element={
                <ProtectedRoute>
                  <TV />
                </ProtectedRoute>
              }
            />
            <Route
              path="/bookmarks"
              element={
                <ProtectedRoute>
                  <Bookmarks />
                </ProtectedRoute>
              }
            />
            <Route
              path="/signup"
              element={
                <ProtectedAuthRoute>
                  <SignUp />
                </ProtectedAuthRoute>
              }
            />
            <Route
              path="/search/:id"
              element={
                <ProtectedRoute>
                  <Search />
                </ProtectedRoute>
              }
            />
          </Routes>
        </React.Suspense>
      </BrowserRouter>
    </ThemeProvider>
  )
}

// export default hot(App)

export default App
