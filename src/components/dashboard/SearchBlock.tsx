"use client";

import DatePicker from "../common/DatePicker";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

import CountrySelectorV2 from "../common/CountrySelector";
import CitySelectorV2 from "../common/CitySelector";

import useSWR from "swr";
import axios from "axios";
import { Search } from "lucide-react";

interface CountryCityType {
  name: string;
  cities: string[];
}

const SearchBlock = () => {
  const { push } = useRouter();
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

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
    <div className="p-6 bg-white/20 backdrop-blur-xs rounded-3xl">
      <div className="w-[800px] p-3 border border-gray-300 rounded-full  bg-white">
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
            <DatePicker />
          </div>
          <Button
            className="flex items-center gap-2 cursor-pointer rounded-full  py-6 px-4 bg-green-900"
            onClick={() => push("/products")}
          >
            <Search />
            <span className="text-lg">Search</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchBlock;
