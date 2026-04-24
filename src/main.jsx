import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import App from './App.jsx'
import Home from './pages/Home.jsx'

const router = createBrowserRouter([
  { path: '/', element: <Register /> },
  { path: '/login', element: <Login /> },
  { path: '/home', element: <Home /> },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
