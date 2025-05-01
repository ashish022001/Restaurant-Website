import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2, Mail } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"

const ForgotPassword = () => {
  const [email, setEmail] = useState<string>("")
  const loading = false;
  return (
    <>
    <div className="flex items-center text-center justify-center min-h-screen w-full">
        <form className="flex flex-col gap-5 md:border md:p-8 w-full max-w-md rounded-lg">
          <div>
            <p className="text-2xl font-bold">Forgot Password</p>
            <p className="mt-2 text-gray-600 font-semibold">Enter Your email address to reset your password</p>
          </div>
          <div className="relative">
            <Input
            type="email"
            className="pl-10 focus-visible:ring-1"
            placeholder="Enter email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            />
            <Mail className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none"/>
          </div>
          <div>
            {
              loading?<Button className="w-full" disabled><Loader2 className="mr-2 h-4 w-4 animate-spin" />Please Wait</Button>:<Button className="w-full">Send Reset Link</Button>
            }
          </div>
            <span className="mt-1">
              Back to {" "}
              <Link to="/login" className="text-blue-700 font-semibold">Login</Link>
            </span>
        </form>
    </div>
    </>
  )
}

export default ForgotPassword