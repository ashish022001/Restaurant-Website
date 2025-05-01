import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2, LockKeyhole } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState<string>("")
  const loading = false;
  return (
    <>
    <div className="flex items-center text-center justify-center min-h-screen w-full">
        <form className="flex flex-col gap-5 md:border md:p-8 w-full max-w-md rounded-lg">
          <div>
            <p className="text-2xl font-bold">Reset Password</p>
            <p className="mt-2 text-gray-600 font-semibold">Enter Your New Password to reset your old one</p>
          </div>
          <div className="relative">
            <Input
            type="password"
            className="pl-10 focus-visible:ring-1"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e)=> setNewPassword(e.target.value)}
            />
            <LockKeyhole className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none"/>
          </div>
          <div>
            {
              loading?<Button className="w-full" disabled><Loader2 className="mr-2 h-4 w-4 animate-spin" />Please Wait</Button>:<Button className="w-full"> Reset </Button>
            }
            <span className="mt-2">
              Back to {" "}
              <Link to="/login" className="text-blue-700 font-semibold">Login</Link>
            </span>
          </div>
        </form>
    </div>
    </>
  )
}

export default ResetPassword