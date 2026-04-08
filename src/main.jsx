import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { router } from './Routs/Routs'
import ContextProvider from './context/ContextProvider'
import { ToastContainer } from 'react-toastify'




createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ContextProvider>
      <RouterProvider router={router}>
        
      </RouterProvider>
        <ToastContainer></ToastContainer>
      </ContextProvider>
  </StrictMode>,
)
