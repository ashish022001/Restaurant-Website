import { useParams } from "react-router-dom"
import FilterPage from "./FilterPage";
import { Input } from "./ui/input";
import { useState } from "react";
import { Button } from "./ui/button";

const SearchPage = () => {
    const params = useParams();
    // alert(params.text);
    const [searchQuery, setSearchQuery] = useState<string>("");
  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <FilterPage/>
        <div className="flex-1">
           {/* search input field */}
          <div className="flex items-center gap-2">
            <Input
            type="text"
            value={searchQuery}
            placeholder="Search by Restaurant & cuisines"
            onChange={(e)=>setSearchQuery(e.target.value)}
            />
            <Button>Search</Button>
          </div>
            {/* searched item display here  */}
        </div>
      </div>

    </div>
  )
}

export default SearchPage