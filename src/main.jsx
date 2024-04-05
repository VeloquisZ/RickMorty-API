import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Home.jsx'
import Personagem from './personagem.jsx'

const router = createBrowserRouter([
  {
    path: '/', element: <Home />
  },
  { path: '/Personagem/:id', element: <Personagem /> }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>,
)
