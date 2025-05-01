import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SignupInputState, userSignupSchema } from "@/schema/userSchema";
import { Loader2, LockKeyhole, Mail, Phone, User2 } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";
// interface SingupInputState {
//   fullName: string;
//   contact: string;
//   email: string;
//   password: string;
// }
const Signup = () => {
  const [input, setInput] = useState<SignupInputState>({
    fullName: "",
    contact: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Partial<SignupInputState>>({});
  const changeEventHandler = (e:ChangeEvent<HTMLInputElement>)=>{
    const {name, value} = e.target;
    setInput({...input, [name]:value});
  }
  const signupSubmitHandler = (e:FormEvent) => {
    e.preventDefault();
    // form validation check start
    const result = userSignupSchema.safeParse(input)
    if(!result.success)
      {
        const fieldErrors = result.error.formErrors.fieldErrors;
        setErrors(fieldErrors as Partial<SignupInputState>);
        return;
      }
      //Signup API Implementation
    console.log(input)
  } 
  const loading = false;
  return (
    <>
      <div className="flex items-center justify-center  min-h-screen">
        <form onSubmit={signupSubmitHandler} className="md:p-8 w-full max-w-md md:border border-gray-200 rounded-lg mx-4">
          <div>
            <p className="font-bold text-2xl text-center">Eat Club</p>
          </div>
          <div className="relative mt-4">
            <Input
              type="text"
              className="pl-10 focus-visible:ring-1"
              name="fullName"
              placeholder="Full Name"
              value={input.fullName}
              onChange={changeEventHandler}
            />
            <User2 className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
            {
              errors && <span className="text-sm text-red-500 font-semibold">{errors.fullName}</span>
            }
          </div>
          <div className="relative mt-4">
            <Input
              type="text"
              className="pl-10 focus-visible:ring-1"
              placeholder="Email"
              name="email"
              value={input.email}
              onChange={changeEventHandler}
            />
            <Mail className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
            {
              errors && <span className="text-sm text-red-500 font-semibold">{errors.email}</span>
            }
          </div>
          <div className="relative mt-4">
            <Input
              type="text"
              className="pl-10 focus-visible:ring-1"
              placeholder="Mobile Number"
              name="contact"
              value={input.contact}
              onChange={changeEventHandler}
            />
            <Phone className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
            {
              errors && <span className="text-sm text-red-500 font-semibold">{errors.contact}</span>
            }
          </div>
          <div className="relative mt-4">
            <Input
              className="pl-10 focus-visible:ring-1"
              type="password"
              placeholder="Password"
              name="password"
              value={input.password}
              onChange={changeEventHandler}
            />
            <LockKeyhole className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
            {
              errors && <span className="text-sm text-red-500 font-semibold">{errors.password}</span>
            }
          </div>
          <div className="mt-5 mb-10">
            {loading ? (
              <Button className="w-full" disabled>
                <Loader2 className="mr-2 h-4 w-4 animate-spin"></Loader2>Please
                wait
              </Button>
            ) : (
              <Button className="w-full" type="submit">
                Signup
              </Button>
            )}
          </div>
          <Separator />
          <p className="text-center mt-3">Already have an account? {" "}
            <Link to="/login" className="text-blue-700 font-semibold">Login</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Signup;
