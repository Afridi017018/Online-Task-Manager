import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import './index.css'
import { router } from './Routes.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import 'react-toastify/dist/ReactToastify.css';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ToastContainer } from 'react-toastify';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <DndProvider backend={HTML5Backend}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </DndProvider>


    <ToastContainer
      position="top-center"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
    
  </React.StrictMode>,
)