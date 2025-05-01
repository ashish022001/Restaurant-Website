import './index.css'
import Login from './auth/login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signup from './auth/signup'
import ForgotPassword from './auth/ForgotPassword'
import ResetPassword from './auth/ResetPassword'
import VerifyEmail from './auth/VerifyEmail'
import Navbar from './components/Navbar'

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Navbar/>,

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
