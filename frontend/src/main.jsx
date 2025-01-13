import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './pages/LoginPage';
import JobPage from './pages/JobPage';
import JobDetailsPage from './pages/JobDetailsPage';
import RegistrationPage from './pages/RegistrationPage'; 
const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />, 
  },
  {
    path: '/register',
    element: <RegistrationPage />,
  },
  {
    path: '/jobs',
    element: <JobPage />,
  },
  {
    path: '/jobs/:jobId',
    element: <JobDetailsPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
