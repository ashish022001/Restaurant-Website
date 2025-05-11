import './index.css'
import Login from './auth/login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signup from './auth/signup'
import ForgotPassword from './auth/ForgotPassword'
import ResetPassword from './auth/ResetPassword'
import VerifyEmail from './auth/VerifyEmail'
import HeroSection from './components/HeroSection'
import MainLayout from './Layout/MainLayout'
import Profile from './components/Profile'

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<MainLayout/>,
    children:[
      {
        path:"/",
        element:<HeroSection/>
      },
      {
        path:"/profile",
        element:<Profile/>
      },
      {
        path:"/search",
        element:<Profile/>
      }
    ]

  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/signup",
    element:<Signup/>
  },
  {
    path:"/forgotPassword",
    element:<ForgotPassword/>
  },
  {
    path:"/resetPassword",
    element:<ResetPassword/>
  },
  {
    path:"/verifyEmail",
    element:<VerifyEmail/>
  }
])
function App() {
  return (
    <>
      <RouterProvider router={appRouter}>
      
      </RouterProvider>
    </>
  )
}

export default App
