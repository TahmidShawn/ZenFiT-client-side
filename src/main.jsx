import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './routes/Routes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from '@material-tailwind/react'
import AuthProvider from './providers/AuthProvider'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-screen-xl mx-auto'>
    <React.StrictMode>

      <ThemeProvider>
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={Routes} />
          </QueryClientProvider>
        </AuthProvider>
      </ThemeProvider>
    </React.StrictMode>
  </div>
)
