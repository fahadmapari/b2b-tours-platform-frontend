"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import DatePicker from "../common/DatePicker";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const SearchBlock = () => {
  const { push } = useRouter();
  return (
    <div className="w-[800px] p-4 border border-gray-300 rounded-lg  bg-white">
      <div className="text-center text-2xl font-semibold pb-4">
        Welcome, John Doe.
      </div>
      <div className="flex items-center gap-4">
        <CountrySelector />
        <CitySelector />
        <DatePicker />
        <Button
          className="flex-1 cursor-pointer"
          onClick={() => push("/products")}
        >
          Search
        </Button>
      </div>
    </div>
  );
};

const CountrySelector = () => {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Country" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Countries</SelectLabel>
          <SelectItem value="india">India</SelectItem>
          <SelectItem value="uae">UAE</SelectItem>
          <SelectItem value="usa">United States</SelectItem>
          <SelectItem value="mexico">Mexico</SelectItem>
          <SelectItem value="brazil">Brazil</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

const CitySelector = () => {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="City" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Cities</SelectLabel>
          <SelectItem value="india">Mumbai</SelectItem>
          <SelectItem value="uae">Abu Dhabi</SelectItem>
          <SelectItem value="usa">Newyork</SelectItem>
          <SelectItem value="mexico">Delhi</SelectItem>
          <SelectItem value="brazil">Sao Paulo</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SearchBlock;
