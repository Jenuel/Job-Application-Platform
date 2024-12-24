import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './pages/LoginPage'
import JobPage from './pages/JobPage';
import JobDetailsPage from './pages/JobDetailsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage /> //should be landing page but login for now... also add an error element (404 page)
  },
  {
    path: '/jobs',
    element: <JobPage />
  },
  {
    path: '/jobs/:jobId',
    element: <JobDetailsPage />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
