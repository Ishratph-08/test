import React from 'react';
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Root from './components/Root';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import AuthProvider from './providers/AuthProvider';
import PrivateRoute from './routs/PrivateRoute';
import Orders from './components/Orders';
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:  [
      {
        path: '/',
        element :<Home></Home>,
        loader:()=>fetch('/data.json')

      },
      {
        path: '/login',
        element:<Login></Login>

      },
      {
        path: '/register',
        element: <Register></Register>

      },
      {
        path: '/services',
        element: <Services></Services>,
        loader:()=>fetch('/data.json')
      },
      {
        path: '/about us',
        element: <AboutUs></AboutUs>
      },
      {
        path: '/orders',
        element:<PrivateRoute><Orders></Orders></PrivateRoute>
      }

    ]
  },
]);
export default router

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>
);
