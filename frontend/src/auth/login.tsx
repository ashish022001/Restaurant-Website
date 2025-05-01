import { Input } from "@/components/ui/input";
import { ChangeEvent, FormEvent, useState } from "react";
import { Loader2, LockKeyhole, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { LoginInputState, userLoginSchema } from "@/schema/userSchema";

// interface LoginInputState {
//     email:string;
//     password:string;
// }
// type LoginInputState = {
//     email:string;
//     password:string;
// }
const Login = () => {
  const [input, setInput] = useState<LoginInputState>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Partial<LoginInputState>>({});

  const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const loginSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    const result = userLoginSchema.safeParse(input);
    if (!result.success) {
      const fieldErrors = result.error.formErrors.fieldErrors;
      setErrors(fieldErrors as Partial<LoginInputState>);
      return;
    }
    //Login API Implementation

    console.log(input);
  };
  const loading = false;
  return (
    <div className="flex items-center justify-center  min-h-screen ">
      <form
        onSubmit={loginSubmitHandler}
        className="md:p-8 w-full max-w-md md:border border-gray-200 rounded-lg mx-4"
      >
        <div className="mb-4">
          <p className="font-bold text-2xl text-center">Eat Club</p>
        </div>
        <div className="relative">
          <Input
            type="email"
            placeholder="Enter your email"
            name="email"
            className="pl-10 focus-visible:ring-1"
            value={input.email}
            onChange={changeEventHandler}
          />
          <Mail className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
          {errors && (
            <span className="text-sm font-semibold text-red-500">
              {errors.email}
            </span>
          )}
        </div>
        <div className="mt-5 relative">
          <Input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="pl-10 focus-visible:ring-1"
            value={input.password}
            onChange={changeEventHandler}
          />
          <LockKeyhole className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
          {errors && (
            <span className="text-sm font-semibold text-red-500">
              {errors.email}
            </span>
          )}
        </div>
        <div className="mt-5 mb-8 text-center">
          {loading ? (
            <Button className="w-full" disabled>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait..
            </Button>
          ) : (
            <Button className="w-full" type="submit">
              Login
            </Button>
          )}
          <p className="mt-4">
          <Link to="/forgotPassword" className="text-blue-700  text-center">Forgot Password?</Link>
          </p>
        </div>
        <Separator />
        <p className="text-center mt-3">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-700 font-semibold">
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
};
export default Login;
