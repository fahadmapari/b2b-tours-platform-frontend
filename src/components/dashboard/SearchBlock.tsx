"use client";

import DatePicker from "../common/DatePicker";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

import CountrySelectorV2 from "../common/CountrySelector";
import CitySelectorV2 from "../common/CitySelector";

import useSWR from "swr";
import axios from "axios";
import { Search } from "lucide-react";
import { useProductSearchStore } from "@/store/ProductSearchStore";
import { cn } from "@/lib/utils";

interface CountryCityType {
  name: string;
  cities: string[];
}

interface SearchBlockProps {
  className?: string;
}

const SearchBlock = ({ className }: SearchBlockProps) => {
  const { push } = useRouter();
  const {
    selectedCountry,
    selectedCity,
    selectedDate,
    setSelectedCity,
    setSelectedCountry,
    setSelectedDate,
  } = useProductSearchStore();

  const { data: countriesAndCities, isLoading } = useSWR(
    ["countries", "cities"],
    async () => {
      const response = await axios.get<CountryCityType[]>(
        "/json/countries_cities.json"
      );

      // TODO: optimize the json file later
      const countries = response.data.map((country) => country.name);
      const cities: Record<string, string[]> = {};
      response.data.forEach((country) => {
        cities[country.name] = country.cities;
      });

      return { countries, cities };
    }
  );

  return (
    <div
      className={cn(
        "w-[800px] p-3 border border-gray-300 rounded-full  bg-white",
        className
      )}
    >
      <div className="w-full flex items-center gap-4">
        <div className="flex-1">
          <CountrySelectorV2
            countries={countriesAndCities?.countries}
            selectedCountry={selectedCountry}
            setSelectedCountry={(country: string) =>
              setSelectedCountry(country)
            }
          />
        </div>
        <div className="flex-1">
          <CitySelectorV2
            selectedCity={selectedCity}
            setSelectedCity={(city: string) => setSelectedCity(city)}
            cities={countriesAndCities?.cities[selectedCountry]}
          />
        </div>
        <div className="flex-1">
          <DatePicker
            date={selectedDate}
            setDate={(date: Date) => setSelectedDate(date)}
          />
        </div>
        <Button
          className="flex items-center gap-2 cursor-pointer rounded-full  py-6 px-4 bg-green-900 disabled:bg-gray-800 disabled:cursor-not-allowed"
          onClick={() => {
            push("/products");
          }}
          disabled={!selectedCountry}
        >
          <Search />
          <span className="text-lg">Search</span>
        </Button>
      </div>
    </div>
  );
};

export default SearchBlock;
