import { useState } from "react";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { Button } from "./ui/button";
import FoodImage from "@/assets/food.png";
const HeroSection = () => {
  const [searchText, setSearchText] = useState<string>("");
  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto md:p-10 rounded-lg items-center justify-center m-4 gap-20">
      <div className=" flex flex-col gap-10 md:w-[40%]">
        <div className="flex flex-col gap-5">
          <h1 className="font-bold md:font-extrabold md:text-5xl text-4xl">
            Order Food anytime and anywhere
          </h1>
          <p className="text-gray-500">
            Hey! Our Delicious food is waiting for you, we are always near to
            you
          </p>
        </div>
        <div className="relative flex flex-center gap-2">
          <Input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="search hare"
            className="pl-10 border-2"
          />
          <Search className="absolute inset-2 left-2 text-gray-500" />
          <Button className="mt-0.5">Search</Button>
        </div>
      </div>
      <div>
        <img
          src={FoodImage}
          alt=""
          className=" object-cover w-full max-h-[500px] max-w-[90%]"
        />
      </div>
    </div>
  );
};

export default HeroSection;
