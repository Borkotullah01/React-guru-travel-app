import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Pages/HomePage/Home.jsx';
import Error from './Components/Pages/ErrorPage/Error.jsx';
import Login from './Components/Pages/LoginPage/Login.jsx';
import Register from './Components/Pages/RegisterPage/Register.jsx';
import AuthProvider from './Provider/AuthProvider/AuthProvider.jsx';
import Destination from './Components/Pages/DestinationPage/Destination.jsx';
import User from './Components/Pages/UserPage/User.jsx';
import Private from './Routes/Private/Private.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/destination",
        element: <Destination></Destination>
      },
      {
        path: "/top",
        element: <Private><User></User></Private>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
