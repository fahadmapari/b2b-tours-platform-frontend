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
import { useState } from "react";

import useSWR from "swr";
import axios from "axios";

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
    <div className="w-[800px] p-4 border border-gray-300 rounded-lg  bg-white">
      <div className="text-center text-2xl font-semibold pb-4">
        Welcome, John Doe.
      </div>
      <div className="flex items-center gap-4">
        <CountrySelector
          countries={countriesAndCities?.countries}
          selectedCountry={selectedCountry}
          setSelectedCountry={(country: string) => setSelectedCountry(country)}
        />
        <CitySelector
          selectedCity={selectedCity}
          setSelectedCity={(city: string) => setSelectedCity(city)}
          selectedCountry={selectedCountry}
          cities={countriesAndCities?.cities}
        />
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

const CountrySelector = ({
  countries,
  selectedCountry,
  setSelectedCountry,
}: {
  countries?: string[];
  selectedCountry: string;
  setSelectedCountry: (country: string) => void;
}) => {
  return (
    <Select value={selectedCountry} onValueChange={setSelectedCountry}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Country" />
      </SelectTrigger>
      <SelectContent className="max-h-56">
        <SelectGroup>
          <SelectLabel>Countries</SelectLabel>
          {countries ? (
            countries.map((country) => (
              <SelectItem value={country} key={country}>
                {country}
              </SelectItem>
            ))
          ) : (
            <span>No countries found</span>
          )}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

const CitySelector = ({
  selectedCountry,
  selectedCity,
  setSelectedCity,
  cities,
}: {
  selectedCountry: string;
  selectedCity: string;
  setSelectedCity: (city: string) => void;
  cities?: Record<string, string[]>;
}) => {
  return (
    <Select value={selectedCity} onValueChange={setSelectedCity}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="City" />
      </SelectTrigger>
      <SelectContent className="max-h-56">
        <SelectGroup>
          <SelectLabel>Cities</SelectLabel>
          {cities ? (
            cities[selectedCountry]?.map((city) => (
              <SelectItem value={city} key={city}>
                {city}
              </SelectItem>
            ))
          ) : (
            <span>No cities found</span>
          )}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SearchBlock;
