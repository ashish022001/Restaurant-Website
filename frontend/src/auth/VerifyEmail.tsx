import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const inputRef = useRef<any>([]);
  const navigate = useNavigate();
  const loading = false;
  const handleChange = (index: number, value: string) => {
    if (/^[a-zA-Z0-9]$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }
    // move to the next input field if a digit is entered
    if (value !== "" && index < 5) {
      inputRef.current[index + 1].focus();
    }
  };
  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRef.current[index - 1].focus();
    }
  };
  return (
    <>
      <div className="flex justify-center items-center w-full h-screen">
        <div className="p-8 rounded-md w-full max-w-md flex flex-col gap-10 border border-gray-200">
          <div className="text-center">
            <h1 className="text-2xl font-extrabold ">Verify your email</h1>
            <p className="text-sm text-gray-600">
              Enter the 6 digit code sent to your email address
            </p>
          </div>
          <form>
            <div className="flex justify-between">
              {otp.map((latter: string, idx: number) => (
                <Input
                  key={idx}
                  type="text"
                  value={latter}
                  maxLength={1}
                  onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
                    handleKeyDown(idx, e)
                  }
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChange(idx, e.target.value)
                  }
                  ref={(element) => (inputRef.current[idx] = element)}
                  className="md:w-12 md:h-12 w-8 h-8 text-center md:text-2xl font-normal md:font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              ))}
            </div>
            <div className="mt-8">
              {loading ? (
                <Button className="w-full" disabled>
                  <Loader2 className="mr-2 animate-spin h-4 w-4" />
                  Please wait
                </Button>
              ) : (
                <Button className="w-full">Verify</Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default VerifyEmail;
