import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import './index.css'
import { router } from './Routes.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
// import AuthProvider from './components/providers/AuthProvider.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>


  </React.StrictMode>,
)