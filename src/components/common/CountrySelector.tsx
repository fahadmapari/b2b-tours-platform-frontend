"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { BsGlobeCentralSouthAsia } from "react-icons/bs";

interface CountrySelectorProps {
  countries?: string[];
  selectedCountry: string;
  setSelectedCountry: (country: string) => void;
}

function CountrySelector({
  selectedCountry,
  setSelectedCountry,
  countries,
}: CountrySelectorProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className="w-full" asChild>
        <div className="w-full flex items-center gap-2">
          <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center">
            <BsGlobeCentralSouthAsia />
          </div>
          <div className="flex flex-col">
            <div className="text-xs">Country</div>
            <div className="flex gap-1 items-center text-base fpont-medium">
              {selectedCountry ? selectedCountry : "Select country..."}
              <ChevronsUpDown height={14} className="opacity-50 " />
            </div>
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-full max-h-56 p-0">
        <Command className="max-h-56">
          <CommandInput placeholder="Search country..." className="h-9" />
          <CommandList>
            <CommandEmpty>No country found.</CommandEmpty>
            <CommandGroup>
              {countries?.map((country) => (
                <CommandItem
                  key={country}
                  value={country}
                  onSelect={(currentValue) => {
                    setSelectedCountry(
                      currentValue === selectedCountry ? "" : currentValue
                    );
                    setOpen(false);
                  }}
                >
                  {country}
                  <Check
                    className={cn(
                      "ml-auto",
                      selectedCountry === country ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export default CountrySelector;
