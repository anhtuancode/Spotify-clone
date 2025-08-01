import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LoginForm from './pages/Login'
import SignupForm from './pages/Register'
import Home from './pages/Home'
import DetailTrend from './pages/DetailTrendSong'
import DetailAlbum from './pages/DetailAlbum'


const routers = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <LoginForm/>,
  },
  {
    path: '/signup',
    element: <SignupForm />,
  },
  {
    path: '/album/:id',
    element: <DetailAlbum />,
  },
  {
    path: '/trend/:id',
    element: <DetailTrend />,
  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routers} />
  </StrictMode>,
)
